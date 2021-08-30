import React from "react";
import { View, StyleSheet } from "react-native";

import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import Favorite from "@material-ui/icons/Favorite";
import { IconButton } from "@material-ui/core";

const MatchButtons = () => {
  return (
    <View style={[styles.buttons, {flexDirection: "row"}]}>
      <IconButton style={{color: "red", fontSize: 44}}>
        <CloseIcon />
      </IconButton>
      <IconButton style={{color: "lightBlue", fontSize: 44}}>
        <StarRateIcon />
      </IconButton>
      <IconButton styles={{color: "green", fontSize: 44}}>
        <Favorite />
      </IconButton>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    width: "100%",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "flex-end",
  },
})

export default MatchButtons;