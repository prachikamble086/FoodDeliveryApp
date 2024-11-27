import "./InformationCard.css";
import {
  DeliveryInformation,
  IdVerified,
  OperationalTimes,
} from "../../constant";
import { productPage } from "../../mock";

const InformationCard = () => {
  return (
    <>
      <div className="information-card">
        <div className="delivery-info">
          <div className="delivery-info-title-and-image">
            <img src={DeliveryInformation} alt="" />
            <div>{productPage.informationCard.deliveryInformation.title}</div>
          </div>
          <div className="delivery-info-timing">
            {productPage.informationCard.deliveryInformation.timings.map(
              (timing, index) => (
                <div key={index} className="day-and-timing">
                  <p className="day">{timing.day}:</p> {timing.time}
                </div>
              )
            )}
          </div>
        </div>

        <div className="contact-info">
          <div className="contact-info-image-and-title">
            <img src={IdVerified} alt="" />
            <div>{productPage.informationCard.contactInformation.title}</div>
          </div>
          <div className="contact-info-details">
            <div className="contact-info-para">
              {
                productPage.informationCard.contactInformation.details
                  .description
              }
            </div>
            <div className="contact-info-header">Phone number</div>
            <div>
              {productPage.informationCard.contactInformation.details.phone}
            </div>
            <div className="contact-info-header">Website</div>
            <div>
              {productPage.informationCard.contactInformation.details.website}
            </div>
          </div>
        </div>

        <div className="operational-info">
          <div className="operational-info-image-and-title">
            <img src={OperationalTimes} alt="" />
            <div>{productPage.informationCard.operationalTimes.title}</div>
          </div>
          <div className="operational-info-timing">
            {productPage.informationCard.operationalTimes.timings.map(
              (timing, index) => (
                <div key={index} className="day-and-timing">
                  <p className="day">{timing.day}:</p> {timing.time}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationCard;
