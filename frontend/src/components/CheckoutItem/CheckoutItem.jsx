import React from "react";
import "./CheckoutItem.css";
const CheckoutItem = ({
  imageCheckoutPage,
  Item,
  NumberofItem,
  costOfItem,
}) => {
  return (
    <div>
      <div className="checkout-item-and-info">
        <div className="checkout-cotainer">
          <div className="checkout-image-cotainer">
            <img src={imageCheckoutPage} alt="" className="item-icon-image" />
            <div className="checkout-text">
              <div>{Item}</div>
              <div>{NumberofItem}</div>
            </div>
          </div>
        </div>
        <div>{costOfItem}</div>
      </div>
    </div>
  );
};

export default CheckoutItem;
