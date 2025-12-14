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
  title: "Nova Carter — Futuristic Personal Profile",
  description:
    "Explore Nova Carter’s futuristic portfolio, blending creative technology, immersive storytelling, and cosmic-inspired design.",
  metadataBase: new URL("https://agentic-8f32e0ec.vercel.app"),
  openGraph: {
    title: "Nova Carter — Futuristic Personal Profile",
    description:
      "Immersive personal landing page for creative technologist Nova Carter.",
    url: "https://agentic-8f32e0ec.vercel.app",
    siteName: "Nova Carter",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Carter — Futuristic Personal Profile",
    description:
      "Immersive personal landing page for creative technologist Nova Carter.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
