import React from "react";
import { StyleSheet, SafeAreaView, Text, ImageBackground, View, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Bio = (props) => {
  const { next, back, detailedUser } = props;


  return (
    
      <SafeAreaView style={styles.card}>
        <ImageBackground source={{uri: detailedUser.photos[1]}} style={styles.image}>
          <Pressable onPress={back} style={styles.navigateLeft}>
          <AntDesign name="arrowleft" size={20} color="#d6d6d6" />
          </Pressable>
          <Pressable onPress={next} style={styles.navigateRight}>
          <AntDesign name="arrowright" size={20} color="#d6d6d6" />
          </Pressable>
          <View style={styles.innerText}>
            <Text style={styles.name}>{detailedUser.first_name}</Text>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.text}>{detailedUser.about_me}</Text>            
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
  navigateLeft: {
    height: '100%',
    position: 'absolute',
    top: 300,
    left: 0,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    zIndex: -1,
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
    textShadowColor: '#222222',
    textShadowOffset: {
      width: 4,
      height: 5,
    },
    textShadowOpacity: 1,
    textShadowRadius: 6.68,
  },
});



export default Bio;