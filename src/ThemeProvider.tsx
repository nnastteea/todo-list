import React from "react";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { themes } from "./theme";

const Main = () => {
  const currentTheme = themes.light;

  return (
    <ThemeProvider theme={currentTheme}>
      <App />
    </ThemeProvider>
  );
};

export default Main;
