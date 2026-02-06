"use client";

import { useAuth } from "@/queries/authquery";
import { User } from "@/types/user";
import { createContext, ReactNode, useContext, useState } from "react";

type AuthContextType = {
  userlogado: User;
  isLogged: boolean
  setIslogged: (b:boolean) => void
  handleLoggedOut: () => void
  handleLogin: (email:string, senha:string) => void
};
export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const user = useAuth ();
  const [isLogged, setIslogged] = useState(false);
  const [userlogado, setUserlogado] = useState<User>({
    name: '',
    avatar:'',
    role:'',
    email: ''
  });
  

  const handleLogin = (email: string, senha: string) => {
    if (email && senha) {
      const userLogget = user.data?.find(
        (i) => i.password === senha && i.name === email
      );
      if (userLogget) {
        setIslogged(true)
        setUserlogado({...userLogget})
      } else {
        alert("e-mail ou senha invalidos");
      }
    }
  };
  
 const handleLoggedOut = () => {
     setIslogged(false)
 }
  
  return (
    <AuthContext.Provider value={{handleLogin, setIslogged, isLogged, userlogado, handleLoggedOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => useContext(AuthContext);
