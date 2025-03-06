import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
    theme: '',
    toggleTheme: () => {}
});

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? savedTheme : "dark";
    });

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
    };

    useEffect(() => {
        // Remove previous theme class before adding the new one
        document.documentElement.classList.remove("dark", "light");
        document.documentElement.classList.add(theme);

        // Save theme to localStorage
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
