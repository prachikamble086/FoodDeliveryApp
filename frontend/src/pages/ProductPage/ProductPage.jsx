import { useState } from "react";
import { useLocation } from "react-router-dom";
import { productPage } from "../../mock"; // Mock data
import Footer from "../../components/Footer/Footer";
import MobileDesignLogo from "../../components/MobileDesignLogo/MobileDesignLogo";
import OfferAndCart from "../../components/OfferAndCart/OfferAndCart";
import ProductPageBanner from "../../components/ProductPageBanner/ProductPageBanner";
import OfferAndSearch from "../../components/OfferAndSearch/OfferAndSearch";
import ProductPageMenuBar from "../../components/ProductPageMenuBar/ProductPageMenuBar";
import { homePageData } from "../../mock";
import FirstOrderProductPage from "../../components/FirstOrderProductPage/FirstOrderProductPage";
import { Plus } from "../../constant";
import "./ProductPage.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import InformationCard from "../../components/InformationCard/InformationCard";
import CustomerReviews from "../../components/CustomerReviews/CustomerReviews";
// import Map from "../../components/Map/Map";

const ProductPage = () => {
  const location = useLocation();
  const initialRestaurant = location.state?.selectedRestaurant || productPage;

  const [selectedRestaurant, setSelectedRestaurant] =
    useState(initialRestaurant);

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant({
      ...restaurant,
      menu: productPage.menu,
    });
  };

  const menuToDisplay = selectedRestaurant?.menu || productPage.menu;

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
          <h1>{selectedRestaurant.name}</h1>
          {menuToDisplay?.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="menu-category">{category.category}</h2>
              <ul className="restaurant-menu-list">
                {category.products.map((item, itemIndex) => (
                  <li key={itemIndex} className="menu-list">
                    <div className="menu-item-details">
                      <div className="menu-item-name-description-price">
                        <div className="menu-item-name">{item.name}</div>
                        <div className="menu-item-description">
                          {item.description}
                        </div>
                        <div className="menu-item-price">{item.price}</div>
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
                            alt="Add"
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

        {/* <Map /> */}
        <div className="popular-restaurants">
          <p className="similar-restaurants-title">Similar Restaurants</p>
          <div className="food-brands">
            {productPage.similarRestaurants.map((restaurant) => (
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
        <InformationCard />
        <CustomerReviews />
        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
