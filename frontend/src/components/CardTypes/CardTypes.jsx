import "./CardTypes.css";
const CardTypes = ({ cardName, cardClick, cardInitial }) => {
  return (
    <>
      <div className="card-name-initial-and-image">
        <div className="card-name-and-initial">
          <div className="card-name-and-initial">
            <img src={cardInitial} alt="" className="card-initial" />
            <div>{cardName}</div>
          </div>
        </div>
        <img src={cardClick} alt="" />
      </div>
    </>
  );
};

export default CardTypes;
