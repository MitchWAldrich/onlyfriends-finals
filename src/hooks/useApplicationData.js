import react from 'react';
import axios from "axios";
import { ActivityIndicator } from 'react-native';
import { useState, useEffect } from "react";

export default function useApplicationData() {
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
      axios.get('http://localhost:8001/api/photos')
    ])
    .then((all) => {
      const [users, interests, photos] = all;

      setState(prev => ({...prev, users: users.data, interests: interests.data, photos: photos.data}))
      setLoading(false)
    })
    .catch(err => {
      console.log(err.message)
    })}, [])

    // if (loading) {
    //   return (
    //     <View style={styles.container}>
    //       <ActivityIndicator 
    //         size="large"
    //         loading={loading}
    //       />
    //     </View>
    //   )
    // }

    const authenticate = (email, password) => {
      const users = state.users;

      for (const user of users) {
        if (email === user.email && password === user.password) {
          setState({...state, user: user})
          return user;
        }
      }
      return null;
    }


    return { state, loading }

    return state

}