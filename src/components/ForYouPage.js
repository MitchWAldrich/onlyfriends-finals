import React from "react";
import axios from 'axios';
import { StyleSheet, View, Text, ImageBackground, Image, ActivityIndicator } from "react-native";
import { useState, useEffect } from 'react';
import ForYouList from './ForYouList';
import useApplicationData from '../hooks/useApplicationData.js';
import findUsersByInterest from '../helpers/selectors.js';


const ForYouPage = () => {
  const [state, setState] = useState({
    user: {},
    users: {},
    interests: {},
    photos: {}
  })
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/users'),
      axios.get('http://localhost:8001/api/interests'),
      axios.get('http://localhost:8001/api/photos')
    ])
    .then((all) => {
      const [users, interests, photos] = all;

      setState(prev => ({...prev, users: users.data, interests: interests.data, photos: photos.data}))
      setLoading(false)
    })
    .catch(err => {
      console.log(err.message)
    })}, [])

  
  // const {
  //   state
  // } = useApplicationData();

  // const users = findUsersByInterest(state, 'travel')

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator 
          size="large"
          loading={loading}
        />
      </View>
    )
  }

  return (
    <View>
      <ForYouList
        photos={state.photos}
        users={state.users}
        interests={state.interests}
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