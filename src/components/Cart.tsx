'use client'

import { useCartContext } from "@/context/CartContext";
import { FormatPrice } from "@/utils/formatPrice";


export default function Cart() {
  const CartCTX = useCartContext();
  
  const total =  CartCTX?.itemCart.reduce((acc, va) => acc + va.total, 0 )
   

  return (
   
    <div className="w-full  min-h-screen p-3 m-3 flex gap-3 flex-col md:max-w-3xl">
      <h1 className="text-2xl font-bold text-left">Carrinho:</h1>
        {CartCTX?.itemCart.map((i) => (
      <div key={i.id} className="flex w-full flex-col gap-3">
          <div className="border flex justify-between items-center gap-4 p-3">
            <div>
             <img src={i.image} alt={i.title} className="w-20"/> 
            </div>
            <h1>{i.title}</h1>
            <div className="flex gap-1">
             <p>Qtd</p>
            <h1>{i.qtd}</h1>  
            </div>
            <h1>{FormatPrice(i.total)}</h1>
          </div>
      </div>
        ))}
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Total:</h1>
        <h1 className="text-2xl font-bold">{FormatPrice(total? total: 0)}</h1>
      </div>
    </div>
  );
};
