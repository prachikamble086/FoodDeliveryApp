const express = require("express");
const {
  getRestaurantById,
  getMenuByRestaurantId,
} = require("../controller/restaurant.controller");

const router = express.Router();

router.get("/:restaurantId", getRestaurantById);
router.get("/:restaurantId/menu", getMenuByRestaurantId);

module.exports = router;
