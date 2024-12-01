const express = require("express");
const {
  postCartById,
  getCartById,
  deleteCartById,
} = require("../controller/user.controller");

const router = express.Router();

router.get("/:userId", getCartById);
router.post("/:userId", postCartById);
router.delete("/:userId", deleteCartById);

module.exports = router;
