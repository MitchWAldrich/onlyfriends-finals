import React from "react";
import { StyleSheet, SafeAreaView, Text, ImageBackground, View, Pressable } from "react-native";
import InterestTag from "./InterestTag";
import { AntDesign } from '@expo/vector-icons';


const Interests = (props) => {
  const {next, back, detailedUser } = props;

  const interests = ['reading', 'hiking', 'going out', 'eating out'];
  

  const parsedInterests = detailedUser.interests.map((interest) => {
    return (<InterestTag interest={interest} key={interest}/>)
  })


  return (
    
      <SafeAreaView style={styles.card}>
        <ImageBackground source={{uri: detailedUser.photos[2]}} style={styles.image}>
        <View style={styles.navigateContainer}>
          <Pressable onPress={back}>
          <AntDesign name="arrowleft" size={20} color="#d6d6d6" />
          </Pressable>
          <Pressable onPress={next} >
          <AntDesign name="arrowright" size={20} color="#d6d6d6" />
          </Pressable>
        </View>
          <View style={styles.innerText}>
            <Text style={styles.name}>{detailedUser.first_name}</Text>
            <View style={{flexDirection: 'column'}}>
              <View>{parsedInterests}</View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  
  card: {
    width: '90%',
    height: '85%',
    borderRadius: 10,
    backgroundColor: '#fefefe',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  navigateContainer: {
    flexDirection: 'row',
    height: '40%',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1,
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
    fontSize: 30,
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
});



export default Interests;