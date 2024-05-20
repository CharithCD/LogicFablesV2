import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Logic Fables",
  description: "Whether you're a small business owner or an individual with big ideas, we're here to help you succeed in the digital world. From stunning websites to custom web systems, our team is committed to delivering results that exceed your expectations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
