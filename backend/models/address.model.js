const mongoose = require("mongoose");
const { Schema } = mongoose;

const addressSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "UserId field is required"],
    },
    state: {
      type: String,
      required: [true, "State field is required"],
    },
    city: {
      type: String,
      required: [true, "City field is required"],
    },
    pincode: {
      type: String,
      required: [true, "Pincode field is required"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone Number field is required"],
    },
    fullAddress: {
      type: String,
      required: [true, "Full Address field is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Address", addressSchema);
