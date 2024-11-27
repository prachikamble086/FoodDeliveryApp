import ExclusiveDealsCard from "../../components/ExclusiveDealsCard/ExclusiveDealsCard";
import { GrandAi, NextPage } from "../../constant";
import { ButterBrot } from "../../constant";
import "./ExclusiveDeals.css";
import { homePageData } from "../../mock";
const ExclusiveDeals = () => {
  return (
    <div>
      <div className="exclusive-deals">
        <div className="offer-and-cuisine">
          <div className="upto-offers">
            {homePageData.exclusiveDealsData.title}
          </div>
          <div className="offer-button">
            <div className="discount-offer">
              {homePageData.exclusiveDealsData.titleMobile}
            </div>
            <button className="mobile-design-button">
              <img src={NextPage} alt="" className="dropdown-button" />
              Pizza & Fast Food
            </button>
          </div>
          <div className="cuisine">
            <button className="cuisine-type">Vegan</button>
            <button className="cuisine-type">Sushi</button>
            <button className="cuisine-type-selected">Pizza & Fast food</button>
            <button className="cuisine-type">Others</button>
          </div>
        </div>
        <div className="exclusive-deals-and-offer">
          <ExclusiveDealsCard
            cardImage={ButterBrot}
            discount={homePageData.exclusiveDealsData.deals[0].discount}
            restaurantName={
              homePageData.exclusiveDealsData.deals[0].restaurantName
            }
            className="exclusive-deals-and-offer-card"
          />
          <ExclusiveDealsCard
            cardImage={GrandAi}
            discount={homePageData.exclusiveDealsData.deals[1].discount}
            restaurantName={
              homePageData.exclusiveDealsData.deals[1].restaurantName
            }
            className="exclusive-deals-and-offer-card"
          />
          <ExclusiveDealsCard
            cardImage={ButterBrot}
            discount={homePageData.exclusiveDealsData.deals[2].discount}
            restaurantName={
              homePageData.exclusiveDealsData.deals[2].restaurantName
            }
            className="exclusive-deals-and-offer-card"
          />
        </div>
      </div>
    </div>
  );
};

export default ExclusiveDeals;
