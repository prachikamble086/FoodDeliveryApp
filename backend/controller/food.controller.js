const Food = require("../models/food.model");
const mongoose = require("mongoose");

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

module.exports = { getMenuByRestaurantId };
