const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const userRoute = require("./routes/user.route");

dotenv.config();

app.use(cors()); // Allow all or specific origins
app.use(express.json());

const PORT = process.env.PORT || 3000;
const URI = process.env.MongoDBURI;

// MongoDB Connection
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("MongoDB connection error:", error);
}

app.get("/test", (req, res) => {
  res.send("Server is working!");
});

app.use("/user", userRoute); // Routes for user

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
