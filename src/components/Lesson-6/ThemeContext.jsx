import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => setTheme(prevTheme === 'light' ? 'dark' : 'light'));
    }


    const mainClass = theme === 'light' ? "light-theme" : "dark-theme"

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, mainClass }}>
            {children}
        </ThemeContext.Provider>
    );
}
