const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const userRoute = require("./routes/user.route");
const homeRoute = require("./routes/home.route");
const restaurantRoute = require("./routes/restaurant.route");
const authRoute = require("./routes/auth.route");
const cartRoute = require("./routes/cart.route.js");

const { connectDb } = require("./models/db");
const { auth } = require("./middlewares/auth.middleware.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;


const whitelist = ["https://food-app-prachi.netlify.app/"];
const corsOptions = {
  
  origin: whitelist,
  optionsSuccessStatus: 200,
  credentials: true,
};

if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: true, credentials: true }));
} else {
  app.use(cors(corsOptions));
}

app.use(express.json());

connectDb();

app.get("/test", (req, res) => {
  res.send("Server is working!");
});

app.use("/auth", authRoute);
app.use("/cart", cartRoute);
app.use("/home", homeRoute);
app.use(auth);
app.use("/user", userRoute);
app.use("/restaurant", restaurantRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
