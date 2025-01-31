import Image from "next/image"

export default function Home() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
      <h1>Site Under Construction</h1>
      <Image
        className="dark:invert mt-5"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
    </div>
  )
}
