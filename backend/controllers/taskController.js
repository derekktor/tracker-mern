const asyncHandler = require("express-async-handler");
const Task = require("../models/taskModel");
const User = require("../models/userModel");

/**
 * @desc Fetches list of tasks
 * @path GET /api/tasks
 * @access Private
 */
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.status(200).json(tasks);
});

/**
 * @desc Fetches single task
 * @path GET /api/tasks/:id
 * @access Private
 */
const getTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(400);
    throw new Error("Task not found!");
  }

  res.status(200).json(task);
});

/**
 * @desc Create new task
 * @path POST /api/tasks
 * @access Private
 */
const addTask = asyncHandler(async (req, res) => {
  // Check if req has name field
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please provide with a name field!");
  }

  // Create and insert task object
  const task = await Task.create({
    name: req.body.name,
    amount: req.body.amount,
    user: req.user.id,
  });

  res.status(200).json(task);
});

/**
 * @desc Edit task
 * @path PUT /api/tasks/:id
 * @access Private
 */
const editTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  // Check if task exists in DB
  if (!task) {
    res.status(400);
    throw new Error("Task not found!");
  }

  // Check if user exists
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(400);
    throw new Error("User doesn't exist in DB!!!");
  }

  // Check if user is allowed to edit this task
  if (task.user.toString() !== user.id) {
    res.status(400);
    throw new Error(`${user.name} is not allowed to edit this task!!!`);
  }

  // Update the task in DB
  const newTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(newTask);
});

/**
 * @desc Deletes task
 * @path DELETE /api/tasks/:id
 * @access Private
 */
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  await task.remove();

  res.status(200).json(task);
});

module.exports = {
  getTasks,
  getTask,
  addTask,
  editTask,
  deleteTask,
};
