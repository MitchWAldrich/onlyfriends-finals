import React from "react";
import { View } from "react-native";

import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const MatchButtons = () => {
  return (
    <View style={{flexDirection: "row", justifyContent: "space-around"}}>
      <Foundation name="x-circle" size={50} color="red" />
      <FontAwesome5 name="grin-stars" size={44} color="blue" />
      <FontAwesome name="check-circle-o" size={50} color="green" />
    </View>
  );
};



export default MatchButtons;