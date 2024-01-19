'use client'

import { createContext, useContext, useState, useEffect } from "react"
import { Inter } from "next/font/google"

/**
 * Uses context to control dark & light mode. 
 *
 * @author Arthur Riechert
 * @version 1.0.0
 */

const inter = Inter({ subsets: ["latin"] })

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export default function ThemeProvider({ children}: { children: any }) {

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
      const isDarkMode = localStorage.getItem("darkMode") === "true";
      setDarkMode(isDarkMode)
    }, [])

    useEffect(() => {
      localStorage.setItem("darkMode", darkMode)
      if(darkMode) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      } 
    }, [darkMode])

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <div className={ `${ darkMode ? "bg-slate-800" : "bg-white text-black" } ${inter.className}` }>
            { children }
          </div>
        </ThemeContext.Provider>
    )
}
