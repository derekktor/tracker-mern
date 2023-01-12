const asyncHandler = require("express-async-handler");
const Task = require("../models/taskModel");

/**
 * @desc Fetches list of tasks
 * @path GET /api/tasks
 * @access Private
 */
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
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
 * @desc Creates new task
 * @path POST /api/tasks
 * @access Private
 */
const addTask = asyncHandler(async (req, res) => {
  const task = await Task.create(req.body);

  res.status(200).json(task);
});

/**
 * @desc Edit task
 * @path PUT /api/tasks/:id
 * @access Private
 */
const editTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(400);
    throw new Error("Task not found!");
  }

  const newTask = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});

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
  deleteTask
};
