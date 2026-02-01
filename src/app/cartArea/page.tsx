import { Cart } from "@/pages/Cart";

export default function CartArea({
  params: { cartArea },
}: {
  params: { cartArea: string };
}) {
  return (
    <>
    <Cart/>
    </>
  )
    
}
