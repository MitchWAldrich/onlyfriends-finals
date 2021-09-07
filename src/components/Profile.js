import React, { useState, Component, useEffect, useContext  } from "react";
import axios from 'axios';

import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Button, ActivityIndicator, Pressable } from "react-native";
import { Chip, Container, FormLabel } from '@material-ui/core'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { fullUserObject, userAge, getUserByEmail } from '../helpers/selectors.js';
import { isVaccinated } from '../helpers/isVaccinated.js';
import { vaccinatedDisplay } from '../helpers/vaccinatedDisplay.js'
import { StateContext } from '../../StateProvider.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { remove, getData } from '../helpers/persistLogin.js';

const Profile = (props) => {
  const { state, setState, loading, logout, email, setEmail, setAuth } = useContext(StateContext)

  const navigation = useNavigation(); 

  if (state.user) { 

  const detailedUser = fullUserObject({'users': state.users, 'interests': state.interests, 'photos': state.photos}, state.user)
  console.log('dUs', detailedUser)
  
  const userInterests = detailedUser.interests.map((interest, id) =>
    <Chip
      key={id}
      label={interest}
      color="primary"
      style={{backgroundColor:'#004d4d', width: 155, flexWrap: 'wrap'}}
    />)
  
  //Logout button function
  const onSubmit = async () => {
    
    remove();
    setAuth(false);
  }
  
  // useEffect(() => {
  //   getData();
  // }, [])
  return (
    <SafeAreaView style={styles.container}>
       <ScrollView style={styles.scrollView}>

        <View>
          <View style={{ alignSelf: "center" }}>
            <View style={styles.profileImage}>
              <Image 
                source={{uri: detailedUser.photos[0]}} 
                style={styles.image} 
              />
            </View>
            <View style={{ alignSelf: "center" }}>

            <Text style={styles.profileDetails}>{detailedUser.first_name}, {userAge(detailedUser)}</Text>
              <Text style={styles.starSign}>{detailedUser.starsign} <MaterialCommunityIcons name={`zodiac-${detailedUser.starsign.toLowerCase()}`} color="black" /></Text>
            </View>
          </View>

          <View style={{ alignSelf: "center", marginTop: 10}}>
            <Pressable 
              title="Edit Profile" 
              onPress={() => navigation.navigate('Edit Profile')} 
              style={styles.stylesButton}
            >
              <Text style={styles.stylesButtonText}>Edit Profile</Text>
            </Pressable>
          </View>
        </View>

        <View>
          <View style={styles.textArea}>
            <Text style={styles.textSection}>Gender</Text>
            <Text style={styles.textAnswer}>{detailedUser.gender}</Text>
          </View>

          <View style={styles.textArea}>
            <Text style={styles.textSection}>Location</Text>
            <Text style={styles.textAnswer}>{detailedUser.address}</Text>
          </View>

          <View style={styles.textArea}>
            <Text style={styles.textSection}>Vaccinated</Text>
            <Text style={styles.textAnswer}>{detailedUser.vaccinated}</Text>
          </View>

          <View style={styles.textArea}>
          <Text style={styles.textSection}>Photos</Text>
            <View style={styles.aboutMePhotos}>
              <Image 
                source={{uri: detailedUser.photos[0]}} 
                style={styles.image}
              />
            </View>
            <View style={styles.aboutMePhotos}>
              <Image 
                source={{uri: detailedUser.photos[1]}} 
                style={styles.image}
              />
            </View>
            <View style={styles.aboutMePhotos}>
              <Image 
                source={{uri: detailedUser.photos[2]}} 
                style={styles.image}
              />
            </View>
            <View style={styles.aboutMePhotos}>
              <Image 
                source={{uri: detailedUser.photos[3]}} 
                style={styles.image}
              />
            </View>
          </View>

          <View style={styles.textArea}>
            <Text style={styles.textSection}>About Me</Text>
            <Text style={styles.textAnswer}>{detailedUser.about_me}</Text>
          </View>

          <View style={styles.textArea}>
            <Text style={styles.textSection}>My Interests</Text>
            <View styles={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 20, marginTop: 20}}>{userInterests}</View>
          </View>

          <View style={{ alignSelf: "center", marginTop: 25 }}>
            <Pressable 
              title="Logout" 
              onPress={onSubmit}
              style={styles.stylesButton}
            >
              <Text style={styles.stylesButtonText}>Logout</Text>
            </Pressable>
          </View>

        </View>
       </ScrollView>
    </SafeAreaView>
  );
  
} else {
 
    return (
      <View >
        <ActivityIndicator 
          size="large"
          loading={loading}
        />
      </View>
)}


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    width: '100%',
    paddingTop: 20  
  },
  scrollView: {
    marginHorizontal: 10,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden"
  },
  profileDetails: {
    paddingTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color:'#004d4d',
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  starSign:{
    alignSelf: "center",
    fontSize: 15
  },
  stylesButton: { 
    alignSelf: "center",
    marginTop: 2,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#003333',
    borderRadius: 90,
    width: 150,
    height: 40,
    color: '#FFFFFF'
  },
  stylesButtonText: {
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 15,
    color: '#FFFFFF'
  },
  textArea: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    flexWrap: 'wrap',
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: "#d9d9d9",
  },
  textSection: {
    fontSize: 15, 
    fontWeight: 'bold'
  },
  textAnswer:{
    fontSize: 16,
    marginTop: 5,
    alignContent: "center"
  },
  aboutMePhotos: {
    width: 125,
    height: 200,
    flexDirection: "column",
    flexWrap: "wrap",
    marginTop: 25,
    marginHorizontal: 0
  }
});

export default Profile;