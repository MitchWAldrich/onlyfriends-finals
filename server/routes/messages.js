const router = require("express").Router();

module.exports = db => {
  router.get("/messages", (request, response) => {
    db.query(`SELECT * FROM messages`).then((results) => {
      const messages = results.rows;
      response.json(messages);
    });
  });

  // router.get for the messages under a match_id 

  // router.post("/messages", (request, response) => {
  //   const { matchID, senderID, receiverID, message, sentAt } = request.body;
    
  //   db.query(`
  //     INSERT INTO messages (match_id, sender_id, receiver_id, message, sent_at) 
  //     VALUES ($1, $2, $3, $4, $5);
  //   `, [matchID, senderID, receiverID, message, sentAt])
  //   .then((results) =>{
  //     response.status(200)
  //   })
  //   .catch((err) => {
  //     console.log(err.message)
  //   })
  // });

  return router
}