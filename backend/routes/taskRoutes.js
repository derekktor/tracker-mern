const express = require("express");
const router = express.Router();

const {
  getTasks,
  getTask,
  addTask,
  editTask,
  deleteTask,
} = require("../controllers/taskController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getTasks).post(protect, addTask);
router
  .route("/:id")
  .get(protect, getTask)
  .put(protect, editTask)
  .delete(protect, deleteTask);

module.exports = router;
