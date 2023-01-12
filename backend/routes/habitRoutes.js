const express = require("express");
const router = express.Router();

const {
  getHabits,
  getHabit,
  addHabit,
  editHabit,
  deleteHabit,
} = require("../controllers/habitController");

router.route("/").get(getHabits).post(addHabit);
router.route("/:id").get(getHabit).put(editHabit).delete(deleteHabit);

module.exports = router;
