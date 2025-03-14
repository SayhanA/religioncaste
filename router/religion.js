const {
  getReligion,
  postReligion,
  deleteReligion,
  updatedReligion,
} = require("../controllers/religion");

const routes = require("express").Router();

routes.get("/", getReligion);

routes.post("/", postReligion);

routes.delete("/", deleteReligion);

routes.patch("/", updatedReligion);

module.exports = routes;
