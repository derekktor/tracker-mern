const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "List of habits",
  });
});

router.post("/", (req, res) => {
  res.status(200).json({
    message: "Add habit",
  });
});

router.put("/:id", (req, res) => {
  res.status(200).json({
    message: `Edit habit ${req.params.id}`,
  });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({
    message: `Delete habit ${req.params.id}`,
  });
});

module.exports = router;
