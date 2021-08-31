const router = require("express").Router();

module.exports = db => {
  router.get("/matches", (request, response) => {
    db.query(`SELECT * FROM matches`).then((results) => {
      const matches = results.rows;
      response.json(matches)
      ;
    });
  });

  return router;
}