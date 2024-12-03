import { useLocation } from "react-router-dom";
import CheckoutItem from "../CheckoutItem/CheckoutItem";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const { state } = useLocation();
  const cartDetails = state?.cart;

  if (!cartDetails || !cartDetails.items) {
    return <div>Error: Cart details not found or your cart is empty!</div>;
  }

  const { items, quantity } = cartDetails;

  return (
    <div className="checkout-page">
      <h1>Your Cart</h1>
      <div className="checkout-items">
        {items.map((item, index) => (
          <CheckoutItem
            key={item._id}
            imageCheckoutPage={item.img}
            Item={item.name}
            NumberofItem={${quantity[index]}x}
            costOfItem={$${item.price}}
          />
        ))}
      </div>
    </div>
  );
};



export default CheckoutPage;