import { Footer } from "@/app/components"; // Import Footer
import { Metadata } from "next"; // Import Metadata

export const metadata: Metadata = {
  title: "DriveTime Rentals",
  description: "Discover the best cars in the world",
};

// Keep this layout as a server-side component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        {children} {/* Render children (pages, dashboard) */}
        <Footer />
      </body>
    </html>
  );
}
