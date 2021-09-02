import React, { useState, useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { StateContext } from '../../../StateProvider';
import { fullUserObject } from '../../helpers/selectors';

//All of the different modes
import Name from './Name';
import Bio from './Bio';
import Interests from './Interests';
import Extras from './Extras';


const Cards = function(props)  {
  const { state } = useContext(StateContext);
  const users = state.users;
  const user = state.user;

  const filteredUsers = users.filter(person => person.id !== user.id);

  const displayedUser = fullUserObject({users: state.users, interests: state.interests, photos:state.photos}, filteredUsers[0])
  console.log('fUs', filteredUsers)

  //Card modes
  const NAME = 'NAME';
  const BIO = 'BIO';
  const INTERESTS = 'INTERESTS';
  const EXTRAS = 'EXTRAS';

  const [mode, setMode] = useState(NAME);
  const [history, setHistory] = useState([NAME]);

  const newHistory = [...history];
  
  const next = (newMode) => {
    setHistory(() => [...newHistory, newMode]);
    setMode(newMode);
  }

  const back = () => {
    if (newHistory.length > 1) {
      newHistory.pop();
    }
     setHistory(() => [...newHistory]);
     setMode(newHistory[newHistory.length - 1]);
  }



  return (
    <SafeAreaView style={styles.container}>
      {mode === NAME && <Name next={() => next(BIO)} detailedUser={displayedUser} /> }
      {mode === BIO && <Bio next={() => next(INTERESTS)} back={() => back(NAME)} detailedUser={displayedUser}/>}
      {mode === INTERESTS && <Interests next={() => next(EXTRAS)} back={() => back(BIO)} detailedUser={displayedUser}/>}
      {mode === EXTRAS && <Extras back={() => back(INTERESTS)} detailedUser={displayedUser}/>}
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width:'100%',
    alignItems: 'center',
  }
})

export default Cards;

