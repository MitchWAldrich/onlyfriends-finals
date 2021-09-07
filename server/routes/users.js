const router = require("express").Router();

module.exports = db => {
  router.get("/users", (_request, response) => {
    db.query(`SELECT * FROM users`).then((results) => {
      const users = results.rows;
      response.json(users);
    });
  });

  router.put("/users", (request, response) => {
    const { gender, address, vaccinated, about_me, id } = request.body
    db.query(`
    UPDATE users
    SET gender = $1, address = $2, vaccinated = $3, about_me = $4
    WHERE id = $5
    `, [gender, address, vaccinated, about_me, id])
    console.log("REQBODY USER:", request.body)
    .then((_results) =>{
      response.status(200)
    })
    .catch((err) => {
      console.log(err.message)
    })
  })
  return router;
}