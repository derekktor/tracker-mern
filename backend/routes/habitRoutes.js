const express = require("express");
const router = express.Router();

const {
  getHabits,
  getHabit,
  addHabit,
  editHabit,
  deleteHabit,
} = require("../controllers/habitController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getHabits).post(protect, addHabit);
router.route("/:id").get(protect, getHabit).put(protect, editHabit).delete(protect, deleteHabit);

module.exports = router;
