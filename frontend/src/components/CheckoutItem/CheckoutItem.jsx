import React from "react";
import "./CheckoutItem.css";

const CheckoutItem = ({
  imageCheckoutPage,
  Item,
  NumberofItem,
  costOfItem,
}) => {
  return (
    <div className="checkout-item-and-info">
      <div className="checkout-container">
        <div className="checkout-image-container">
          <img src={imageCheckoutPage} alt={Item} className="item-icon-image" />
          <div className="checkout-text">
            <div>{Item}</div>
            <div>{NumberofItem}</div>
          </div>
        </div>
        <div>{costOfItem}</div>
      </div>
    </div>
  );
};

export default CheckoutItem;
