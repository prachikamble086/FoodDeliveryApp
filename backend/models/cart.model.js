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
      type: Number,
      required: [true, "Subtototal field is required"],
    },

    discount: {
      type: Number,
      required: [true, "Discount field is required"],
    },

    deliveryFee: {
      type: Number,
      required: [true, "Delivery Fee field is required"],
    },

    total: {
      type: Number,
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
