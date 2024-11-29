import { useState } from "react";
import { restaurant } from "../../mock";
import "./Products.css";
const Products = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
    // call navigate
  };

  return (
    <>
      <div className="popular-restaurants">
        <p className="popular-restaurants-title">Popular Restaurants</p>
        <div className="food-brands">
          {restaurant.map((restaurant) => (
            <button
              className="food-brands-buttons"
              key={restaurant._id}
              onClick={() => handleRestaurantClick(restaurant)}
            >
              <img src={restaurant.logo} alt="" />
              <div className="popular-restaurant-name">{restaurant.name}</div>
            </button>
          ))}
        </div>
      </div>
      {selectedRestaurant && (
        <div>
          <h1>{selectedRestaurant.name}</h1>
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
    </>
  );
};

export default Products;
