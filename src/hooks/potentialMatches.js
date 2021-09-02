import axios from "axios";

export default function potentialMatches(userId, friendId) {
  
  return axios.post('http://localhost:8001/api/potential-matches', {
    user1_id: userId,
    user2_id: friendId,
    best_friend: false
  })
    .then(() => {
      console.log('I hope you match!')
    })
    .catch((e) => {
      throw e
    })


}