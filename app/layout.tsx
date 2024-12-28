import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import logo from "@/public/logo.png"
import Image from "next/image"

import { ClerkProvider, SignedIn, UserButton } from '@clerk/nextjs'

const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jarvo AI | Your day to day partner",
  description: "A nextJS based fullstack chatGPT clone built on Google Gemini AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/" >
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="py-4 px-16 h-[100vh] flex flex-col">
            <header className="flex justify-between items-center">
              <a className="flex items-center font-bold gap-2" href="/">
                <Image
                  src={logo}
                  alt="Logo"
                  className="w-8 h-8" />
                <span>Jarvo AI</span>
              </a>
              <div>
                <SignedIn >
                  <UserButton />
                </SignedIn>
              </div>
            </header>
            <main className="flex-1 overflow-hidden">
              {children}
            </main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
