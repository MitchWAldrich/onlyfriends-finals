import React from "react";
import { View, Image } from "react-native";



const MatchButtons = () => {
  return (
    <View style={{flexDirection: "row", justifyContent: "space-around"}}>
      <Image style={{height:70, width: 95, marginLeft: 15, marginRight: 15}} source={require("../../public/images/redX.jpeg")}/>
      <Image style={{height:70, width: 70, marginLeft: 15, marginRight: 15}} source={require("../../public/images/blueStar.png")}/>
      <Image style={{height:70, width: 70, marginLeft: 15, marginRight: 15}} source={require("../../public/images/greenCheck.png")}/>
    </View>
  );
};



export default MatchButtons;