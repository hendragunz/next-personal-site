import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import PrelineScript from "@/components/PrelineScript"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Profile from "@/components/profile"
import Image from "next/image"

import Script from "next/script"
import Link from "next/link"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hendra Gunawan",
  description: "Everything about me - Poowered by NextJS",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full auto">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative h-screen overflow-y-auto overflow-x-hidden bg-light text-dark dark:bg-dark-2 dark:text-light`}>
        <div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-4 p-4 lg:gap-6 lg:p-6">
          <Header />

          <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
            <Profile />

            <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
              {children}
            </div>
          </main>

          <Footer />
        </div>

        <div className="shapes">
          <div
            className="fixed -left-1/2 -top-1/2 -z-10 animate-spin-very-slow xl:-left-[20%] xl:-top-1/3">
            <Image
              src="/images/gradient-1.png"
              alt="Weh Developer"
              loading="eager"
              width={1088}
              height={1088}
            />
          </div>

          <div
            className="fixed -right-[50%] top-[10%] -z-10 animate-spin-very-slow xl:-right-[15%] xl:top-[10%]">
            <Image
              src="/images/gradient-2.png"
              alt="Weh Developer"
              loading="eager"
              width={1088}
              height={1088}
            />

          </div>

          <div className="move-with-cursor fixed left-[10%] top-[20%] -z-10">
            <Image
              src="/images/object-3d-1.png"
              alt="Weh Developer"
              loading="eager"
              width={72}
              height={72}
            />
          </div>

          <div className="move-with-cursor fixed bottom-[20%] right-[10%] -z-10">
            <Image
              src="/images/object-3d-2.png"
              alt="Weh Developer"
              loading="eager"
              width={72}
              height={72}
            />
          </div>
        </div>

        <PrelineScript />
        <Script async src="/js/clipboard.min.js" strategy="afterInteractive" />
        {/* <Link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
        <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></Script> */}
      </body>
    </html>
  )
}
