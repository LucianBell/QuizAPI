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

    if (!selectedQuestion) {
      return res
        .status(404)
        .json("Error: question not found. Try a different id.");
    } else {
      return res.status(200).json(selectedQuestion);
    }
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
router.delete("/questions/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const selectedQuestion = await Question.findById(id);

    if (!selectedQuestion) {
      return res
        .status(404)
        .json("Error: question not found. Try a different id.");
    } else {
      const deletedQuestion = await Question.findByIdAndDelete(id);
      return res
        .status(200)
        .json({ deletedQuestion, message: "Question deleted" });
    }
  } catch (error) {
    return res.status(500).json(`Error: ${error}`);
  }
});

//Test route
router.get("/", (req, res) => {
  res.send("Hello World");
});
module.exports = router;
