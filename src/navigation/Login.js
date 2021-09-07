import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import LoginForm from '../../src/components/LoginForm';


export default function Login() {
  const navigation = useNavigation(); 

  return (
      <View style={styles.container}>
        <Text style={{marginTop: 50, fontSize: 40, fontWeight: 'bold', color: '#004040'}}> onlyFriends </Text>
        <LoginForm />
        <Text style={{marginBottom: 100, fontSize: 15}} onPress={() => navigation.navigate('Signup')}>
          Not a friend yet? Sign up.
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
