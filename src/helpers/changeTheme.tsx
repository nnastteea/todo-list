import { themes } from "@theme/theme";

export const changeTheme = (
  currentTheme: typeof themes.light | typeof themes.dark,
  setCurrentTheme: (theme: typeof themes.light | typeof themes.dark) => void,
) => {
  const newTheme = currentTheme === themes.light ? themes.dark : themes.light;
  localStorage.setItem(
    "theme",
    newTheme === themes.light ? "THEME_LIGHT" : "THEME_DARK",
  );
  setCurrentTheme(newTheme);
};
