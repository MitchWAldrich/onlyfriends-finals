const router = require("express").Router();
const moment = require('moment');

module.exports = db => {
  router.get("/messages", (request, response) => {
    db.query(`SELECT * FROM messages`).then((results) => {
      const messages = results.rows;
      response.json(messages);
    });
  });

  // router.get for the messages under a match_id 

  router.post("/messages", (request, response) => {
    console.log("REQBODY", request.body)
    const { _id, name } = request.body.user
    const { matchID, receiverID, text, createdAt } = request.body;
    
    const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');

    db.query(`
      INSERT INTO messages (match_id, sender_id, receiver_id, message, sent_at) 
      VALUES ($1, $2, $3, $4, $5);
    `, [matchID, _id, receiverID, text, createdAt])
    .then((results) =>{
      response.status(200)
      const newMessage = data.rows[0];
      newMessage.created_at = timestamp;

      res.send(newMessage);
    })
    .catch((err) => {
      console.log(err.message)
    })
  });

  return router
}