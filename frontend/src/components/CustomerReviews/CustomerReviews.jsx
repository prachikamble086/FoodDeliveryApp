import { useRef, useState } from "react";
import "./CustomerReviews.css";
import { customerReviews } from "../../mock";
import { Star } from "../../constant";

const CustomerReviews = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const itemWidth = 1200;
  const containerRef = useRef(null);

  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
    if (containerRef.current) {
      containerRef.current.scrollLeft = newScrollPosition;
    }
  };

  return (
    <>
      <div className="customer-reviews">
        <div className="customer-reviews-header-and-button">
          <p className="customer-reviews-header">Customer Reviews</p>
          <div className="customer-reviews-buttons">
            <button
              className="customer-reviews-button-1"
              onClick={() => handleScroll(-itemWidth)}
            >
              {"<"}
            </button>
            <button
              className="customer-reviews-button-2"
              onClick={() => handleScroll(itemWidth)}
            >
              {">"}
            </button>
          </div>
        </div>

        <div
          className="review-images"
          ref={containerRef}
          style={{
            width: "100%",
            overflowX: "auto",
            scrollBehavior: "smooth",
          }}
        >
          {customerReviews.reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <div className="user-and-ratings">
                <div className="user">
                  <img src={review.user.profilePic} alt="" />
                  <div>{review.user.name}</div>
                  <div>{review.user.location}</div>
                </div>
                <div className="ratings-and-location">
                  <div className="rating-date">
                    <div className="ratings">
                      {Array.from({ length: review.rating }).map((index) => (
                        <div key={index} className="ratings-and-location">
                          <img src={Star} alt="star" />
                        </div>
                      ))}
                    </div>
                    <div className="date">{review.date}</div>
                  </div>
                  <div className="location">{review.location}</div>
                </div>
              </div>
              <div className="review">{review.review}</div>
            </div>
          ))}
        </div>

        <div className="customer-reviews-header-and-button-mobile">
          <p className="customer-reviews-header-mobile">Customer Reviews</p>
          <div className="customer-reviews-buttons-mobile">
            <button
              className="customer-reviews-button-1-mobile"
              onClick={() => handleScroll(-itemWidth)}
            >
              {"<"}
            </button>
            <button
              className="customer-reviews-button-2-mobile"
              onClick={() => handleScroll(itemWidth)}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerReviews;
