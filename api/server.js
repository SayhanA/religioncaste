const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const { connectDB } = require("../config/db");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/religions", require("../router/religion"));
app.use("/casts", require("../router/caste"));

app.use((req, res) => {
  // res.status(404).json({ message: "Route not found" });
  res.send("Hello world!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ message: "Internal Server Error", error: err.message });
});

module.exports = app;
// app.listen(port, () => {console.log(`You server is running on : http://localhost:${port}`);})
