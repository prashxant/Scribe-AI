import { shadow } from "@/styles/utils"
import Image from "next/image"
import Link  from "next/link"
import { Button } from "./ui/button";

function Header() {
    const user = null;
  return (
    <header className="relative flex h-24w-full item-center justify-between bg-popover px-3 sm:px-8"
    style={{
            boxShadow:shadow
        }}>
        <Link href="/" className="flex items-end gap-2">
            <Image  
            src="/logo.png"
             height={60} 
             width={60} 
             alt="logo" 
             className="rounded-full" 
             priority />

             <h1 className="flex flex-col pb-1 text-xl font-semibold leading-16 " > Scribe AI</h1>
        </Link>
<div className="flex items-center gap-4">
    {user ?(
        "Logout"
         ):
         (
            <>
             <Button asChild>
                <Link href="/sign-up" className="hidden sm:block">
                Signup
                </Link>
            </Button>

            <Button asChild>
                <Link href="/login">Login</Link>
            </Button>

           
            </>
         )
    }
</div>

    </header>
  )
}

export default Header