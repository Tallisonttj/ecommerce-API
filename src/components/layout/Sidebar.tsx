

import { useProduct } from "@/hooks/useProduct";




type Prop = {
  open: boolean
   setOpenModal: (b:boolean) => void
   setOpenSider: () => void
 setId: (n:number) => void
}
export const Sidebar = ({open, setOpenModal, setId, setOpenSider}:Prop) => {
  const { categories } = useProduct();

  const openModal = (c: number) => {
    setOpenModal(true)
    setId(c)
    setOpenSider()
  }
  return (
    <div className="h-screen text-right">
      {
        open &&
        <div>
          <ul className="flex  flex-col p-4 mx-3 gap-2 text-xl font-semibold">
            {categories.map((i) =>  (
              <li
                key={i.id}
                onClick={() => openModal(i.id)}
                className="hover:underline hover:cursor-pointer"
              >
                {i.name}
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  );
};
