import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import LoginForm from './src/components/LoginForm';


export default function Login() {
  
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
