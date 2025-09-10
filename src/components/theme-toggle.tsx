"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-4 right-4 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
    >
      <span className="sr-only">Toggle theme</span>
      {theme === "light" ? (
        <div className="flex items-center gap-2">
          <span className="text-lg">🌙</span>
          <span className="text-sm font-medium">Dark</span>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <span className="text-lg">☀️</span>
          <span className="text-sm font-medium">Light</span>
        </div>
      )}
    </Button>
  )
}