
type Prop = {
  img:string
  title:string
  id:number
}
export const CategoriesCard = ({img, title, id }:Prop ) => {

 return(
  <div className="">
 <div className="transition-all duration-300 ease-in-out font-bold flex flex-col hover:scale-95">
        <div className="focus:bg-neutral-500/20 cursor-pointer mt-10">
          <img src={img} alt="" className="transition-all duration-300 ease-in-out h-40 w-40  md:h-80 md:w-80  hover:brightness-50" />  
        </div>
        <p className="md:text-2xl">{title}</p>
    </div>

  </div>
   
 )
    

} 