import type {Metadata} from "next";
import {Inter} from "next/font/google";
import Sidebar from "@/app/lib/Sidebar";
import './globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Riax",
  description: "Social app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
      <Sidebar />
      <div>
        {children}
      </div>
      </body>
    </html>
  );
}
