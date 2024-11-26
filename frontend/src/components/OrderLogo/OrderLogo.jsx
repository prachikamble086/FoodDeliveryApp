import { LOGO_BLACK, LOGO_ORANGE } from "../../constant";

const OrderLogo = ({ variant = "orange", ...props }) => {
  let imageSrc = LOGO_ORANGE;
  if (variant == "black") {
    imageSrc = LOGO_BLACK;
  }

  return (
    <>
      <img src={imageSrc} {...props} alt="" />
    </>
  );
};

export default OrderLogo;
