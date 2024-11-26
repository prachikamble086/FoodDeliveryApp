import React from "react";
import FirstOrderProductCard from "../FirstOrderProductCard/FirstOrderProductCard";
import { FirstOrder, IcecreamDiscount, VeganDiscount } from "../../constant";
import "./FirstOrderProductPage.css";
const FirstOrderProductPage = () => {
  return (
    <>
      <div className="first-order-product-card">
        <FirstOrderProductCard
          cardImage={FirstOrder}
          discount="-20%"
          restaurantName="First Order Discount"
          className="First Order Discount"
        />
        <FirstOrderProductCard
          cardImage={VeganDiscount}
          discount="-20%"
          restaurantName="Vegan Discount"
          className="Vegan Discount"
        />
        <FirstOrderProductCard
          cardImage={IcecreamDiscount}
          discount="-100%"
          restaurantName="Free ice Cream Offer"
          className="Free ice Cream Offer"
        />
      </div>
    </>
  );
};

export default FirstOrderProductPage;
