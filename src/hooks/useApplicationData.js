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
      axios.get('/api/users'),
      axios.get('/api/interests')
    ])
    .then((all) => {
      const [users, interests] = all;

      setState(prev => ({...prev, users: users.data, interests: interests.data}))
    })}, []);

    return state

}