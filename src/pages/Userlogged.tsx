import { Button } from "@/components/ui/Button";
import { useAuthContext } from "@/context/AuthContext";


type Prop = {
  loggedout: () => void
}
export const Userlogget = ({loggedout}:Prop) => {
    const userCxt = useAuthContext();

     const logout = () => {
     userCxt?.handleLoggedOut()
     loggedout()
    }
    return (

        <section className="h-screen w-full bg-primary flex flex-col  p-2 overflow-auto md:flex-row md:justify-evenly">
          <div className="flex gap-2">
            <img src={userCxt?.userlogado.avatar} alt="" className="w-20 h-20"/>
            <div className="text-left">
             <p className="text-xl"><b>UserName: </b>{userCxt?.userlogado.name} </p> 
             <p className="text-xl"><b>Role: </b>{userCxt?.userlogado.role} </p> 
             <p className="text-xl"><b>E-maiL: </b>{userCxt?.userlogado.email} </p> 
            </div>
          </div>
          <div>
            <Button msg="Sair" onclick={logout} />
          </div>
        </section>

    )
}