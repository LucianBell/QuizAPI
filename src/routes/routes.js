const express = require("express");
const router = express.Router();

//Route for getting all questions
router.get("/questions", (req, res) => {});

//Route for getting one question
router.get("/questions/:id", (req, res) => {});

//Route for making one new question
router.post("/questions", (req, res) => {});

//Route for updating one question
router.put("/questions/:id", (req, res) => {});

//Route for deleting one question
router.delete("/questions/:id", (req, res) => {});

//Test route
router.get("/", (req, res) => {
  res.send("Hello World");
});
module.exports = router;
