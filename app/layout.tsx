import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const poiret_one = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ATAT",
  description: "Email Clients for AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poiret_one.className}>{children}</body>
    </html>
  );
}
