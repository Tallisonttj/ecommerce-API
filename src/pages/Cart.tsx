import { useCartContext } from "@/context/CartContext";

export const Cart = () => {
  const CartCTX = useCartContext();
  

  return (
   
    <div className="w-full h-screen p-3 m-3 flex gap-3 flex-col md:max-w-3xl">
      <h1 className="text-2xl font-bold text-left">Carrinho:</h1>
        {CartCTX?.itemCart.map((i) => (
      <div className="flex flex-col gap-3">
          <div className="border flex justify-between p-3">
            <h1>{i.image}</h1>
            <h1>{i.title}</h1>
            <h1>{i.total}</h1>
          </div>
      </div>
        ))}
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Total:</h1>
        <h1 className="text-2xl font-bold">R$: 10000</h1>
      </div>
    </div>
  );
};
