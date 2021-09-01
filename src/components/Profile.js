import React, { useState, Component, useEffect, useContext  } from "react";
import axios from 'axios';

import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TextInput, CheckBox, TouchableHighlight, TouchableOpacity, Button } from "react-native";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Chip } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { fullUserObject, userAge, getUserByEmail } from '../helpers/selectors.js';
import { isVaccinated } from '../helpers/isVaccinated.js';
import { vaccinatedDisplay } from '../helpers/vaccinatedDisplay.js'
import { StateContext } from '../../StateProvider.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = (props) => {
  const { state, loading, logout, email, setEmail, auth, setAuth } = useContext(StateContext)
console.log('state.email', email)

const navigation = useNavigation(); 


//Logout button function
const onSubmit = async () => {
    try {
      await AsyncStorage.removeItem('MyEmail')

    } catch (err) {
      
      alert(err)

    } finally {
      setEmail("")
      setAuth(false)
    }
 

  return
}

// const getData = async () => {
//   try {
//     console.log('email', email)
//     // const jsonValue = await AsyncStorage.getItem('user')
//     const email = await AsyncStorage.getItem('MyEmail')
//     if (email !== null) {
//       // parsedValue = JSON.parse(user)
//       setEmail(( email ))
//       setAuth((true))
//       console.log('auth2', auth)
//     }
//   } catch (e) {
//     console.log(e)
//     // error reading value
//   }
// }

// useEffect(() => {
//   getData();
// }, [])


  const signedInUser = getUserByEmail(state, email)
  console.log('signedInUser', signedInUser)
  const detailedUser = fullUserObject({'users': state.users, 'interests': state.interests, 'photos': state.photos}, signedInUser)
  console.log('dUs', detailedUser)
  const userInterests = detailedUser.interests.map((interest, id) =>
    <Chip
      key={id}
      title={interest}
      type="outline"
    />)
  
  return (
    <SafeAreaView style={styles.container}>
       <ScrollView style={styles.scrollView}>
         
        <View style={styles.titleBar}>
          <Ionicons name="ios-arrow-back" size={24} color="#52575D"></Ionicons>
          <Ionicons name="reorder-three-sharp" size={24} color="#52575D"></Ionicons>
        </View>

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

        <View style={{ alignSelf: "center" }}>
        <Button title="Edit Profile" onPress={() => navigation.navigate('Edit Profile')} style={styles.editButton}/>
          <View style={styles.editButton}>
            <Text style={styles.editButtonText}>EDIT PROFILE</Text>
          </View>
        </View>
        {/* if edit profile is not clicked yet, render information saved */}
        <View style={styles.textArea}>
          <Text>Gender: {detailedUser.gender}</Text>
        </View>

        <View style={styles.textArea}>
          <Text>Location: {detailedUser.address}</Text>
        </View>

        <View style={styles.textArea}>
          <Text>Vaccinated: {vaccinatedDisplay(detailedUser)}</Text>
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
  editButton: {
    paddingTop: 20,
    paddingBottom: 20
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
    marginTop: 20,
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