import React, { useState } from "react";
import Navbar from "./common/Navbar";
import Sidebar from "./common/Sidebar";
import Home from "./home/Home";
import AppSettings from "./appSettings/AppSettings";
import "./styles/dashboard.css";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("home");
  return (
    <React.Fragment>
      <Navbar />
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      {activePage === "home" && <Home />}
      {activePage === "monitoring" && <h2>health monitoring</h2>}

      {activePage === "settings" && <AppSettings />}

      <footer className="copyright footer" id="footer">
        Copyright &copy; ACG Engineering, 2019-20. All rights reserved.
      </footer>
    </React.Fragment>
  );
};

export default Dashboard;
