import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import potentialMatches from "../hooks/potentialMatches";

import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const MatchButtons = (props) => {
  const { newUser, user, detailedUser } = props;

  const like = () => {
    potentialMatches(user.id, detailedUser.id);
    newUser();
  }

  return (
    <View style={styles.buttonContainer}>
      
      <Pressable style={styles.button} onPress={newUser}>
      <Entypo name="cross" size={30} color="#F76C6B" />  
      </Pressable>

      <Pressable style={styles.button} onPress={newUser}>
      <FontAwesome name="star" size={24} color="#3AB4CC" />  
      </Pressable>

      <Pressable style={styles.button} onPress={() => like()}>
      <FontAwesome name="heart" size={24} color="#4FCC94" />  
      </Pressable>
    
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    marginBottom: 25,
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
    shadowColor: '#525252',
    shadowOffset: {
      width: 5,
      height: 7,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 13,
  }
  
})

export default MatchButtons;