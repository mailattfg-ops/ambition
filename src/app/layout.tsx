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
  title: "Ambition by FrameForge | AI-Powered Ambition Frames",
  description: "Upload a photo and instantly transform into a Doctor, Pilot, AI Engineer, Astronaut and more. 100% free digital frame, optional premium prints delivered home.",
  openGraph: {
    title: "Ambition by FrameForge | Envision Your Child's Future",
    description: "Transform your child's photo into inspiring professional roles with the power of AI. 100% free digital frame.",
    type: "website",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
