'use client'
import { AuthContext, AuthProvider } from "@/context/AuthContext"
import { CartProvider } from "@/context/CartContext"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query" // importa o Query
import { ReactNode } from "react" // importa o ReactNode para usar no children
export const Provider = ({children} : {children:ReactNode} ) => {
    const  queryClient = new QueryClient() // cria um a const para criar o client
    return (
        <div className="">
        <QueryClientProvider client={queryClient}> 
        <AuthProvider>
        <CartProvider>
            {children}
        </CartProvider>
        </AuthProvider>
        </QueryClientProvider> 
        </div>
       
    )
}
