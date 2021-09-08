import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function showMatchedUsers() {
  const [newState, setNewState] = useState({
    user: {},
    users: null,
    interests: {},
    photos: {},
    potentialMatches: {},
    matches: {},
    messages: [],
    hangouts: {}
  })
      
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
        setNewState(prev => ({ ...prev, users: users.data, interests: interests.data, photos: photos.data, messages: messages.data, potentialMatches: potentialMatches.data, matches: matches.data, hangouts: hangouts.data}))
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [])
  
  return { newState, setNewState }

}
