import React, { useState, useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Button } from 'react-native';
import { StateContext } from '../../../StateProvider';
import { fullUserObject, matchedIds, unmatchedUsers } from '../../helpers/selectors';
import MatchButtons from '../MatchButtons';
import useCardMode from '../../hooks/useCardMode';
import potentialMatches from '../../hooks/potentialMatches';
import { matchedUsers } from '../../hooks/matchedUsers';

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

  const { state } = useContext(StateContext);
  const users = state.users;
  const user = state.user;

  const unwantedUserIds = matchedIds(state, user);
  
  //everyone who is not already matched or the logged in user
  const filteredUsers = unmatchedUsers(unwantedUserIds, users);
  
  //full object for logged in user
  const fullUser = fullUserObject({users: state.users, interests: state.interests, photos: state.photos}, user);
  
  //users with interests and photos
  const detailedUsers = filteredUsers.map(person => fullUserObject({users: state.users, interests: state.interests, photos: state.photos}, person))
  
  //current user being displayed in card stack
  let currentUser = detailedUsers[index];
  // console.log('detailedUsers', detailedUsers)
  
  let displayedUser = fullUserObject({users: state.users, interests: state.interests, photos: state.photos}, currentUser)
  
  //function to step through each user in card stack
  const incrementUser = (index) => {
    if (index === detailedUsers.length - 1) {
      setMode(NAME)
      return setIndex(0)
    }
    setMode(NAME)
    return setIndex(index += 1)
  }

  const goHome = () => {
    incrementUser(index)
    next(NAME)
    return
  }
  console.log('potential_matches', state.potentialMatches)
  
  const like = () => {
    const match = state.potentialMatches.find(obj => obj.user1_id === displayedUser.id && obj.user2_id === user.id)

    if (match) {
      matchedUsers(user, displayedUser, false) 
      setMode(MATCHED)
      return
    } else {
      potentialMatches(user.id, displayedUser.id, false); 
      incrementUser(index);
      return
    }
  }

  const superLike = () => {
    const match = state.potentialMatches.find(obj => obj.user1_id === displayedUser.id && obj.user2_id === user.id)

    if (match && match.best_friend === true) {
      matchedUsers(user, displayedUser, true) 
      setMode(SUPERMATCHED)
      return
    } else if (match && match.best_friend === false) {
      matchedUsers(user, displayedUser, true) 
      setMode(MATCHED)
      return
    } else {
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
      {mode === MATCHED && <Matched home={() => goHome()} detailedUser={displayedUser} user={fullUser}/>}
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

