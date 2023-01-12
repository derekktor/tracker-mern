const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

/**
 * @desc Get user info
 * @route GET /api/users/me
 * @access Private
 * @param {int} req Request object
 * @param {int} res Response object
 */
const getUserInfo = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "information of currently logged in user" });
});

/**
 * @desc Register User
 * @route POST /api/users
 * @access Private
 * @param {int} req Request object
 * @param {int} res Response object
 */
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //   Check if all info is provided
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please provide name, email and password!");
  }

  //   Check if user name exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists!");
  }

  //   Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //   Create user
  const user = await User.create({ name, email, password: hashedPassword });

  if (user) {
    res
      .status(201)
      .json({
        _id: user.id,
        name: user.name,
        email: user.email,
        message: `${user.name} was registered successfully`,
        token: generateJWT(user._id)
      });
  } else {
    res.status(400);
    throw new Error("Invalid data in creating user!");
  }
});

/**
 * @desc Log in User
 * @route POST /api/users/login
 * @access Private
 * @param {int} req Request object
 * @param {int} res Response object
 */
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check if info was provided
  if (!email || !password) {
    res.status(400);
    throw new Error("Please provide email and password!");
  }

  // Check if account exists
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("No account exists on this email!");
  }

  // Check if password is correct
  const matches = await bcrypt.compare(password, user.password);
  if (matches) {
    res
      .status(201)
      .json({
        _id: user.id,
        name: user.name,
        email: user.email,
        message: `${user.name} logged in`,
        token: generateJWT(user._id)
      });
  } else {
    res.status(400);
    throw new Error("Wrong password!");
  }
});

// Generate JWT
const generateJWT = (id) => {
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = {
  getUserInfo,
  registerUser,
  loginUser,
};
