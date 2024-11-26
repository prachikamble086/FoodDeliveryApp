import "./PopularCategoryFoodCard.css";
const PopularCategoryFoodCard = ({ foodImage, menu, numberOfRestaurants }) => {
  return (
    <>
      <div className="food-item-card">
        <img src={foodImage} alt="" className="food-item-card-image" />
        <div className="food-item-card-menu-info">
          <p className="food-item-card-menu">{menu}</p>
          <div className="number-of-restaurants">
            {numberOfRestaurants} Restaurants
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCategoryFoodCard;
