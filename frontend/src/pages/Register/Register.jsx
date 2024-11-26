import InputAndLabel from "../../components/InputAndLabel/InputAndLabel";
import Footer from "../../components/Footer/Footer";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import OrderLogo from "../../components/OrderLogo/OrderLogo";
import { LOGIN_HERO_IMAGE } from "../../constant";
import { Link } from "react-router-dom";

const noAction = () => {};

const Register = () => {
  return (
    <>
      <div className="signin-and-image">
        <div className="order-and-signin">
          <div className="order-logo">
            <OrderLogo width="100px" />
          </div>
          <form className="signin">
            <h2>Welcome Back 👋</h2>
            <p>
              {`Today is a new day. It's your day. You shape it. Sign in to
                start ordering.`}
            </p>
            <InputAndLabel inputLabel="Name" placeholder={"eg. John A"} />
            <InputAndLabel
              inputLabel="Phone Number"
              placeholder={"Enter your 10 digit number"}
            />
            <InputAndLabel
              inputLabel="Email"
              placeholder={"Example@email.com"}
            />
            <InputAndLabel
              inputLabel="Password"
              placeholder={"At least 8 characters"}
            />

            <Link to="../SignIn">
              <PrimaryButton onClick={noAction} buttonContent="Sign In" />
            </Link>
            <p>Forgot Password?</p>
          </form>
          <p>
            Dont you have an account? <button>Sign up</button>
          </p>
        </div>
        <div className="burger-image">
          <img src={LOGIN_HERO_IMAGE} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
