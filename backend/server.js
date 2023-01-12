const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5001;
const { errorHandler } = require("./middleware/errorMiddleware");
const { connectDB } = require("./config/db");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/habits", require("./routes/habitRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));