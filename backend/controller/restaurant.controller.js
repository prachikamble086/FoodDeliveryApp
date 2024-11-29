const Restaurant = require("../models/restaurant.model");
const mongoose = require("mongoose");

const getRestaurantById = async (req, res) => {
  try {
    let { id } = req.params;
    id = id.trim();

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid restaurant ID format",
      });
    }

    const restaurant = await Restaurant.findById(id);

    if (!restaurant) {
      return res.status(404).json({
        message: "Restaurant not found",
      });
    }

    res.status(200).json({ restaurant });
  } catch (error) {
    console.error("Error fetching restaurant:", error);
    res.status(500).json({
      message: "An error occurred while fetching the restaurant",
      error: error.message,
    });
  }
};

module.exports = { getRestaurantById };
