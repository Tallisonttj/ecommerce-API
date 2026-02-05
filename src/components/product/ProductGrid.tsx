'use client'

import { ProductCard } from "./ProductCard";
import { Button } from "../ui/Button";
import { useProducts } from "@/queries/categoriesquery";
import Link from "next/link";


type Prop = {
  id:number
}
export const ProductGrid = ({id}:Prop) => {
 const products = useProducts()

 const productsfilterCategory = products.data?.filter(i => i.category.id === id)
  return (
   
    <div className={`w-fit min-h-screen p-3`}>
        <div className="">
          <Link href={'/'} ><Button onclick={() =>{} } msg="Voltar" /></Link>
          <div>
            <div className="grid max-w-4xl mx-auto grid-cols-2 p-4 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {productsfilterCategory?.map((i) => (
                <Link key={i.id} href={`/products/${i.category.id}/${i.id}`}>
                 <ProductCard key={i.id} item={i} onClick={() => (i.id)} /> 
                </Link>
              ))}
            </div>
          </div>
        </div>
    </div>
     
  );
};
