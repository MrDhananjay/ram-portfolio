import type { Metadata } from "next";
import { Syne, Manrope, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ram Singh - Product Designer | Web & Mobile",
  description: "Portfolio of Ram Singh, a Web & Mobile Design Expert.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${manrope.variable} ${inter.variable} antialiased bg-primary text-text-primary font-body`}
      >
        {children}
      </body>
    </html>
  );
}
