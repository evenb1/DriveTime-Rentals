import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/app/components";

export const metadata: Metadata = {
  title: "DriveTime Rentals",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative ">
        {children}
        <Footer />
        </body>
    </html>
  );
}
