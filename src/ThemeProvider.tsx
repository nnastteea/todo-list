import React from "react";
import { themes } from "@theme/theme";
import { ThemeProvider } from "styled-components";

import App from "./App";

const Main = () => {
  const currentTheme = themes.light;

  return (
    <ThemeProvider theme={currentTheme}>
      <App />
    </ThemeProvider>
  );
};

export default Main;
