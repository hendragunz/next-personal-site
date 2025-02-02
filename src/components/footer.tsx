"use client"

import Link from "next/link"
import { useEffect } from "react"

const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = url
    script.async = true
    script.onload = () => {
      setTimeout(() => {
        window.onload()
      }, 1000); // Adjust the delay as needed
    }

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [url])
}

export default function Footer() {
  useScript("js/main.js")

  return (
    <>
      <footer className="text-center">
        <p className="text-sm dark:text-light/70">
          @ HendraFolio 2023, Powered by
          <Link
            href="https://nextjs.org"
            target="_blank"
            className="inline-block border-b border-b-transparent text-primary transition hover:border-b-primary hover:text-blue-600">
            &nbsp;NextJS
          </Link>

          &nbsp;
          and
          &nbsp;

          <Link
            href="https://tailwindcss.com"
            target="_blank"
            className="inline-block border-b border-b-transparent text-primary transition hover:border-b-primary hover:text-blue-600">
            &nbsp;TailwindCSS
          </Link>
        </p>
      </footer>
    </>
  )
}