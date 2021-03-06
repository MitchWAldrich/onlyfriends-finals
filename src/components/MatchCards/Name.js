import React from "react";
import { StyleSheet, SafeAreaView, Text, ImageBackground, View, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';


const Name = (props) => {
  const {next, detailedUser} = props;

  
  return (
    
      <SafeAreaView style={styles.card}>
        <ImageBackground source={{uri: detailedUser.photos[0]}} style={styles.image}>
          <Pressable onPress={next} style={styles.navigateRight}>
          <AntDesign name="arrowright" size={20} color="#d6d6d6" />
          </Pressable>
          <View style={styles.innerText}>
            <Text style={styles.name}>{detailedUser.first_name}, {detailedUser.age}</Text>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.text}>{detailedUser.address} ({detailedUser.distance} km away)</Text>
              <Text style={styles.text}>{detailedUser.gender}</Text>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  
  card: {
    width: '90%',
    height: '80%',
    borderRadius: 10,
    backgroundColor: '#fefefe',
    alignItems: 'center',
    justifyContent: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    marginTop: 18,
  },
  navigateRight: {
    height: '100%',
    position: 'absolute',
    top: 300,
    right: 0,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',

    justifyContent: 'flex-end',
  },
  innerText: {
    padding: 12,
  },
  name: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: '#525252',
    textShadowOffset: {
      width: 4,
      height: 5,
    },
    textShadowOpacity: 0.36,
    textShadowRadius: 6.68,

  },
  text: {
    fontSize: 26,
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
});



export default Name;