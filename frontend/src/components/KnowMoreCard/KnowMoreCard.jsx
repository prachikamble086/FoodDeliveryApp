import React from "react";
import OrderProcess from "../OrderProcess/OrderProcess";
import { PlaceOrder } from "../../constant";
import { TrackProgress } from "../../constant";
import { GetOrder } from "../../constant";
import "./KnowMoreCard.css";
const KnowMoreCard = () => {
  return (
    <>
      <div className="know-more-card">
        <div className="know-more-card-questions">
          <div className="know-more-card-header-and-questions">
            <div className="know-more-card-header">Know more about us!</div>
            <div className="support">
              <button className="support-button-selected">
                Frequent Questions
              </button>
              <button className="support-button">Who we are?</button>
              <button className="support-button">Partner Program</button>
              <button className="support-button">Help & Support</button>
            </div>
          </div>

          <div className="questions-process-cards">
            <div className="questions-list">
              <button className="questions-list-selected-button">
                How does Order.UK work?
              </button>
              <button className="questions-list-button">
                What payment methods are accepted?
              </button>
              <button className="questions-list-button">
                Can I track my order in real-time?
              </button>
              <button className="questions-list-button">
                Are there any special discounts or promotions available?
              </button>
              <button className="questions-list-button">
                Is Order.UK available in my area?
              </button>
            </div>
            <div className="order-process-card-and-para">
              <div className="order-process-card">
                <OrderProcess
                  header="Place an Order!"
                  orderProcess={PlaceOrder}
                  footer="Place order through our website or Mobile app"
                />
                <OrderProcess
                  header="Track Progress"
                  orderProcess={TrackProgress}
                  footer="Your can track your order status with delivery time"
                />
                <OrderProcess
                  header="Get your Order!"
                  orderProcess={GetOrder}
                  footer="Receive your order at alighting fast speed!"
                />
                <div className="order-process-para-mobile-version">
                  <p>
                    Order.UK simplifies the food ordering process. Browse
                    through
                  </p>
                  <p>
                    our diverse menu, select your favorite dishes, and proceed
                    to
                  </p>
                  <p>
                    checkout. Your delicious meal will be on its way to your
                    doorstep in no time!
                  </p>
                </div>
              </div>
              <div className="order-process-para">
                <p>
                  Order.UK simplifies the food ordering process. Browse through
                </p>
                <p>
                  our diverse menu, select your favorite dishes, and proceed to
                </p>
                <p>
                  checkout. Your delicious meal will be on its way to your
                  doorstep in no time!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KnowMoreCard;
