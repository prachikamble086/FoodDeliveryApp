import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./CheckoutPage.css";
import { Plus } from "../../constant";
import { productPage } from "../../mock";

const PopularAndSimilarRestaurants = () => {
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

  const menuToDisplay = selectedRestaurant?.menu || productPage.menu;
  return (
    <>
      <div className="popular-and-similar-restaurants">
        {showMenu && (
          <div>
            <h1>{selectedRestaurant.name}</h1>
            {menuToDisplay?.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="menu-category">{category.category}</h2>
                <ul className="restaurant-menu-list">
                  {category.products.map((item, itemIndex) => {
                    console.log({ item });

                    return (
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
                    );
                  })}
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
    </>
  );
};

export default PopularAndSimilarRestaurants;
