import "./TopBannerMobileDesign.css";
import { NextPage } from "../../constant";
const TopBannerMobileDesign = () => {
  return (
    <>
      <div className="top-banner-mobile-design">
        <p className="heading1">
          Order Restaurant food, takeaway and groceries.
        </p>
        <p className="heading2">Feast Your Senses,</p>
        <p className="heading3"> Fast and Fresh</p>
        <p className="heading4">Enter a postcode to see what we deliver</p>
        <div className="mobile-design-location-input-button">
          <input
            type="text"
            placeholder="e.g. EC4R 3TE"
            className="location-input"
          />
          <button className="search-button">
            {" "}
            <img src={NextPage} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default TopBannerMobileDesign;
