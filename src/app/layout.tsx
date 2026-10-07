import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

const notoBengali = Noto_Sans_Bengali({
  variable: "--font-noto-bengali",
  subsets: ["bengali"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "বাজার দর",
  description: "বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের বাজার দর",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${notoBengali.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-bengali">
        <Navbar />

        {children}
      </body>
    </html>
  );
}