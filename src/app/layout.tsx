import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/provider/ThemeProvider";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";


export const metadata: Metadata = {
  title: "Scribe-AI",
  description: "AI powerd notes taking app ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
               <SidebarProvider>
               <AppSidebar/>
            <div className="flex min-h-screen w-full flex-col">
            <Header/>
            <main className="flex flex-1 flex-col px-4 pt-10 xl:px-8">{children}</main>
            </div>
            </SidebarProvider>
            <Toaster />
            
            
          </ThemeProvider>
      </body>
    </html>
  );
}
