import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, ScrollView, SafeAreaView, ActivityIndicator } from "react-native";
import ForYouList from './ForYouList';
import { findUsersByInterest, fullUserObject, allUserInterests, shuffle, matchedIds, unmatchedUsers, interestStringManipulation, updateUser } from '../helpers/selectors.js';
import { StateContext } from "../../StateProvider";
import showMatchedUsers from  '../../src/hooks/showMatchedUsers';


const ForYouPage = () => {

  const {newState, setNewState} = showMatchedUsers();
  const [loading, setLoading] = useState(false);
  
  // VERY IMPORTANT TO RENDER NEW MATCHES TO INBOX(MESSAGES SCREEN)
  if (newState.users === null) {
    // setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return (
      <View >
          <ActivityIndicator 
            size="large"
            loading={loading}
            />
        </View>
      )
    }
  
  const { state } = useContext(StateContext)
  // const { user } = state;

  state.user = updateUser(newState, state.user); 


  const signedInInterests = allUserInterests(newState, state.user)

  const stringManipulatedInterests = interestStringManipulation(signedInInterests)

  const shuffledInterests = shuffle(stringManipulatedInterests)
  const categorizedInterests = shuffledInterests.map( interest => {
    
    const unwantedUserIds = matchedIds(newState, state.user);
    
    const filteredUsers = unmatchedUsers(unwantedUserIds, newState.users);
    
    const filteredWithoutSignedInUsers = filteredUsers.filter( person => person.id !== state.user.id )
    
    const detailedFilteredUsers = filteredWithoutSignedInUsers.map( user => fullUserObject({'photos': newState.photos, 'users': newState.users, 'interests': newState.interests}, user));
    
    console.log('shuffledInterests', detailedFilteredUsers)
    const categorizedUsers = findUsersByInterest(detailedFilteredUsers, interest);

    return { interest, categorizedUsers } 
  })

  const allCategorizedInterests = categorizedInterests.map( (category, index) => {
    if (category.categorizedUsers.length !== 0)
      return <ForYouList
               key={index}
               category={category.interest}
               detailedFilteredUsers={category.categorizedUsers}
             />
    })

  return (
    <SafeAreaView style={styles.contentContainer}>
      <ScrollView>
          <View style={styles.lists}>
            <Text style={styles.title}>We think you'll love getting to know...</Text>
            {allCategorizedInterests}
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  lists: {
    flex: 1,
    padding: '10, 10, 10, 20',
    justifyContent: 'flex-start'
  },
  title: {
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 24
  }
});

export default ForYouPage;