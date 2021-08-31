import React, { useState, useContext } from "react";
import { SafeAreaView, TextInput, Button, Alert, StyleSheet } from "react-native";
import { StateContext } from '../../StateProvider.js';

import { useNavigation } from '@react-navigation/native'


export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { state, login } = useContext(StateContext)

  const navigation = useNavigation();

  const users = state.users;

  const onSubmit = function (event) {
    event.preventDefault();
    
    for (const user of users) {
      if (email === user.email) {
        if (password === user.password) {
          login(user);
          return  
        }
      }
    } 
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={email => setEmail(email)} />
      <TextInput
        secureTextEntry={true}
        placeholder="Password" 
        value={password} 
        onChangeText={password => setPassword(password)}/>
      <Button
        title="Login"
        onPress={(onSubmit) => navigation.navigate('AppStack')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});