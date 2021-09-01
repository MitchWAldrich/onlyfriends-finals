import React, { useState, useContext, useEffect } from "react";
import { SafeAreaView, TextInput, Button, Alert, StyleSheet } from "react-native";
import { StateContext } from '../../StateProvider.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'


export default function LoginForm() {
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState();
  
  const { state, setState, auth, setAuth, email, setEmail } = useContext(StateContext)

  const navigation = useNavigation();

  const users = state.users;

  const onSubmit = async (event) => {
    // event.preventDefault();

    for (const user of users) {
      if (email === user.email) {
        if (password === user.password) {
          try {
            // setState(prev => ({...prev, user}));
            // const jsonValue = JSON.stringify(user)
            await AsyncStorage.setItem('MyEmail', email)
          } catch (err) {
            console.log(err) 
          }
          
          return
          
        }
      }
      
    }
  };

   const getData = async () => {
            try {
              console.log('email', email)
              // const jsonValue = await AsyncStorage.getItem('user')
              const email = await AsyncStorage.getItem('MyEmail')
              if (email !== null) {
                // parsedValue = JSON.parse(user)
                setEmail(( email ))
                setAuth((true))
                console.log('auth2', auth)
              }
            } catch (e) {
              console.log(e)
              // error reading value
            }
          }

    const remove = async () => {
      try {
        await AsyncStorage.removeItem('MyEmail')

      } catch (err) {
        
        alert(err)

      } finally {
        setEmail("")
      }
    }
  
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
        {/* // onPress={() => navigation.navigate('MyTabs')} /> */}

    {/* onPress={() => navigation.navigate('Chat', {userName: item.userName})} */}
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


