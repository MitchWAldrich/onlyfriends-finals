import { StatusBar } from 'expo-status-bar';

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, ActivityIndicator } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import 'react-native-gesture-handler';

import Name from './src/components/MatchCards/Name.js';
import ForYouPage from './src/components/ForYouPage.js';
import Profile from './src/components/Profile.js';
import ProfileEdit from './src/components/ProfileEdit';
import Messages from './src/components/Messages.js';
import ChatMessages from './src/components/ChatMessages.js';
import Cards from './src/components/MatchCards/index.js';
import StateProvider from './StateProvider.js'
import Login from './Login.js';
import AppStack from './src/navigation/AppStack.js';

export default function App() {
  
  return (
    <NavigationContainer>
      <StateProvider>
        <Login />
      </StateProvider>
    </NavigationContainer>
  );
}

