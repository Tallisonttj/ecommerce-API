import Cart from "@/components/Cart";

export default function CartArea({
  params: { cartArea },
}: {
  params: { cartArea: string };
}) {
  return (
    <>
      <Cart />
    </>
  );
}
