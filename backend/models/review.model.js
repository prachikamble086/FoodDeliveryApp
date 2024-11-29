import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    restaurantId: {
      type: Schema.Types.ObjectId,
      ref: "Restaurant",
      required: [true, "Restaurant Id field is required"],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "UserId field is required"],
    },
    rating: {
      type: String,
      required: [true, "Rating field is required"],
    },
    content: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
