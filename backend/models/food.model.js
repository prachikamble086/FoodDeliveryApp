import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const foodSchema = new Schema(
  {
    restaurantId: {
      type: String,
      required: [true, "Restaurant Id field is required"],
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
      type: String,
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

const FoodTable = mongoose.model("FoodTable", foodSchema);

module.exports = { FoodTable };

// 5. food table -
// -> restaurant id
// -> name
// -> description
// -> price
// -> image
// -> category
