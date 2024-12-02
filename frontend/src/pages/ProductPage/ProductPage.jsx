import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import MobileDesignLogo from "../../components/MobileDesignLogo/MobileDesignLogo";
import OfferAndCart from "../../components/OfferAndCart/OfferAndCart";
import ProductPageBanner from "../../components/ProductPageBanner/ProductPageBanner";
import OfferAndSearch from "../../components/OfferAndSearch/OfferAndSearch";
import ProductPageMenuBar from "../../components/ProductPageMenuBar/ProductPageMenuBar";
import FirstOrderProductPage from "../../components/FirstOrderProductPage/FirstOrderProductPage";
import { Plus } from "../../constant";
import "./ProductPage.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import InformationCard from "../../components/InformationCard/InformationCard";
import CustomerReviews from "../../components/CustomerReviews/CustomerReviews";
import { useParams } from "react-router-dom";
import Map from "../../components/Map/Map";
import { useAppContext } from "../../context/context";
import {
  getProductData as getRestaurantData,
  getRestaurantMenu,
  postCart,
} from "../../services/networkCalls";
import Products from "../../components/Products/Products";

// import Map from "../../components/Map/Map";

const ProductPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { restaurantId } = useParams();

  const {
    restaurantMenu,
    restaurantData,
    setRestaurantData,
    setRestaurantMenu,
    setCart,
    user,
  } = useAppContext();

  async function loadInitialData() {
    const restaurant = await getRestaurantData(restaurantId);
    const restaurantMenuData = await getRestaurantMenu(restaurantId);
    setRestaurantMenu(restaurantMenuData);
    setRestaurantData(restaurant);
    setIsLoading(false);
  }

  useEffect(() => {
    loadInitialData();
  }, []);

  const addItemtoCart = async (itemId) => {
    const postCartData = await postCart(user._id, itemId);
    setCart(postCartData);
  };

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div>
        <MobileDesignLogo />
        <OfferAndCart />
        <NavigationBar />
        <ProductPageBanner />
        <OfferAndSearch />
        <ProductPageMenuBar />
        <FirstOrderProductPage />
        <div>
          {restaurantData.restaurant.categories.map(
            (category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="menu-category">{category}</h2>
                <ul className="restaurant-menu-list">
                  {restaurantMenu.menuItems.map((foodItem, itemIndex) =>
                    foodItem.category == category ? (
                      <li key={itemIndex} className="menu-list">
                        <div className="menu-item-details">
                          <div className="menu-item-name-description-price">
                            <div className="menu-item-name">
                              {foodItem.name}
                            </div>
                            <div className="menu-item-description">
                              {foodItem.description}
                            </div>
                            <div className="menu-item-price">
                              {foodItem.price}
                            </div>
                          </div>
                          <div className="menu-item-image-and-add-button">
                            <img
                              src={foodItem.img}
                              alt={foodItem.name}
                              className="menu-item-image"
                            />
                            <button className="menu-item-button">
                              <img
                                src={Plus}
                                alt="Add"
                                className="menu-item-add-button"
                                onClick={() => addItemtoCart(foodItem._id)}
                              />
                            </button>
                          </div>
                        </div>
                      </li>
                    ) : null
                  )}
                </ul>
              </div>
            )
          )}
        </div>

        <Map />

        <Products heading="Similar Restaurants" />
        <InformationCard />
        <CustomerReviews />
        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
