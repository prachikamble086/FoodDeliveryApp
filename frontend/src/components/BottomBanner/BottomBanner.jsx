import OrderLogo from "../OrderLogo/OrderLogo";
import { PeronalizedOrderCard } from "../../constant";
import { PlayStoreBadges } from "../../constant";
import { appStore } from "../../constant";
import { googlePlay } from "../../constant";


import "./BottomBanner.css";
const BottomBanner = () => {
  return (
    <>
      <div className="personalized-and-instant-card">
        <div className="personalized-and-instant-card-details">
          <div className="logo-and-text-mobile">
            <OrderLogo width="150rem" height="50rem" />
            <p className="text-after-logo-mobile">ing is more</p>
          </div>
          <div>
            <img
              src={PeronalizedOrderCard}
              alt="PeronalizedOrderCard"
              className="personalized-and-instant-card-image"
            />
          </div>
          <div className="logo-text-and-card">
            <div className="logo-and-text">
              <OrderLogo width="200rem" height="auto" />
              <p className="text-after-logo">ing is more</p>
            </div>
            <div className="personalized-and-instant-card-text">
              <span className="personalised">Personalised </span>
              <span className="instant-logo-text">& Instant</span>
            </div>
            <p className="faster-ordering-mobile">
              Download the Order.uk app for faster ordering
            </p>
            <p className="faster-ordering">
              Download the Order.uk app for faster ordering
            </p>
            <div className="app-badges">
              <img src={googlePlay} alt="googlePlay" className="googlePlay-image" />
              <img src={appStore} alt="appStore" className="appStore-image"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomBanner;
