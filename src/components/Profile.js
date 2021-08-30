import React, { useState } from "react";
import axios from 'axios';

import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TextInput, CheckBox } from "react-native";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { fullUserObject } from '../helpers/selectors.js';
import { useEffect } from "react";

const Profile = () => {
  const [isSelected, setSelection] = useState(false);
  
  return (
    <SafeAreaView style={styles.container}>
       <ScrollView style={styles.scrollView}>
         
        <View style={styles.titleBar}>
          <Ionicons name="ios-arrow-back" size={24} color="#52575D"></Ionicons>
          <Ionicons name="reorder-three-sharp" size={24} color="#52575D"></Ionicons>
        </View>

        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image source={require("../../public/images/ProfilePic.png")} style={styles.image} resizeMode="center"></Image>
          </View>
          <View style={{ alignSelf: "center" }}>
            <Text style={styles.profileDetails}>Diane, 26</Text>
            <Text style={styles.starSign}>Sagittarius <MaterialCommunityIcons name="zodiac-sagittarius" color="black" /></Text>
            
          </View>
        </View>

        <View style={{ alignSelf: "center" }}>
          <View style={styles.editButton}>
            <Text style={styles.editButtonText}>EDIT PROFILE</Text>
          </View>
        </View>

        <View style={styles.textArea}>
          <TextInput placeholder="Gender" />
        </View>

        <View style={styles.textArea}>
          <TextInput placeholder="Location" />
        </View>

        <View style={styles.textArea}>
          <Text>Vaccinated:</Text>
          <View style={styles.container}>
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
              <Text style={styles.label}>Yes</Text>
            </View>

            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
              <Text style={styles.label}>No</Text>
            </View>

          </View>
        </View>

        <View style={styles.textArea}>
          <Text>EDIT PHOTOS</Text>
        </View>

        <View style={styles.textArea}>
          <Text>ABOUT ME</Text>
          <TextInput placeholder="THIS IS THE ABOUT ME" />
        </View>

        <View style={styles.textArea}>
          <Text>MY INTERESTS</Text>
          <View style={styles.container}>
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
              <Text style={styles.label}>Books</Text>
            </View>

            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
              <Text style={styles.label}>TV & Movies</Text>
            </View>

            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
              <Text style={styles.label}>Fitness & Working Out</Text>
            </View>

            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
              <Text style={styles.label}>Hiking</Text>
            </View>

            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
              <Text style={styles.label}>Arts & Culture</Text>
            </View>

            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
              <Text style={styles.label}>Music</Text>
            </View>

            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
              <Text style={styles.label}>Gaming</Text>
            </View>

            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
              <Text style={styles.label}>Travel</Text>
            </View>

            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
              <Text style={styles.label}>Studying & Coworking</Text>
            </View>

            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
              <Text style={styles.label}>Sports</Text>
            </View>

            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
              <Text style={styles.label}>Eating Out</Text>
            </View>

            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
              <Text style={styles.label}>Going Out</Text>
            </View>
          </View>
        </View>

        <View style={styles.buttonSaveCancel}>
          <View style={styles.editButton}>
            <Text style={styles.editButtonText}>SAVE</Text>
          </View>
          <View style={styles.editButton}>
            <Text style={styles.editButtonText}>CANCEL</Text>
          </View>
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
    width: undefined
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
  }
});

export default Profile;