import { Location } from "../../constant";
import Cart from "../Cart/Cart";
import "./OfferAndCart.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { User } from "../../constant";
const noAction = () => {};

const OfferAndCart = () => {
  return (
    <div>
      <div className="offer-and-cart">
        <div className="offer-withourt-cart">
          <div className="offer">
            <p>🌟</p>
            <p className="offer-first">
              Get 5% Off your first order,{" "}
              <a className="promo">Promo: ORDER5</a>
            </p>
          </div>
          <div className="location-and-cart"></div>
          <div className="location">
            <img src={Location} alt="Location" />
            <p className="address">Regent Street, A4, A4201, London</p>
            <a className="address">Change Location</a>
            <Cart />
          </div>
        </div>
        <div className="mobile-header">
          <PrimaryButton
            onclick={noAction}
            buttonContent="Login/SignUp"
            img={User}
            className="mobile-design-login-up-beside-cart"
          />
          <div className="cart"></div>
        </div>
      </div>
      <div className="mobile-design-location">
        <img src={Location} alt="Location" />
        <p className="address">Regent Street, A4, A4201, London</p>
      </div>
    </div>
  );
};

export default OfferAndCart;
