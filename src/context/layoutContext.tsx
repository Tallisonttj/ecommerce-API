import { createContext, ReactNode, useContext, useState } from "react";

 type inter = "home" | "login" | "cart" | 'product'
type interfaceType = {
    inter:inter
    setInterface: (i:inter) => void
    id:number
    setId: (i:number) => void
} 
export const LayoutContext = createContext<interfaceType | null>(null)

export const LayouttProvider = ({children}: {children: ReactNode}) => {

    const [inter, setInterface] = useState<inter>('home');
    const [id, setId] = useState(0)
  
  
    return <LayoutContext.Provider value={{inter, setInterface, id, setId} }>
        {children}
    </LayoutContext.Provider>

}

export const useLayoutContext = () => useContext(LayoutContext)