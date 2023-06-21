import React from "react";
import "../stylesheets/nav.css";
import { NavLink } from "react-router-dom";
function Navigator() {
  return (
    <div>
      <nav
        style={{ backgroundColor: "burlywood" }}
        className=" navbar navbar-expand-lg bg-body-primary"
      >
        <div className="container-fluid">
          <b className="navbar-brand">TAAZA KHABAR</b>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/business">
                  Business
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/entertainment">
                  Entertainment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/general">
                  General
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/health">
                  Health
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/science">
                  Science
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/sports">
                  Sports
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/technology">
                  Technology
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigator;
