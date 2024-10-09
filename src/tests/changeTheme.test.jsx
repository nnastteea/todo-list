import { themes } from "@theme/theme";

import { changeTheme } from "../helpers/changeTheme";

describe("changeTheme function", () => {
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        setItem: jest.fn(),
        getItem: jest.fn(),
      },
      writable: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should switch from light to dark theme and store the theme in localStorage", () => {
    const setCurrentTheme = jest.fn();
    const currentTheme = themes.light;
    changeTheme(currentTheme, setCurrentTheme);
    expect(localStorage.setItem).toHaveBeenCalledWith("theme", "THEME_DARK");
    expect(setCurrentTheme).toHaveBeenCalledWith(themes.dark);
  });

  test("should switch from dark to light theme and store the theme in localStorage", () => {
    const setCurrentTheme = jest.fn();
    const currentTheme = themes.dark;
    changeTheme(currentTheme, setCurrentTheme);
    expect(localStorage.setItem).toHaveBeenCalledWith("theme", "THEME_LIGHT");
    expect(setCurrentTheme).toHaveBeenCalledWith(themes.light);
  });
});
