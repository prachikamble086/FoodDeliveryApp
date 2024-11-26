import { NUMBER1 } from "../../constant";
import { NUMBER2 } from "../../constant";
import { NUMBER3 } from "../../constant";
import { IMAGE1 } from "../../constant";
import { IMAGE2 } from "../../constant";
import BannerOrderComponent from "../BannerOrderComponent/BannerOrderComponent";
import "./TopBanner.css";
const TopBanner = () => {
  return (
    <>
      <div className="fast-and-fresh-card">
        <div className="details-and-location">
          <p>Order Restaurant food, takeaway and groceries.</p>
          <p>Feast Your Senses,</p>
          <p>Fast and Fresh</p>
          <p>Enter a postcode to see what we deliver</p>
          <div className="location-input-button">
            <input type="text" placeholder="e.g. EC4R 3TE" />
            <button>Search</button>
          </div>
        </div>
        <div className="overlap-images">
          <img src={IMAGE1} alt="image1" />
          <img src={IMAGE2} alt="image2" />
        </div>
        <div className="banner-components">
          <BannerOrderComponent
            numberImage={NUMBER1}
            topText="We’ve Received your order!"
            bottomText="Awaiting Restaurant acceptance"
          />
          <BannerOrderComponent
            numberImage={NUMBER2}
            topText="Order Accepted! ✅"
            bottomText="Your order will be delivered shortly"
          />
          <BannerOrderComponent
            numberImage={NUMBER3}
            topText="Your rider's nearby 🎉"
            bottomText="They are almost there - get ready"
          />
        </div>
      </div>
    </>
  );
};

export default TopBanner;
