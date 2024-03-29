import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import Test from "./components/d3/Test";
import "./App.css";

function App() {
  const defaultTheme = "dark";
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  useEffect(() => {
    document.body.className = currentTheme;
  }, [currentTheme]);

  return (
    <BrowserRouter>
      <Switch>
        <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/test" component={Test} />
        </ThemeContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
