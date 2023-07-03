import { useContext, useReducer, useEffect, createContext } from "react";
// import reducer from "../reducer"
import cartItems from "../data";

const AppContext = createContext();
// const initialState = {
//   loading: false,
//   cart: new Map(cartItems.map((item) => [item.id, item])),
// };

export const AppProvider = ({ children }) => {
  const greeting ="hello"
  // const []

  return (
    <AppContext.Provider value={{ greeting }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
