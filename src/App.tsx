import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "@routes/route";
import { ThemeProvider } from "styled-components";

import Home from "./pages/Home";
import Settings from "./pages/Settings";
import { useTheme } from "./ThemeProvider";

function App() {
  const { currentTheme } = useTheme();
  return (
    <ThemeProvider theme={currentTheme}>
      <Router>
        <Routes>
          <Route path={routes.HOME} element={<Home />} />
          <Route path={routes.SETTINGS} element={<Settings />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
