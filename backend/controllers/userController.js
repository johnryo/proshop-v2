import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import asyncHandler from '../middleware/asyncHandler.js';

// POST /api/users/auth - authenticate & get token
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    // Set JWT as HTTP-only cookie
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error('Invalid credentials');
  }
});

// POST /api/users - register user
const registerUser = asyncHandler(async (req, res) => {
  res.status(201).send('register user');
});

// POST /api/users/logout - logout user & clear cookie
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Logged out successfully' });
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
