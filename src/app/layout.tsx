import type { Metadata } from "next"
import "../../public/css/venobox.min.css"
import "../../public/css/swiper-bundle.min.css"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Profile from "@/components/profile"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="relative h-screen overflow-y-auto overflow-x-hidden bg-light text-dark dark:bg-dark-2 dark:text-light">
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
            <img src="/images/gradient-1.png" alt="Weh Developer" />
          </div>

          <div
            className="fixed -right-[50%] top-[10%] -z-10 animate-spin-very-slow xl:-right-[15%] xl:top-[10%]">
            <img src="/images/gradient-2.png" alt="Weh Developer"
            />

          </div>

          <div className="move-with-cursor fixed left-[10%] top-[20%] -z-10">
            <img src="/images/object-3d-1.png" alt="Weh Developer"
            />
          </div>

          <div className="move-with-cursor fixed bottom-[20%] right-[10%] -z-10">
            <img src="/images/object-3d-2.png" alt="Weh Developer" />
          </div>
        </div>

        <Script src="/js/preline.js" strategy="afterInteractive" />
        <Script src="/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/venobox.min.js" strategy="afterInteractive" />
        <Script src="/js/clipboard.min.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
