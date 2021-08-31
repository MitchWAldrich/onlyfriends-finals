import { StatusBar } from 'expo-status-bar';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, ActivityIndicator } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import 'react-native-gesture-handler';

import Name from './src/components/MatchCards/Name.js';
import ForYouPage from './src/components/ForYouPage.js';
import Profile from './src/components/Profile.js';
import Messages from './src/components/Messages.js';
import ChatMessages from './src/components/ChatMessages.js';
import Cards from './src/components/MatchCards/index.js';
import StateProvider from './StateProvider.js'

export default function App() {

function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Profile/>
    </SafeAreaView>
  );
}

function MainScreen() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Cards />
    </SafeAreaView>
  );
}

function MessagesScreen() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Messages/>
    </SafeAreaView>
  );
}

function ChatScreen() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ChatMessages/>
    </SafeAreaView>
  );
}

function FYPScreen() {

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ForYouPage />
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

const MessageStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen
      name="Chat"
      component={ChatScreen}
      options={({route}) => ({
        title: route.params.userName,
        headerBackTitleVisible: false,
      })}
    />
  </Stack.Navigator>
);

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
        component={MessageStack}
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
    <StateProvider>
      <MyTabs />
    </StateProvider>
  </NavigationContainer>
);
}
