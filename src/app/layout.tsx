"use client";
import Footer from "./compunents/Footer";
import Navbar from "./compunents/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        
          <Navbar />
          {children}
          <Footer />
       </body>
    </html>
  );
}
