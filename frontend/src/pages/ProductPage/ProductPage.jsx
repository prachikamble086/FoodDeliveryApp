import { useState } from "react";
import { useLocation } from "react-router-dom";
import { restaurant } from "../../mock"; // Assuming the restaurant data is in mock.js
import OrderLogo from "../../components/OrderLogo/OrderLogo";
import Footer from "../../components/Footer/Footer";
import MobileDesignLogo from "../../components/MobileDesignLogo/MobileDesignLogo";
import OfferAndCart from "../../components/OfferAndCart/OfferAndCart";
import ProductPageBanner from "../../components/ProductPageBanner/ProductPageBanner";
import OfferAndSearch from "../../components/OfferAndSearch/OfferAndSearch";
import ProductPageMenuBar from "../../components/ProductPageMenuBar/ProductPageMenuBar";
import FirstOrderProductPage from "../../components/FirstOrderProductPage/FirstOrderProductPage";
import { Plus } from "../../constant";
import InformationCard from "../../components/InformationCard/InformationCard";
import CustomerReviews from "../../components/CustomerReviews/CustomerReviews";
import "./ProductPage.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const ProductPage = () => {
  const location = useLocation();
  const initialRestaurant = location.state?.selectedRestaurant || null;

  const [selectedRestaurant, setSelectedRestaurant] =
    useState(initialRestaurant);

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

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
          {selectedRestaurant && (
            <div>
              <div>
                <h1>{selectedRestaurant.name}</h1>
                {selectedRestaurant.menu.map((CategoryItem, CategoryIndex) => (
                  <div key={CategoryIndex}>
                    <h2 className="menu-category">{CategoryItem.category}</h2>
                    <ul className="restaurant-menu-list">
                      {CategoryItem.products.map((item, itemIndex) => (
                        <li key={itemIndex} className="menu-list">
                          <div className="menu-item-details">
                            <div className="menu-item-name-description-price">
                              <div className="menu-item-name">{item.name}</div>
                              <div className="menu-item-description">
                                {item.description}
                              </div>
                              <div className="menu-item-price">
                                {item.price}
                              </div>
                            </div>
                            <div className="menu-item-image-and-add-button">
                              <img
                                src={item.img}
                                alt={item.name}
                                className="menu-item-image"
                              />
                              <button className="menu-item-button">
                                <img
                                  src={Plus}
                                  alt=""
                                  className="menu-item-add-button"
                                />
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <InformationCard />
        <CustomerReviews />
        {/* <Map/> */}

        <div className="popular-restaurants">
          <p className="similar-restaurants-title">Similar Restaurants</p>
          <div className="food-brands">
            {restaurant.map((restaurant) => (
              <button
                className="food-brands-buttons"
                key={restaurant.id}
                onClick={() => handleRestaurantClick(restaurant)}
              >
                <img
                  src={restaurant.brandImg}
                  alt=""
                  className="food-brands-button-image"
                />
                <div className="popular-restaurant-name">{restaurant.name}</div>
              </button>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
