const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

//Route for getting all questions
router.get("/questions", async (req, res) => {
  try {
    const questions = await Question.find();
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json(`Error: ${error}`);
  }
});

//Route for getting one question
router.get("/questions/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const selectedQuestion = await Question.findById(id);

    return res.status(200).json(selectedQuestion);
  } catch (error) {
    return res.status(500).json(`Error: ${error}`);
  }
});

//Route for making one new question
router.post("/questions", async (req, res) => {
  try {
    const { description } = req.body;
    const { alternatives } = req.body;

    const question = await Question.create({
      description,
      alternatives,
    });

    return res
      .status(200)
      .json(`Sucessfully created question ${question.description}`);
  } catch (error) {
    return res.status(500).json(`Error: ${error}`);
  }
});

//Route for updating one question
router.put("/questions/:id", (req, res) => {});

//Route for deleting one question
router.delete("/questions/:id", (req, res) => {});

//Test route
router.get("/", (req, res) => {
  res.send("Hello World");
});
module.exports = router;
