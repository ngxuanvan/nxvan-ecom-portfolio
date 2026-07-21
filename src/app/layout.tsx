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
    default: "Nguyễn Xuân Văn | E-commerce & Digital Marketing",
    template: "%s | Nguyễn Xuân Văn",
  },
  description:
    "Portfolio cá nhân của Nguyễn Xuân Văn, sinh viên Thương mại điện tử với kinh nghiệm SEO, E-commerce, Digital Marketing, Google Analytics 4 và Google Search Console.",
  keywords: [
    "Nguyễn Xuân Văn",
    "E-commerce",
    "Digital Marketing",
    "SEO",
    "Google Analytics 4",
    "Google Search Console",
    "Semrush",
  ],
  authors: [{ name: "Nguyễn Xuân Văn" }],
  creator: "Nguyễn Xuân Văn",
  openGraph: {
    title: "Nguyễn Xuân Văn | E-commerce & Digital Marketing",
    description:
      "Portfolio cá nhân bằng tiếng Việt về SEO, E-commerce, Digital Marketing và các dự án nổi bật.",
    url: "https://nxvan-ecom-portfolio.vercel.app",
    siteName: "Nguyễn Xuân Văn Portfolio",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Nguyễn Xuân Văn - E-commerce & Digital Marketing",
      },
    ],
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
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden">{children}</body>
    </html>
  );
}
