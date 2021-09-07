const router = require("express").Router();

module.exports = db => {
  router.get("/interests", (request, response) => {
    db.query(`SELECT * FROM interests`).then((results) => {
      const interests = results.rows;
      response.json(interests)
      ;
    });
  });

  router.put("/interests", (request, response) => {
    const { reading, tv_movies, fitness, hiking, arts_culture, music, gaming, travel, studying, sports, eating_out, going_out, user_id } = request.body
    db.query(`
      UPDATE interests
      SET reading = $1, tv_movies = $2, fitness = $3, hiking = $4, arts_culture = $5, music = $6, gaming = $7, travel = $8, studying = $9, sports = $10, eating_out = $11, going_out = $12
      WHERE user_id = $13
    `, [reading, tv_movies, fitness, hiking, arts_culture, music, gaming, travel, studying, sports, eating_out, going_out, user_id])
    console.log("REQBODY USER INTERESTS:", request.body)
    .then((_results) =>{
      response.status(200)
    })
    .catch((err) => {
      console.log(err.message)
    })
  })
  return router;
}