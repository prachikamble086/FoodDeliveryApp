import mongoose, { model } from "mongoose";
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

    item: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const CartTable = mongoose.model("CartTable", cartSchema);

module.exports = { CartTable };

// 7. cart table -
// -> user id   //ref to which table ?
// -> subtotal
// -> discount
// -> delivery fee
// -> total
// -> item (array of food item ids as items are added and deleted)
// -> deleted at (time stamp)       // active cart : null value deleted at , deletd cart : timestamp when user checkts out
