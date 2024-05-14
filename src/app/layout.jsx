'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav
        className="bg-black flex justify-center p-4"
        style={{backgroundColor: 'black'}}>
          <Image
            src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
            alt="Logo Star Wars"
            width={300}
            height={200}
          />
        </nav>
        {children}
      </body>
    </html>
  );
}
