import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import StateProvider, { StateContext } from './StateProvider';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from './src/components/LoginForm';
import AppStack from './src/navigation/AppStack';

export default function Login() {
  const {auth} = useContext(StateContext);

  if (!auth) {

  return (
    
      <View style={styles.container}>
        <Text> onlyFriends </Text>
        <LoginForm />
        <Text>
          Not a friend yet? 
          <Button 
          title="Sign up"
          onPress={() => Alert.alert('Reroute to sign up')} />
        </Text>
      </View>
    
  );
  }

  return (
    <StateProvider>
      <AppStack />
    </StateProvider>  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
