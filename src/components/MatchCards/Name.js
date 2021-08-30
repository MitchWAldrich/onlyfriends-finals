import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";

import MatchButtons from '../MatchButtons';
import useApplicationData from "../../hooks/useApplicationData";


const Name = (props) => {

  const { cards } = props;

  return (
    <View style={styles.pageContainer}>
      <View style={styles.card}>
        <ImageBackground source={require("../../../public/images/barbieProfile.jpeg")} style={styles.image}>
          <View style={styles.innerText}>
            <Text style={styles.name}>Barbie</Text>
            <Text style={styles.bio}>When I'm not busy shopping, I love helping others!</Text>
          </View>
        </ImageBackground>
        <MatchButtons />
      </View>
    </View>

    
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  card: {
    width: "95%",
    height: "75%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68, 
    elevation: 11,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  innerText: {
    padding: 10,
  },
  name: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  bio: {
    fontSize: 18,
    color: "white",
    lineHeight: 24
  }
});



export default Name;