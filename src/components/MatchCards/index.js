import React, { useState, useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Button } from 'react-native';
import { StateContext } from '../../../StateProvider';
import { fullUserObject } from '../../helpers/selectors';
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


const Cards = function()  {
  const { mode, setMode, next, back } = useCardMode();
  //Card modes
  const NAME = 'NAME';
  const BIO = 'BIO';
  const INTERESTS = 'INTERESTS';
  const EXTRAS = 'EXTRAS';
  const MATCHED = 'MATCHED';

  //Card stack functionality and state
  const [index, setIndex] = useState(0);

  const { state } = useContext(StateContext);
  const users = state.users;
  const user = state.user;

  //full object for logged in user
  const fullUser = fullUserObject({users: state.users, interests: state.interests, photos: state.photos}, user);
  
  //everyone who is not the logged in user
  const filteredUsers = users.filter(person => person.id !== user.id);
  
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
      matchedUsers(state, user, displayedUser) 
      setMode(MATCHED)
      return
    } else {
      potentialMatches(user.id, displayedUser.id); 
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
      <MatchButtons like={() => like()} user={user} detailedUser={displayedUser} newUser={() => incrementUser(index)}/>
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

