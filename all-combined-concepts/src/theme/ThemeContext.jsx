import { createContext, useContext, useEffect, useState } from "react";
import { themes } from "./themes";


const ThemeContext = createContext();

export function ThemeProvider({ children }) {

    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    useEffect(() => {
        const themeVar = themes[theme];

        Object.keys(themeVar).forEach((key) => {
            document.documentElement.style.setProperty(key, themeVar[key])
        })

        localStorage.setItem('theme', theme);
    }, [theme])

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext);