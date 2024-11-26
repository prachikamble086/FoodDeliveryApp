// import React from "react";
// import OfferAndCart from "../OfferAndCart/OfferAndCart";
import NavigationBar from "../NavigationBar/NavigationBar";
// // import Clock from "./images/Clock.png";
// import Ratings from "./images/Ratings.png";
// import McdBurger from "./images/McdBurger.png";
// import BackgroundColor from "./images/BackgroundColor.png";
// import Motocross from "./images/Motocross.png";
// import OrderCompleted from "./images/OrderCompleted.png";
// import SearchIcon from "./images/SearchIcon.png";
// import VeganDiscount from "./images/VeganDiscount.png";
// import Add from "./images/Add.png";
// import IcecreamDiscount from "./images/IcecreamDiscount.png";
// import FirstOrderDiscount from "./images/FirstOrderDiscount.png";

const OfferPage = () => {
  return (
    <div>
      {/* <OfferAndCart /> */}
      <NavigationBar />
      <div className="restaurant-details-card">
        <img src={BackgroundColor} alt="BackgroundColor" />
        <div className="restaurant-details">
          <p>I'm lovin' it!</p>
          <div>McDonald’s East London</div>
          <div>
            <img src={OrderCompleted} alt="OrderCompleted" />
            <div>Minimum Order: 12 GBP</div>
          </div>
          <div>
            <img src={Motocross} alt="Motocross" />
            <div>Delivery in 20-25 Minutes</div>
          </div>
        </div>
        <div className="burger-image">
          <img src={Ratings} alt="Ratings" />
          <img src={McdBurger} alt="McdBurger" />
        </div>
        <div className="open-unti">
          <img src={Clock} alt="Clock" />
          Open Until 3:00 pm{" "}
        </div>
      </div>
      <div className="search-bar">
        <div>All Offers from McDonald’s East London</div>
        <div>
          <img src={SearchIcon} alt="SearchIcon" />
          <input type="text" placeholder="Search from menu..." />
        </div>
      </div>
      <div className="categories-tab">
        <button>Offers</button>
        <button>Burgers</button>
        <button>Fries</button>
        <button>Snacks</button>
        <button>Salads</button>
        <button>Cold drinks</button>
        <button>Happy Meal®</button>
        <button>Deserts</button>
        <button>Hot drinks</button>
        <button>Sauces</button>
        <button>Orbit®</button>
      </div>
      <div className="discounts">
        <div className="first-order-discount">
          <img src={FirstOrderDiscount} alt="FirstOrderDiscount" />
          <div>-20%</div>
          <p>McDonald’s East London</p>
          <div>First Order Discount</div>
          <div className="add-background">
            <img src={Add} alt="Add" />
          </div>
        </div>

        <div className="vegan-discount">
          <img src={VeganDiscount} alt="VeganDiscount" />
          <div>-20%</div>
          <p>McDonald’s East London</p>
          <div>Vegan Discount</div>
          <div className="add-background">
            <img src={Add} alt="Add" />
          </div>
        </div>

        <div className="icecream-discount">
          <img src={IcecreamDiscount} alt="IcecreamDiscount" />
          <div>-20%</div>
          <p>McDonald’s East London</p>
          <div>Free ice cream offer</div>
          <div className="add-background">
            <img src={Add} alt="Add" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferPage;
