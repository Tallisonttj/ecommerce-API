import { CreateUser } from "@/pages/createUser";


export default function CreateUs({
  params: { createuser },
}: {
  params: { createuser: string };
}) {
  return (
    <>
    <CreateUser/>
    </>
  )
    
}
