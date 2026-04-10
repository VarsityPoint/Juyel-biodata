import type { Metadata } from "next";
import { Inter, Anek_Bangla } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const anekBangla = Anek_Bangla({
  variable: "--font-anek-bangla",
  subsets: ["bengali"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Biodata | Juyel Mahmud Shopon",
  description: "Professional biodata of Juyel Mahmud Shopon, Textile Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anekBangla.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
