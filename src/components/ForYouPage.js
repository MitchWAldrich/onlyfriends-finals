import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import ForYouList from './ForYouList'
import useApplicationData from '../hooks/useApplicationData.js'

const ForYouPage = () => {
  const {
    state
  } = useApplicationData();

  console.log('state', JSON.stringify(state))

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