// import React from "react"

// import { useState } from "react";
// import Location from "./images/Location.png";
// import ShoppingBasket from "./images/ShoppingBasket.png";
// import ForwardButton from "./images/ForwardButton.png";
// import OrderLogo from "./images/OrderLogo.png";
// import User from "./images/User.png";
// import image1 from "./images/image1.png";
// import image2 from "./images/image2.png";
// import number1 from "./images/number1.png";
// import number2 from "./images/number2.png";
// import number3 from "./images/number3.png";
// import BurgerFastFood from "./images/BurgerFastFood.png";
// import Pasta from "./images/Pasta.png";
// import Pizza from "./images/Pizza.png";
// import Salads from "./images/Salads.png";
// import Breakfast from "./images/Breakfast.png";
// import Soups from "./images/Soups.png";
// import mcd from "./images/mcd.png";
// import PapaJohns from "./images/PapaJohns.png";
// import kfc from "./images/kfc.png";
// import TexasChicken from "./images/TexasChicken.png";
// import BurgerKing from "./images/BurgerKing.png";
// import Shaurma from "./images/Shaurma.png";
// import PeronalizedOrderCard from "./images/PeronalizedOrderCard.png";
// import PlayStoreBadges from "./images/PlayStoreBadges.png";
// import GrandAi from "./images/GrandAi.png";
// import ChefBurger from "./images/ChefBurger.png";
// import ButterBrot from "./images/ButterBrot.png";
// import PartnerWithUs from "./images/PartnerWithUs.png";
// import SingupRider from "./images/SingupRider.png";
// import GetOrder from "./images/GetOrder.png";
// import TrackProgress from "./images/TrackProgress.png";
// import PlaceOrder from "./images/PlaceOrder.png";
// import OfferAndCart from "../../components/OfferAndCart/OfferAndCart";
// import Footer from "../../components/Footer/Footer";
// import OfferCategoryDiscountPage from "../../components/OfferCategoryDiscountPage.jsx/OfferCategoryDiscountPage";
import { useState } from "react";
const ProductPage = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  // const restaurants = [
  //   {
  //     id: 1,
  //     name: "McDonald’s",
  //     img: mcd,
  //     menu: [
  //       {
  //         category: "Burgers",
  //         products: [
  //           {
  //             name: "Big Mac",
  //             description:
  //               "A classic burger with two all-beef patties, special sauce, lettuce, cheese, pickles, and onions.",
  //             price: "₹199",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Cheeseburger",
  //             description:
  //               "A simple cheeseburger with melted cheese, pickles, and onions.",
  //             price: "₹129",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Quarter Pounder",
  //             description:
  //               "A hearty burger with a quarter-pound beef patty, cheese, pickles, and onions.",
  //             price: "₹179",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "McChicken",
  //             description: "Crispy chicken sandwich with mayo and lettuce.",
  //             price: "₹169",
  //             img: { BurgerFastFood },
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
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Medium Fries",
  //             description: "A medium portion of crispy fries.",
  //             price: "₹99",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Large Fries",
  //             description: "A large portion of crispy fries.",
  //             price: "₹129",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Curly Fries",
  //             description: "Spiraled fries with a seasoned coating.",
  //             price: "₹149",
  //             img: { BurgerFastFood },
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
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Sprite",
  //             description: "A crisp lemon-lime flavored soda.",
  //             price: "₹59",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Fanta",
  //             description: "A sweet orange-flavored soda.",
  //             price: "₹59",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Iced Coffee",
  //             description: "Cold brewed coffee with ice and milk.",
  //             price: "₹99",
  //             img: { BurgerFastFood },
  //           },
  //         ],
  //       },
  //       {
  //         category: "Desserts",
  //         products: [
  //           {
  //             name: "Apple Pie",
  //             description: "A warm, sweet apple filling in a flaky crust.",
  //             price: "₹79",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Sundae",
  //             description:
  //               "Vanilla ice cream with chocolate syrup and a cherry on top.",
  //             price: "₹129",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "McFlurry",
  //             description: "Vanilla ice cream mixed with your choice of candy.",
  //             price: "₹159",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Chocolate Chip Cookie",
  //             description: "A warm, gooey chocolate chip cookie.",
  //             price: "₹59",
  //             img: { BurgerFastFood },
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "Papa Johns",
  //     img: PapaJohns,
  //     menu: [
  //       {
  //         category: "Burgers",
  //         products: [
  //           {
  //             name: "Big Mac",
  //             description:
  //               "A classic burger with two all-beef patties, special sauce, lettuce, cheese, pickles, and onions.",
  //             price: "₹199",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Cheeseburger",
  //             description:
  //               "A simple cheeseburger with melted cheese, pickles, and onions.",
  //             price: "₹129",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Quarter Pounder",
  //             description:
  //               "A hearty burger with a quarter-pound beef patty, cheese, pickles, and onions.",
  //             price: "₹179",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "McChicken",
  //             description: "Crispy chicken sandwich with mayo and lettuce.",
  //             price: "₹169",
  //             img: { BurgerFastFood },
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
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Medium Fries",
  //             description: "A medium portion of crispy fries.",
  //             price: "₹99",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Large Fries",
  //             description: "A large portion of crispy fries.",
  //             price: "₹129",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Curly Fries",
  //             description: "Spiraled fries with a seasoned coating.",
  //             price: "₹149",
  //             img: { BurgerFastFood },
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
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Sprite",
  //             description: "A crisp lemon-lime flavored soda.",
  //             price: "₹59",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Fanta",
  //             description: "A sweet orange-flavored soda.",
  //             price: "₹59",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Iced Coffee",
  //             description: "Cold brewed coffee with ice and milk.",
  //             price: "₹99",
  //             img: { BurgerFastFood },
  //           },
  //         ],
  //       },
  //       {
  //         category: "Desserts",
  //         products: [
  //           {
  //             name: "Apple Pie",
  //             description: "A warm, sweet apple filling in a flaky crust.",
  //             price: "₹79",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Sundae",
  //             description:
  //               "Vanilla ice cream with chocolate syrup and a cherry on top.",
  //             price: "₹129",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "McFlurry",
  //             description: "Vanilla ice cream mixed with your choice of candy.",
  //             price: "₹159",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Chocolate Chip Cookie",
  //             description: "A warm, gooey chocolate chip cookie.",
  //             price: "₹59",
  //             img: { BurgerFastFood },
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     name: "KFC",
  //     img: kfc,
  //     menu: [
  //       {
  //         category: "Burgers",
  //         products: [
  //           {
  //             name: "Big Mac",
  //             description:
  //               "A classic burger with two all-beef patties, special sauce, lettuce, cheese, pickles, and onions.",
  //             price: "₹199",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Cheeseburger",
  //             description:
  //               "A simple cheeseburger with melted cheese, pickles, and onions.",
  //             price: "₹129",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Quarter Pounder",
  //             description:
  //               "A hearty burger with a quarter-pound beef patty, cheese, pickles, and onions.",
  //             price: "₹179",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "McChicken",
  //             description: "Crispy chicken sandwich with mayo and lettuce.",
  //             price: "₹169",
  //             img: { BurgerFastFood },
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
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Medium Fries",
  //             description: "A medium portion of crispy fries.",
  //             price: "₹99",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Large Fries",
  //             description: "A large portion of crispy fries.",
  //             price: "₹129",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Curly Fries",
  //             description: "Spiraled fries with a seasoned coating.",
  //             price: "₹149",
  //             img: { BurgerFastFood },
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
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Sprite",
  //             description: "A crisp lemon-lime flavored soda.",
  //             price: "₹59",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Fanta",
  //             description: "A sweet orange-flavored soda.",
  //             price: "₹59",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Iced Coffee",
  //             description: "Cold brewed coffee with ice and milk.",
  //             price: "₹99",
  //             img: { BurgerFastFood },
  //           },
  //         ],
  //       },
  //       {
  //         category: "Desserts",
  //         products: [
  //           {
  //             name: "Apple Pie",
  //             description: "A warm, sweet apple filling in a flaky crust.",
  //             price: "₹79",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Sundae",
  //             description:
  //               "Vanilla ice cream with chocolate syrup and a cherry on top.",
  //             price: "₹129",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "McFlurry",
  //             description: "Vanilla ice cream mixed with your choice of candy.",
  //             price: "₹159",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Chocolate Chip Cookie",
  //             description: "A warm, gooey chocolate chip cookie.",
  //             price: "₹59",
  //             img: { BurgerFastFood },
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     name: "Texas Chicken",
  //     img: TexasChicken,
  //     menu: [
  //       {
  //         category: "Burgers",
  //         products: [
  //           {
  //             name: "Big Mac",
  //             description:
  //               "A classic burger with two all-beef patties, special sauce, lettuce, cheese, pickles, and onions.",
  //             price: "₹199",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Cheeseburger",
  //             description:
  //               "A simple cheeseburger with melted cheese, pickles, and onions.",
  //             price: "₹129",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Quarter Pounder",
  //             description:
  //               "A hearty burger with a quarter-pound beef patty, cheese, pickles, and onions.",
  //             price: "₹179",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "McChicken",
  //             description: "Crispy chicken sandwich with mayo and lettuce.",
  //             price: "₹169",
  //             img: { BurgerFastFood },
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
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Medium Fries",
  //             description: "A medium portion of crispy fries.",
  //             price: "₹99",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Large Fries",
  //             description: "A large portion of crispy fries.",
  //             price: "₹129",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Curly Fries",
  //             description: "Spiraled fries with a seasoned coating.",
  //             price: "₹149",
  //             img: { BurgerFastFood },
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
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Sprite",
  //             description: "A crisp lemon-lime flavored soda.",
  //             price: "₹59",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Fanta",
  //             description: "A sweet orange-flavored soda.",
  //             price: "₹59",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Iced Coffee",
  //             description: "Cold brewed coffee with ice and milk.",
  //             price: "₹99",
  //             img: { BurgerFastFood },
  //           },
  //         ],
  //       },
  //       {
  //         category: "Desserts",
  //         products: [
  //           {
  //             name: "Apple Pie",
  //             description: "A warm, sweet apple filling in a flaky crust.",
  //             price: "₹79",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Sundae",
  //             description:
  //               "Vanilla ice cream with chocolate syrup and a cherry on top.",
  //             price: "₹129",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "McFlurry",
  //             description: "Vanilla ice cream mixed with your choice of candy.",
  //             price: "₹159",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Chocolate Chip Cookie",
  //             description: "A warm, gooey chocolate chip cookie.",
  //             price: "₹59",
  //             img: { BurgerFastFood },
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     name: "Burger King",
  //     img: BurgerKing,
  //     menu: [
  //       {
  //         category: "Burgers",
  //         products: [
  //           {
  //             name: "Big Mac",
  //             description:
  //               "A classic burger with two all-beef patties, special sauce, lettuce, cheese, pickles, and onions.",
  //             price: "₹199",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Cheeseburger",
  //             description:
  //               "A simple cheeseburger with melted cheese, pickles, and onions.",
  //             price: "₹129",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Quarter Pounder",
  //             description:
  //               "A hearty burger with a quarter-pound beef patty, cheese, pickles, and onions.",
  //             price: "₹179",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "McChicken",
  //             description: "Crispy chicken sandwich with mayo and lettuce.",
  //             price: "₹169",
  //             img: { BurgerFastFood },
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
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Medium Fries",
  //             description: "A medium portion of crispy fries.",
  //             price: "₹99",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Large Fries",
  //             description: "A large portion of crispy fries.",
  //             price: "₹129",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Curly Fries",
  //             description: "Spiraled fries with a seasoned coating.",
  //             price: "₹149",
  //             img: { BurgerFastFood },
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
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Sprite",
  //             description: "A crisp lemon-lime flavored soda.",
  //             price: "₹59",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Fanta",
  //             description: "A sweet orange-flavored soda.",
  //             price: "₹59",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Iced Coffee",
  //             description: "Cold brewed coffee with ice and milk.",
  //             price: "₹99",
  //             img: { BurgerFastFood },
  //           },
  //         ],
  //       },
  //       {
  //         category: "Desserts",
  //         products: [
  //           {
  //             name: "Apple Pie",
  //             description: "A warm, sweet apple filling in a flaky crust.",
  //             price: "₹79",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Sundae",
  //             description:
  //               "Vanilla ice cream with chocolate syrup and a cherry on top.",
  //             price: "₹129",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "McFlurry",
  //             description: "Vanilla ice cream mixed with your choice of candy.",
  //             price: "₹159",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Chocolate Chip Cookie",
  //             description: "A warm, gooey chocolate chip cookie.",
  //             price: "₹59",
  //             img: { BurgerFastFood },
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     name: "Shaurma",
  //     img: Shaurma,
  //     menu: [
  //       {
  //         category: "Burgers",
  //         products: [
  //           {
  //             name: "Big Mac",
  //             description:
  //               "A classic burger with two all-beef patties, special sauce, lettuce, cheese, pickles, and onions.",
  //             price: "₹199",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Cheeseburger",
  //             description:
  //               "A simple cheeseburger with melted cheese, pickles, and onions.",
  //             price: "₹129",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Quarter Pounder",
  //             description:
  //               "A hearty burger with a quarter-pound beef patty, cheese, pickles, and onions.",
  //             price: "₹179",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "McChicken",
  //             description: "Crispy chicken sandwich with mayo and lettuce.",
  //             price: "₹169",
  //             img: { BurgerFastFood },
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
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Medium Fries",
  //             description: "A medium portion of crispy fries.",
  //             price: "₹99",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Large Fries",
  //             description: "A large portion of crispy fries.",
  //             price: "₹129",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Curly Fries",
  //             description: "Spiraled fries with a seasoned coating.",
  //             price: "₹149",
  //             img: { BurgerFastFood },
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
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Sprite",
  //             description: "A crisp lemon-lime flavored soda.",
  //             price: "₹59",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Fanta",
  //             description: "A sweet orange-flavored soda.",
  //             price: "₹59",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Iced Coffee",
  //             description: "Cold brewed coffee with ice and milk.",
  //             price: "₹99",
  //             img: { BurgerFastFood },
  //           },
  //         ],
  //       },
  //       {
  //         category: "Desserts",
  //         products: [
  //           {
  //             name: "Apple Pie",
  //             description: "A warm, sweet apple filling in a flaky crust.",
  //             price: "₹79",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Sundae",
  //             description:
  //               "Vanilla ice cream with chocolate syrup and a cherry on top.",
  //             price: "₹129",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "McFlurry",
  //             description: "Vanilla ice cream mixed with your choice of candy.",
  //             price: "₹159",
  //             img: { BurgerFastFood },
  //           },
  //           {
  //             name: "Chocolate Chip Cookie",
  //             description: "A warm, gooey chocolate chip cookie.",
  //             price: "₹59",
  //             img: { BurgerFastFood },
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  return (
    <>
      <div>
        <OfferAndCart />
        <OfferCategoryDiscountPage />
        <div className="popular-restaurants">
          <p>Popular Restaurants</p>
          <div className="food-brands">
            {restaurants.map((restaurant) => (
              <button
                key={restaurant.id}
                onClick={() => handleRestaurantClick(restaurant)}
              >
                <img src={restaurant.img} alt="" />
              </button>
            ))}
          </div>
        </div>
        {selectedRestaurant && (
          <div>
            <h1>{selectedRestaurant.name}</h1>
            <img src={selectedRestaurant.img} alt={selectedRestaurant.name} />
            <div>
              {selectedRestaurant.menu.map((CategoryItem, CategoryIndex) => (
                <div key={CategoryIndex}>
                  <h2>{CategoryItem.category}</h2>
                  <ul>
                    {CategoryItem.products.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <div>{item.name}</div>
                        <img src={item.img} alt={item.name} />
                        <div>{item.description}</div>
                        <div>{item.price}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductPage;
