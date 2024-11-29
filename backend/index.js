const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const userRoute = require("./routes/user.route");
const homeRoute = require("./routes/home.route");
const { connectDb } = require("./models/db.js");

const app = express();

dotenv.config();

// to do : Add environment based CORS

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

connectDb();

app.get("/test", (req, res) => {
  res.send("Server is working!");
});

app.use("/user", userRoute);
app.use("/home", homeRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
