import PopularCategoryFoodCard from "../PopularCategoryFoodCard/PopularCategoryFoodCard";
import { BurgerFastFood } from "../../constant";
import { Salads } from "../../constant";
import { Pasta } from "../../constant";
import { Breakfast } from "../../constant";
import { Soups } from "../../constant";
import { Pizza } from "../../constant";
import "./OrderPopularFoodCategories.css";
import { homePageData } from "../../mock";
const OrderPopularFoodCategories = () => {
  return (
    <>
      <div className="order-popular-food-categories">
        <div className="order-restaurant">
          <p>{homePageData.popularFoodCategoriesData.title}</p>
        </div>
        <div className="popular-category-food-card">
          <PopularCategoryFoodCard
            foodImage={BurgerFastFood}
            menu={homePageData.popularFoodCategoriesData.categories[0].menu}
            numberOfRestaurants={
              homePageData.popularFoodCategoriesData.categories[0]
                .numberOfRestaurants
            }
          />
          <PopularCategoryFoodCard
            foodImage={Salads}
            menu={homePageData.popularFoodCategoriesData.categories[1].menu}
            numberOfRestaurants={
              homePageData.popularFoodCategoriesData.categories[1]
                .numberOfRestaurants
            }
          />
          <PopularCategoryFoodCard
            foodImage={Pasta}
            menu={homePageData.popularFoodCategoriesData.categories[2].menu}
            numberOfRestaurants={
              homePageData.popularFoodCategoriesData.categories[2]
                .numberOfRestaurants
            }
          />
          <PopularCategoryFoodCard
            foodImage={Pizza}
            menu={homePageData.popularFoodCategoriesData.categories[3].menu}
            numberOfRestaurants={
              homePageData.popularFoodCategoriesData.categories[3]
                .numberOfRestaurants
            }
          />
          <PopularCategoryFoodCard
            foodImage={Breakfast}
            menu={homePageData.popularFoodCategoriesData.categories[4].menu}
            numberOfRestaurants={
              homePageData.popularFoodCategoriesData.categories[4]
                .numberOfRestaurants
            }
          />
          <PopularCategoryFoodCard
            foodImage={Soups}
            menu={homePageData.popularFoodCategoriesData.categories[5].menu}
            numberOfRestaurants={
              homePageData.popularFoodCategoriesData.categories[5]
                .numberOfRestaurants
            }
          />
        </div>
      </div>
    </>
  );
};

export default OrderPopularFoodCategories;
