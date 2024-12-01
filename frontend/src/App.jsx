import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
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
