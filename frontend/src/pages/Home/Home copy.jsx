import { homePageData } from "../../mock";
import TopBanner from "../../components/TopBanner/TopBanner";
import OfferAndCart from "../../components/OfferAndCart/OfferAndCart";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import ExclusiveDeals from "../../components/ExclusiveDeals/ExclusiveDeals";
import OrderPopularFoodCategories from "../../components/OrderPopularFoodCategories/OrderPopularFoodCategories";
import BottomBanner from "../../components/BottomBanner/BottomBanner";
import { PartnerWithUsImage } from "../../constant";
import { SingupRiderImage } from "../../constant";
import GetStarted from "../../components/GetStarted/GetStarted";
import KnowMoreCard from "../../components/KnowMoreCard/KnowMoreCard.JSX";
import AppStatistics from "../../components/AppStatistics/AppStatistics";
import Products from "../../components/Products/Products";

const HomePage = () => {
  return (
    <>
      <div>
        <OfferAndCart />
        <NavigationBar />
        {/* <TopBanner /> */}
        <ExclusiveDeals />
        <OrderPopularFoodCategories />
        <BottomBanner />
        <GetStarted
          signupWithUsImage={SingupRiderImage}
          header="Earn more with lower fees"
          method="business"
          selection="Partner"
        />
        <GetStarted
          signupWithUsImage={PartnerWithUsImage}
          header="Avail exclusive perks"
          method="rider"
          selection="Ride"
        />
        <KnowMoreCard />
        <div className="app-statistics">
          <AppStatistics number="546" info="Registered Riders" />
          <AppStatistics number="789,900" info="Orders Delivered" />
          <AppStatistics number="690" info="Restaurants Partnered" />
          <AppStatistics number="17,457+" info="Food items" />
        </div>
        <Products />
        {/* <ProductPage />  */}
        {/* <div className="popular-restaurants">
          <p>Popular Restaurants</p>
          <div className="food-brands">
            {restaurants.map((restaurant) => (
              <button
                key={restaurant.id}
                onClick={() => handleRestaurantClick(restaurant)}
              >
                <img src={restaurant.img} alt="" />
              </button>
            ))}
          </div>
        </div>
        {selectedRestaurant && (
          <div>
            <h1>{selectedRestaurant.name}</h1>
            <img src={selectedRestaurant.img} alt={selectedRestaurant.name} />
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
        )} */}

        {/* <div>
          <div className="popular-restaurants">
            <p>Popular Restaurants</p>
            <div className="food-brands">
              {restaurants.map((restaurant) => (
                <button
                  key={restaurant.id}
                  onClick={() => handleRestaurantClick(restaurant)}
                >
                  <img src={restaurant.img} alt={restaurant.name} />
                </button>
              ))}
            </div>
          </div>

          <ProductPage selectedRestaurant={selectedRestaurant} />
        </div>  */}
        {/* <Footer />  */}
      </div>
    </>
  );
};

export default HomePage;
