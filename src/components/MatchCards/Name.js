import React from "react";
import { StyleSheet, SafeAreaView, Text, ImageBackground, View, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';


const Name = (props) => {
  const {next, detailedUser} = props;

 console.log(detailedUser);
  
  return (
    
      <SafeAreaView style={styles.card}>
        <ImageBackground source={{uri: detailedUser.photos[0]}} style={styles.image}>
          <View style={styles.navigateContainer}>
          <Pressable onPress={next} >
          <AntDesign name="arrowright" size={20} color="#d6d6d6" />
          </Pressable>
          </View>
          <View style={styles.innerText}>
            <Text style={styles.name}>{detailedUser.first_name}, {detailedUser.age}</Text>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.text}>{detailedUser.address} (4km away)</Text>
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
    height: '75%',
    justifyContent: 'center',
    alignItems: 'flex-end',
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



export default Name;