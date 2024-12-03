import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import MobileDesignLogo from "../../components/MobileDesignLogo/MobileDesignLogo";
import OfferAndCart from "../../components/OfferAndCart/OfferAndCart";
import ProductPageBanner from "../../components/ProductPageBanner/ProductPageBanner";
import OfferAndSearch from "../../components/OfferAndSearch/OfferAndSearch";
import ProductPageMenuBar from "../../components/ProductPageMenuBar/ProductPageMenuBar";
import FirstOrderProductPage from "../../components/FirstOrderProductPage/FirstOrderProductPage";
import { ForwardButton, Plus, ShoppingBasket } from "../../constant";
import "./ProductPage.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import InformationCard from "../../components/InformationCard/InformationCard";
import CustomerReviews from "../../components/CustomerReviews/CustomerReviews";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../context/Context";
import {
  getCartData,
  getProductData as getRestaurantData,
  getRestaurantMenu,
  postCart,
} from "../../services/networkCalls";
import Products from "../../components/Products/Products";
import Cart from "../../components/Cart/Cart";

const ProductPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { userId, restaurantId } = useParams();
  const {
    restaurantMenu,
    restaurantData,
    setRestaurantData,
    setRestaurantMenu,
    setCart,
    user,
  } = useAppContext();
  const [isCartVisible, setIsCartVisible] = useState(false);

  async function loadInitialData() {
    const restaurant = await getRestaurantData(restaurantId);
    const restaurantMenuData = await getRestaurantMenu(restaurantId);
    const cartMenuData = await getCartData(userId);
    setRestaurantMenu(restaurantMenuData);
    setRestaurantData(restaurant);
    setCart(cartMenuData);
    setIsLoading(false);
  }

  useEffect(() => {
    loadInitialData();
  }, []);

  const addItemToCart = async (itemId) => {
    const postCartData = await postCart(user._id, itemId);
    setCart(postCartData.cart);
    setIsCartVisible(true);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-page-container">
      <div className="product-content">
        <div className="menu-section">
          <div className="location-cart-tab">
            <MobileDesignLogo />
            <OfferAndCart />

            <button
              className="cart-button"
              onClick={() => setIsCartVisible(!isCartVisible)}
            >
              <div className="cart-image">
                <img
                  className="shopping-basket"
                  src={ShoppingBasket}
                  alt="ShoppingBasket"
                />
                <p>My cart</p>
              </div>
              <img
                className="forward-button"
                src={ForwardButton}
                alt="ForwardButton"
              />
            </button>
          </div>

          {isCartVisible && <Cart />}

          <NavigationBar />

          <ProductPageBanner />
          <OfferAndSearch />
          <ProductPageMenuBar />
          <FirstOrderProductPage />
          <div>
            {restaurantData?.restaurant?.categories?.map(
              (category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="menu-category">{category}</h2>
                  <ul className="restaurant-menu-list">
                    {restaurantMenu?.menuItems?.map((foodItem, itemIndex) =>
                      foodItem.category === category ? (
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
                                  onClick={() => addItemToCart(foodItem._id)}
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
          <Products />
          <CustomerReviews />
          <InformationCard />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
