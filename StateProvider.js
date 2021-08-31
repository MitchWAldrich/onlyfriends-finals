import React, { useState, useEffect, createContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function StateProvider(props) {

  const [state, setState] = useState({
    user: {},
    users: {},
    interests: {},
    photos: {}
  })
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/users'),
      axios.get('http://localhost:8001/api/interests'),
      axios.get('http://localhost:8001/api/photos'),
      axios.get('http://localhost:8001/api/messages')
    ])
      .then((all) => {
        const [users, interests, photos] = all;

        setState(prev => ({ ...prev, users: users.data, interests: interests.data, photos: photos.data }))
        setLoading(false)
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [])

  if (loading) {
      return (
        <View >
          <ActivityIndicator 
            size="large"
            loading={loading}
          />
        </View>
  )}

  const providerData = {state, loading};

  return (
    <StateContext.Provider value={providerData}>
      {props.children}
    </StateContext.Provider>
  );
};

export const StateContext = createContext();