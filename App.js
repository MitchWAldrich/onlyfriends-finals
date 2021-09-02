import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler';

import StateProvider from './StateProvider.js';
import AppStack from './src/navigation/AppStack';

export default function App() {

  return (
    <NavigationContainer>
      <StateProvider>
        <AppStack/>
      </StateProvider>
    </NavigationContainer>
  );
}