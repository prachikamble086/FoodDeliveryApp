const Restaurant = require("./models/restaurant.model");
const Food = require("./models/food.model");
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

const seedFood = [
  {
    restaurantId: "6748c647124c309fa700a8c3", // McDonald's ID
    name: "Big Mac",
    description: "A classic burger with two patties.",
    price: 199,
    image: "Burger1.jpg",
    category: "Burgers",
  },
  {
    restaurantId: "6748c647124c309fa700a8c3", // McDonald's ID
    name: "Cheeseburger",
    description: "A simple cheeseburger with melted cheese.",
    price: 129,
    image: "Burger2.jpg",
    category: "Burgers",
  },
  {
    restaurantId: "6748c647124c309fa700a8c3", // McDonald's ID
    name: "Crispy Chicken",
    description: "A hearty burger with cheese and onions.",
    price: 179,
    image: "Burger3.jpg",
    category: "Burgers",
  },
  {
    restaurantId: "6748c647124c309fa700a8c3", // McDonald's ID
    name: "McChicken",
    description: "Crispy chicken sandwich with mayo and lettuce.",
    price: 169,
    image: "Burger4.jpg",
    category: "Burgers",
  },
  {
    restaurantId: "6748c647124c309fa700a8c3", // McDonald's ID
    name: "Small Fries",
    description: "A small portion of crispy fries.",
    price: 79,
    image: "Fries1.jpg",
    category: "Fries",
  },
  {
    restaurantId: "6748c647124c309fa700a8c3", // McDonald's ID
    name: "Medium Fries",
    description: "A medium portion of crispy fries.",
    price: 99,
    image: "Fries2.jpg",
    category: "Fries",
  },
  {
    restaurantId: "6748c647124c309fa700a8c3", // McDonald's ID
    name: "Large Fries",
    description: "A large portion of crispy fries.",
    price: 129,
    image: "Fries3.jpg",
    category: "Fries",
  },
  {
    restaurantId: "6748c647124c309fa700a8c3", // McDonald's ID
    name: "Curly Fries",
    description: "Spiraled fries with a seasoned coating.",
    price: 149,
    image: "Fries4.jpg",
    category: "Fries",
  },
  {
    restaurantId: "6748c647124c309fa700a8c3", // McDonald's ID
    name: "Coke",
    description: "A refreshing cola drink.",
    price: 59,
    image: "SoftDrink1.jpg",
    category: "Drinks",
  },
  {
    restaurantId: "6748c647124c309fa700a8c3", // McDonald's ID
    name: "Sprite",
    description: "A crisp lemon-lime flavored soda.",
    price: 59,
    image: "SoftDrink2.jpg",
    category: "Drinks",
  },
  {
    restaurantId: "6748c647124c309fa700a8c3", // McDonald's ID
    name: "Fanta",
    description: "A sweet orange-flavored soda.",
    price: 59,
    image: "SoftDrink3.jpg",
    category: "Drinks",
  },
  {
    restaurantId: "6748c647124c309fa700a8c3", // McDonald's ID
    name: "Iced Coffee",
    description: "Cold brewed coffee with ice and milk.",
    price: 99,
    image: "SoftDrink4.jpg",
    category: "Drinks",
  },

  // Papa John's menu
  {
    restaurantId: "6748c647124c309fa700a8c4", // Papa John's ID
    name: "Big Mac",
    description: "A classic burger with two patties.",
    price: 199,
    image: "Burger1.jpg",
    category: "Burgers",
  },
  {
    restaurantId: "6748c647124c309fa700a8c4", // Papa John's ID
    name: "Cheeseburger",
    description: "A simple cheeseburger with melted cheese.",
    price: 129,
    image: "Burger2.jpg",
    category: "Burgers",
  },
  {
    restaurantId: "6748c647124c309fa700a8c4", // Papa John's ID
    name: "Crispy Chicken",
    description: "A hearty burger with cheese and onions.",
    price: 179,
    image: "Burger3.jpg",
    category: "Burgers",
  },
  {
    restaurantId: "6748c647124c309fa700a8c4", // Papa John's ID
    name: "McChicken",
    description: "Crispy chicken sandwich with mayo and lettuce.",
    price: 169,
    image: "Burger4.jpg",
    category: "Burgers",
  },
  {
    restaurantId: "6748c647124c309fa700a8c4", // Papa John's ID
    name: "Small Fries",
    description: "A small portion of crispy fries.",
    price: 79,
    image: "Fries1.jpg",
    category: "Fries",
  },
  {
    restaurantId: "6748c647124c309fa700a8c4", // Papa John's ID
    name: "Medium Fries",
    description: "A medium portion of crispy fries.",
    price: 99,
    image: "Fries2.jpg",
    category: "Fries",
  },
  {
    restaurantId: "6748c647124c309fa700a8c4", // Papa John's ID
    name: "Large Fries",
    description: "A large portion of crispy fries.",
    price: 129,
    image: "Fries3.jpg",
    category: "Fries",
  },
  {
    restaurantId: "6748c647124c309fa700a8c4", // Papa John's ID
    name: "Curly Fries",
    description: "Spiraled fries with a seasoned coating.",
    price: 149,
    image: "Fries4.jpg",
    category: "Fries",
  },
  {
    restaurantId: "6748c647124c309fa700a8c4", // Papa John's ID
    name: "Coke",
    description: "A refreshing cola drink.",
    price: 59,
    image: "SoftDrink1.jpg",
    category: "Drinks",
  },
  {
    restaurantId: "6748c647124c309fa700a8c4", // Papa John's ID
    name: "Sprite",
    description: "A crisp lemon-lime flavored soda.",
    price: 59,
    image: "SoftDrink2.jpg",
    category: "Drinks",
  },
  {
    restaurantId: "6748c647124c309fa700a8c4", // Papa John's ID
    name: "Fanta",
    description: "A sweet orange-flavored soda.",
    price: 59,
    image: "SoftDrink3.jpg",
    category: "Drinks",
  },
  {
    restaurantId: "6748c647124c309fa700a8c4", // Papa John's ID
    name: "Iced Coffee",
    description: "Cold brewed coffee with ice and milk.",
    price: 99,
    image: "SoftDrink4.jpg",
    category: "Drinks",
  },

  {
    restaurantId: "6748c647124c309fa700a8c6", // Texas Chicken ID
    name: "Big Mac",
    description: "A classic burger with two patties.",
    price: 199,
    image: "Burger1.jpg",
    category: "Burgers",
  },
  {
    restaurantId: "6748c647124c309fa700a8c6", // Texas Chicken ID
    name: "Cheeseburger",
    description: "A simple cheeseburger with melted cheese.",
    price: 129,
    image: "Burger2.jpg",
    category: "Burgers",
  },
  {
    restaurantId: "6748c647124c309fa700a8c6", // Texas Chicken ID
    name: "Crispy Chicken",
    description: "A hearty burger with cheese and onions.",
    price: 179,
    image: "Burger3.jpg",
    category: "Burgers",
  },
  {
    restaurantId: "6748c647124c309fa700a8c6", // Texas Chicken ID
    name: "McChicken",
    description: "Crispy chicken sandwich with mayo and lettuce.",
    price: 169,
    image: "Burger4.jpg",
    category: "Burgers",
  },
  {
    restaurantId: "6748c647124c309fa700a8c6", // Texas Chicken ID
    name: "Small Fries",
    description: "A small portion of crispy fries.",
    price: 79,
    image: "Fries1.jpg",
    category: "Fries",
  },
  {
    restaurantId: "6748c647124c309fa700a8c6", // Texas Chicken ID
    name: "Medium Fries",
    description: "A medium portion of crispy fries.",
    price: 99,
    image: "Fries2.jpg",
    category: "Fries",
  },
  {
    restaurantId: "6748c647124c309fa700a8c6", // Texas Chicken ID
    name: "Large Fries",
    description: "A large portion of crispy fries.",
    price: 129,
    image: "Fries3.jpg",
    category: "Fries",
  },
  {
    restaurantId: "6748c647124c309fa700a8c6", // Texas Chicken ID
    name: "Curly Fries",
    description: "Spiraled fries with a seasoned coating.",
    price: 149,
    image: "Fries4.jpg",
    category: "Fries",
  },
  {
    restaurantId: "6748c647124c309fa700a8c6", // Texas Chicken ID
    name: "Coke",
    description: "A refreshing cola drink.",
    price: 59,
    image: "SoftDrink1.jpg",
    category: "Drinks",
  },
  {
    restaurantId: "6748c647124c309fa700a8c6", // Texas Chicken ID
    name: "Sprite",
    description: "A crisp lemon-lime flavored soda.",
    price: 59,
    image: "SoftDrink2.jpg",
    category: "Drinks",
  },
  {
    restaurantId: "6748c647124c309fa700a8c6", // Texas Chicken ID
    name: "Fanta",
    description: "A sweet orange-flavored soda.",
    price: 59,
    image: "SoftDrink3.jpg",
    category: "Drinks",
  },
  {
    restaurantId: "6748c647124c309fa700a8c6", // Texas Chicken ID
    name: "Iced Coffee",
    description: "Cold brewed coffee with ice and milk.",
    price: 99,
    image: "SoftDrink4.jpg",
    category: "Drinks",
  },

  {
    restaurantId: "6748c647124c309fa700a8c7", // Burger King ID
    name: "Big Mac",
    description: "A classic burger with two patties.",
    price: 199,
    image: "Burger1.jpg",
    category: "Burgers",
  },
  {
    restaurantId: "6748c647124c309fa700a8c7", // Burger King ID
    name: "Cheeseburger",
    description: "A simple cheeseburger with melted cheese.",
    price: 129,
    image: "Burger2.jpg",
    category: "Burgers",
  },
  {
    restaurantId: "6748c647124c309fa700a8c7", // Burger King ID
    name: "Crispy Chicken",
    description: "A hearty burger with cheese and onions.",
    price: 179,
    image: "Burger3.jpg",
    category: "Burgers",
  },
  {
    restaurantId: "6748c647124c309fa700a8c7", // Burger King ID
    name: "McChicken",
    description: "Crispy chicken sandwich with mayo and lettuce.",
    price: 169,
    image: "Burger4.jpg",
    category: "Burgers",
  },
  {
    restaurantId: "6748c647124c309fa700a8c7", // Burger King ID
    name: "Small Fries",
    description: "A small portion of crispy fries.",
    price: 79,
    image: "Fries1.jpg",
    category: "Fries",
  },
  {
    restaurantId: "6748c647124c309fa700a8c7", // Burger King ID
    name: "Medium Fries",
    description: "A medium portion of crispy fries.",
    price: 99,
    image: "Fries2.jpg",
    category: "Fries",
  },
  {
    restaurantId: "6748c647124c309fa700a8c7", // Burger King ID
    name: "Large Fries",
    description: "A large portion of crispy fries.",
    price: 129,
    image: "Fries3.jpg",
    category: "Fries",
  },
  {
    restaurantId: "6748c647124c309fa700a8c7", // Burger King ID
    name: "Curly Fries",
    description: "Spiraled fries with a seasoned coating.",
    price: 149,
    image: "Fries4.jpg",
    category: "Fries",
  },
  {
    restaurantId: "6748c647124c309fa700a8c7", // Burger King ID
    name: "Coke",
    description: "A refreshing cola drink.",
    price: 59,
    image: "SoftDrink1.jpg",
    category: "Drinks",
  },
  {
    restaurantId: "6748c647124c309fa700a8c7", // Burger King ID
    name: "Sprite",
    description: "A crisp lemon-lime flavored soda.",
    price: 59,
    image: "SoftDrink2.jpg",
    category: "Drinks",
  },
  {
    restaurantId: "6748c647124c309fa700a8c7", // Burger King ID
    name: "Fanta",
    description: "A sweet orange-flavored soda.",
    price: 59,
    image: "SoftDrink3.jpg",
    category: "Drinks",
  },
  {
    restaurantId: "6748c647124c309fa700a8c7", // Burger King ID
    name: "Iced Coffee",
    description: "Cold brewed coffee with ice and milk.",
    price: 99,
    image: "SoftDrink4.jpg",
    category: "Drinks",
  },

  {
    restaurantId: "6748c647124c309fa700a8c8", // Shaurma 1 ID
    name: "Big Mac",
    description: "A classic burger with two patties.",
    price: 199,
    image: "Burger1.jpg",
    category: "Burgers",
  },
  {
    restaurantId: "6748c647124c309fa700a8c8", // Shaurma 1 ID
    name: "Cheeseburger",
    description: "A simple cheeseburger with melted cheese.",
    price: 129,
    image: "Burger2.jpg",
    category: "Burgers",
  },
  {
    restaurantId: "6748c647124c309fa700a8c8", // Shaurma 1 ID
    name: "Crispy Chicken",
    description: "A hearty burger with cheese and onions.",
    price: 179,
    image: "Burger3.jpg",
    category: "Burgers",
  },
  {
    restaurantId: "6748c647124c309fa700a8c8", // Shaurma 1 ID
    name: "McChicken",
    description: "Crispy chicken sandwich with mayo and lettuce.",
    price: 169,
    image: "Burger4.jpg",
    category: "Burgers",
  },
  {
    restaurantId: "6748c647124c309fa700a8c8", // Shaurma 1 ID
    name: "Small Fries",
    description: "A small portion of crispy fries.",
    price: 79,
    image: "Fries1.jpg",
    category: "Fries",
  },
  {
    restaurantId: "6748c647124c309fa700a8c8", // Shaurma 1 ID
    name: "Medium Fries",
    description: "A medium portion of crispy fries.",
    price: 99,
    image: "Fries2.jpg",
    category: "Fries",
  },
  {
    restaurantId: "6748c647124c309fa700a8c8", // Shaurma 1 ID
    name: "Large Fries",
    description: "A large portion of crispy fries.",
    price: 129,
    image: "Fries3.jpg",
    category: "Fries",
  },
  {
    restaurantId: "6748c647124c309fa700a8c8", // Shaurma 1 ID
    name: "Curly Fries",
    description: "Spiraled fries with a seasoned coating.",
    price: 149,
    image: "Fries4.jpg",
    category: "Fries",
  },
  {
    restaurantId: "6748c647124c309fa700a8c8", // Shaurma 1 ID
    name: "Coke",
    description: "A refreshing cola drink.",
    price: 59,
    image: "SoftDrink1.jpg",
    category: "Drinks",
  },
  {
    restaurantId: "6748c647124c309fa700a8c8", // Shaurma 1 ID
    name: "Sprite",
    description: "A crisp lemon-lime flavored soda.",
    price: 59,
    image: "SoftDrink2.jpg",
    category: "Drinks",
  },
  {
    restaurantId: "6748c647124c309fa700a8c8", // Shaurma 1 ID
    name: "Fanta",
    description: "A sweet orange-flavored soda.",
    price: 59,
    image: "SoftDrink3.jpg",
    category: "Drinks",
  },
  {
    restaurantId: "6748c647124c309fa700a8c8", // Shaurma 1 ID
    name: "Iced Coffee",
    description: "Cold brewed coffee with ice and milk.",
    price: 99,
    image: "SoftDrink4.jpg",
    category: "Drinks",
  },
];

const seedData = async () => {
  await connectDb();
  // await Food.insertMany(seedFood);
  // await Restaurant.insertMany(restaurantSeedData);

  console.log("done seeding");
};

seedData();
