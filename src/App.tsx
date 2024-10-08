import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "@routes/route";
import { ThemeProvider } from "styled-components";

import ErrorBoundary from "../src/components/ErrorBoundary";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import { useTheme } from "./ThemeProvider";

function App() {
  const { currentTheme } = useTheme();
  return (
    <ErrorBoundary>
      <ThemeProvider theme={currentTheme}>
        <Router>
          <Routes>
            <Route path={routes.HOME} element={<Home />} />
            <Route path={routes.SETTINGS} element={<Settings />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
