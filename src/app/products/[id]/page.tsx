import { ProductGrid } from "@/components/product/ProductGrid";



export default async function Products({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return <ProductGrid id={parseInt(id)}/>
}