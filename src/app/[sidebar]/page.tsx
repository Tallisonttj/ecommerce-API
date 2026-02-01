
import { Sidebar } from "@/components/layout/Sidebar";



export default async function Products({
  params,
}: {
  params:Promise<{ sidebar: string }>;
}) {

  const { sidebar } = await params
  return (
    
    <>
    <Sidebar/>
    </>
  )
    
}