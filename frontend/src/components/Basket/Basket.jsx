import "./Basket.css";
import { Remove } from "../../constant";
const Basket = ({ quantity, price, Item, addOn }) => {
  return (
    <>
      <div className="basket">
        <div className="item-quantity">{quantity}</div>
        <div className="price-item-add-ons">
          <div className="basket-item-cost">{price}</div>
          <div className="basket-item">{Item}</div>
          <div className="add-ons">{addOn}</div>
        </div>
        <div className="delete-items">
          <img src={Remove} alt="" />
        </div>
      </div>
    </>
  );
};

export default Basket;
