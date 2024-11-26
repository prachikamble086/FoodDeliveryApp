import OrderLogo from "../OrderLogo/OrderLogo";
import { PeronalizedOrderCard } from "../../constant";
import { PlayStoreBadges } from "../../constant";
import "./BottomBanner.css";
const BottomBanner = () => {
  return (
    <>
      <div className="personalized-and-instant-card">
        <div className="personalized-and-instant-card-details">
          <div>
            <img
              src={PeronalizedOrderCard}
              alt="PeronalizedOrderCard"
              className="personalized-and-instant-card-image"
            />
          </div>
          <div className="logo-text-and-card">
            <div className="logo-and-text">
              <OrderLogo width="200rem" height="100rem" />
              <p className="text-after-logo">ing is more</p>
            </div>
            <div className="personalized-and-instant-card-text">
              <p className="personalised">Personalised </p>
              <p>& Instant</p>
            </div>
            <p className="faster-ordering">
              Download the Order.uk app for faster ordering
            </p>
            <div>
              <img src={PlayStoreBadges} alt="PlayStoreBadges" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomBanner;
