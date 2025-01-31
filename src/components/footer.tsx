import Link from "next/link"

export default function Footer() {
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