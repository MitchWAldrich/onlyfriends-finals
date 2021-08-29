import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";

import useApplicationData from "../../hooks/useApplicationData";
import Name from "./Name";
import Bio from "./Bio";



const Name = () => {

  const {
    state
  } = useApplicationData();

  const users = state.users

  return (

    <View>
      <Name cards={users} />
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



export default Name;