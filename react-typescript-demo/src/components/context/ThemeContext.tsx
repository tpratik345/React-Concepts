import { createContext } from "react";
import { theme } from "./theme";

type ThemeContextProvidePropsType = {
    children: React.ReactNode
}

export const ThemContext = createContext(theme);

export function ThemContextProvider({ children }: ThemeContextProvidePropsType) {
    return <ThemContext.Provider value={theme}>{children}</ThemContext.Provider>
}