import type { Metadata } from "next";

import "@/app/globals.css";
import TopNav from "@/app/components/TopNav";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Rewind",
  description: "Hit Rewind before you hit play 📼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        <main className="flex flex-col items-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
