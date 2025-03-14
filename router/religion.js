const { body, query } = require("express-validator");
const {
  getReligion,
  postReligion,
  deleteReligion,
  updatedReligion,
} = require("../controllers/religion");

const routes = require("express").Router();

routes.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});


routes.get("/", getReligion);

routes.post(
  "/",
  [
    body("name").notEmpty().withMessage("Name is required").trim(),
    body("description")
      .notEmpty()
      .withMessage("Description is required")
      .trim(),
  ],
  postReligion
);

routes.delete(
  "/",
  [
    query("id")
      .notEmpty()
      .withMessage("Religion Id is required")
      .isMongoId()
      .withMessage("Id is not valid."),
  ],
  deleteReligion
);

routes.patch(
  "/",
  [
    query("id")
      .notEmpty()
      .withMessage("Religion Id is required")
      .isMongoId()
      .withMessage("Is not a valid Id"),
  ],
  updatedReligion
);

module.exports = routes;
