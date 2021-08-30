import React, { useState, Component } from "react";
import axios from 'axios';

import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TextInput, CheckBox, TouchableHighlight } from "react-native";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Chip } from 'react-native-elements';

import { fullUserObject, userAge } from '../helpers/selectors.js';
import { isVaccinated } from '../helpers/isVaccinated.js';
import { vaccinatedDisplay } from '../helpers/vaccinatedDisplay.js'
import { useEffect } from "react";

const Profile = (props) => {
  const [isSelected, setSelection] = useState(false);

  // {'users': props.users, 'interests': props.interests}

  const detailedUsers = props.users.map( user => fullUserObject({'users': props.users, 'interests': props.interests, 'photos': props.photos}, user))  
  console.log('detailedUsers', detailedUsers)

  const userInterests = detailedUsers[0].interests.map((interest, id) =>
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
              source={{uri: detailedUsers[0].photos[0]}} 
              style={styles.image} 
            />
          </View>
          <View style={{ alignSelf: "center" }}>
            <Text style={styles.profileDetails}>{detailedUsers[0].first_name}, {userAge(detailedUsers[0])}</Text>
            <Text style={styles.starSign}>{detailedUsers[0].starsign} <MaterialCommunityIcons name={`zodiac-${detailedUsers[0].starsign.toLowerCase()}`} color="black" /></Text>
          </View>
        </View>

        <View style={{ alignSelf: "center" }}>
          <View style={styles.editButton}>
            <Text style={styles.editButtonText}>EDIT PROFILE</Text>
          </View>
        </View>
        {/* if edit profile is not clicked yet, render information saved */}
        <View style={styles.textArea}>
          <Text>Gender: {detailedUsers[0].gender}</Text>
        </View>

        <View style={styles.textArea}>
          <Text>Location: {detailedUsers[0].address}</Text>
        </View>

        <View style={styles.textArea}>
          <Text>Vaccinated: {vaccinatedDisplay(detailedUsers[0])}</Text>
        </View>

        <View style={styles.textArea}>
          <Text>Photos</Text>
          <View style={styles.aboutMePhotos}>
            <Image 
              source={{uri: detailedUsers[0].photos[0]}} 
              style={styles.image}
            />
          </View>
          <View style={styles.aboutMePhotos}>
            <Image 
              source={{uri: detailedUsers[0].photos[1]}} 
              style={styles.image}
            />
          </View>
          <View style={styles.aboutMePhotos}>
            <Image 
              source={{uri: detailedUsers[0].photos[2]}} 
              style={styles.image}
            />
          </View>
          <View style={styles.aboutMePhotos}>
            <Image 
              source={{uri: detailedUsers[0].photos[3]}} 
              style={styles.image}
            />
          </View>
        </View>

        <View style={styles.textArea}>
          <Text>About Me</Text>
          <Text>{detailedUsers[0].about_me}</Text>
        </View>

        <View style={styles.textArea}>
          <Text>My Interests</Text>
          <View>{userInterests}</View>
        </View>
       </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    width: '100%'
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