import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function LibraryNavbar(props) {
  return (
    <>
      <div className="navbar-wrapper">
        <div className="navbar-container">
          <img className="navlogo-img" src="/logo-clear.png" alt="" />
          <div className="navbar-button">
            <Link to="/" className="navbar-link">
              Modules
            </Link>
          </div>
          <div className="navbar-button">
            <Link to="/" className="navbar-link" style={{ color: "#ffa92c" }}>
              Library
            </Link>
          </div>
          <div className="navbar-button">
            <Link to="/" className="navbar-link">
              Forum
            </Link>
          </div>
          <div className="navbar-login-button">test</div>
        </div>
      </div>
    </>
  );
}

export default LibraryNavbar;
