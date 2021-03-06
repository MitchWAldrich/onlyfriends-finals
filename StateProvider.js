import React, { useState, useEffect, createContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import axios from 'axios';
import io from "socket.io-client";

export default function StateProvider(props) {

  const [state, setState] = useState({
    user: {},
    users: {},
    interests: {},
    photos: {},
    potentialMatches: {},
    matches: {},
    messages: [],
    hangouts: {}
  })
  const [loading, setLoading] = useState(true);
  const [ auth, setAuth ] = useState(false);
  const [ email, setEmail ] = useState('');
  const [socket, setSocket] = useState(undefined);
  const [matches, setMatches] = useState(state.matches);

  useEffect(() => {


    Promise.all([
      axios.get('http://localhost:8001/api/users'),
      axios.get('http://localhost:8001/api/interests'),
      axios.get('http://localhost:8001/api/photos'),
      axios.get('http://localhost:8001/api/potential-matches'),
      axios.get('http://localhost:8001/api/matches'),
      axios.get('http://localhost:8001/api/messages'),
      axios.get('http://localhost:8001/api/hangouts'),
    ])
      .then((all) => {
        const [users, interests, photos, potentialMatches, matches, messages, hangouts] = all;

        setState(prev => ({ ...prev, users: users.data, interests: interests.data, photos: photos.data, messages: messages.data, potentialMatches: potentialMatches.data, matches: matches.data, hangouts: hangouts.data}))
        setLoading(false)

      })
      .catch(err => {
        console.log(err.message)
      })
  }, [])


  useEffect(() => {
    console.log("Initializing")
    if (socket) {
      console.log("Connected!")
      socket.emit("initial", {user: state.user})

      // socket.on("SEND_MESSAGE", msg => {
      //   console.log("Message received!")
      //   setMessages(prev => ([...prev, msg]))
      // })
    }
  }, [socket]);

  useEffect(() => {
    if (auth) {
      const con = io("http://127.0.0.1:3000", {transports: ['websocket']});
      setSocket(con)
    }
  }, [auth])

  const sendMessage = (msg) => {
    socket.emit("SEND_MESSAGE", msg)
  }

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

  const providerData = {state, setState, loading, login, logout, auth, setAuth, email, setEmail, sendMessage, socket, matches, setMatches};

  return (
    <StateContext.Provider value={providerData}>
      {props.children}
    </StateContext.Provider>
  );
};

export const StateContext = createContext();

// export function matchedUsers(user1, user2, bestFriend) {
      
//   return axios.post('http://localhost:8001/api/matches', {
//     user1_id: user1.id,
//     user2_id: user2.id,
//     best_friend: bestFriend
//   })
//     .then(() => {
//       console.log('I hope you match!')
//       setState({...state, matches: [...state.matches, {id: state.matches.length + 1, user1_id: user1.id, user2_id: user2.id, best_friend: bestFriend}] })
//     })
//     .catch((e) => {
//       throw e
//     })
// }
