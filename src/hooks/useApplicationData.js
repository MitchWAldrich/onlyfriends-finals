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

    return { state }

    return state

}