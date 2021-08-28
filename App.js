import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navigation from './src/shared/Navigation.js';
import Name from './src/components/MatchCards/Name.js';
import ForYouPage from './src/components/ForYouPage.js'

export default function App() {
  return (
    <View>
      <Navigation/>
      <ForYouPage/>
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
