const router = require("express").Router();

module.exports = db => {
  router.get("/photos", (request, response) => {
    db.query(`SELECT * FROM photos`).then((results) => {
      const photos = results.rows;
      response.json(photos)
      ;
    });
  });

  router.put("/photos", (request, response) => {
    const { photo1_url, photo2_url, photo3_url, photo4_url, user_id } = request.body
    db.query(`
      UPDATE photos
      SET photo1_url = $1, photo2_url = $2, photo3_url = $3, photo4_url = $4
      WHERE user_id = user_id
    `, [photo1_url, photo2_url, photo3_url, photo4_url])
    .then((results) =>{
      response.status(200)
    })
    .catch((err) => {
      console.log(err.message)
    })
  })
  return router;
}