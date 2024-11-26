import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import HomePage from "./pages/Home/Home";
import ProductPage from "./pages/ProductPage/ProductPage";
import Register from "./pages/Register/Register";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import OrderSuccessful from "./components/OrderSuccessful/OrderSuccessful";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/order" element={<OrderSuccessful />} />
          <Route path="/profilepage" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
