import React from "react";
import { useNavigate } from "react-router-dom";
import { restaurant } from "../../mock";

const RestaurantButtons = () => {
  const navigate = useNavigate();

  const handleRestaurantClick = (restaurant) => {
    navigate("/product", { state: { selectedRestaurant: restaurant } });
  };

  return (
    <>
      <div className="popular-restaurants">
        <p className="popular-restaurants-title">Popular Restaurants</p>
        <div className="food-brands">
          {restaurant.map((restaurant) => (
            <button
              className="food-brands-buttons"
              key={restaurant.id}
              onClick={() => handleRestaurantClick(restaurant)}
            >
              <img src={restaurant.brandImg} alt="" />
              <div className="popular-restaurant-name">{restaurant.name}</div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantButtons;
