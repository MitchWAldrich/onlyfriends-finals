import axios from "axios";

export default function potentialMatches(userId, friendId, bestFriend) {
  
  return axios.post('http://localhost:8001/api/potential-matches', {
    user1_id: userId,
    user2_id: friendId,
    best_friend: bestFriend
  })
    .then(() => {
      console.log('I hope you match!')
    })
    .catch((e) => {
      throw e
    })


}