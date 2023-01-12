const express = require("express");
const router = express.Router();

const {
  getTasks,
  getTask,
  addTask,
  editTask,
  deleteTask
} = require("../controllers/taskController");

router.route("/").get(getTasks).post(addTask);
router.route("/:id").get(getTask).put(editTask).delete(deleteTask);

module.exports = router;