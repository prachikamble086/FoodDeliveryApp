import "./CustomerReviews.css";
import { productPage } from "../../mock";
const CustomerReviews = () => {
  return (
    <>
      <div className="customer-reviews">
        <div className="customer-reviews-header-and-button">
          <p className="customer-reviews-header">Customer Reviews</p>
          <div className="customer-reviews-buttons">
            <button className="customer-reviews-button-1">{`<`}</button>
            <button className="customer-reviews-button-2">{`>`}</button>
          </div>
        </div>
        <div className="review-images">
          {productPage.customerReviews.map((image, index) => (
            <img key={index} src={image} className="review-image-list" />
          ))}
        </div>
        <div className="customer-reviews-buttons-mobile-view">
          <button className="customer-reviews-button-1-mobile-view">{`<`}</button>
          <button className="customer-reviews-button-2-mobile-view">{`>`}</button>
        </div>
      </div>
    </>
  );
};

export default CustomerReviews;
