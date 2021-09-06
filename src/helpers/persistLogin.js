import React, { useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StateContext } from '../../StateProvider.js';


export const save = async (user, auth) => {

        try {

          await AsyncStorage.setItem('MyUser', JSON.stringify(user))
          await AsyncStorage.setItem('MyAuth', auth)

        } catch (err) {

          console.log(err) 

        }        
}

export const getData = async (state, user, setState, auth, setAuth) => {

  try {

    const jsonValue = await AsyncStorage.getItem('MyUser')
    auth = await AsyncStorage.getItem('MyAuth')

    if (jsonValue !== null) {

      const parsedUser = JSON.parse(jsonValue)
      setState(({...state, user: parsedUser }))
      setAuth((true))

    }
    
  } catch (e) {
    // error reading value
    console.log(e)
  }
}

export const remove = async (state, auth, setAuth) => {
  try {

    await AsyncStorage.removeItem('MyUser')
    await AsyncStorage.removeItem('MyAuth');

    
  } catch (err) {
    
    alert(err)
  } finally {

    // setState({...state, user: null});
    // setAuth(false);

  }
}
