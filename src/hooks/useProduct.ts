import { categoriesService } from "@/api/categories.service"
import { ProductsService } from "@/api/products.service"
import { Category} from "@/types/category"
import { Produto } from "@/types/product"
import { useEffect, useState } from "react"



export const useProduct = () => {

    const [products, setProducts] = useState<Produto[]>([])
    const [categories, setCategories] = useState<Category[]>([])
  
 

    useEffect(() => {
      async function loadProduct(){
       const data = await  ProductsService.getAll()
       setProducts(data)
      }
     loadProduct()
    }, [])

    useEffect(() => {
      async function loadCategory(){
       const data = await  categoriesService.getCategory()
       setCategories(data.slice(0, 4))
      }
     loadCategory()
    }, [])


    return {products, categories} 
}
