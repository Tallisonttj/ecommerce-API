"use client";
import { Button } from "./Button";
import { FormatPrice } from "@/utils/formatPrice";
import { useState } from "react";
import { useProducts } from "@/queries/categoriesquery";
import { useCartContext } from "@/context/CartContext";
import { Produto } from "@/types/product";
import { Cart } from "@/types/cart";

type Prop = {
  id: number;
};
export const Product = ({ id }: Prop) => {
  const Product = useProducts();
  const item = Product.data?.find((i) => i.id === id);
  const [imgM, setImgM] = useState(0);
  const [qtd, setQtd] = useState(1);


  const CartCtx = useCartContext()
  const addItem = () => {
    setQtd(qtd + 1);
  };
  const removeItem = () => {
    qtd <= 1 ? setQtd(1) : setQtd(qtd - 1);
  };
  const total = item ? item.price * qtd :  0
  const buy = (i:Produto,) => {
    if(item){
      CartCtx?.dispatch({type:'Add', payload:{i, qtd,}})
    }
    
  }


  return (
    <section
      className="flex flex-col items-center gap-3
      p-4"
    >
      {item && (
        <div className="max-w-3xl  flex flex-col gap-3">
          <div className="flex flex-col items-center gap-3 h-full lg:flex-row">
            <div
              className={`flex order-2 gap-3 transition-all h-full justify-between duration-300 ease-in-out lg:flex-col lg:order-1 snap-x overflow-auto lg:gap-8`}
            >
              <img
                className={`w-40 h-full md:w-80 border focus:snap-start`}
                src={item.images[0]}
                onClick={() => setImgM(0)}
              />
              <img
                className={`w-40 h-full md:w-80  borde focus:snap-start `}
                src={item.images[1]}
                onClick={() => setImgM(1)}
              />
              <img
                className={`w-40 h-full md:w-80  border  focus:snap-start`}
                src={item.images[2]}
                onClick={() => setImgM(2)}
              />
            </div>
            <div className="border order-1 h-full lg:order-2">
              <img className="w-fit h-full hover:" src={item.images[imgM]} />
            </div>
          </div>
          <div
            className="flex-1 order-3
            "
          >
            <div className="flex flex-col h-full  gap-5 py-4">
              <h1
                className="text-2xl
                 font-bold "
              >
                {item.title}
              </h1>
              <p className="text-md">{item.description}</p>
              <div className="flex items-center w-full justify-between">
                 <h1
                    className="text-2xl md:text-4xl font-bold
                 "
                  >
                    {FormatPrice(total)}
                  </h1>
                <div className="flex  items-center gap-3">
                 
                  <div className="flex items-center gap-3">
                   <h1 className={`text-xl font-semibold`}>Qtd:</h1> 
                    <h1
                      className="text-4xl cursor-pointer"
                      onClick={() => removeItem()}
                    >
                      -
                    </h1>
                    <h1 className="text-2xl border px-3">{qtd}</h1>
                    <h1
                      className="text-4xl cursor-pointer"
                      onClick={() => addItem()}
                    >
                      +
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-4 text-center md:py-10">
            <Button
              msg="Comprar"
              className="text-xl font-bold w-40 py-3"
              onclick={() => buy(item)}
            />
          </div>
        </div>
      )}
    </section>
  );
};
