import React from "react";
import Header from "../components/Header";
import { Outlet, useLocation } from "react-router-dom";
import "./MainPage.css";

function MainPage() {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/app" && <Header />}
      <div className="user-header">
        <Outlet />
      </div>
    </div>
  );
}

export default MainPage;
