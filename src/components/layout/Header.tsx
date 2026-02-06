"use client";

import { useCategories } from "@/queries/categoriesquery";
import { Search } from "../ui/Input";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

export const Header = () => {
  const category = useCategories();
  const cartCxt = useContext(CartContext)

  return (
    <section className=" bg-white h-full p-4 flex justify-between md:items-center md:justify-around md:px-10">
      <div className="flex gap-2 items-center">
        <div>
          <Link href={"/sidebar"}>
            <Image
              width={20}
              height={20}
              src="/assets/images/Vector.svg"
              className="sm:hidden"
              alt="menu sanduiche"
            />
          </Link>
        </div>
        <p className="font-BBH cursor-pointer">
          <Link href={`/`}>SHOP.CO</Link>
        </p>
      </div>
      <div>
        {category.data && (
          <ul className="hidden md:flex md:items-center md:p-3.5 md:gap-5">
            {category.data.map((i) => (
              <Link key={i.id} href={`/products/${i.id}`}>
                <li
                  key={i.id}
                  onClick={() => i.id}
                  className="hover:underline hover:cursor-pointer"
                >
                  {i.name}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
      <div className="flex gap-2 items-center">
        <div className="hidden md:flex">
          <Search />
        </div>
        <Image
          height={20}
          width={20}
          src="/assets/images/buscar.svg"
          className="md:hidden"
          alt="icone buscar"
        />

        <Link href={"/user"}>
          <Image
            height={20}
            width={20}
            src="/assets/images/user.svg"
            alt="icone usuario"
          />
        </Link>
        <Link href={"/cartarea"}>
          <div className="">
            <div className="relative text-sm -top-2.5 flex items-center justify-center bg-black rounded-full  text-white">
              <div className="absolute bg-black rounded-full w-full text-center">{ cartCxt?.itemCart.length == 0 ? '' : cartCxt?.itemCart.length}</div>
            </div>
            <Image
              height={20}
              width={20}
              src="/assets/images/cart.svg"
              alt="icone carrinho"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};
