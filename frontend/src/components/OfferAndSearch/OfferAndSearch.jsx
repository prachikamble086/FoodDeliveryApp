import "./OfferAndSearch.css";
import { SearchIcon } from "../../constant";
const OfferAndSearch = () => {
  return (
    <>
      <div className="offer-menu">
        <div className="offer-menu-header">
          All Offers from McDonald’s East London
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
