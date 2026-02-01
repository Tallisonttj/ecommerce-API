
import { Product } from "@/components/ui/Product";


export default async function Products({
  params,
}: {
  params:Promise<{ produto: string }>;
}) {

  const { produto } = await params
  return (
    
    <>
    <Product id={parseInt(produto)}/>
    </>
  )
    
}
