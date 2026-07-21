import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nxvan-ecom-portfolio.vercel.app"),
  title: {
    default: "Nx Van | Ecommerce Portfolio",
    template: "%s | Nx Van",
  },
  description:
    "Portfolio for ecommerce storefronts, conversion systems, and retention-focused product experiences.",
  keywords: [
    "ecommerce portfolio",
    "Next.js developer",
    "conversion design",
    "Shopify",
    "headless commerce",
  ],
  authors: [{ name: "Nx Van" }],
  creator: "Nx Van",
  openGraph: {
    title: "Nx Van | Ecommerce Portfolio",
    description:
      "Selected commerce systems spanning storefronts, merchandising, checkout, and retention.",
    url: "https://nxvan-ecom-portfolio.vercel.app",
    siteName: "Nx Van Ecommerce Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
