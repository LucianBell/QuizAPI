const express = require("express");
const router = express.Router();
const Question = require("../models/Question");
const QuestionController = require("../controller/QuestionController");
const UserController = require("../controller/UserController");

//Route for getting all questions
router.get("/questions", QuestionController.getAllQuestions);

//Route for getting one question
router.get("/questions/:id", QuestionController.getQuestionByID);

//Route for making one new question
router.post("/questions", QuestionController.createQuestion);

//Route for updating one question
router.put("/questions/:id", QuestionController.updateQuestion);

//Route for deleting one question
router.delete("/questions/:id", QuestionController.deleteQuestion);

router.get("/users", UserController.getAllUsers);
router.get("/users/:id", UserController.getUserByID);
router.post("/users", UserController.createUser);
router.put("/users/:id", UserController.updateUser);
router.delete("/users/:id", UserController.deleteUser);

//Test route
router.get("/", (req, res) => {
  res.send("Hello World");
});
module.exports = router;
