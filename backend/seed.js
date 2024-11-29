const { Restaurant } = require("./models/restaurant.model");
const { connectDb } = require("./models/db.js");

const restaurantSeedData = [
  {
    logo: "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/Male_User_xpjbo4.png",
    name: "McDonald’s London",
    tagline: "great",
    rating: "4",
    reviewCount: "6",
    coverProductImage:
      "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/BurgerFastFood_unmuwl.png",
    categories: ["Burgers", "Fries", "Drinks"],
  },

  {
    logo: "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/Male_User_xpjbo4.png",
    name: "Papa John's",
    tagline: "The greatest burger",
    rating: "4",
    reviewCount: "6",
    coverProductImage:
      "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/BurgerFastFood_unmuwl.png",
    categories: ["Burgers", "Fries", "Drinks"],
  },

  {
    logo: "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/Male_User_xpjbo4.png",
    name: "KFC West London",
    tagline: "great",
    rating: "4",
    reviewCount: "6",
    coverProductImage:
      "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/BurgerFastFood_unmuwl.png",
    categories: ["Burgers", "Fries", "Drinks"],
  },

  {
    logo: "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/Male_User_xpjbo4.png",
    name: "Texas Chicken",
    tagline: "great",
    rating: "4",
    reviewCount: "6",
    coverProductImage:
      "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/BurgerFastFood_unmuwl.png",
    categories: ["Burgers", "Fries", "Drinks"],
  },

  {
    logo: "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/Male_User_xpjbo4.png",
    name: "Burger King",
    tagline: "great",
    rating: "4",
    reviewCount: "6",
    coverProductImage:
      "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/BurgerFastFood_unmuwl.png",
    categories: ["Burgers", "Fries", "Drinks"],
  },

  {
    logo: "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/Male_User_xpjbo4.png",
    name: "Shaurma 1",
    tagline: "great",
    rating: "4",
    reviewCount: "6",
    coverProductImage:
      "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/BurgerFastFood_unmuwl.png",
    categories: ["Burgers", "Fries", "Drinks"],
  },
];

const seedData = async () => {
  await connectDb();
  // await Restaurant.insertMany(restaurantSeedData);

  console.log("done seeding");
};

seedData();
