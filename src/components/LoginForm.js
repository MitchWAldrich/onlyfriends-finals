import React, { useState, useContext, useEffect } from "react";
import { SafeAreaView, TextInput, Button, Alert, StyleSheet, Pressable, Text } from "react-native";
import { StateContext } from '../../StateProvider.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { save, getData } from '../helpers/persistLogin.js';


export default function LoginForm() {
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { state, setState, setAuth, email, setEmail } = useContext(StateContext)

  const navigation = useNavigation();

  const users = state.users;

  const onSubmit = async (event) => {
    for (const user of users) {
        if (email === user.email) {
          if (password === user.password) {
            const auth = true;
            save(user, auth);
            getData(state, user, setState, auth, setAuth);
          
            return
          }
        }
      
    }
  };
  
  // useEffect(() => {
  //   getData();
  // }, [])

  return (
    <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.formStyling}
          placeholder="Email"
          value={email}
          onChangeText={email => setEmail(email)} />
        <TextInput
          style={styles.formStyling}
          secureTextEntry={true}
          placeholder="Password" 
          value={password} 
          onChangeText={password => setPassword(password)}/>
        <Pressable 
          title="Login" 
          onPress={onSubmit}
          style={styles.stylesButton}
          >
            <Text style={styles.stylesButtonText}>Login</Text>
          </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  formStyling: {
    height: 40,
    margin: 25,
    borderBottomWidth: 1,
    borderColor: '#545454',
    padding: 10,
    width: 200,
    fontSize: 15
  },
  stylesButton: { 
    alignSelf: "center",
    marginTop: 2,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#003333',
    borderRadius: 90,
    width: 150,
    height: 40,
    color: '#FFFFFF'
  },
  stylesButtonText: {
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 15,
    color: '#FFFFFF'
  },
});


