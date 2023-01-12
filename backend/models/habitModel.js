const mongoose = require("mongoose");

const habitSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add name for the habit!"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Habit", habitSchema);