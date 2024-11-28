// table:user,restaurants,products,categories

import { Burger1, DeliveryInformation, User } from "./constant";
import { Burger2 } from "./constant";
import { Burger3 } from "./constant";
import { Burger4 } from "./constant";
import { Fries } from "./constant";
import { SoftDrink1 } from "./constant";
import { SoftDrink2 } from "./constant";
import { SoftDrink3 } from "./constant";
import { SoftDrink4 } from "./constant";
import { Mcd } from "./constant";
import { PapaJohns } from "./constant";
import { Kfc } from "./constant";
import { TexasChicken } from "./constant";
import { BurgerKing } from "./constant";
import { Shaurma } from "./constant";
import { Review1 } from "./constant";
import { Review2 } from "./constant";
import { Review3 } from "./constant";
import { ButterBrot } from "./constant";
import { GrandAi } from "./constant";
import { BurgerFastFood } from "./constant";
import { Salads } from "./constant";
import { Pasta } from "./constant";
import { Pizza } from "./constant";
import { Breakfast } from "./constant";
import { Soups } from "./constant";
import { PeronalizedOrderCard } from "./constant";
import { PlayStoreBadges } from "./constant";
import { OperationalTimes } from "./constant";
import { IdVerified } from "./constant";

const homePageData = {
  user: {
    name: "Prachi",
    location: "Mumbai",
  },
  navigation: [
    "Home",
    "Browse Menu",
    "Special Offer",
    "Restaurants",
    "Track orders",
  ],
  banner: {
    top: "",
  },

  exclusiveDealsData: {
    title: "Up to -40% 🎊 Order.uk exclusive deals",
    titleMobile: "Up to -40% Discount Offers🎊",

    deals: [
      {
        cardImage: ButterBrot,
        discount: "-40%",
        restaurantName: "Chef Burgers London",
      },
      {
        cardImage: GrandAi,
        discount: "-20%",
        restaurantName: "Grand Ai Cafe London",
      },
      {
        cardImage: ButterBrot,
        discount: "-17%",
        restaurantName: "ButterBrot Caf'e London",
      },
    ],
  },
  popularFoodCategoriesData: {
    title: "Order.uk Popular Categories 🤩",
    categories: [
      {
        foodImage: BurgerFastFood,
        menu: "Burgers & Fast food",
        numberOfRestaurants: 21,
      },
      {
        foodImage: Salads,
        menu: "Salads",
        numberOfRestaurants: 32,
      },
      {
        foodImage: Pasta,
        menu: "Pasta",
        numberOfRestaurants: 4,
      },
      {
        foodImage: Pizza,
        menu: "Pizza",
        numberOfRestaurants: 32,
      },
      {
        foodImage: Breakfast,
        menu: "Breakfast",
        numberOfRestaurants: 4,
      },
      {
        foodImage: Soups,
        menu: "Soups",
        numberOfRestaurants: 32,
      },
    ],
  },
  restaurants: [
    {
      id: 1,
      name: "McDonald’s London",
      brandImg: Mcd,
    },
    {
      id: 2,
      name: "Papa John's",
      brandImg: PapaJohns,
    },
    {
      id: 2,
      name: "Papa John's",
      brandImg: PapaJohns,
    },
    {
      id: 2,
      name: "Papa John's",
      brandImg: PapaJohns,
    },
    {
      id: 2,
      name: "Papa John's",
      brandImg: PapaJohns,
    },
  ],
};

