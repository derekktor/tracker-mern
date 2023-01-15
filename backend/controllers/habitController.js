const asyncHandler = require("express-async-handler");
const Habit = require("../models/habitModel");
const User = require("../models/userModel");

/**
 * @desc Get habits
 * @route GET /api/habits
 * @access Private
 * @param {int} req Request object
 * @param {int} res Response object
 */
const getHabits = asyncHandler(async (req, res) => {
  const habits = await Habit.find({ user: req.user.id });

  res.status(200).json(habits);
});

/**
 * @desc Get habit
 * @route GET /api/habits/:id
 * @access Private
 * @param {int} req Request object
 * @param {int} res Response object
 */
const getHabit = asyncHandler(async (req, res) => {
  const habit = await Habit.findById(req.params.id);

  res.status(200).json(habit);
});

/**
 * @desc Add habit
 * @route POST /api/habits
 * @access Private
 * @param {int} req Request object
 * @param {int} res Response object
 */
const addHabit = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please provide name field!");
  }

  const habit = await Habit.create({
    name: req.body.name,
    amount: req.body.amount,
    user: req.user.id,
  });

  res.status(200).json(habit);
});

/**
 * @desc Edit habit
 * @route PUT /api/habits/:id
 * @access Private
 * @param {int} req Request object
 * @param {int} res Response object
 */
const editHabit = asyncHandler(async (req, res) => {
  const existingHabit = await Habit.findById(req.params.id);

  //   Check if habit exists
  if (!existingHabit) {
    res.status(400);
    throw new Error("No such habit exists!");
  }

  //   Check if user exists
  if (!req.user) {
    res.status(401);
    throw new Error(`User doesn't exist!`);
  }

  // Check if user is allowed for the given habit
  if (existingHabit.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error(`${user.name} is not authorized for this habit!`);
  }

  const updatedHabit = await Habit.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedHabit);
});

/**
 * @desc Delete habit
 * @route DELETE /api/habits/:id
 * @access Private
 * @param {int} req Request object
 * @param {int} res Response object
 */
const deleteHabit = asyncHandler(async (req, res) => {
  const habit = await Habit.findById(req.params.id);

  //   Check if habit exists
  if (!habit) {
    res.status(400);
    throw new Error("No such habit exists!");
  }

  //   Check if user exists
  if (!req.user) {
    res.status(401);
    throw new Error(`User doesn't exist!`);
  }

  // Check if user is allowed for the given habit
  if (habit.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error(`${user.name} is not authorized for this habit!`);
  }

  await habit.remove();

  res.status(200).json({
    message: `Delete habit ${req.params.id}`,
  });
});

module.exports = {
  getHabits,
  getHabit,
  addHabit,
  editHabit,
  deleteHabit,
};
