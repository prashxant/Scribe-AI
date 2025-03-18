import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/provider/ThemeProvider";



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
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
