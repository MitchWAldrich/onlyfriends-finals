import React, { useState, useEffect, createContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function StateProvider(props) {

  const [state, setState] = useState({
    user: {},
    users: {},
    interests: {},
    photos: {},
    potentialMatches: {},
    matches: {},
    messages: {},
  })
  const [loading, setLoading] = useState(true);
  const [ auth, setAuth ] = useState(false);
  const [ email, setEmail ] = useState('')

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/users'),
      axios.get('http://localhost:8001/api/interests'),
      axios.get('http://localhost:8001/api/photos'),
      axios.get('http://localhost:8001/api/potential-matches'),
      axios.get('http://localhost:8001/api/matches'),
      axios.get('http://localhost:8001/api/messages'),
    ])
      .then((all) => {
        const [users, interests, photos, potentialMatches, matches, messages] = all;

        setState(prev => ({ ...prev, users: users.data, interests: interests.data, photos: photos.data, messages: messages.data, matches: matches.data }))
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

  const login = function(user) {
    setState(prev => ({...prev, user}));
    setAuth(true);
  }

  const logout = function(user) {
    setState({...state, user: {}});
    setAuth(false);
  }

  const providerData = {state, setState, loading, login, logout, auth, setAuth, email, setEmail};

  return (
    <StateContext.Provider value={providerData}>
      {props.children}
    </StateContext.Provider>
  );
};

export const StateContext = createContext();