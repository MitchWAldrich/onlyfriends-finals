const router = require("express").Router();

module.exports = db => {
  router.get("/hangouts", (request, response) => {
    db.query(`SELECT * FROM hangouts`).then((results) => {
      const interests = results.rows;
      response.json(interests)
      ;
    });
  });
  return router;
}