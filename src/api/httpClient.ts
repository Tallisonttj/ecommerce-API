
import { Category } from "@/types/category"
import { Produto } from "@/types/product"
import { User } from "@/types/user"
import axios from "axios"

export const httpClient = axios.create(
    {
        baseURL:'https://api.escuelajs.co/api/v1'
    }
)

  export const  getCategory =  async (): Promise<Category[]> => {
        const response = await httpClient.get(`/categories`)
        return (await response.data.filter((i:Category) => i.image.includes('.jpeg' ) || i.image.includes('.jpg')))
    }
  export const  getProducts =  async (): Promise<Produto[]> => {
        const response = await httpClient.get(`/products`)
        return response.data
    }

  export const  getUsers =  async (): Promise<User[]> => {
        const response = await httpClient.get(`/users`)
        return response.data
    }

