import Cart from "@/components/Cart";

export default function CartArea({
  params: { cart },
}: {
  params: { cart: string };
}) {
  return (
    <>
      <Cart />
    </>
  );
}
