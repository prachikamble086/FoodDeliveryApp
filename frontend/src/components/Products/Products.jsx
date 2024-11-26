import { useNavigate } from "react-router-dom";
import { restaurant } from "../../mock";
import "./Products.css";

const Products = () => {
  const navigate = useNavigate();

  const handleRestaurantClick = (restaurant) => {
    navigate("/product", { state: { selectedRestaurant: restaurant } });
  };

  return (
    <>
      <div className="popular-restaurants-homePage">
        <p className="popular-restaurants-title-homePage">
          Popular Restaurants
        </p>
        <div className="food-brands-homePage">
          {restaurant.map((restaurant) => (
            <button
              className=" "
              key={restaurant.id}
              onClick={() => handleRestaurantClick(restaurant)}
            >
              <img
                src={restaurant.brandImg}
                alt=""
                className="food-brands-image-homePage"
              />
              <div className="popular-restaurant-name-homePage">
                {restaurant.name}
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
