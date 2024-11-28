import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    restaurantId: {
      type: String,
      required: [true, "Restaurant Id field is required"],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "UserId field is required"],
    },
    rating: {
      type: String,
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

const ReviewTable = mongoose.model("ReviewTable", reviewSchema);

module.exports = { ReviewTable };

// 6. review table -
// -> restaurant id
// -> user id
// -> rating
// -> content
// -> location
