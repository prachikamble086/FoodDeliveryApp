import "./ExclusiveDealsCard.css";

const ExclusiveDealsCard = ({ cardImage, discount, restaurantName }) => {
  return (
    <>
      <div className="restaurant-menu-burgers">
        <img src={cardImage} alt="" className="card-image" />
        <div className="discount-badge">{discount}</div>
        <p className="discount-restaurant">Restaurant</p>
        <div className="discount-restaurant-name">{restaurantName}</div>
      </div>
    </>
  );
};

export default ExclusiveDealsCard;
