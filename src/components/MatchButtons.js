import React from "react";
import { View, StyleSheet, Pressable } from "react-native";

import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const MatchButtons = (props) => {
  const { like, superLike, newUser } = props;


  return (
    <View style={styles.buttonContainer}>
      
      <Pressable style={styles.button} onPress={newUser}>
      <Entypo name="cross" size={35} color="#F76C6B" />  
      </Pressable>

      <Pressable style={styles.buttonSuperlike} onPress={superLike}>
      <FontAwesome name="star" size={40} color="#3AB4CC" />  
      </Pressable>

      <Pressable style={styles.button} onPress={like}>
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
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 23,
  },
  button: {
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 65,
    shadowColor: '#525252',
    shadowOffset: {
      width: 5,
      height: 7,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 13,
  },
  buttonSuperlike: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginLeft:40,
    marginRight:40,
    padding: 10,
    borderRadius: 80,
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