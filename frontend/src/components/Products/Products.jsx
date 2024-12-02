import { useNavigate } from "react-router-dom";
import "./Products.css";
import { useAppContext } from "../../context/context";

const Products = ({ heading }) => {
  const navigate = useNavigate();
  const { homePageData } = useAppContext();

  const handleRestaurantClick = (restaurant) => {
    navigate("/product/" + restaurant._id);
  };

  console.log(homePageData);
  return (
    <>
      <div className="popular-restaurants-homePage">
        <p className="popular-restaurants-title-homePage">{heading}</p>
        <div className="food-brands-homePage">
          {homePageData?.restaurants.map((restaurant) => (
            <div
              className=" "
              key={restaurant._id}
              onClick={() => handleRestaurantClick(restaurant)}
            >
              <img
                src={restaurant.logo}
                alt=""
                className="food-brands-image-homePage"
              />
              <div className="popular-restaurant-name-homePage">
                {restaurant.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
