import { FormatPrice } from "@/utils/formatPrice"
import { Produto } from "@/types/product"



type Prop = {
  item:Produto
  onClick: () => void
}
export const ProductCard = ({item, onClick}:Prop ) => {
 return(
  <section>
  
    <div onClick={() => onClick() } className="flex flex-col transition-all duration-300 ease-in-out hover:scale-95">
      
        <div className="">
          <img src={item.images[0]} alt="" className="w-60 transition-all duration-300 ease-in-out hover:brightness-50" />  
        </div>
        <p className="text-clip">{item.title}</p>
        <p className="">{FormatPrice(item.price)}</p>
    </div>
  
  </section>
   
 )
    

} 