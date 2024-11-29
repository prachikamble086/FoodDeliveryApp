const express = require("express");

const { getUserProfileById } = require("../controller/user.controller");

const router = express.Router();

router.get("/profile/:userId", getUserProfileById);
router.put("/profile/:userId");

// router.get("/address/:userId");
// router.post("/address/:userId");

// router.get("/payment-mode/:userId");
// router.post("/payment-mode/:userId");

module.exports = router;
