'use client'

import { useEffect } from "react"

export default function DevToolsGuard() {
  useEffect(() => {
    const interval = setInterval(() => {
      const devToolsButton = document.querySelector("[data-nextjs-dev-tools-button]")
      if (devToolsButton) {
        devToolsButton.remove()
        clearInterval(interval)
      }
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return null
}
