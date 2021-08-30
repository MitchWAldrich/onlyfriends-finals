import { StatusBar } from 'expo-status-bar';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, ActivityIndicator } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AntDesign, Ionicons } from '@expo/vector-icons';

import 'react-native-gesture-handler';

import Name from './src/components/MatchCards/Name.js';
import ForYouPage from './src/components/ForYouPage.js';
import Profile from './src/components/Profile.js';

// function useApplicationData() {
export default function App() {
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
  
    if (loading) {
      return (
        <View >
          <ActivityIndicator 
            size="large"
            loading={loading}
          />
        </View>
      )
    }
  //   return { state, loading }
  // }

function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Profile
        photos={state.photos}
        users={state.users}
        interests={state.interests}/>
    </SafeAreaView>
  );
}

function MainScreen() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Name/>
    </SafeAreaView>
  );
}

function MessagesScreen() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Inbox goes here!</Text>
    </SafeAreaView>
  );
}

function FYPScreen() {

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ForYouPage
        photos={state.photos}
        users={state.users}
        interests={state.interests}
      />
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Profile" // THIS IS WHAT SHOWS UP ON TOP, we need the onlyFriends logo to replace this
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),

        }}
      />
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarLabel: 'Main',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="message1" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="For You"
        component={FYPScreen}
        options={{
          tabBarLabel: 'For You',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-circle-outline" color={color} size={size} />
          ),
        }}
      />
      </Tab.Navigator>
  );
}
return (
  <NavigationContainer>
    <MyTabs />
  </NavigationContainer>
);
}
// export default function App() {
//   return (
//       <NavigationContainer>
//         <MyTabs />
//       </NavigationContainer>
//   );
// }