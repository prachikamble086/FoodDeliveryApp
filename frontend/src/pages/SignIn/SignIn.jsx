import InputAndLabel from "../../components/InputAndLabel/InputAndLabel";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import OrderLogo from "../../components/OrderLogo/OrderLogo";
import { LOGIN_HERO_IMAGE } from "../../constant";
import "./SignIn.css";
function SignIn() {
  const navigate = useNavigate();
  const handleSignInButton = (e) => {
    e.preventDefault();
    navigate("/HomePage");
  };

  return (
    <>
      <div className="signin-and-image">
        <div className="order-and-signin">
          <div className="order-logo">
            <OrderLogo width="150px" />
          </div>
          <form className="signin">
            <h2 className="welcom-back">Welcome Back 👋</h2>
            <p>
              {`Today is a new day. It's your day. You shape it. Sign in to
                start ordering.`}
            </p>
            <InputAndLabel
              inputLabel="Email"
              placeholder={"Example@email.com"}
            />
            <InputAndLabel
              inputLabel="Password"
              placeholder={"At least 8 characters"}
            />
            <PrimaryButton
              onClick={handleSignInButton}
              buttonContent="Sign In"
            />
          </form>
          <p>
            Dont you have an account?{" "}
            <button className="signup-button">Sign up</button>
          </p>
        </div>
        <div className="burger-image">
          <img src={LOGIN_HERO_IMAGE} alt="" className="burger-image-signin" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignIn;
