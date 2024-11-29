const mongoose = require("mongoose");
const { Schema } = mongoose;

const restaurantSchema = new Schema(
  {
    logo: {
      type: String,
      required: [true, "Logo is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    tagline: {
      type: String,
      required: [true, "Tagline field field is required"],
    },
    rating: {
      type: String,
      required: [true, "Rating field is required"],
    },
    reviewCount: {
      type: String,
      required: [true, "Review Count field is required"],
    },
    coverProductImage: {
      type: String,
      required: [true, "Cover Product Image field is required"],
    },
    categories: {
      type: Array,
      required: [true, "Categories field is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = { Restaurant };
