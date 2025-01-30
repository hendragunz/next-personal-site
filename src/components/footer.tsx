import Link from "next/link"

export default function Footer() {
  return (
    <footer className="text-center">
      <p className="text-sm dark:text-light/70">
        @ HendraFolio 2023, Design By
        <Link
          href="#"
          className="inline-block border-b border-b-transparent text-primary transition hover:border-b-primary hover:text-blue-600">
          &nbsp;Hendra Gunawan
        </Link>
      </p>
    </footer>
  )
}