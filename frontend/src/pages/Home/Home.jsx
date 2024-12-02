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

const HomePage = () => {
  return (
    <>
      <div>
        <MobileDesignLogo />
        <OfferAndCart />
        <NavigationBar />
        {/* <TopBanner /> */}
        <TopBannerMobileDesign />
        <ExclusiveDeals />
        <OrderPopularFoodCategories />
        <Products />
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
