const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUserInfo,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router.get("/me", protect, getUserInfo)

module.exports = router;