const productPage = {
  tagline: "I'm lovin' it!",
  name: "McDonald’s East London",
  rating: "3.4",
  reviews: 123,
  deals: [
    {
      cardImage: ButterBrot,
      discount: "-40%",
      restaurantName: "Chef Burgers London",
    },
    {
      cardImage: GrandAi,
      discount: "-20%",
      restaurantName: "Grand Ai Cafe London",
    },
    {
      cardImage: ButterBrot,
      discount: "-17%",
      restaurantName: "ButterBrot Caf'e London",
    },
  ],
  menu: [
    {
      category: "Burgers",
      products: [
        {
          name: "Big Mac",
          description: "A classic burger with two patties.",
          price: "₹199",
          img: Burger1,
        },
        {
          name: "Cheeseburger",
          description: "A simple cheeseburger with melted cheese.",
          price: "₹129",
          img: Burger2,
        },
        {
          name: "Crispy Chicken",
          description: "A hearty burger with cheese and onions.",
          price: "₹179",
          img: Burger3,
        },
        {
          name: "McChicken",
          description: "Crispy chicken sandwich",
          price: "₹169",
          img: Burger4,
        },
      ],
    },
    {
      category: "Fries",
      products: [
        {
          name: "Small Fries",
          description: "A small portion of crispy fries.",
          price: "₹79",
          img: Fries,
        },
        {
          name: "Medium Fries",
          description: "A medium portion of crispy fries.",
          price: "₹99",
          img: Fries,
        },
        {
          name: "Large Fries",
          description: "A large portion of crispy fries.",
          price: "₹129",
          img: Fries,
        },
        {
          name: "Curly Fries",
          description: "Spiraled fries with a seasoned coating.",
          price: "₹149",
          img: Fries,
        },
      ],
    },
    {
      category: "Drinks",
      products: [
        {
          name: "Coke",
          description: "A refreshing cola drink.",
          price: "₹59",
          img: SoftDrink1,
        },
        {
          name: "Sprite",
          description: "A crisp lemon-lime flavored soda.",
          price: "₹59",
          img: SoftDrink2,
        },
        {
          name: "Fanta",
          description: "A sweet orange-flavored soda.",
          price: "₹59",
          img: SoftDrink3,
        },
        {
          name: "Iced Coffee",
          description: "Cold brewed coffee with ice and milk.",
          price: "₹99",
          img: SoftDrink4,
        },
      ],
    },
  ],
  similarRestaurants: [
    {
      id: 1,
      name: "McDonald’s London",
      brandImg: Mcd,
    },
    {
      id: 2,
      name: "Papa John's",
      brandImg: PapaJohns,
    },
    {
      id: 3,
      name: "Papa John's",
      brandImg: PapaJohns,
    },
    {
      id: 4,
      name: "Papa John's",
      brandImg: PapaJohns,
    },
    {
      id: 4,
      name: "Papa John's",
      brandImg: PapaJohns,
    },
    {
      id: 4,
      name: "Papa John's",
      brandImg: PapaJohns,
    },
  ],

  navigation: [
    "Home",
    "Browse Menu",
    "Special Offer",
    "Restaurants",
    "Track orders",
  ],

  informationCard: {
    deliveryInformation: {
      image: DeliveryInformation,
      title: "Delivery information",
      timings: [
        { day: "Monday", time: "12:00 AM–3:00 AM, 8:00 AM–3:00 AM" },
        { day: "Tuesday", time: "8:00 AM–3:00 AM" },
        { day: "Wednesday", time: "8:00 AM–3:00 AM" },
        { day: "Thursday", time: "8:00 AM–3:00 AM" },
        { day: "Friday", time: "8:00 AM–3:00 AM" },
        { day: "Saturday", time: "8:00 AM–3:00 AM" },
        { day: "Sunday", time: "8:00 AM–12:00 AM" },
        { day: "Estimated time until delivery", time: "20 min" },
      ],
    },
    contactInformation: {
      image: IdVerified,
      title: "Contact information",
      details: {
        description:
          "If you have allergies or other dietary restrictions, please contact the restaurant. The restaurant will provide food-specific information upon request.",
        phone: "+934443-43",
        website: "http://mcdonalds.uk/",
      },
    },
    operationalTimes: {
      image: OperationalTimes,
      title: "Operational Times",
      timings: [
        { day: "Monday", time: "8:00 AM–3:00 AM" },
        { day: "Tuesday", time: "8:00 AM–3:00 AM" },
        { day: "Wednesday", time: "8:00 AM–3:00 AM" },
        { day: "Thursday", time: "8:00 AM–3:00 AM" },
        { day: "Friday", time: "8:00 AM–3:00 AM" },
        { day: "Saturday", time: "8:00 AM–3:00 AM" },
        { day: "Sunday", time: "8:00 AM–3:00 AM" },
      ],
    },
  },
};

//make changes in customerReviews

