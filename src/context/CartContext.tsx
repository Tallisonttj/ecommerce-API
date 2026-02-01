"use client";

import { Cart } from "@/types/cart";
import { createContext, ReactNode, useContext, useReducer} from "react";
import { cartReducers } from "./cartReducer";




type CartContextType = {
  itemCart:Cart[] 
  setItemCart: (title:string, avatar:string, price:number, qtd:number, total:number ) => void
};
export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
const [itemCart, dispatch] = useReducer(cartReducers, [])
  
 const setItemCart = (title:string, image:string, price:number, qtd:number, total:number ) => {
    dispatch({
      type:'Add',
      payload: {
       title,
        image,
        price,
        qtd,
        total
      }
     
    })
    
 }


  return (
    <CartContext.Provider value={{itemCart, setItemCart}}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCartContext = () => useContext(CartContext);
