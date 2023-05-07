import User from '../models/User.js';
import asyncHandler from '../middleware/asyncHandler.js';

// POST /api/users/login - authenticate & get token
const authUser = asyncHandler(async (req, res) => {
  res.status(200).send('auth user');
});

// POST /api/users - register user
const registerUser = asyncHandler(async (req, res) => {
  res.status(201).send('register user');
});

// POST /api/users/logout - logout user & clear cookie
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).send('logout user');
});

// GET /api/users/profile - get user profile
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).send('get user profile');
});

// PUT /api/users/profile - update user profile
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).send('update user profile');
});

// GET /api/users - get all users - ADMIN
const getUsers = asyncHandler(async (req, res) => {
  res.status(200).send('get users');
});

// GET /api/users/:id - get user by ID - ADMIN
const getUserById = asyncHandler(async (req, res) => {
  res.status(200).send('get user by id');
});

// DELETE /api/users/:id - delete user - ADMIN
const deleteUser = asyncHandler(async (req, res) => {
  res.status(200).send('delete user');
});

// PUT /api/users/:id - update user - ADMIN
const updateUser = asyncHandler(async (req, res) => {
  res.status(200).send('update user');
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
};
