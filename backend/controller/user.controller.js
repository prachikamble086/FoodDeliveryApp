const User = require("../models/user.model");
const mongoose = require("mongoose");

const getUserProfileById = async (req, res) => {
  try {
    let { userId } = req.params;
    userId = userId.trim();

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        message: "Invalid restaurant ID format",
      });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({
      message: "An error occurred while fetching the user",
      error: error.message,
    });
  }
};

module.exports = { getUserProfileById };
