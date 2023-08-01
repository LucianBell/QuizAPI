const express = require("express");
const User = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(`Error: ${error}`);
  }
};

const getUserByID = async (req, res) => {
  try {
    const id = req.params.id;
    const selectedUser = await User.findById(id);

    if (!selectedUser) {
      return res.status(404).json("Error: user not found. Try a different id.");
    } else {
      return res.status(200).json(selectedUser);
    }
  } catch (error) {
    return res.status(500).json(`Error: ${error}`);
  }
};

const createUser = async (req, res) => {
  try {
    const { username } = req.body;
    const { points } = req.body;

    const user = await User.create({
      username,
      points,
    });

    return res.status(200).json(`Sucessfully created user ${user.username}`);
  } catch (error) {
    return res.status(500).json(`Error: ${error}`);
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { username, points } = req.body;

    const selectedUser = await User.findById(id);

    if (!selectedUser) {
      return res.status(404).json("Error: user not found. Try a different id.");
    } else {
      selectedUser.username = username;
      selectedUser.points = points;
      await selectedUser.save();
      return res.status(200).json({ selectedUser, message: "User updated" });
    }
  } catch (error) {
    return res.status(500).json(`Error: ${error}`);
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const selectedUser = await User.findById(id);

    if (!selectedUser) {
      return res.status(404).json("Error: user not found. Try a different id.");
    } else {
      const deletedUser = await User.findByIdAndDelete(id);
      return res.status(200).json({ deletedUser, message: "User deleted" });
    }
  } catch (error) {
    return res.status(500).json(`Error: ${error}`);
  }
};

module.exports = {
  getAllUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
};
