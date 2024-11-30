const mongoose = require("mongoose");
const { Schema } = mongoose;

const paymentModeSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "UserId field is required"],
    },
    lastFourDigits: {
      type: String,
      required: [true, "Last 4 digits field is required"],
    },
    expiration: {
      type: String,
      required: [true, "Expiration field is required"],
    },
    cvv: {
      type: String,
      required: [true, "CVV field is required"],
    },
    nameOnCard: {
      type: String,
      required: [true, "Name on Card field is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PaymentMode", paymentModeSchema);
