import { createContext, useContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [homePageData, setHomePageData] = useState(null);
  const [restaurantData, setRestaurantData] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const [user, setUser] = useState(null);
  const [address, setAddress] = useState(null);
  const [payment, setPayment] = useState(null);
  const [cart, setCart] = useState(null);

  const data = {
    homePageData,
    setHomePageData,
    restaurantData,
    setRestaurantData,
    restaurantMenu,
    setRestaurantMenu,
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
