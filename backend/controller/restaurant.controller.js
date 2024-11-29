const Restaurant = require("../models/restaurant.model");
const Food = require("../models/food.model");
const mongoose = require("mongoose");

const getRestaurantById = async (req, res) => {
  try {
    let { restaurantId } = req.params;
    restaurantId = restaurantId.trim();

    if (!mongoose.Types.ObjectId.isValid(restaurantId)) {
      return res.status(400).json({
        message: "Invalid restaurant ID format",
      });
    }

    const restaurant = await Restaurant.findById(restaurantId);

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

const getMenuByRestaurantId = async (req, res) => {
  try {
    const { restaurantId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(restaurantId)) {
      return res.status(400).json({
        message: "Invalid restaurant ID format",
      });
    }

    const menuItems = await Food.find({ restaurantId });

    if (!menuItems || menuItems.length === 0) {
      return res.status(404).json({
        message: "No menu items found for this restaurant",
      });
    }

    res.status(200).json({ menuItems });
  } catch (error) {
    console.error("Error fetching menu:", error);
    res.status(500).json({
      message: "An error occurred while fetching the menu",
      error: error.message,
    });
  }
};

module.exports = { getRestaurantById, getMenuByRestaurantId };
