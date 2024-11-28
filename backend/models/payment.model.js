import mongoose, { model } from "mongoose";
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
    cvc: {
      type: String,
      required: [true, "CVC field is required"],
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

const PaymentMode = mongoose.model("PaymentMode", paymentModeSchema);

module.exports = { PaymentMode };

// 3. payment method table
// -> user id
// -> last 4 digits
// -> expiration
// -> cvc
// -> name on card
