const express = require("express");
const { getRestaurantById } = require("../controller/restaurant.controller");

const router = express.Router();

router.get("/:id", (req, res) => {
  console.log("GET request received for restaurant ID:", req.params.id);
  getRestaurantById(req, res);
});

module.exports = router;
