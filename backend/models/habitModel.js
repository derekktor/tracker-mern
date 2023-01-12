const mongoose = require("mongoose");

const habitSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add name for the habit!"]
    },
    amount: {
        type: Number,
        required: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Habit", habitSchema);