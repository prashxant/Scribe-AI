import { shadow } from "@/styles/utils"
// import Image from "next/image"
import Link  from "next/link"
import { Button } from "./ui/button";
import {DarkModeToggle} from "./DarkModeToggle";
import LogOutButton from "./LogOutButton";
import { getUser } from "@/auth/server";


async function Header() {
    const user = await getUser();
  return (
    <header className="bg-popover relative flex h-24w w-full item-center justify-between  px-3 sm:px-8"
    style={{
            boxShadow:shadow
        }}>
        <Link href="/" className="flex items-end gap-2">
            {/* <Image  
            src="/logo.png"
             height={60} 
             width={60} 
             alt="logo" 
             className="rounded-full" 
             priority /> */}

                <h1 className="flex flex-col pb-1 text-xl font-semibold leading-16 " > 
                    Scribe AI
                </h1>
        </Link>
<div className="flex gap-4">
    {user ?(
        <LogOutButton/>
         ):
         (
            <>
             <Button asChild className="hidden sm:block">
                <Link href="/sign-up" >
                Signup
                </Link>
            </Button>

            <Button asChild variant={"outline"}>
                <Link href="/login">Login</Link>
            </Button>

           
            </>
         )
    }
    <DarkModeToggle/>
</div>

    </header>
  )
}

export default Header