import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Socials from "@/components/Socials";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {cn} from "@/lib/utils"
import { GridPattern } from "@/components/ui/grid-pattern";
 
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Clerkson",
  description: "This is my Porfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} h-full w-full antialiased`}>
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className={cn(
            " [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
            
          )}
        />
        <Navbar />
        {children}
        <Socials />
      </body>
    </html>
  );
}
