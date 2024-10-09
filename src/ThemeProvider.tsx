import React, { createContext, ReactNode, useContext, useState } from "react";
import { themes } from "@theme/theme";

import { changeTheme as toggleTheme } from "../src/helpers/changeTheme";

interface ThemeContextType {
  currentTheme: typeof themes.light | typeof themes.dark;
  changeTheme: () => void;
}

const THEME_LIGHT = "light";
const THEME_DARK = "dark";
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const storedTheme =
    (localStorage.getItem("theme") as "THEME_LIGHT" | "THEME_DARK") || null;
  const initialTheme =
    storedTheme === "THEME_LIGHT" ? themes.light : themes.dark;

  const [currentTheme, setCurrentTheme] = useState(initialTheme);

  const changeTheme = () => {
    toggleTheme(currentTheme, setCurrentTheme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be with value");
  }
  return context;
};

export default ThemeProvider;
