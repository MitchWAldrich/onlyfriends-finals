import React from "react";
import { StyleSheet, View, Text, ImageBackground, PushNotificationIOS } from "react-native";
import ForYouListItem from './ForYouListItem'

const ForYouList = (props) => {

  return (
    <View style={styles.buttons}>
      <ForYouListItem
        photo={props.photo}/>
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