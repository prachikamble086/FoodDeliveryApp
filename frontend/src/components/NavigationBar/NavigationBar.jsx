import OrderLogo from "../OrderLogo/OrderLogo";
import { User } from "../../constant";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div>
      <div className="navigation-bar">
        <div className="logo">
          <OrderLogo width="200rem" />
        </div>
        <div className="nav-bar">
          <button className="nav-bar-home-button">Home</button>
          <button className="nav-bar-button">Browse Menu</button>
          <button className="nav-bar-button">Special Offers</button>
          <button className="nav-bar-button">Restaurants</button>
          <button className="nav-bar-button">Track Orders</button>
        </div>

        <div className="login-signup">
          <button className="login-signup-button">
            <img src={User} alt="" />
            Login/Signup{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
