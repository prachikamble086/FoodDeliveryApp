import { ShoppingBasket } from "../../constant";
import { ForwardButton } from "../../constant";

const Cart = () => {
  return (
    <>
      <div className="cart">
        <button className="cart-button">
          <div className="cart-image">
            <img
              className="shopping-basket"
              src={ShoppingBasket}
              alt="ShoppingBasket"
            />
            <p>My cart</p>
          </div>
          <img src={ForwardButton} alt="ForwardButton" />
        </button>
      </div>
    </>
  );
};

export default Cart;
