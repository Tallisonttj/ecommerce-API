'use client'
import { useCategories } from "@/queries/categoriesquery"
import Link from "next/link"

export const Sidebar = () => {
      const category = useCategories()
        return (
        <div className="absolute top-10 bg-primary w-screen h-screen">
            <div>
        {category.data && 
        <ul className="flex flex-col items-center p-3.5 gap-5">
        
         {category.data.map((i) => (
          <Link key={i.id} href={`/products/${i.id}`}>
             <li
              key={i.id}
              onClick={() => (i.id) }
              className="hover:underline hover:cursor-pointer"
            >
              {i.name}
            </li>
          </Link>
           
          ))}
        </ul>
        }
      </div>
        </div>
    )
}