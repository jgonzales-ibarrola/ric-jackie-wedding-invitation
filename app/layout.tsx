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

// ── FULL CINEMATIC SEO METADATA CONFIGURATION ──
export const metadata: Metadata = {
  title: {
    default: "The Wedding of Ric & Jackie | You're Invited",
    template: "%s | Ric & Jackie Wedding",
  },
  description: "You are warmly invited to celebrate the union of Ric and Jackie. Join us as we exchange vows and begin our forever. Find event timelines, venue details, dress code, and registry information here.",
  
  // Replace with your deployed Vercel/production domain
  metadataBase: new URL("https://ric-and-jackie-wedding.vercel.app"), 
  
  alternates: {
    canonical: "/",
  },
  
  // OpenGraph configuration (Controls look on Facebook, Messenger, Viber, WhatsApp, Discord)
  openGraph: {
    title: "The Wedding of Ric & Jackie | Our Forever Begins",
    description: "Join us as we celebrate our love story and exchange our 'I Do's'. Click to view our wedding schedule, location, entourage, and guest details.",
    url: "https://ric-and-jackie-wedding.vercel.app",
    siteName: "Ric & Jackie Wedding Invitation",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/images/NZF_3192.jpg", // Custom landscape asset for rich image preview cards
        width: 1200,
        height: 630,
        alt: "Ric & Jackie Wedding Invitation Cover",
      },
    ],
  },
  
  // Twitter Card configuration (Controls look on X/Twitter and Threads link shares)
  twitter: {
    card: "summary_large_image",
    title: "The Wedding of Ric & Jackie | You're Invited",
    description: "Join us as we celebrate our love story. Find the timeline, location maps, dress code, and registry updates here.",
    images: ["/images/NZF_3192.jpg"],
  },
  
  // Indexing safety configuration
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Modern icon architecture mapping
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
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
      <body className="min-h-full flex flex-col bg-[#2E2522] text-white">
        {children}
      </body>
    </html>
  );
}