import "./OfferAndSearch.css";
import { SearchIcon } from "../../constant";
import { useAppContext } from "../../context/Context";

const OfferAndSearch = () => {
  const { restaurantData } = useAppContext();

  return (
    <>
      <div className="offer-menu">
        <div className="offer-menu-header">
          {`All Offers from ${restaurantData.restaurant.name}`}
        </div>
        <div className="input-and-icon">
          <img src={SearchIcon} alt="" className="search-icon" />
          <input
            type="text"
            placeholder="Search from menu..."
            className="search-icon-input"
          />
        </div>
      </div>
    </>
  );
};

export default OfferAndSearch;
