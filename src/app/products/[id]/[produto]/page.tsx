
import { Product } from "@/components/ui/Product";


export default function Products({
  params: { produto },
}: {
  params: { produto: string };
}) {
  return (
    <>
    <Product id={parseInt(produto)}/>
    </>
  )
    
}
