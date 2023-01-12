const express = require("express");
const router = express.Router();

const {
  getHabits,
  getHabit,
  addHabit,
  editHabit,
  deleteHabit,
} = require("../controllers/habitController");

router.get("/:id", getHabit);
router.get("/", getHabits);
router.post("/", addHabit);
router.put("/:id", editHabit);
router.delete("/:id", deleteHabit);

module.exports = router;
