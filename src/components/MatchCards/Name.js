import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import Swiper from "react-native-deck-swiper";
import MatchButtons from '../MatchButtons';
import useApplicationData from "../../hooks/useApplicationData";


const Name = (props) => {

  const { cards } = props;

  return (
    <Swiper>
      
    </Swiper>


  //   <View style={{flex: 1}}>
  //   <View style={styles.header}>
  //   </View>
  //   <ImageBackground
  //     source={require("../../../public/images/barbieProfile.jpeg")}style={styles.container}
  //   >
  //   <View style={styles.buttons}>
  //   <Text style={styles.text}>Barbie,</Text>
  //   <Text style={styles.text}>26</Text>
  //     <MatchButtons/>
  //   </View>
  //   </ImageBackground>
  //   <View style={styles.footer}>
  //   </View>
  // </View>
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