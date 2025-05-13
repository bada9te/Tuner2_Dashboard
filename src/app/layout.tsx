import { Geist, Geist_Mono } from "next/font/google";
import { SessionProvider } from "next-auth/react"
import "./globals.css";
import Header from "@/components/header/Header";
import { DefaultSession, getServerSession } from "next-auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header/>
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
