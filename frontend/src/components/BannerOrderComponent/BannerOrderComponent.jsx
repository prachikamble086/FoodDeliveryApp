import OrderLogo from "../OrderLogo/OrderLogo";

const BannerOrderComponent = ({ numberImage, topText, bottomText }) => {
  console.log("Image URL:", numberImage);

  return (
    <div className="order">
      <div className="number">
        <img src={numberImage} alt="Number Image" className="number-image" />
      </div>
      <OrderLogo />
      <p className="top-text">{topText}</p>
      <p className="bottom-text">{bottomText}</p>
    </div>
  );
};

export default BannerOrderComponent;