const customerReviews = {
  reviews: [
    {
      user: {
        profilePic: User,
        name: "Rachel",
        location: "California",
      },
      rating: 4,
      date: "27/11/2024",
      review:
        "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    },
    {
      user: {
        profilePic: User,
        name: "Rachel",
        location: "California",
      },
      rating: 4,
      date: "27/11/2024",
      review:
        "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    },
    {
      user: {
        profilePic: User,
        name: "Rachel",
        location: "California",
      },
      rating: 4,
      date: "27/11/2024",
      review:
        "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    },
    {
      user: {
        profilePic: User,
        name: "Rachel",
        location: "California",
      },
      rating: 4,
      date: "27/11/2024",
      review:
        "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    },
    {
      user: {
        profilePic: User,
        name: "Rachel",
        location: "California",
      },
      rating: 4,
      date: "27/11/2024",
      review:
        "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    },
    {
      user: {
        profilePic: { User },
        name: "Rachel",
        location: "California",
      },
      rating: 4,
      date: "27/11/2024",
      review:
        "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    },
    {
      user: {
        profilePic: { User },
        name: "Rachel",
        location: "California",
      },
      rating: 4,
      date: "27/11/2024",
      review:
        "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    },
  ],
};

// const restaurant = [
//   {
//     id: 1,
//     name: "McDonald’s London",
//     brandImg: Mcd,
//     menu: [
//       {
//         category: "Burgers",
//         products: [
//           {
//             name: "Big Mac",
//             description: "A classic burger with two patties.",
//             price: "₹199",
//             img: Burger1,
//           },
//           {
//             name: "Cheeseburger",
//             description: "A simple cheeseburger with melted cheese.",
//             price: "₹129",
//             img: Burger2,
//           },
//           {
//             name: "Crispy Chicken",
//             description: "A hearty burger with cheese and onions.",
//             price: "₹179",
//             img: Burger3,
//           },
//           {
//             name: "McChicken",
//             description: "Crispy chicken sandwich",
//             price: "₹169",
//             img: Burger4,
//           },
//         ],
//       },
//       {
//         category: "Fries",
//         products: [
//           {
//             name: "Small Fries",
//             description: "A small portion of crispy fries.",
//             price: "₹79",
//             img: Fries,
//           },
//           {
//             name: "Medium Fries",
//             description: "A medium portion of crispy fries.",
//             price: "₹99",
//             img: Fries,
//           },
//           {
//             name: "Large Fries",
//             description: "A large portion of crispy fries.",
//             price: "₹129",
//             img: Fries,
//           },
//           {
//             name: "Curly Fries",
//             description: "Spiraled fries with a seasoned coating.",
//             price: "₹149",
//             img: Fries,
//           },
//         ],
//       },
//       {
//         category: "Drinks",
//         products: [
//           {
//             name: "Coke",
//             description: "A refreshing cola drink.",
//             price: "₹59",
//             img: SoftDrink1,
//           },
//           {
//             name: "Sprite",
//             description: "A crisp lemon-lime flavored soda.",
//             price: "₹59",
//             img: SoftDrink2,
//           },
//           {
//             name: "Fanta",
//             description: "A sweet orange-flavored soda.",
//             price: "₹59",
//             img: SoftDrink3,
//           },
//           {
//             name: "Iced Coffee",
//             description: "Cold brewed coffee with ice and milk.",
//             price: "₹99",
//             img: SoftDrink4,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Papa John's",
//     brandImg: PapaJohns,
//     menu: [
//       {
//         category: "Burgers",
//         products: [
//           {
//             name: "Big Mac",
//             description: "A classic burger with two patties.",
//             price: "₹199",
//             img: Burger1,
//           },
//           {
//             name: "Cheeseburger",
//             description: "A simple cheeseburger with melted cheese.",
//             price: "₹129",
//             img: Burger2,
//           },
//           {
//             name: "Crispy Chicken",
//             description: "A hearty burger with cheese and onions.",
//             price: "₹179",
//             img: Burger3,
//           },
//           {
//             name: "McChicken",
//             description: "Crispy chicken sandwich with mayo and lettuce.",
//             price: "₹169",
//             img: Burger4,
//           },
//         ],
//       },
//       {
//         category: "Fries",
//         products: [
//           {
//             name: "Small Fries",
//             description: "A small portion of crispy fries.",
//             price: "₹79",
//             img: Fries,
//           },
//           {
//             name: "Medium Fries",
//             description: "A medium portion of crispy fries.",
//             price: "₹99",
//             img: Fries,
//           },
//           {
//             name: "Large Fries",
//             description: "A large portion of crispy fries.",
//             price: "₹129",
//             img: Fries,
//           },
//           {
//             name: "Curly Fries",
//             description: "Spiraled fries with a seasoned coating.",
//             price: "₹149",
//             img: Fries,
//           },
//         ],
//       },
//       {
//         category: "Drinks",
//         products: [
//           {
//             name: "Coke",
//             description: "A refreshing cola drink.",
//             price: "₹59",
//             img: SoftDrink1,
//           },
//           {
//             name: "Sprite",
//             description: "A crisp lemon-lime flavored soda.",
//             price: "₹59",
//             img: SoftDrink2,
//           },
//           {
//             name: "Fanta",
//             description: "A sweet orange-flavored soda.",
//             price: "₹59",
//             img: SoftDrink3,
//           },
//           {
//             name: "Iced Coffee",
//             description: "Cold brewed coffee with ice and milk.",
//             price: "₹99",
//             img: SoftDrink4,
//           },
//         ],
//       },
//     ],
//   },

//   {
//     id: 3,
//     name: "KFC West London",
//     brandImg: Kfc,
//     menu: [
//       {
//         category: "Burgers",
//         products: [
//           {
//             name: "Big Mac",
//             description: "A classic burger with two patties.",
//             price: "₹199",
//             img: Burger1,
//           },
//           {
//             name: "Cheeseburger",
//             description: "A simple cheeseburger with melted cheese.",
//             price: "₹129",
//             img: Burger2,
//           },
//           {
//             name: "Crispy Chicken",
//             description: "A hearty burger with cheese and onions.",
//             price: "₹179",
//             img: Burger3,
//           },
//           {
//             name: "McChicken",
//             description: "Crispy chicken sandwich with mayo and lettuce.",
//             price: "₹169",
//             img: Burger4,
//           },
//         ],
//       },
//       {
//         category: "Fries",
//         products: [
//           {
//             name: "Small Fries",
//             description: "A small portion of crispy fries.",
//             price: "₹79",
//             img: Fries,
//           },
//           {
//             name: "Medium Fries",
//             description: "A medium portion of crispy fries.",
//             price: "₹99",
//             img: Fries,
//           },
//           {
//             name: "Large Fries",
//             description: "A large portion of crispy fries.",
//             price: "₹129",
//             img: Fries,
//           },
//           {
//             name: "Curly Fries",
//             description: "Spiraled fries with a seasoned coating.",
//             price: "₹149",
//             img: Fries,
//           },
//         ],
//       },
//       {
//         category: "Drinks",
//         products: [
//           {
//             name: "Coke",
//             description: "A refreshing cola drink.",
//             price: "₹59",
//             img: SoftDrink1,
//           },
//           {
//             name: "Sprite",
//             description: "A crisp lemon-lime flavored soda.",
//             price: "₹59",
//             img: SoftDrink2,
//           },
//           {
//             name: "Fanta",
//             description: "A sweet orange-flavored soda.",
//             price: "₹59",
//             img: SoftDrink3,
//           },
//           {
//             name: "Iced Coffee",
//             description: "Cold brewed coffee with ice and milk.",
//             price: "₹99",
//             img: SoftDrink4,
//           },
//         ],
//       },
//     ],
//   },

//   {
//     id: 4,
//     name: "Texas Chicken",
//     brandImg: TexasChicken,
//     menu: [
//       {
//         category: "Burgers",
//         products: [
//           {
//             name: "Big Mac",
//             description: "A classic burger with two patties.",
//             price: "₹199",
//             img: Burger1,
//           },
//           {
//             name: "Cheeseburger",
//             description: "A simple cheeseburger with melted cheese.",
//             price: "₹129",
//             img: Burger2,
//           },
//           {
//             name: "Crispy Chicken",
//             description: "A hearty burger with cheese and onions.",
//             price: "₹179",
//             img: Burger3,
//           },
//           {
//             name: "McChicken",
//             description: "Crispy chicken sandwich with mayo and lettuce.",
//             price: "₹169",
//             img: Burger4,
//           },
//         ],
//       },
//       {
//         category: "Fries",
//         products: [
//           {
//             name: "Small Fries",
//             description: "A small portion of crispy fries.",
//             price: "₹79",
//             img: Fries,
//           },
//           {
//             name: "Medium Fries",
//             description: "A medium portion of crispy fries.",
//             price: "₹99",
//             img: Fries,
//           },
//           {
//             name: "Large Fries",
//             description: "A large portion of crispy fries.",
//             price: "₹129",
//             img: Fries,
//           },
//           {
//             name: "Curly Fries",
//             description: "Spiraled fries with a seasoned coating.",
//             price: "₹149",
//             img: Fries,
//           },
//         ],
//       },
//       {
//         category: "Drinks",
//         products: [
//           {
//             name: "Coke",
//             description: "A refreshing cola drink.",
//             price: "₹59",
//             img: SoftDrink1,
//           },
//           {
//             name: "Sprite",
//             description: "A crisp lemon-lime flavored soda.",
//             price: "₹59",
//             img: SoftDrink2,
//           },
//           {
//             name: "Fanta",
//             description: "A sweet orange-flavored soda.",
//             price: "₹59",
//             img: SoftDrink3,
//           },
//           {
//             name: "Iced Coffee",
//             description: "Cold brewed coffee with ice and milk.",
//             price: "₹99",
//             img: SoftDrink4,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 5,
//     name: "Burger King",
//     brandImg: BurgerKing,
//     menu: [
//       {
//         category: "Burgers",
//         products: [
//           {
//             name: "Big Mac",
//             description: "A classic burger with two patties.",
//             price: "₹199",
//             img: Burger1,
//           },
//           {
//             name: "Cheeseburger",
//             description: "A simple cheeseburger with melted cheese.",
//             price: "₹129",
//             img: Burger2,
//           },
//           {
//             name: "Crispy Chicken",
//             description: "A hearty burger with cheese and onions.",
//             price: "₹179",
//             img: Burger3,
//           },
//           {
//             name: "McChicken",
//             description: "Crispy chicken sandwich with mayo and lettuce.",
//             price: "₹169",
//             img: Burger4,
//           },
//         ],
//       },
//       {
//         category: "Fries",
//         products: [
//           {
//             name: "Small Fries",
//             description: "A small portion of crispy fries.",
//             price: "₹79",
//             img: Fries,
//           },
//           {
//             name: "Medium Fries",
//             description: "A medium portion of crispy fries.",
//             price: "₹99",
//             img: Fries,
//           },
//           {
//             name: "Large Fries",
//             description: "A large portion of crispy fries.",
//             price: "₹129",
//             img: Fries,
//           },
//           {
//             name: "Curly Fries",
//             description: "Spiraled fries with a seasoned coating.",
//             price: "₹149",
//             img: Fries,
//           },
//         ],
//       },
//       {
//         category: "Drinks",
//         products: [
//           {
//             name: "Coke",
//             description: "A refreshing cola drink.",
//             price: "₹59",
//             img: SoftDrink1,
//           },
//           {
//             name: "Sprite",
//             description: "A crisp lemon-lime flavored soda.",
//             price: "₹59",
//             img: SoftDrink2,
//           },
//           {
//             name: "Fanta",
//             description: "A sweet orange-flavored soda.",
//             price: "₹59",
//             img: SoftDrink3,
//           },
//           {
//             name: "Iced Coffee",
//             description: "Cold brewed coffee with ice and milk.",
//             price: "₹99",
//             img: SoftDrink4,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 6,
//     name: "Shaurma 1",
//     brandImg: Shaurma,
//     menu: [
//       {
//         category: "Burgers",
//         products: [
//           {
//             name: "Big Mac",
//             description: "A classic burger with two patties.",
//             price: "₹199",
//             img: Burger1,
//           },
//           {
//             name: "Cheeseburger",
//             description: "A simple cheeseburger with melted cheese.",
//             price: "₹129",
//             img: Burger2,
//           },
//           {
//             name: "Crispy Chicken",
//             description: "A hearty burger with cheese and onions.",
//             price: "₹179",
//             img: Burger3,
//           },
//           {
//             name: "McChicken",
//             description: "Crispy chicken sandwich with mayo and lettuce.",
//             price: "₹169",
//             img: Burger4,
//           },
//         ],
//       },
//       {
//         category: "Fries",
//         products: [
//           {
//             name: "Small Fries",
//             description: "A small portion of crispy fries.",
//             price: "₹79",
//             img: Fries,
//           },
//           {
//             name: "Medium Fries",
//             description: "A medium portion of crispy fries.",
//             price: "₹99",
//             img: Fries,
//           },
//           {
//             name: "Large Fries",
//             description: "A large portion of crispy fries.",
//             price: "₹129",
//             img: Fries,
//           },
//           {
//             name: "Curly Fries",
//             description: "Spiraled fries with a seasoned coating.",
//             price: "₹149",
//             img: Fries,
//           },
//         ],
//       },
//       {
//         category: "Drinks",
//         products: [
//           {
//             name: "Coke",
//             description: "A refreshing cola drink.",
//             price: "₹59",
//             img: SoftDrink1,
//           },
//           {
//             name: "Sprite",
//             description: "A crisp lemon-lime flavored soda.",
//             price: "₹59",
//             img: SoftDrink2,
//           },
//           {
//             name: "Fanta",
//             description: "A sweet orange-flavored soda.",
//             price: "₹59",
//             img: SoftDrink3,
//           },
//           {
//             name: "Iced Coffee",
//             description: "Cold brewed coffee with ice and milk.",
//             price: "₹99",
//             img: SoftDrink4,
//           },
//         ],
//       },
//     ],
//   },
// ];

export { homePageData, productPage, customerReviews };
