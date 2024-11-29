import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const foodSchema = new Schema(
  {
    restaurantId: {
      type: Schema.Types.ObjectId,
      ref: "Restaurant",
    },
    name: {
      type: String,
      required: [true, "Name field is required"],
    },
    description: {
      type: String,
      required: [true, "Description field is required"],
    },
    price: {
      type: Number,
      required: [true, "Price field is required"],
    },
    image: {
      type: String,
      required: [true, "Image field is required"],
    },
    category: {
      type: String,
      required: [true, "Category field is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Food = mongoose.model("Food", foodSchema);

module.exports = { Food };
