
import Link from "next/link";
import { CategoriesCard } from "./categoriesCard";

import { useCategories } from "@/queries/categoriesquery";


export const CategoriesGrid = () => {
  
  const category = useCategories()

  console.log(category.data)
  return (
    <div className="">
      {category && 
        <div className="grid grid-cols-2 p-4 gap-4">
          {category.data?.map((c) => (
           <Link key={c.id} href={`/products/${c.id}`}>
            <div>
              <CategoriesCard
              img={c.image}
              title={c.name}
              id={c.id}
            /> 
            </div>
           </Link> 

          ))}
        </div>
      }
    </div>
  );
};
