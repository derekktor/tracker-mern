const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name for the task!!!"],
    },
    amount: {
      type: Number,
      required: [
        true,
        "Please provide a relevant measurable amount for the task!!!",
      ],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", TaskSchema);
