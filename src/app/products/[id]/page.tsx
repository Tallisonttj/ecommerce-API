import { ProductGrid } from "@/components/product/ProductGrid";


export default function Products({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <>
    <ProductGrid id={parseInt(id)}/>
    </>
  )
    
}
