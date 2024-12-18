import { Metadata } from "next";
import { SessionProvider } from "next-auth/react"; 
import { Footer } from "@/app/components"; 
import "./globals.css"; 
import SessionWrapper from "./SessionWrapper";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "DriveTime Rentals",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <SessionWrapper>
        <ToastContainer />

          {children} 
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
