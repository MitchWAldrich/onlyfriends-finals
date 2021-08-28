const router = require("express").Router();

module.exports = db => {
  router.get("/photos", (request, response) => {
    db.query(`SELECT * FROM photos`).then((results) => {
      const photos = results.rows;
      response.json(
        photos)
        // (
        //   (previous, current) => ({ ...previous, [current.id]: current }),
        //   {}
        // ))
      ;
    });
  });

  return router;
}