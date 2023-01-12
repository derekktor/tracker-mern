const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5001;

const app = express();

app.get("/api/habits", (req, res) => {
    res.json({
        name: "habitOne"
    });
})

app.listen(PORT, () => console.log(`Server running on ${PORT}`));