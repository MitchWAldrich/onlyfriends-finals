import React, { useState, useContext, setState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, ActivityIndicator, Button } from 'react-native';
import { StateContext } from '../../../StateProvider';
import { fullUserObject, matchedIds, unmatchedUsers, shuffle, getMatchIdByUserIds } from '../../helpers/selectors';
import MatchButtons from '../MatchButtons';
import useCardMode from '../../hooks/useCardMode';
import potentialMatches from '../../hooks/potentialMatches';
import { matchedUsers } from '../../hooks/matchedUsers';
import { removeSuggested } from '../../helpers/persistsSuggestedUser';


//All of the different modes
import Name from './Name';
import Bio from './Bio';
import Interests from './Interests';
import Extras from './Extras';
import Matched from './Matched';
import SuperMatched from './SuperMatched';


const Cards = function()  {

  const { mode, setMode, next, back } = useCardMode();
  //Card modes
  const NAME = 'NAME';
  const BIO = 'BIO';
  const INTERESTS = 'INTERESTS';
  const EXTRAS = 'EXTRAS';
  const MATCHED = 'MATCHED';
  const SUPERMATCHED = 'SUPERMATCHED';

  //Card stack functionality and state
  const [index, setIndex] = useState(0);

  const { state, setState } = useContext(StateContext);
  const user = state.user;
  
  
   const shuffleUsers = (usersArray) => {
    let shuffledUsers = usersArray;

    if (mode === NAME) {
      shuffledUsers = shuffle(usersArray)
    }
    return shuffledUsers;
    }

  const besties = () => {
    const potentialBesties = [];
    for (const potentialMatch of state.potentialMatches) {
      if (potentialMatch.best_friend === true) {
        potentialBesties.push(potentialMatch.user2_id)
      }
    }
    return potentialBesties;
  }

  const potentialBestieIds = besties();
  console.log(potentialBestieIds)

  const users = shuffleUsers(state.users)
  
  const unwantedUserIds = matchedIds(state, user);
 
  //everyone who is not already matched or the logged in user
  const filteredUsers = unmatchedUsers(unwantedUserIds, users);
  
  //full object for logged in user
  const fullUser = fullUserObject({users: state.users, interests: state.interests, photos: state.photos}, user);
  
  //users with interests and photos
  const detailedUsers = filteredUsers.map(person => fullUserObject({users: state.users, interests: state.interests, photos: state.photos}, person))
  console.log('Detailed Users', detailedUsers)
  //current user being displayed in card stack
  let currentUser = detailedUsers[index];
  
  let displayedUser = fullUserObject({users: state.users, interests: state.interests, photos: state.photos}, currentUser)

  if (state.hasOwnProperty('suggestedUser') && state.suggestedUser) {
    displayedUser = fullUserObject({users: state.users, interests: state.interests, photos: state.photos}, state.suggestedUser)
  }
  
  //function to step through each user in card stack
  const incrementUser = (index) => {
    if (index === detailedUsers.length - 1) {
      state.suggestedUser = null;
      setMode(NAME)
      return setIndex(0)
    }
    state.suggestedUser = null;
    setMode(NAME)
    return setIndex(index += 1)
  }

  const goHome = () => {
    state.suggestedUser = null;
    incrementUser(index)
    next(NAME)
    return
  }

  
  
  
  const match = state.potentialMatches.find(obj => obj.user1_id === displayedUser.id && obj.user2_id === user.id)
  // const matchID = getMatchIdByUserIds(state, user, displayedUser);


  const like = () => {
    
    if (match) {

      matchedUsers(user, displayedUser, false) 
      console.log('STATE MATCHES: ', state.matches)
      // setState({...state, matches: [...state.matches, {id: state.matches.length + 1, user1_id: user.id, user2_id: displayedUser.id, best_friend: false}]})
      setMode(MATCHED)
      console.log('MODE: ', mode)

      return
    } else {
        potentialMatches(user.id, displayedUser.id, false); 
        state.suggestedUser = null;
        incrementUser(index);
        return
      }
    }

  const superLike = () => {
    
    if (match && match.best_friend === true) {
      matchedUsers(user, displayedUser, true) 
      setMode(SUPERMATCHED)
      // setState({...state, matches: [...state,matches, {id: state.matches.length + 1, user1_id: user.id, user2_id: displayedUser.id, best_friend: false}]})
      return
    } else if (match && match.best_friend === false) {
      matchedUsers(user, displayedUser, true) 
      setMode(MATCHED)
      // setState({...state, matches: [...state,matches, {id: state.matches.length + 1, user1_id: user.id, user2_id: displayedUser.id, best_friend: false}]})
      return
    } else {
      state.suggestedUser = null;
      potentialMatches(user.id, displayedUser.id, true); 
      incrementUser(index);
      return
    }
  }




  return (
    <SafeAreaView style={styles.container}>
      {mode === NAME && <Name next={() => next(BIO)} detailedUser={displayedUser} /> }
      {mode === BIO && <Bio next={() => next(INTERESTS)} back={() => back(NAME)} detailedUser={displayedUser}/>}
      {mode === INTERESTS && <Interests next={() => next(EXTRAS)} back={() => back()} detailedUser={displayedUser}/>}
      {mode === EXTRAS && <Extras back={() => back()} detailedUser={displayedUser} />}
      {mode === MATCHED && <Matched home={() => goHome()} detailedUser={displayedUser} user={fullUser} />}
      {mode === SUPERMATCHED && <SuperMatched home={() => goHome()} detailedUser={displayedUser} user={fullUser}/>}
      <MatchButtons 
        like={() => like()}
        superLike={() => superLike()} 
        user={user} 
        detailedUser={displayedUser} 
        newUser={() => incrementUser(index)} />
    </SafeAreaView>
  )

};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Cards;

