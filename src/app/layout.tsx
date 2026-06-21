import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClickSparkle from "@/components/ClickSparkle";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jaswanth Ganta | Portfolio",
  description: "Portfolio of Jaswanth Ganta - Mechanical Engineer & Software Developer",
};

import { AntiDownload } from "@/components/AntiDownload";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${inter.className} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent/30 selection:text-white">
        <ClickSparkle />
        <AntiDownload />
        <LoadingScreen>{children}</LoadingScreen>
      </body>
    </html>
  );
}
