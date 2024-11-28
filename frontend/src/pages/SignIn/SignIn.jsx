import InputAndLabel from "../../components/InputAndLabel/InputAndLabel";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import OrderLogo from "../../components/OrderLogo/OrderLogo";
import { LOGIN_HERO_IMAGE } from "../../constant";
import "./SignIn.css";
import axios from "axios";
import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignInButton = async (e) => {
    e.preventDefault();

    const userInfo = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/user/login",
        userInfo
      );
      console.log(response.data);
      if (response.data) {
        alert("Login Successful");
        navigate("/home");
      }
      localStorage.setItem("Users", JSON.stringify(response.data));
    } catch (error) {
      console.error("Login error:", error);
      alert("Error: " + error.response?.data?.message || error.message);
    }
  };

  return (
    <>
      <div className="signin-and-image">
        <div className="order-and-signin">
          <div className="order-logo">
            <OrderLogo width="150px" />
          </div>
          <form className="signin" onSubmit={handleSignInButton}>
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
            Don't you have an account?{" "}
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
