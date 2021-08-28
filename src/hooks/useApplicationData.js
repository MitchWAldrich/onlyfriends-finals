import axios from "axios";
import { useState, useEffect } from "react";

export default function useApplicationData() {
  const [state, setState] = useState({
    user: {},
    users: {},
    interests: {}
  })

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/users'),
      axios.get('http://localhost:8001/api/interests')
    ])
    .then((all) => {
      const [users, interests] = all;

      setState(prev => ({...prev, users: users.data, interests: interests.data}))
    })
    .catch(err => {
      console.log(err.message)
    })}, [])

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


    return { state }

    return state

}