"use client"
import { Geist, Geist_Mono } from "next/font/google";
import { SessionProvider } from "next-auth/react"
import "./globals.css";
import Header from "@/components/header/Header";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <Header/>
            
            {children}
            
            
          </body>
        </html>
      </QueryClientProvider>
    </SessionProvider>
  );
}
