import axios from 'axios';


export function matchedUsers(user1, user2, bestFriend) {
      
      return axios.post('http://localhost:8001/api/matches', {
        user1_id: user1.id,
        user2_id: user2.id,
        best_friend: bestFriend
      })
        .then(() => {
          console.log('I hope you match!')
        })
        .catch((e) => {
          throw e
        })
  }



  //     user1Matches.push(potentialMatch)
  //   }
  // }
  
  // const user2Matches = [];
  // for (const potentialMatch of state.potential_matches) {
  //   if (potentialMatch.user1_id === user2.id) {
  //     user2Matches.push(potentialMatch)
  //   }
  // }
  
  // const match = [];
  // for (const match1 of user1Matches) {
    
  //   for (const match2 of user2Matches) {
  //     if (match1.user1_id === match2.user2_id && match2.user1_id === match1.user2_id) {
  //       match.push(match1, match2)
  //     }
  //   }
  // }
  
  // if (match.length === 0) {
  //   return null;
  // } else {
    
  //   return match
  // }
