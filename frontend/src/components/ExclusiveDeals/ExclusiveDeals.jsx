import ExclusiveDealsCard from "../../components/ExclusiveDealsCard/ExclusiveDealsCard";
import { GrandAi, NextPage } from "../../constant";
import { ChefBurger } from "../../constant";
import { ButterBrot } from "../../constant";
import "./ExclusiveDeals.css";
import { homePageData } from "../../mock";
const ExclusiveDeals = () => {
  return (
    <div>
      <div className="exclusive-deals">
        <div className="offer-and-cuisine">
          <div className="upto-offers">
            Up to -40% 🎊 Order.uk exclusive deals
          </div>
          <div className="offer-button">
            <div className="discount-offer">Up to -40% Discount Offers🎊 </div>
            <button className="mobile-design-button">
              <img src={NextPage} alt="" className="dropdown-button" />
              Pizza & Fast Food
            </button>
          </div>

          <div className="cuisine">
            <button className="cuisine-type">Vegan</button>
            <button className="cuisine-type">Sushi</button>
            <button className="cuisine-type-selected">Pizza & Fast food</button>
            <button className="cuisine-type">others</button>
          </div>
        </div>
        <div className="exclusive-deals-and-offer">
          <ExclusiveDealsCard
            cardImage={ButterBrot}
            discount="-40%"
            restaurantName="Chef Burgers London"
            className="exclusive-deals-and-offer-card"
          />
          <ExclusiveDealsCard
            cardImage={GrandAi}
            discount="-20%"
            restaurantName="Grand Ai Cafe London"
            className="exclusive-deals-and-offer-card"
          />
          <ExclusiveDealsCard
            cardImage={ButterBrot}
            discount="-17%"
            restaurantName="ButterBrot Caf'e London"
            className="exclusive-deals-and-offer-card"
          />
        </div>
      </div>
    </div>
  );
};

export default ExclusiveDeals;
