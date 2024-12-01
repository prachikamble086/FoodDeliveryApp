import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MobileDesignLogo from "../MobileDesignLogo/MobileDesignLogo";
import OfferAndCart from "../OfferAndCart/OfferAndCart";
import NavigationBar from "../NavigationBar/NavigationBar";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./CheckoutPage.css";
import {
  Arrow,
  BurgerKing,
  LocationCkeckoutPage,
  ArrowLeft,
  Plus,
} from "../../constant";
import CheckoutItem from "../CheckoutItem/CheckoutItem";
import Footer from "../Footer/Footer";
import { productPage } from "../../mock";

const CheckoutPage = () => {
  const location = useLocation();
  const initialRestaurant = location.state?.selectedRestaurant || productPage;

  const [selectedRestaurant, setSelectedRestaurant] =
    useState(initialRestaurant);
  const [showMenu, setShowMenu] = useState(false);

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant({
      ...restaurant,
      menu: productPage.menu,
    });
    setShowMenu(true);
  };

  const navigate = useNavigate();

  const handleDeliveryAddress = () => {
    navigate("/checkout/address");
  };

  const menuToDisplay = selectedRestaurant?.menu || productPage.menu;

  return (
    <>
      <MobileDesignLogo />
      <OfferAndCart />
      <NavigationBar />
      <div className="choose-arrow">
        <div className="arrow-image-mobile">
          <img src={ArrowLeft} alt="Arrow Left" />
        </div>
        <div className="arrow-image">
          <img src={Arrow} alt="Arrow" />
        </div>
        <div className="your-order-details">Your Order Details</div>
      </div>
      <div className="deliver-address-checkout-page">
        <div className="checkout-item">
          <div>
            <CheckoutItem
              imageCheckoutPage={BurgerKing}
              Item="Cheese Burger"
              NumberofItem="1x"
              costOfItem="180"
            />
            <hr />
          </div>
          <CheckoutItem
            imageCheckoutPage={BurgerKing}
            Item="Cheese Burger"
            NumberofItem="1x"
            costOfItem="180"
          />
          <hr />
          <CheckoutItem
            imageCheckoutPage={BurgerKing}
            Item="Cheese Burger"
            NumberofItem="1x"
            costOfItem="180"
          />
        </div>

        <div className="delivery-adress">
          <button
            className="delivery-address-and-info"
            onClick={handleDeliveryAddress}
          >
            <div className="delivery-cotainer">
              <div className="delivery-image-cotainer">
                <img
                  src={LocationCkeckoutPage}
                  alt="Location Icon"
                  className="checkout-page-icon-image"
                />
              </div>
              <div className="deliver-text">
                <div>Delivery Address</div>
                <div>45, Green Street, Sector 12...</div>
              </div>
            </div>
            <div>{">"}</div>
          </button>
          <div className="item-and-cost">
            <hr />
            <div>
              <div className="item-and-cost">
                <div>Item</div>
                <div>230</div>
              </div>
              <div className="sales-number">
                <div>Sales Tax</div>
                <div>10</div>
              </div>
              <hr />
              <div className="subtotal-cost">
                <div>{`Subtotal (3 items)`}</div>
                <div>240</div>
              </div>
            </div>
            <button className="choose-payment-method-button">
              Choose Payment Method
            </button>
          </div>
        </div>
      </div>
      <div className="popular-and-similar-restaurants">
        {showMenu && (
          <div>
            <h1>{selectedRestaurant.name}</h1>
            {menuToDisplay?.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="menu-category">{category.category}</h2>
                <ul className="restaurant-menu-list">
                  {category.products.map((item, itemIndex) => (
                    <li key={itemIndex} className="menu-list">
                      <div className="menu-item-details">
                        <div className="menu-item-name-description-price">
                          <div className="menu-item-name">{item.name}</div>
                          <div className="menu-item-description">
                            {item.description}
                          </div>
                          <div className="menu-item-price">{item.price}</div>
                        </div>
                        <div className="menu-item-image-and-add-button">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="menu-item-image"
                          />
                          <button className="menu-item-button">
                            <img
                              src={Plus}
                              alt="Add"
                              className="menu-item-add-button"
                            />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <div className="popular-restaurants">
          <p className="similar-restaurants-title">Similar Restaurants</p>
          <div className="food-brands">
            {productPage.similarRestaurants.map((restaurant) => (
              <button
                className="food-brands-buttons"
                key={restaurant._id}
                onClick={() => handleRestaurantClick(restaurant)}
              >
                <img
                  src={restaurant.logo}
                  alt={restaurant.name}
                  className="food-brands-button-image"
                />
                <div className="popular-restaurant-name">{restaurant.name}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CheckoutPage;
