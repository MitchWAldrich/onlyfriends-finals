const router = require("express").Router();

module.exports = db => {
  router.get("/users", (request, response) => {
    db.query(`SELECT * FROM users`).then((results) => {
      const users = results.rows;
      response.json(
        users)
        // (
        //   (previous, current) => ({ ...previous, [current.id]: current }),
        //   {}
        // ))
      ;
    });
  });

  return router;
}