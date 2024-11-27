import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./GetStarted.css";
const GetStarted = ({ signupWithUsImage, header, method, selection }) => {
  return (
    <>
      <div className="partner-with-us-card">
        <img src={signupWithUsImage} alt="" className="signup-with-us-image" />
        <div className="signup-with-us-header">{header}</div>
        <div className="signup-with-us-method">{method}</div>
        <div className="signup-with-us-selection">{selection}</div>
        <button className="primary-button-join-app">Get Started</button>
      </div>
    </>
  );
};

export default GetStarted;
