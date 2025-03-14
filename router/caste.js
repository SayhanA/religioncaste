const { body, query } = require("express-validator");
const {
  getCasts,
  postCaste,
  deleteCaste,
  updateCaste,
  getCastesByReligion,
} = require("../controllers/caste");
const religion = require("../models/religion");

const routes = require("express").Router();

routes.get("/", getCasts);

routes.post(
  "/",
  [
    body("name", "Name is required.").notEmpty().trim(),
    body("description", "Description is required.").notEmpty().trim(),
    body("religionId", "Religion id is required.")
      .notEmpty()
      .isMongoId()
      .withMessage("Invalid MongoDB ID format.")
      .custom((value, { req }) => {
        return religion.findOne({ _id: value }).then((user) => {
          if (!user) {
            return Promise.reject("Religion id is not valid.");
          }
        });
      }),
  ],
  postCaste
);

routes.delete(
  "/",
  [
    query("id")
      .notEmpty()
      .withMessage("ID is required.")
      .isMongoId()
      .withMessage("Invalid MongoDB ID format."),
  ],
  deleteCaste
);

routes.patch(
  "/",
  [
    query("id", "Id is required.")
      .isMongoId()
      .withMessage("Invalid MongoDB ID format."),
  ],
  updateCaste
);

routes.get(
  "/getCastesByReligion",
  [
    query("religionId")
      .notEmpty()
      .withMessage("religionId is required")
      .isMongoId()
      .withMessage("Invalid religionId format"),
  ],
  getCastesByReligion
);

module.exports = routes;
