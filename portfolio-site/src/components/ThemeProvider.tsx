'use client'

import { createContext, useState } from "react"

/**
 * Uses context to control dark & light mode. 
 *
 * @author Arthur Riechert
 * @version 1.0.0
 */

export const ThemeContext = createContext({
    darkMode: false,
    toggleDarkMode: () => {},
})

export default function ThemeProvider({ children}: { children: any }) {

    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    const contextValue = {
        darkMode,
        toggleDarkMode
    }

    return (
        <ThemeContext.Provider value={ contextValue }>
            { children }
        </ThemeContext.Provider>
    )
}