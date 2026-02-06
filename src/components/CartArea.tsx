'use client'

import { useCartContext } from "@/context/CartContext";
import { FormatPrice } from "@/utils/formatPrice";
import Link from "next/link";
import { Button } from "./ui/Button";


export default function CartArea() {
  const CartCTX = useCartContext();
  
  const total =  CartCTX?.itemCart.reduce((acc, va) => acc + va.total, 0 )
   
  const remove = (id:number) => {
     CartCTX?.dispatch({type:'remove', payload:{id}})
  }
  

  return (
   
    <div className="w-full  min-h-screen p-3 m-3 flex gap-3 flex-col md:max-w-3xl">
      {CartCTX?.itemCart && CartCTX?.itemCart.length >= 1 &&
      <div>
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
            <img src="/assets/images/icons8-lixeira-30.png" alt="remover item" onClick={() => remove(i.id)} />
          </div>
      </div>
        ))}
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Total:</h1>
        <h1 className="text-2xl font-bold">{FormatPrice(total? total: 0)}</h1>
      </div>
        
      </div>
      }
     {CartCTX?.itemCart && CartCTX.itemCart.length == 0 &&

      <div className="h-100 gap-5 flex flex-col items-center text-center justify-around text-2xl font-bold uppercase!">
         <h1>Nenhum produto no carrinho</h1>
         <img src="/assets/images/carrinho-de-compras.png" alt="" className="w-50 -scale-x-100" />
         <Link href={'/'}><Button msg="Compre Aqui" className="font-semibold text-xl p-2 " onclick={() => {}} /></Link>
      </div>
     
     } 

    </div>
  );
};
