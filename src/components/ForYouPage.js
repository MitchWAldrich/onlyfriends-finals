import React from "react";
import axios from 'axios';
import { StyleSheet, View, Text, ImageBackground, Image, ActivityIndicator } from "react-native";
import { useState, useEffect } from 'react';
import ForYouList from './ForYouList';
import useApplicationData from '../hooks/useApplicationData.js';
import findUsersByInterest from '../helpers/selectors.js';


const ForYouPage = (props) => {

  return (
    <View>
      <ForYouList
        photos={props.photos}
        users={props.users}
        interests={props.interests}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 100,
    backgroundColor: 'teal'
  },
  footer: {
    height: 100,
    backgroundColor: 'teal'
  },
  buttons: {
    height: 75,
    flex: 1,
    justifyContent: "flex-end",
  },
  text: {
    height: 75,
    fontSize: 35,
    fontWeight: 'bold',
    justifyContent: "flex-end",
    margin: -20
  }
});



export default ForYouPage;