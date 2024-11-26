import "./ProductPageBanner.css";
import {
  Clock,
  MotorCross,
  OrderCompleted,
  ProductPageBannerImage,
  Ratings,
} from "../../constant";

const ProductPageBanner = () => {
  return (
    <>
      <div className="product-page-banner">
        <img
          src={ProductPageBannerImage}
          alt=""
          className="product-page-banner-image-mobile-version"
        />
        <div className="product-banner-text">
          <div className="restaurant-tagline">{`I'm lovin' it!`}</div>
          <div className="product-banner-restaurant-name">
            McDonald’s East London
          </div>
          <div className="restaurant-add">
            <div className="order-completed">
              <img src={OrderCompleted} alt="" />
              <div>Minimum Order: 12 GBP</div>
            </div>
            <div className="motor-cross">
              <img src={MotorCross} alt="" />
              <div>Delivery in 20-25 Minutes</div>
            </div>
          </div>
          <div className="restaurant-timings">
            <img src={Clock} alt="" />
            <p>Open Until 3:00 AM</p>
          </div>
        </div>
        <div className="product-banner-and-ratings">
          <img src={Ratings} alt="" className="product-page-banner-ratings" />
          <img
            src={ProductPageBannerImage}
            alt=""
            className="product-page-banner-image"
          />
        </div>
      </div>
    </>
  );
};

export default ProductPageBanner;
