import "./CartList.css";
import {
  CartCheckoutButton,
  CartCupon,
  Collection,
  Delivery,
  ForwardButtonCart,
  Share,
  ShoppingBasket,
} from "../../constant";
import Basket from "../Basket/Basket";

const CartList = () => {
  return (
    <>
      <div className="cart-list-and-share-cart">
        <div className="share-cart">
          <img src={Share} alt="" />
          <div>Share this cart with your friends</div>
          <button className="copy-link-cart">Copyy Link</button>
        </div>
        <div className="cart-list">
          <div className="basket-and-image">
            <img src={ShoppingBasket} alt="" />
            <div className="my-basket">My basket</div>
          </div>
          <Basket quantity="1" price="₹70" Item="Item1" addOn="Extra Fries" />
          <Basket quantity="1" price="₹120" Item="Item2" addOn="Extra Fries" />
          <Basket quantity="1" price="₹180" Item="Item3" addOn="Extra Fries" />
          <div className="total-discount-delivery-fee">
            <div className="subtotal">
              <div>Sub Total</div>
              <div className="subtotal-price">₹230</div>
            </div>
            <div className="discounts">
              <div>Discounts</div>
              <div className="discounts-price">₹20</div>
            </div>
            <div className="delivery-fee">
              <div>Delivery Fee</div>
              <div className="deliivery-fee-cost">₹30</div>
            </div>
          </div>
          <button className="total-to-pay-button">
            <div>Total to pay</div>
            <div>₹230.00</div>
          </button>
          <div className="cupon-code-item-cart">
            <button className="choose-item-cart-button">
              <div>Choose your free item..</div>
              <img src={ForwardButtonCart} alt="" />
            </button>
            <button className="cupon-code-button">
              <div>Apply Coupon Code here</div>
              <img src={CartCupon} alt="" />
            </button>
          </div>
          <div className="delivery-and-collection">
            <div className="delivery-cart">
              <img src={Delivery} alt="" />
              <div className="delivery-cart-header">Delivery</div>
              <div>Starts at 17:50</div>
            </div>
            <div className="collection-cart">
              <img src={Collection} alt="" />
              <div className="collection-cart-header">Collection</div>
              <div>Starts at 16:50</div>
            </div>
          </div>
          <button className="checkout-cart-button">
            <img src={CartCheckoutButton} alt="" />
            <div>Checkout</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default CartList;
