import React from "react";
import { StyleSheet, View, Text, ImageBackground, PushNotificationIOS } from "react-native";
import ForYouListItem from './ForYouListItem';
import { fullUserObject, findUsersByInterest } from '../helpers/selectors.js';

const ForYouList = (props) => {

  const filteredUsers = findUsersByInterest({'users': props.users, 'interests': props.interests}, 'books')

  const detailedFilteredUsers = filteredUsers.map( user => fullUserObject({'photos': props.photos, 'users': props.users, 'interests': props.interests}, user))
  console.log('detailed', detailedFilteredUsers)

  const parsedDFUs = detailedFilteredUsers.map( user => 
    <ForYouListItem
      key={user.id}
      photo={user.photos[0]}
      name={user.firstname}
      age={user.age}
      gender={user.gender}
    />
    )

  return (
    <View style={styles.buttons}>
      <Text>Future friends who like Books</Text>
      {parsedDFUs}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 100,
    backgroundColor: 'teal'
  },
  footer: {
    height: 100,
    backgroundColor: 'teal'
  },
  buttons: {
    height: 75,
    flex: 1,
    justifyContent: "flex-end",
  },
  text: {
    height: 75,
    fontSize: 35,
    fontWeight: 'bold',
    justifyContent: "flex-end",
    margin: -20
  }
});



export default ForYouList;