import { Menu } from "../../constant";
import OrderLogo from "../../components/OrderLogo/OrderLogo";
import "./MobileDesignLogo.css";
const MobileDesignLogo = () => {
  return (
    <>
      <div className="for-mobile-design">
        <div className="logo-cart">
          <OrderLogo width="150rem" height="40rem" />
          <img src={Menu} alt="" />
        </div>
      </div>
    </>
  );
};

export default MobileDesignLogo;
