import React, { useContext, useState } from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, Image, Alert, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StateContext } from '../../../StateProvider';

const Matched = (props) => {
  const { home, detailedUser, user } = props;
  // const { state, setState } = useContext(StateContext);
  const navigation = useNavigation();


  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginBottom: 5, alignItems: "center"}}>
        <Text style={styles.header}>You're now friends!</Text>
        <Text style={styles.text}>You and {detailedUser.first_name} matched with each other</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image 
          source={{uri: user.photos[0]}}
          style={styles.photo} 
        />
        <Image 
          source={{uri: detailedUser.photos[0]}}
          style={styles.photo} 
        />
      </View>
      <View styles={{marginTop: 10}}>
        <Pressable 
          title="Send a Message" 
          onPress={() => {
            home()
            navigation.navigate('Messages')
          }}
          style={styles.stylesButtonMessage}
        >
          <Text style={styles.stylesButtonTextMessage}>Send a Message</Text>
        </Pressable>
        <Pressable 
          title="Find More Friends" 
          onPress={home}
          style={styles.stylesButtonFind}
        >
          <Text style={styles.stylesButtonTextFind}>Find More Friends</Text>
        </Pressable>
      </View>

      {/* <Button title="Send a Message" onPress={() => {
        home()
        navigation.navigate('Messages')
      }}/> */}
      {/* <Button title="Find More Friends" onPress={home} /> */}
    </SafeAreaView>
  )
};


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    color:'#004d4d',
  },
  text: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#002626',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margintTop: 10,
    marginBottom: 10
  },
  photo: {
    width: 180,
    height: 180,
    borderRadius: '60%',
    overflow: 'hidden',
    margin: 5
  },
  stylesButtonMessage: { 
    alignSelf: "center",
    marginTop: 2,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#003333',
    borderRadius: 90,
    width: 200,
    height: 45,
  },
  stylesButtonTextMessage: {
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 20,
    color: '#FFFFFF'
  },
  stylesButtonFind: { 
    alignSelf: "center",
    marginTop: 2,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#003333',
    borderRadius: 90,
    width: 180,
    height: 40,
  },
  stylesButtonTextFind: {
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 15,
    color: '#FFFFFF'
  },
});

export default Matched;