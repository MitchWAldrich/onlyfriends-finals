const router = require("express").Router();

module.exports = db => {
  router.get("/interests", (request, response) => {
    db.query(`SELECT * FROM interests`).then((results) => {
      const interests = results.rows;
      response.json(interests)
      ;
    });
  });

  return router;
}