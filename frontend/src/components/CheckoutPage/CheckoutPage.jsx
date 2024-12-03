import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import MobileDesignLogo from "../MobileDesignLogo/MobileDesignLogo";
import OfferAndCart from "../OfferAndCart/OfferAndCart";
import NavigationBar from "../NavigationBar/NavigationBar";
import CheckoutItem from "../CheckoutItem/CheckoutItem";
import { useAppContext } from "../../context/context";
import { getCartData, getRestaurantMenu } from "../../services/networkCalls"; // Assuming network calls are properly set up
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const { cartId } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation(); // For receiving cart data if passed via state
  const { user, setCart } = useAppContext();

  const [isLoading, setIsLoading] = useState(true);
  const [cartDetails, setCartDetails] = useState(state?.cart || null);
  const [restaurantDetails, setRestaurantDetails] = useState(null);

  const fetchCartData = async () => {
    if (!cartDetails) {
      const cartData = await getCartData(user._id);
      setCartDetails(cartData);
      setCart(cartData);
      const restaurantData = await getRestaurantMenu(cartData.restaurantId);
      setRestaurantDetails(restaurantData);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchCartData();
  }, [cartId, user]);

  const handleDeliveryAddress = () => {
    navigate("/checkout/address");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const { items, quantity } = cartDetails || {};
  const { name: restaurantName, categories } = restaurantDetails || {};

  return (
    <div className="checkout-page-container">
      <MobileDesignLogo />
      <OfferAndCart />
      <NavigationBar />

      <div className="order-details-section">
        <div className="order-header">
          <h1>Your Order Details</h1>
        </div>

        <div className="checkout-items">
          {items.map((item, index) => (
            <CheckoutItem
              key={item._id}
              imageCheckoutPage={item.img}
              Item={item.name}
              NumberofItem={`${quantity[index]}x`}
              costOfItem={`$${item.price}`}
            />
          ))}
        </div>

        <div className="delivery-address-section">
          <button
            className="delivery-address-button"
            onClick={handleDeliveryAddress}
          >
            <div>Delivery Address</div>
            <div>{user?.address || "Add Address"}</div>
          </button>
        </div>

        <button className="payment-button">Choose Payment Method</button>
      </div>

      <div className="restaurant-menu-section">
        <h2>{restaurantName}</h2>
        {categories?.map((category, index) => (
          <div key={index}>
            <h3>{category}</h3>
            <ul className="menu-list">
              {category.menuItems?.map((menuItem, idx) => (
                <li key={idx} className="menu-item">
                  <div>
                    <p>{menuItem.name}</p>
                    <p>{menuItem.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
