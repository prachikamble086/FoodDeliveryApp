import InputAndLabel from "../../components/InputAndLabel/InputAndLabel";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import OrderLogo from "../../components/OrderLogo/OrderLogo";
import { LOGIN_HERO_IMAGE } from "../../constant";
import "./SignIn.css";

import { useState } from "react";
import { postLoginRequest } from "../../services/networkCalls";
import { useAppContext } from "../../context/context";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { setUser } = useAppContext();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const postLoginData = await postLoginRequest(email, password);
    setUser(postLoginData.user);
    localStorage.setItem("jwtToken", postLoginData.jwt);
    localStorage.setItem("userId", postLoginData.user._id);

    navigate("/home");
  };

  return (
    <>
      <div className="signin-and-image">
        <div className="order-and-signin">
          <div className="order-logo">
            <OrderLogo width="150px" />
          </div>
          <form className="signin" onSubmit={handleSignIn}>
            <h2 className="welcom-back">Welcome Back 👋</h2>
            <p>
              {`Today is a new day. It's your day. You shape it. Sign in to
                start ordering.`}
            </p>
            <InputAndLabel
              inputLabel="Email"
              placeholder={"Example@email.com"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputAndLabel
              inputLabel="Password"
              placeholder={"At least 8 characters"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <PrimaryButton type="submit" buttonContent="Sign In" />
          </form>
          <p>
            {`Don't you have an account?`}{" "}
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
