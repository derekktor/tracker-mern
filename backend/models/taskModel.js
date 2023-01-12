const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Task", TaskSchema);