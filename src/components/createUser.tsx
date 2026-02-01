'use client'
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input";
import { useState } from "react";

export const CreateUser = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [avatar, setAvatar] = useState("")
    


  //  const createUser = () => {
  //    createAuthService(name, email, senha, avatar)
  //    voltar()
  //  }
 
     
   
   
    return (

        <section className="h-screen w-screen bg-primary flex flex-col justify-center p-2 overflow-auto md:flex-row md:justify-evenly">
          <div className="flex flex-col items-center
           gap-3">
            <h1 className="text-2xl font-semibold">
           Crie um novo usuario
          </h1>
          <div className="border flex items-center h-18 p-2 w-full md:max-w-md">
            <Input className="text-2xl"  label="Nome" type="text" value={name} onclick={(e) => setName(e)}/>
          </div>
          <div className={`border flex items-center h-18 p-2 w-full md:max-w-md` }>
            <Input className="text-2xl"  label="E-mail"  type="email" value={email} onclick={(e) => setEmail(e)}  />
          </div>
          <div className="border flex items-center h-18 p-2 w-full md:max-w-md">
            <Input className="text-2xl"  label="Senha" type="text"  value={senha} onclick={(e) => setSenha(e)}/>
          </div>
          <div className="border flex items-center h-18 p-2 w-full md:max-w-md">
            <Input className="text-xl"  label="Avatar" type="string"   value={avatar} onclick={(e) => setAvatar(e)} />
          </div>
          <Button msg="Criar usuario" className="md:w-40 p-2 md:h-10" onclick={() => {}}/>
          </div>
        </section>

    )

}
