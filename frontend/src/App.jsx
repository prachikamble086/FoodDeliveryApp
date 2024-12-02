import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import HomePage from "./pages/Home/Home";
import ProductPage from "./pages/ProductPage/ProductPage";
import Register from "./pages/Register/Register";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import OrderSuccessful from "./components/OrderSuccessful/OrderSuccessful";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import DeliveryAddress from "./components/DeliveryAddress/DeliveryAddress";
import CartList from "./components/CartList/CartList";
import { useEffect, useState } from "react";
import { setupAuthHeaderForServiceCalls } from "./services/authTokenMiddleware";
import { setupAuthExceptionHandler } from "./services/authExceptionHandler";
import { getHomeData } from "./services/networkCalls";
import { useAppContext } from "./context/context";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const session = JSON.parse(localStorage.getItem("session"));

  const { setHomePageData } = useAppContext();

  function logoutUser() {
    setupAuthHeaderForServiceCalls(null);
  }

  async function loadInitialData() {
    const homeData = await getHomeData();
    setHomePageData(homeData);
  }

  useEffect(() => {
    setupAuthHeaderForServiceCalls(session?.jwt);
    setupAuthExceptionHandler(logoutUser, navigate);
    loadInitialData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/product/:restaurantId" element={<ProductPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/order" element={<OrderSuccessful />} />
          <Route path="/checkout/address" element={<DeliveryAddress />} />
          <Route path="/cart" element={<CartList />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
