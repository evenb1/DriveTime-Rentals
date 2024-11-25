import { Footer } from "@/app/components"; // Import your footer component
import { SessionProvider } from "next-auth/react"; // Import SessionProvider
import { Metadata } from "next"; // Import Metadata

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
    <SessionProvider>
      {/* The children (your pages) will now have access to the session */}
      <html lang="en">
        <body className="relative">
          {children} {/* Render children (the content of the page) */}
          <Footer /> {/* Your Footer component */}
        </body>
      </html>
    </SessionProvider>
  );
}
