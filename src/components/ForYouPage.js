import React from "react";
import axios from 'axios';
import { StyleSheet, View, Text, ImageBackground } from "react-native";
<<<<<<< HEAD
import ForYouList from './ForYouList';
=======
import ForYouList from './ForYouList'
>>>>>>> 8292451a52d12671df8778ecf60f355edd5cba7a
import useApplicationData from '../hooks/useApplicationData.js'

const ForYouPage = () => {
  const {
    state
  } = useApplicationData();

<<<<<<< HEAD
=======
  console.log('state', state);

>>>>>>> 8292451a52d12671df8778ecf60f355edd5cba7a
  return (
    <View style={styles.buttons}>
      <Text style={styles.text}>Barbie,</Text>
      <Text style={styles.text}></Text>
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



export default ForYouPage;