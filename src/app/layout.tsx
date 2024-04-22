import "./globals.css";
import { NextAuthProvider } from "../components/providers";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simple Forms",
  description: "Create Forms the simple way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
        {/* TODO: Add Toaster for notification*/}
      </body>
    </html>
  );
}
