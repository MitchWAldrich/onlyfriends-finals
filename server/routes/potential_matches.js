const router = require("express").Router();

module.exports = db => {
  router.get("/potential-matches", (request, response) => {
    db.query(`SELECT * FROM potential_matches`).then((results) => {
      const potentialMatches = results.rows;
      response.json(potentialMatches);
    });
  });

  router.post("/potential-matches", (request, response) => {
    const { user1_id, user2_id, best_friend } = request.body;
    console.log('responseserver', request.body)
    db.query(`
      INSERT INTO potential_matches (user1_id, user2_id, best_friend) 
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