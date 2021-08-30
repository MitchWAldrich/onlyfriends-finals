import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, ActivityIndicator } from "react-native";

const ForYouListItem = (props) => {  
 
  return (
    <View style={styles.buttons}>
      <Image
        source={{uri: props.photo}}
        style={{width: 100, height: 100}}
      />
      <Text>{props.name}, {props.age}, {props.gender}</Text>
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



export default ForYouListItem;