const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const userRoute = require("./routes/user.route");
const homeRoute = require("./routes/home.route");
const restaurantRoute = require("./routes/restaurant.route");
const foodRoute = require("./routes/food.routes");

const { connectDb } = require("./models/db");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

connectDb();

app.get("/test", (req, res) => {
  res.send("Server is working!");
});

app.use("/user", userRoute);
app.use("/home", homeRoute);
app.use("/restaurant", restaurantRoute);
app.use("/restaurant", foodRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
