import { OrderSucessfullBadge } from "../../constant";
import Footer from "../Footer/Footer";
import MobileDesignLogo from "../MobileDesignLogo/MobileDesignLogo";
import NavigationBar from "../NavigationBar/NavigationBar";
import OfferAndCart from "../OfferAndCart/OfferAndCart";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./OrderSuccessful.css";
const OrderSuccessful = () => {
  const noAction = () => {};

  return (
    <>
      <div>
        <MobileDesignLogo />
        <OfferAndCart />
        <NavigationBar />
        <div className="order-text-and-menu-list">
          <div className="order-text">
            <img
              src={OrderSucessfullBadge}
              alt=""
              className="order-sucessfull-badge"
            />
            <div className="order-sucessfull-text">
              Order Placed Successfully
            </div>
            <div className="order-sucessfull-para">
              Your order is confirmed and on its way. Get set to savor your
              chosen delights!
            </div>
          </div>
          <div className="ordered-menu-list">
            <div>Menu Item 1</div>
            <div>Menu Item 2</div>
            <div>Menu Item 3</div>
            {/* <PrimaryButton
              onclick={noAction}
              buttonContent="Back to Home"
              className="order-sucessful-button"
            /> */}
            <button className="order-sucessful-button">Back to Home</button>
          </div>
        </div>
        <div className="footer-order-list">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default OrderSuccessful;
