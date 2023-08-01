const express = require("express");
const Question = require("../models/Question");

const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json(`Error: ${error}`);
  }
};

const getQuestionByID = async (req, res) => {
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
};

const createQuestion = async (req, res) => {
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
};

const updateQuestion = async (req, res) => {
  try {
    const id = req.params.id;
    const { description, alternatives } = req.body;

    const selectedQuestion = await Question.findById(id);

    if (!selectedQuestion) {
      return res
        .status(404)
        .json("Error: question not found. Try a different id.");
    } else {
      selectedQuestion.description = description;
      selectedQuestion.alternatives = alternatives;
      await selectedQuestion.save();
      return res
        .status(200)
        .json({ selectedQuestion, message: "Question updated" });
    }
  } catch (error) {
    return res.status(500).json(`Error: ${error}`);
  }
};

const deleteQuestion = async (req, res) => {
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
};

module.exports = {
  getAllQuestions,
  getQuestionByID,
  createQuestion,
  updateQuestion,
  deleteQuestion,
};
