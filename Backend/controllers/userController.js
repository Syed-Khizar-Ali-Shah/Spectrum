// controllers/userController.js
const User = require('../models/User');

// Controller function to get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get users' });
  }
};

// Controller function to get a single user by ID
const getUserById = async (req, res) => {
     const user = await User.findById(req.param.id)
};

// Controller function to create a new user
const createUser = async (req, res) => {

  try {
    const newUser = new User(req.body);
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create user' });
  }
};

// Controller function to update a user by ID
const updateUser = async (req, res) => {
  try {

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new : true,
      runValidators: true
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update user' });
  }
};

// Controller function to delete a user by ID
const deleteUser = async (req, res) => {
  try {
    await req.user.remove();
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete user' });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
