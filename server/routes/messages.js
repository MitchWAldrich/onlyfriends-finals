const router = require("express").Router();

module.exports = db => {
  router.get("/messages", (request, response) => {
    db.query(`SELECT * FROM messages`).then((results) => {
      const messages = results.rows;
      response.json(messages);
    });
  });
  return router
}