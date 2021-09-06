import React, { useState, Component, useEffect, useContext  } from "react";
import axios from 'axios';

import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Button, ActivityIndicator } from "react-native";
import { Chip, FormLabel } from '@material-ui/core'
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
    />)
  
  //Logout button function
  const onSubmit = async () => {
    
    remove();
    setAuth(false);
  }
  
  useEffect(() => {
    getData();
  }, [])
  return (
    <SafeAreaView style={styles.container}>
       <ScrollView style={styles.scrollView}>
        
        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image 
              source={{uri: detailedUser.photos[0]}} 
              style={styles.image} 
            />
          </View>
          <View style={{ alignSelf: "center" }}>
          {/* <Text style={styles.profileDetails}>{user.first_name}, {userAge(user)}</Text> */}
          <Text style={styles.profileDetails}>{detailedUser.first_name}, {userAge(detailedUser)}</Text>
            <Text style={styles.starSign}>{detailedUser.starsign} <MaterialCommunityIcons name={`zodiac-${detailedUser.starsign.toLowerCase()}`} color="black" /></Text>
          </View>
        </View>

        <View style={{ alignSelf: "center", marginTop: 10}}>
          <Button title="Edit Profile" onPress={() => navigation.navigate('Edit Profile')} style={styles.editButton}/>
        </View>
        {/* if edit profile is not clicked yet, render information saved */}
        <View style={styles.textArea}>
          <Text>Gender: {detailedUser.gender}</Text>
        </View>

        <View style={styles.textArea}>
          <Text>Location: {detailedUser.address}</Text>
        </View>

        <View style={styles.textArea}>
          <Text>Vaccinated: {detailedUser.vaccinated}</Text>
        </View>

        <View style={styles.textArea}>

          <Text>Photos</Text>
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
          <Text>About Me</Text>
          <Text>{detailedUser.about_me}</Text>
        </View>

        <View style={styles.textArea}>
          <Text>My Interests</Text>
          <View>{userInterests}</View>
        </View>
        <View style={{ alignSelf: "center" }}>
          <Button title="Logout" onPress={onSubmit} style={styles.editButton}/>
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
    marginHorizontal: 20,
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#52575D"
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginHorizontal: 16
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
    color:'#2D2D2D'
  },
  starSign:{
    alignSelf: "center",
    fontSize: 15
  },
  editButton: { 
    alignSelf: "center",
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#0087FF',
    borderRadius: 25,
    width: 'auto'
  },
  editButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  textArea: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    flexWrap: 'wrap'
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 10,
    marginLeft: 5
  },
  checkbox: {
    alignSelf: "center"
  },
  buttonSaveCancel: {
    flexDirection: "row",
    alignSelf: "center"
  },
  aboutMePhotos: {
    width: 125,
    height: 200,
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

export default Profile;