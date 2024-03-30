import { useContext, createContext } from "react";

export const ThemeContext = createContext({
    themeMode: "Light",
    lightMode: () => {},
    darkMode: () => {},
})

export const Themeprovider = ThemeContext.Provider;

export default function UseTheme() {
    return useContext(ThemeContext)
}