import { SessionProvider } from "next-auth/react"; // Import SessionProvider
import { Footer } from "@/app/components"; // Import Footer
import { Metadata } from "next"; // Import Metadata (for server-side use)

export const metadata: Metadata = {
  title: "DriveTime Rentals",
  description: "Discover the best cars in the world",
};

// Remove "use client" here because metadata should be defined in server-side layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className="relative">
          {children} {/* Render children (pages, dashboard) */}
          <Footer />
        </body>
      </html>
    </SessionProvider>
  );
}
