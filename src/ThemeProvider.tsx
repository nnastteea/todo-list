import React, { createContext, ReactNode, useContext, useState } from "react";
import { themes } from "@theme/theme";

interface ThemeContextType {
  currentTheme: typeof themes.light | typeof themes.dark;
  changeTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const storedTheme =
    (localStorage.getItem("theme") as "light" | "dark") || null;
  const initialTheme = storedTheme === "light" ? themes.light : themes.dark;

  const [currentTheme, setCurrentTheme] = useState(initialTheme);

  const changeTheme = () => {
    setCurrentTheme((prevState: typeof themes.light | typeof themes.dark) => {
      const newTheme = prevState === themes.light ? themes.dark : themes.light;
      localStorage.setItem(
        "theme",
        newTheme === themes.light ? "light" : "dark",
      );
      return newTheme;
    });
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
