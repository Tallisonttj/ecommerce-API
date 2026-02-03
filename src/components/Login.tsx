'use client'

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useState } from "react";
import { useAuthContext } from "@/context/AuthContext";

import Link from "next/link";
import Userlogget from "./Userlogged";

export default function Login () {
  
  const [eMali, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrar, setMostrar] = useState(false);

  const userCtx = useAuthContext()   


  const versenha = () => {
    setMostrar(!mostrar)
  };

 
  const login = () => {  
     userCtx?.handleLogin(eMali, senha)
     setSenha('')
     
  }
 
  

   return (
   
    <section className="text-xl">
      {!userCtx?.isLogged && 
      <div className="container flex items-center">
        <div className="flex flex-col md:flex-row gap-3 text-left items-center">
          <div className="flex-1 md:h-120 p-3 gap-3 flex flex-col text-left md:justify-between md:items-center md:max-w-xl">
            <div>
              <h1 className="py-3 text-2xl font-semibold">Já tenho um cadastro!</h1>
            <p className="text-xl">
              Insira seu e-mail e senha para acessar sua conta.
            </p>
            </div>
            
            <div className="flex items-center h-full w-full md:max-w-md">
              <Input className="text-xl"  label="E-mail" type="text" value={eMali} onclick={(e) => setEmail(e)} onCl={() => {}} />
            </div>
            
            <div className="flex flex-col gap-2 items-center h-full w-full md:max-w-md">
              <Input className="text-xl" value={senha} type={`${!mostrar? 'password' : 'text' }`} onclick={(e) => setSenha(e)} label="Senha" img={`/assets/images/${!mostrar ? 'icons8-olho-aberto30.png': 'icons8-olho-fechado30.png'}`} onCl={() => versenha()}/>

            <p className="cursor-pointer hover:underline">Esqueci a senha</p>

            </div>

            <div className="text-center">
              <Button
                msg="ENTRAR"
                onclick={() => login() }
                className="h-15 text-xl font-bold w-40 hover:bg-neutral-200 md:w-60"
              />
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center gap-2">
            <div className="flex flex-col border-r-2 h-30 "></div>
            OU
            <div className="flex flex-col border-r-2 h-30 "></div>
          </div>
          <div className="flex-1 flex flex-col h-120 p-3 gap-4 text-left md:justify-between md:items-center md:max-w-xl">
            <h1 className="text-2xl text-left font-semibold">
              Ainda não possuo cadastro
            </h1>
            <p className="text-xl">
              Ao criar uma conta você conseguirá realizar suas compras mais
              rápido, ficar atualizado com os status do pedido, e manter um
              histórico de compras já feitas.
            </p>
            <div className="text-center">
            <Link href={'user/createuser'}>
              <Button
                msg="CRIAR CONTA"
                onclick={() => {}}
                className="h-15 text-xl font-bold w-40 hover:bg-neutral-200 md:w-60"
              />
            </Link>
            
            </div>
          </div>
        </div>
        </div>}
        {userCtx?.isLogged && 

          <Userlogget loggedout={() => userCtx.setIslogged(false)} />
        
        
        }
      
    
    </section>
  );
};
