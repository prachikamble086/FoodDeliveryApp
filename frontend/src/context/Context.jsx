import { createContext, useContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [homePageData, setHomePageData] = useState(null);
  const [productPage, setProductPage] = useState(null);
  const [user, setUser] = useState(null);
  const [address, setAddress] = useState(null);
  const [payment, setPayment] = useState(null);
  const [cart, setCart] = useState(null);

  const data = {
    homePageData,
    setHomePageData,
    productPage,
    setProductPage,
    user,
    setUser,
    address,
    setAddress,
    payment,
    setPayment,
    cart,
    setCart,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export function useAppContext() {
  return useContext(Context);
}
