import { Metadata } from "next";
import { Footer } from "@/app/components";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "@/context/AuthContext"; // Use Supabase Auth

export const metadata: Metadata = {
  title: "DriveTime Rentals",
  description: "Discover the best cars in the world",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">
        <AuthProvider> {/* Wrap with AuthProvider */}
          <ToastContainer />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
