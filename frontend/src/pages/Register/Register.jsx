import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputAndLabel from "../../components/InputAndLabel/InputAndLabel";
import Footer from "../../components/Footer/Footer";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import OrderLogo from "../../components/OrderLogo/OrderLogo";
import { LOGIN_HERO_IMAGE } from "../../constant";
import { Link } from "react-router-dom";

import "./Register.css";
import { postRegisterRequest } from "../../services/networkCalls";
import { useAppContext } from "../../context/context.jsx";

const Register = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { setUser } = useAppContext();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phoneNumber || !email || !password) {
      alert("All fields are required.");
      return;
    }

    const postRegisterRequestData = await postRegisterRequest(
      name,
      email,
      password,
      phoneNumber
    );
    setUser(postRegisterRequestData.user);
    localStorage.setItem("jwtToken", postRegisterRequestData.jwt);
    navigate("/home");
  };

  return (
    <>
      <div className="signin-and-image">
        <div className="order-and-signin">
          <div className="order-logo">
            <OrderLogo width="150px" />
          </div>
          <form className="signin" onSubmit={handleSubmit}>
            <h2>Welcome to the Food Delivery App! 🍔</h2>
            <p>{`Create your account to start ordering your favorite food.`}</p>
            <InputAndLabel
              inputLabel="Name"
              placeholder="eg. John A"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputAndLabel
              inputLabel="Phone Number"
              placeholder="Enter your 10 digit number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <InputAndLabel
              inputLabel="Email"
              placeholder="Example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputAndLabel
              inputLabel="Password"
              placeholder="At least 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <PrimaryButton type="submit" buttonContent="Sign Up" />
          </form>
          <p className="register-button">
            Already have an account?{" "}
            <Link to="/login">
              <button className="signup-button">Sign in</button>
            </Link>
          </p>
        </div>
        <div className="burger-image">
          <img
            src={LOGIN_HERO_IMAGE}
            alt="Burger"
            className="burger-image-register"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
