import React, { useState, useContext, setState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, ActivityIndicator, Button } from 'react-native';
import { StateContext } from '../../../StateProvider';
import { fullUserObject, matchedIds, unmatchedUsers } from '../../helpers/selectors';
import MatchButtons from '../MatchButtons';
import useCardMode from '../../hooks/useCardMode';
import potentialMatches from '../../hooks/potentialMatches';
import { matchedUsers } from '../../hooks/matchedUsers';
import { getSuggestedMatches } from '../../hooks/suggestedMatches';
// import { getData, removeSuggested } from '../../helpers/persistsSuggestedUser';
import useApplicationData from '../../hooks/useApplicationData';
import { suggestedUser, getData } from "../../helpers/persistsSuggestedUser";





//All of the different modes
import Name from './Name';
import Bio from './Bio';
import Interests from './Interests';
import Extras from './Extras';
import Matched from './Matched';


const Cards = function({route, navigation})  {
  // getData(state, setState)
  // const {suggestedMatch} = route.params;
  // console.log('user',suggestedMatch)
  // const suggestedMatch = useContext(suggestedContext)
  // getData(state, setState)
  
  
  
//   if (state === undefined) {
//     return (
//       <View >
//         <ActivityIndicator 
//           size="large"
//           loading={loading}
//           />
//       </View>
// )}

// if (state) {
  const { mode, setMode, next, back } = useCardMode();
  //Card modes
  const NAME = 'NAME';
  const BIO = 'BIO';
  const INTERESTS = 'INTERESTS';
  const EXTRAS = 'EXTRAS';
  const MATCHED = 'MATCHED';
  
  //Card stack functionality and state
  const [index, setIndex] = useState(0);
  
  // const { state, setState, loading } = useApplicationData();
  // if (state === undefined) {
  //       return (
  //         <View >
  //           <ActivityIndicator 
  //             size="large"
  //             loading={loading}
  //             />
  //         </View>
  //   )}

  const { state } = useContext(StateContext);
  const users = state.users;
  const user = state.user;
  
  
  // if (state.hasOwnProperty('suggestedUser') {
  const unwantedUserIds = matchedIds(state, user);
  console.log('stateeee:', state)
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

  // console.log('suggestedMatch', suggestedMatch)

  if (state.hasOwnProperty('suggestedUser') && state.suggestedUser) {
    displayedUser = fullUserObject({users: state.users, interests: state.interests, photos: state.photos}, state.suggestedUser)
  }
  // setState(({...state, suggestedUser: null}));
  
  //function to step through each user in card stack
  const incrementUser = (index) => {
    if (index === detailedUsers.length - 1) {
      // setState(({...state, suggestedUser: null}));
      suggestedUser(null)
      state.suggestedUser = null;
      setMode(NAME)
      return setIndex(0)
    }
    suggestedUser(null)
    state.suggestedUser = null;
    setMode(NAME)
    return setIndex(index += 1)
  }
  useEffect(() => {
    getData();
  }, [])

  const goHome = () => {
    incrementUser(index)
    // setState(({...state, suggestedUser: null}));
    suggestedUser(null)
    getData(state, setState)
    next(NAME)
    return
  }
  console.log('potential_matches', state.potentialMatches)
  
  const like = () => {
    const match = state.potentialMatches.find(obj => obj.user1_id === displayedUser.id && obj.user2_id === user.id)

    if (match) {
      matchedUsers(state, user, displayedUser) 
      setMode(MATCHED)
      // setState(({...state, suggestedUser: null}));
      suggestedUser(null)
      getData(state, setState)
      return
    } else {
      potentialMatches(user.id, displayedUser.id); 
      incrementUser(index);
      // setState(({...state, suggestedUser: null}));
      suggestedUser(null)
      getData(state, setState)

      return
    }
  }

  useEffect(() => {
    getData();
  }, [])
  
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

//   else {
    
//       const unwantedUserIds = matchedIds(state, user);
//       console.log('stateeee:', state)
//       //everyone who is not already matched or the logged in user
//       const filteredUsers = unmatchedUsers(unwantedUserIds, users);
      
//       //full object for logged in user
//       const fullUser = fullUserObject({users: state.users, interests: state.interests, photos: state.photos}, user);
      
//       //users with interests and photos
//       const detailedUsers = filteredUsers.map(person => fullUserObject({users: state.users, interests: state.interests, photos: state.photos}, person))
//       //current user being displayed in card stack
//       let currentUser = detailedUsers[index];
//       // console.log('detailedUsers', detailedUsers)
      
//       let displayedUser = fullUserObject({users: state.users, interests: state.interests, photos: state.photos}, currentUser)
    
//       // console.log('suggestedMatch', suggestedMatch)
    
//       // if (state.suggestedUser.id) {
//       //   displayedUser = fullUserObject({users: state.users, interests: state.interests, photos: state.photos}, state.suggestedUser)
//       // }
    
      
//       //function to step through each user in card stack
//       const incrementUser = (index) => {
//         if (index === detailedUsers.length - 1) {
//           setMode(NAME)
//           return setIndex(0)
//         }
//         setMode(NAME)
//         return setIndex(index += 1)
//       }
    
//       const goHome = () => {
//         incrementUser(index)
//         next(NAME)
//         return
//       }
//       console.log('potential_matches', state.potentialMatches)
      
//       const like = () => {
//         const match = state.potentialMatches.find(obj => obj.user1_id === displayedUser.id && obj.user2_id === user.id)
    
//         if (match) {
//           matchedUsers(state, user, displayedUser) 
//           setMode(MATCHED)
//           return
//         } else {
//           potentialMatches(user.id, displayedUser.id); 
//           incrementUser(index);
//           return
//         }
//       }
    
//       // useEffect(() => {
//       //   getData();
//       // }, [])
      
//       return (
//         <SafeAreaView style={styles.container}>
//           {mode === NAME && <Name next={() => next(BIO)} detailedUser={displayedUser} /> }
//           {mode === BIO && <Bio next={() => next(INTERESTS)} back={() => back(NAME)} detailedUser={displayedUser}/>}
//           {mode === INTERESTS && <Interests next={() => next(EXTRAS)} back={() => back()} detailedUser={displayedUser}/>}
//           {mode === EXTRAS && <Extras back={() => back()} detailedUser={displayedUser} />}
//           {mode === MATCHED && <Matched home={() => goHome()} detailedUser={displayedUser} user={fullUser}/>}
//           <MatchButtons like={() => like()} user={user} detailedUser={displayedUser} newUser={() => incrementUser(index)}/>
//         </SafeAreaView>
//       )
       
// }
//   } else {
//     return (
//       <View >
//         <ActivityIndicator 
//           size="large"
//           loading={loading}
//           />
//       </View>
// )}

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

