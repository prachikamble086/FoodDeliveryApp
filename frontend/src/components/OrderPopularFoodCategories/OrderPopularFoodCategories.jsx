import PopularCategoryFoodCard from "../PopularCategoryFoodCard/PopularCategoryFoodCard";
import { BurgerFastFood } from "../../constant";
import { Salads } from "../../constant";
import { Pasta } from "../../constant";
import { Breakfast } from "../../constant";
import { Soups } from "../../constant";
import { Pizza } from "../../constant";
import "./OrderPopularFoodCategories.css";
const OrderPopularFoodCategories = () => {
  return (
    <>
      <div className="order-popular-food-categories">
        <div className="order-restaurant">
          <p>Order.uk Popular Categories 🤩</p>
        </div>
        <div className="popular-category-food-card">
          <PopularCategoryFoodCard
            foodImage={BurgerFastFood}
            menu="Burgers & Fast food"
            numberOfRestaurants="21"
          />
          <PopularCategoryFoodCard
            foodImage={Salads}
            menu="Salads"
            numberOfRestaurants="32"
          />
          <PopularCategoryFoodCard
            foodImage={Pasta}
            menu="Pasta"
            numberOfRestaurants="4"
          />
          <PopularCategoryFoodCard
            foodImage={Pizza}
            menu="Pizza"
            numberOfRestaurants="32"
          />
          <PopularCategoryFoodCard
            foodImage={Breakfast}
            menu="Breakfast"
            numberOfRestaurants="4"
          />
          <PopularCategoryFoodCard
            foodImage={Soups}
            menu="Soups"
            numberOfRestaurants="32"
          />
        </div>
      </div>
    </>
  );
};

export default OrderPopularFoodCategories;
