import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import BottomNav from "@/components/navbar/BottomNav";
import AuthProvider from "@/components/auth/AuthProvider";
import { EdgeStoreProvider } from "@/lib/edgeStore";

export const metadata = {
  title: "Infinity",
  description: "Write your throught using AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200 scrollbar-thumb-rounded-lg">
        <AuthProvider>
          <EdgeStoreProvider>
            <Navbar />
            {children}
            <BottomNav />
          </EdgeStoreProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
