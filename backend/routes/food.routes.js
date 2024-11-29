const express = require("express");
const { getMenuByRestaurantId } = require("../controller/food.controller");

const router = express.Router();

router.get("/:restaurantId/menu", (req, res) => {
  console.log(
    "GET request received for menu of restaurant ID:",
    req.params.restaurantId
  );
  getMenuByRestaurantId(req, res);
});

module.exports = router;
