import React, { useState, useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Button } from 'react-native';
import { StateContext } from '../../../StateProvider';
import { fullUserObject } from '../../helpers/selectors';
import MatchButtons from '../MatchButtons';
import useCardMode from '../../hooks/useCardMode';

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
  console.log('logged in user', fullUser)
  //everyone who is not the logged in user
  const filteredUsers = users.filter(person => person.id !== user.id);
  console.log('fUs', filteredUsers)
  
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
  
  return (
    <SafeAreaView style={styles.container}>
      {mode === NAME && <Name next={() => next(BIO)} detailedUser={displayedUser} /> }
      {mode === BIO && <Bio next={() => next(INTERESTS)} back={() => back(NAME)} detailedUser={displayedUser}/>}
      {mode === INTERESTS && <Interests next={() => next(EXTRAS)} back={() => back()} detailedUser={displayedUser}/>}
      {mode === EXTRAS && <Extras back={() => back()} detailedUser={displayedUser} next={() => next(MATCHED)} />}
      {mode === MATCHED && <Matched home={() => goHome()} detailedUser={displayedUser} user={fullUser}/>}
      <MatchButtons newUser={() => incrementUser(index)} user={user} detailedUser={displayedUser} />
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

