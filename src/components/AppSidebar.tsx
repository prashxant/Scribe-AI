import { getUser } from "@/auth/server"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
  } from "@/components/ui/sidebar"
import { prisma } from "@/db/prisma"
import { Note } from "@prisma/client"
import Link from "next/link"
import SidebarGroupContents from "./SidebarGroupContents"
  // nothing to add
  async function AppSidebar() {
    const user  = getUser()
    let notes : Note[]= []

    if (user) {
      notes = await prisma.note.findMany({
        where:{
          authorId: user.id
        },
        orderBy:{
          updatedAt: 'desc'
        },
      })
    }
     
    return (
      <Sidebar>
        <SidebarContent className="costom-scrollbar">
          <SidebarGroup />
          <SidebarGroupLabel className="mb-2 mt-2 text-lg">
            {user ?(
              "Your notes "
            ): (
              <p>
                <Link href="/login" className="underline">
                Login
                </Link>
                {""}
                 to see your notes  
              </p>
            )}

          </SidebarGroupLabel>
             {user && <SidebarGroupContents notes={notes} />} 
          <SidebarGroup />
        </SidebarContent>
      </Sidebar>
    )
  }
  export default AppSidebar
  