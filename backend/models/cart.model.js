const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "UserId field is required"],
    },
    subtotal: {
      type: String,
      required: [true, "Subtototal field is required"],
    },

    discount: {
      type: String,
      required: [true, "Discount field is required"],
    },

    deliveryFee: {
      type: String,
      required: [true, "Delivery Fee field is required"],
    },

    total: {
      type: String,
      required: [true, "Total Fee field is required"],
    },

    items: [
      {
        type: Schema.Types.ObjectId,
        ref: "Food",
      },
    ],

    quantity: {
      type: [Number],
    },
  },

  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
