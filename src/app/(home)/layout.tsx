import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MaskedCursorProvider } from "@/components/MaskedCursor";

export const metadata: Metadata = {
  title: "Kreative Cloud",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MaskedCursorProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="bg-black flex-1">{children}</main>
        <Footer />
      </div>
    </MaskedCursorProvider>
  );
}
