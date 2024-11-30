const express = require("express");

const {
  getUserProfileById,
  putUserProfileById,
  postAddressById,
  getAddressById,
  postPaymentDetailsById,
  getPaymentDetailsById,
} = require("../controller/user.controller");
console.log(getUserProfileById, putUserProfileById, postAddressById); // Log to check if any of these is undefined

const router = express.Router();

router.get("/profile/:userId", getUserProfileById);
router.put("/profile/:userId", putUserProfileById);

router.get("/address/:userId", getAddressById);
router.post("/address/:userId", postAddressById);

router.get("/payment-mode/:userId", getPaymentDetailsById);
router.post("/payment-mode/:userId", postPaymentDetailsById);

module.exports = router;
