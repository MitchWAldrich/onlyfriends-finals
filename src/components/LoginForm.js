import React, { useState, useContext, useEffect } from "react";
import { SafeAreaView, TextInput, Button, Alert, StyleSheet } from "react-native";
import { StateContext } from '../../StateProvider.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { save, getData } from '../helpers/persistLogin.js';


export default function LoginForm() {
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { state, setState, auth, setAuth, email, setEmail } = useContext(StateContext)

  const navigation = useNavigation();

  const users = state.users;

  const onSubmit = async (event) => {
    for (const user of users) {
        if (email === user.email) {
            if (password === user.password) {

              save(user, auth);
              getData(state, user, setState, auth, setAuth);
          
            return
          
        }
      }
      
    }
  };
  
  useEffect(() => {
    getData();
  }, [])

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
        onPress={onSubmit} />
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


