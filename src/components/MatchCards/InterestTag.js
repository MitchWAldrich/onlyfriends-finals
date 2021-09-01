import React from 'react';
import { Text, StyleSheet } from 'react-native';

const InterestTag = (props) => {
  return (
    <Text style={styles.text}>
      {props.interest}
    </Text>
  );
};


const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: 'white',
    lineHeight: 25,
    textShadowColor: '#525252',
    textShadowOffset: {
      width: 4,
      height: 5,
    },
    textShadowOpacity: 0.36,
    textShadowRadius: 6.68,
  },
})

export default InterestTag;