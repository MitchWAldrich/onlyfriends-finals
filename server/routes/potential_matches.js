const router = require("express").Router();

module.exports = db => {
  router.get("/potential-matches", (request, response) => {
    db.query(`SELECT * FROM potential_matches`).then((results) => {
      const potentialMatches = results.rows;
      response.json(potentialMatches);
    });
  });

  return router;
}