import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, ActivityIndicator } from "react-native";

const ForYouListItem = (props) => {

  let today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ":" + today.getMilliseconds();

  console.log('time', time);
  console.log('photo1', props.photo.photo1_url)
  
 
  return (
    <View style={styles.buttons}>
      <Image
        source={{uri: props.photo.photo1_url}}
        style={{width: 400, height: 400}}
      />
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