import OfferAndCart from "../../components/OfferAndCart/OfferAndCart";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import ExclusiveDeals from "../../components/ExclusiveDeals/ExclusiveDeals";
import OrderPopularFoodCategories from "../../components/OrderPopularFoodCategories/OrderPopularFoodCategories";
import TopBannerMobileDesign from "../../components/TopBannerMobileDesign/TopBannerMobileDesign";
import BottomBanner from "../../components/BottomBanner/BottomBanner";
import KnowMoreCard from "../../components/KnowMoreCard/KnowMoreCard.JSX";
import Products from "../../components/Products/Products";
import Footer from "../../components/Footer/Footer";
import MobileDesignLogo from "../../components/MobileDesignLogo/MobileDesignLogo";
import JoinApp from "../../components/JoinApp/JoinApp";
import NumberInfo from "../../components/NumberInfo/NumberInfo";
import CustomerReviews from "../../components/CustomerReviews/CustomerReviews";
import Map from "../../components/Map/Map";
import { useState } from "react";
import { ShoppingBasket } from "../../constant";
import Cart from "../../components/Cart/Cart";

const HomePage = () => {
  const [isCartVisible, setIsCartVisible] = useState(false); // State to manage cart visibility

  return (
    <>
      <div>
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
        </button>
        {isCartVisible && <Cart />}

        <NavigationBar />
        {/* <TopBanner /> */}
        <TopBannerMobileDesign />
        <ExclusiveDeals />
        <OrderPopularFoodCategories />
        <Products heading="Popular Restaurants" />
        <BottomBanner />
        <JoinApp />
        <KnowMoreCard />
        <CustomerReviews />
        <Map />
        <NumberInfo />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
