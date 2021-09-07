import React, { useContext } from "react";
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from "react-native";
import ForYouList from './ForYouList';
import { findUsersByInterest, fullUserObject, allUserInterests, shuffle, matchedIds, unmatchedUsers, interestStringManipulation } from '../helpers/selectors.js';
import { StateContext } from "../../StateProvider";

const ForYouPage = () => {
  
  const { state } = useContext(StateContext)
  const { user } = state;

  const signedInInterests = allUserInterests(state, user)

  const stringManipulatedInterests = interestStringManipulation(signedInInterests)

  const shuffledInterests = shuffle(stringManipulatedInterests)
  const categorizedInterests = shuffledInterests.map( interest => {
    
    const unwantedUserIds = matchedIds(state, user);
    
    const filteredUsers = unmatchedUsers(unwantedUserIds, state.users);
    
    const filteredWithoutSignedInUsers = filteredUsers.filter( person => person.id !== user.id )
    
    const detailedFilteredUsers = filteredWithoutSignedInUsers.map( user => fullUserObject({'photos': state.photos, 'users': state.users, 'interests': state.interests}, user));
    
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