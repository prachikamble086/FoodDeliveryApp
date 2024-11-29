const Restaurant = require("../models/restaurant.model");

const home = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({}).limit(10);

    res.status(200).json({
      navigation: [
        "Home",
        "Browse Menu",
        "Special Offer",
        "Restaurants",
        "Track orders",
      ],
      exclusiveDealsData: {
        title: "Up to -40% 🎊 Order.uk exclusive deals",
        titleMobile: "Up to -40% Discount Offers🎊",
        deals: [
          {
            cardImage:
              "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090812/ButterBrot_vioq6q.png",
            discount: "-40%",
            restaurantName: "Chef Burgers London",
          },
          {
            cardImage:
              "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090813/GrandAi_v3hxnd.png",
            discount: "-20%",
            restaurantName: "Grand Ai Cafe London",
          },
          {
            cardImage:
              "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090812/ButterBrot_vioq6q.png",
            discount: "-17%",
            restaurantName: "ButterBrot Caf'e London",
          },
        ],
      },
      popularFoodCategoriesData: {
        title: "Order.uk Popular Categories 🤩",
        categories: [
          {
            foodImage:
              "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/BurgerFastFood_unmuwl.png",
            menu: "Burgers & Fast food",
            numberOfRestaurants: 21,
          },
          {
            foodImage:
              "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/Salads_h3waqz.png",
            menu: "Salads",
            numberOfRestaurants: 32,
          },
          {
            foodImage:
              "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/Pasta_sreyun.png",
            menu: "Pasta",
            numberOfRestaurants: 4,
          },
          {
            foodImage:
              "https://res.cloudinary.com/drkzizaiv/image/upload/v1732090822/Salads_h3waqz.png",
            menu: "Pizza",
            numberOfRestaurants: 32,
          },
        ],
      },
      restaurants,
    });
  } catch (error) {
    console.error("Error fetching restaurant data:", error);
    res.status(500).json({
      message: "An error occurred while fetching the data",
      error: error.message,
    });
  }
};

module.exports = { home };
