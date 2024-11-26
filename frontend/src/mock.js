// table:user,restaurants,products,categories

import { Burger1 } from "./constant";
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

const homePageData = {
  user: {
    name: "Prachi",
    location: "Mumbai",
  },
  banner: {
    top: "",
    bottom: "",
  },
  offers: [
    {
      image: "",
      discount: "-50%",
      restaurant: "KFC",
    },
  ],
  popularCategories: [
    {
      image: "",
      category: "Burger",
      numberOfRestaurants: 4,
    },
  ],
  popularRestaurants: [
    {
      image: "",
      name: "McDonald’s London",
    },
  ],
};

const productPage = {
  products: {
    // category: [],
    // menuItems: [
    //   {
    //     name: "",
    //     description: "",
    //     cost: 23,
    //   },
    // ],
  },
  customerReviews: [Review1, Review2, Review3],
};

const restaurant = [
  {
    id: 1,
    name: "McDonald’s London",
    brandImg: Mcd,
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
  },
  {
    id: 2,
    name: "Papa John's",
    brandImg: PapaJohns,
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
            description: "Crispy chicken sandwich with mayo and lettuce.",
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
  },

  {
    id: 3,
    name: "KFC West London",
    brandImg: Kfc,
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
            description: "Crispy chicken sandwich with mayo and lettuce.",
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
  },

  {
    id: 4,
    name: "Texas Chicken",
    brandImg: TexasChicken,
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
            description: "Crispy chicken sandwich with mayo and lettuce.",
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
  },
  {
    id: 5,
    name: "Burger King",
    brandImg: BurgerKing,
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
            description: "Crispy chicken sandwich with mayo and lettuce.",
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
  },
  {
    id: 6,
    name: "Shaurma 1",
    brandImg: Shaurma,
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
            description: "Crispy chicken sandwich with mayo and lettuce.",
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
  },
];

export { homePageData, restaurant, productPage };
