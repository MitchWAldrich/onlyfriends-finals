import React from "react";
import { StyleSheet, View } from "react-native";

import useApplicationData from "../../hooks/useApplicationData";
import Name from "./Name";
import Bio from "./Bio";



const Cards = () => {

  return (

    <View style={styles.pageContainer}>
      <Name />
    </View>

    
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});



export default Cards;