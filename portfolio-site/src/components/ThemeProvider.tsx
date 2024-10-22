'use client'

import { createContext, useContext, useState, useEffect } from "react"
import { Inter } from "next/font/google"

type ThemeContextValue = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};


const inter = Inter({ subsets: ["latin"] })

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const useTheme = () => useContext(ThemeContext)

export default function ThemeProvider({ children}: { children: any }) {

    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
      const isDarkMode = localStorage.getItem("darkMode") === "true";
      setDarkMode(isDarkMode)
    }, [])

    useEffect(() => {
      localStorage.setItem("darkMode", darkMode.toString())
      if(darkMode) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      } 
    }, [darkMode])

    const contextValue: ThemeContextValue = {
      darkMode,
      setDarkMode,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
          <div className={ `${ darkMode ? "bg-slate-800" : "bg-white text-black" } ${inter.className}` }>
            { children }
          </div>
        </ThemeContext.Provider>
    )
}
