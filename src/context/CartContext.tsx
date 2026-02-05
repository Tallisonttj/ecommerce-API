"use client";

import { Cart } from "@/types/cart";
import { createContext, Dispatch, ReactNode, useContext, useReducer} from "react";
import { CartActions, cartReducers } from "./cartReducer";




type CartContextType = {
  itemCart:Cart[] 
  dispatch: Dispatch<CartActions
  >
};
export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
const [itemCart, dispatch] = useReducer(cartReducers, [])
  



  return (
    <CartContext.Provider value={{itemCart, dispatch}}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCartContext = () => useContext(CartContext);
