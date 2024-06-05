import type { Metadata } from "next";
import Bloggy from '../../public/blog-icon.svg'
import {Provider} from 'jotai'
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./(personal-blog)/_components/_layoutsComponents/Header";
import Footer from "./(personal-blog)/_components/_layoutsComponents/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header  src={Bloggy}/>
          <Provider>
            {children}
          </ Provider>
        <Footer sign="JuanPabDev" />
        </body>
    </html>
  );
}