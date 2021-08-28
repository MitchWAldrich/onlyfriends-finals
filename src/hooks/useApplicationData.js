import axios from "axios";
import { useState, useEffect } from "react";

export default function useApplicationData() {
  const [state, setState] = useState({
    user: {},
    users: []
  })

  useEffect(() => {
    Promise.all([
      axios.get('api/users')
    ])
    .then((all) => {
      const [users] = all;
      setState(prev => ({...prev, users: users.data}))
    })}, []);

}