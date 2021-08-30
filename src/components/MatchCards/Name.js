import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";


import useApplicationData from "../../hooks/useApplicationData";


const Name = (props) => {

  return (
    
      <View style={styles.card}>
        <ImageBackground source={require("../../../public/images/barbieProfile.jpeg")} style={styles.image}>
          <View style={styles.innerText}>
            <Text style={styles.name}>Barbie</Text>
            <Text style={styles.bio}>When I'm not shopping, I love helping others!</Text>
          </View>
        </ImageBackground>
      </View>
    
  );
};

const styles = StyleSheet.create({
  
  card: {
    width: '100%',
    height: '85%',
    borderRadius: 10,
    backgroundColor: '#fefefe',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',

    justifyContent: 'flex-end',
  },
  cardInner: {
    padding: 10,
  },
  name: {
    fontSize: 30,
    color: 'teal',
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 18,
    color: 'white',
    lineHeight: 25,
  },
});



export default Name;