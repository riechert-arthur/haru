"use client"

import { useTheme } from "./ThemeProvider"

export default function DarkButton() {
  const contextValue = useTheme()

  return (
    <button
      onClick={() => contextValue?.setDarkMode(!contextValue?.darkMode)}
      className={`${contextValue?.darkMode ? "bg-sun-icon" : "bg-night-icon"} bg-cover mt-6 w-50 h-50 hover:pointer shadow-2xl`}
    >
      <div className="w-10 h-10"></div>
    </button>
  )
}
