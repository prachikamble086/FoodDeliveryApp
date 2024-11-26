import OfferAndCart from "../../components/OfferAndCart/OfferAndCart";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { Arrow, ArrowLeft } from "../../constant";
import PaymentMethod from "../../components/PaymentMethod/PaymentMethod";
import MobileDesignLogo from "../../components/MobileDesignLogo/MobileDesignLogo";
import "./PaymentPage.css";

const PaymentPage = () => {
  return (
    <>
      <div>
        <MobileDesignLogo />
        <OfferAndCart />
        <NavigationBar />
        <div className="choose-arrow">
          <div className="arrow-image-mobile">
            <img src={ArrowLeft} alt="" />
          </div>
          <div className="arrow-image">
            <img src={Arrow} alt="" />
          </div>
          <div className="choose-and-pay">Choose and Pay</div>
        </div>
        <PaymentMethod />
      </div>
    </>
  );
};

export default PaymentPage;
