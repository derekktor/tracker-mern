const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5001;

const app = express();

app.use("/api/habits", require("../routes/habitRoutes"));

app.listen(PORT, () => console.log(`Server running on ${PORT}`));