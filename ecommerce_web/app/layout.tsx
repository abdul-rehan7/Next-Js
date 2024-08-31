import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShopSavvy | Shop Smart, Save Big",
  description: " Enjoy a streamlined shopping experience with our user-friendly interface and secure checkout process.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-[90vw] mx-auto`}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
