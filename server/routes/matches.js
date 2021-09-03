const router = require("express").Router();

module.exports = db => {
  router.get("/matches", (request, response) => {
    db.query(`SELECT * FROM matches`).then((results) => {
      const matches = results.rows;
      response.json(matches)
      ;
    });
  });

  router.post("/matches", (request, response) => {
    const { user1_id, user2_id, best_friend } = request.body;
    console.log('responseserver', request.body)
    db.query(`
      INSERT INTO matches (user1_id, user2_id, best_friend) 
      VALUES ($1, $2, $3);
    `, [user1_id, user2_id, best_friend])
    .then((results) =>{
      response.status(200)
    })
    .catch((err) => {
      console.log(err.message)
    })
  });

  return router;
}