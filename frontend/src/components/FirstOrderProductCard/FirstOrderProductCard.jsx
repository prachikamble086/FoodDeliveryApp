import { Plus } from "../../constant";
import "./FirstOrderProductCard.css";
const FirstOrderProductCard = ({ cardImage, discount, restaurantName }) => {
  return (
    <>
      <div className="restaurant-menu-burgers">
        <img src={cardImage} alt="" className="card-image" />
        <div className="discount-badge">{discount}</div>
        <p className="discount-restaurant">McDonald’s East London</p>
        <div className="discount-restaurant-name">{restaurantName}</div>
        <div className="add-menu-item-button">
          <img src={Plus} alt="" />
        </div>
      </div>
    </>
  );
};

export default FirstOrderProductCard;
