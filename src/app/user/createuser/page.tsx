import { CreateUser } from "@/components/createUser";

export default function CreateUs({
  params: { createuser },
}: {
  params: { createuser: string };
}) {
  return (
    <>
      <CreateUser />
    </>
  );
}
