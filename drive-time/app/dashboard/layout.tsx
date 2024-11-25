// layout.tsx
import { SessionProvider } from 'next-auth/react';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import { AppProps } from "next/app";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider session={pageProps.session}>

    <div className="flex min-h-screen ">
      {/* Sidebar as a Client Component */}
      <Sidebar />
      <TopNav/>
      <main className="flex-1 p-8 bg-gray-100">{children}</main>

    </div>
    </SessionProvider>
  );
}