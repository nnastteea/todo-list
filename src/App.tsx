import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "@routes/route";

import Home from "./pages/Home";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.SETTINGS} element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
