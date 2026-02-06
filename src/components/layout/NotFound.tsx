
'use client'
import Link from "next/link"
import { Button } from "../ui/Button"
import Image from "next/image"



export const NotFoundArea = () => {

    return (

        <div className="h-100 gap-5 flex flex-col items-center text-center justify-around text-2xl font-bold uppercase!">
         <h1>Pagina não Encontrada!</h1>
          <p className="text-6xl">404</p>
         <Link href={'/'}><Button msg="Voltar" className="font-semibold text-xl p-2 " onclick={() => {}} /></Link>
      </div>
    )
}