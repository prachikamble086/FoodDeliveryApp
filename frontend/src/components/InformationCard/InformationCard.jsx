import "./InformationCard.css";
import {
  DeliveryInformation,
  IdVerified,
  OperationalTimes,
} from "../../constant";

const InformationCard = () => {
  return (
    <>
      <div className="information-card">
        <div className="delivery-info">
          <div className="delivery-info-title-and-image">
            <img src={DeliveryInformation} alt="" />
            <div>Delivery information</div>
          </div>
          <div className="delivery-info-timing">
            <div className="day-and-timing">
              <p className="day">Monday:</p> 12:00 AM–3:00 AM, 8:00 AM–3:00 AM
            </div>
            <div className="day-and-timing">
              {" "}
              <p className="day">Tuesday:</p> 8:00 AM–3:00 AM
            </div>
            <div className="day-and-timing">
              <p className="day">Wednesday</p> 8:00 AM–3:00 AM
            </div>
            <div className="day-and-timing">
              <p className="day">Thursday:</p> 8:00 AM–3:00 AM{" "}
            </div>
            <div className="day-and-timing">
              {" "}
              <p className="day">Friday:</p> 8:00 AM–3:00 AM{" "}
            </div>
            <div className="day-and-timing">
              <p className="day">Saturday:</p> 8:00 AM–3:00 AM
            </div>
            <div className="day-and-timing">
              <p className="day">Sunday </p> 8:00 AM–12:00 AM{" "}
            </div>
            <div className="day-and-timing">
              <p className="day">Estimated time until delivery:</p> 20 min
            </div>
          </div>
        </div>
        <div className="contact-info">
          <div className="contact-info-image-and-title">
            <img src={IdVerified} alt="" />
            <div>Contact information</div>
          </div>
          <div className="contact-info-details">
            <div className="contact-info-para">
              If you have allergies or other dietary restrictions, please
              contact the restaurant. The restaurant will provide food-specific
              information upon request.
            </div>
            <div className="contact-info-header">Phone number</div>
            <div>+934443-43 </div>
            <div className="contact-info-header">Website</div>
            <div>http://mcdonalds.uk/</div>
          </div>
        </div>
        <div className="operational-info">
          <div className="operational-info-image-and-title">
            <img src={OperationalTimes} alt="" />
            <div>Operational Times</div>
          </div>
          <div className="operational-info-timing">
            <div className="day-and-timing">
              {" "}
              <p className="day">Monday:</p> 8:00 AM–3:00 AM
            </div>
            <div className="day-and-timing">
              <p className="day">Tuesday:</p> 8:00 AM–3:00 AM
            </div>
            <div className="day-and-timing">
              <p className="day">Wednesday</p> 8:00 AM–3:00 AM
            </div>
            <div className="day-and-timing">
              <p className="day">Thursday:</p> 8:00 AM–3:00 AM
            </div>
            <div className="day-and-timing">
              <p className="day">Friday:</p> 8:00 AM–3:00 AM
            </div>
            <div className="day-and-timing">
              <p className="day">Saturday:</p> 8:00 AM–3:00 AM
            </div>
            <div className="day-and-timing">
              <p className="day">Sunday </p> 8:00 AM–3:00 AM
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationCard;
