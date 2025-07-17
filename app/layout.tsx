import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import GrassHeader from "./components/GrassHeader";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Grass Venture",
  description: "Find your dream property in Madhya Pradesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`text-gray-900 antialiased bg-white`}>
        <GrassHeader />
        <main className="pt-30 flex flex-col">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
