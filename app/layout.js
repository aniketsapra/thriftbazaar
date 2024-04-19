'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Home from './page'
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { useState } from "react";
import Login from '@components/Login'

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "ThriftBazaar",
//   description: "Thrift Store",
// };

export default function RootLayout({ children }) {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <html lang="en">
    <head>
    <link rel="icon" href="/favicon.ico" sizes="any" />
    </head>
      <body className={inter.className}>
      {showLogin?<Login setShowLogin={setShowLogin} />
      :<></>}
      <main>
        <Navbar setShowLogin={setShowLogin} />
         {children}
        <Footer />
      </main>
      </body>
    </html>
  );
}
