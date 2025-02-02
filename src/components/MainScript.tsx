"use client";

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { IStaticMethods } from "preline/preline"

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export default function MainScript() {
  const path = usePathname();

  useEffect(() => {
    const loadMain = async () => {
      await import("preline/preline")
      window.HSStaticMethods.autoInit()
    };

    loadMain()
  }, [path])

  return null
}