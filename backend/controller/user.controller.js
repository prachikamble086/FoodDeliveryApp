const User = require("../models/user.model");
const UserAddress = require("../models/address.model");
const PaymentDetails = require("../models/payment.model");
const mongoose = require("mongoose");

const getUserProfileById = async (req, res) => {
  try {
    let { userId } = req.params;
    userId = userId.trim();

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        message: "Invalid user ID format",
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

const putUserProfileById = async (req, res) => {
  try {
    let { userId } = req.params;
    let { name, email, gender, country } = req.body;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        message: "Invalid user ID format",
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.name = name;
    user.email = email;
    user.gender = gender;
    user.country = country;
    await user.save();
    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({
      message: "An error occurred while fetching the user",
      error: error.message,
    });
  }
};

const postAddressById = async (req, res) => {
  try {
    let { userId } = req.params;
    let { state, city, pincode, phoneNumber, fullAddress } = req.body;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        message: "Invalid user ID format",
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const address = new UserAddress({
      userId,
      state,
      city,
      pincode,
      phoneNumber,
      fullAddress,
    });

    await address.save();
    res
      .status(200)
      .json({ message: "Address added successfully", user, address });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({
      message: "An error occurred while fetching the user",
      error: error.message,
    });
  }
};

const getAddressById = async (req, res) => {
  try {
    let { userId } = req.params;
    userId = userId.trim();

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        message: "Invalid user ID format",
      });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const address = await UserAddress.find({ userId });
    if (!address) {
      return res.status(404).json({
        message: "Address not found",
      });
    }

    res.status(200).json({ user, address });
  } catch (error) {
    console.error("Error fetching address:", error);
    res.status(500).json({
      message: "An error occurred while fetching the address",
      error: error.message,
    });
  }
};

const postPaymentDetailsById = async (req, res) => {
  try {
    let { userId } = req.params;
    let { lastFourDigits, expiration, cvv, nameOnCard } = req.body;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        message: "Invalid user ID format",
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const paymentDetails = new PaymentDetails({
      userId,
      lastFourDigits,
      expiration,
      cvv,
      nameOnCard,
    });

    await paymentDetails.save();
    res
      .status(200)
      .json({ message: "Address added successfully", user, paymentDetails });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({
      message: "An error occurred while fetching the user",
      error: error.message,
    });
  }
};

const getPaymentDetailsById = async (req, res) => {
  try {
    let { userId } = req.params;
    userId = userId.trim();

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        message: "Invalid user ID format",
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const paymentDetails = await PaymentDetails.find({ userId });
    if (!paymentDetails || paymentDetails.length === 0) {
      return res.status(404).json({
        message: "Payment details not found for this user",
      });
    }

    res.status(200).json({ user, paymentDetails });
  } catch (error) {
    console.error("Error fetching payment details:", error);
    res.status(500).json({
      message: "An error occurred while fetching the payment details",
      error: error.message,
    });
  }
};

module.exports = {
  getUserProfileById,
  putUserProfileById,
  postAddressById,
  getAddressById,
  postPaymentDetailsById,
  getPaymentDetailsById,
};
