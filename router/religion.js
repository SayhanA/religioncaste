const { body, query } = require("express-validator");
const {
  getReligion,
  postReligion,
  deleteReligion,
  updatedReligion,
} = require("../controllers/religion");

const routes = require("express").Router();

app.use(
  cors({
    origin: "*", 
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"], 
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

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
