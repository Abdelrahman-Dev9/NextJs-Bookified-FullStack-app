import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = Geist_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "700", "500", "600"],
  display: "swap",
});

const monaSans = Geist({
  variable: "--font-mona-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bookified",
  description:
    "Transform your books into interactive AI conversations. Upload PDFs, and chat with your books using voice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.variable} ${monaSans.variable} relative font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
