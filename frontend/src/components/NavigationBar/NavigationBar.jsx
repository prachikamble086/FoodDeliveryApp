import OrderLogo from "../OrderLogo/OrderLogo";
import { User } from "../../constant";
import "./NavigationBar.css";
import { useAppContext } from "../../context/context.jsx";

const NavigationBar = () => {
  const { homePageData } = useAppContext();

  return (
    <div>
      <div className="navigation-bar">
        <div className="logo">
          <OrderLogo width="200rem" />
        </div>
        {/* <div className="nav-bar">
          {homePageData.navigation.map((navItem) => (
            <button key={navItem} className={"nav-bar-button"}>
              {navItem}
            </button>
          ))}
        </div> */}
        <div className="login-signup">
          <button className="login-signup-button">
            <img src={User} alt="" />
            Login/Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
