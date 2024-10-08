import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      {" "}
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            {/* Cyan mode */}
            <div className="form-check form-switch py-3 mx-3">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="cyanModeSwitch"
                onClick={props.toggleCyan}
              />
              <label
                className={`form-check-label text-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
              >
                {props.btnCyanText}
              </label>
            </div>
            {/* dark mode  */}
            <div className="form-check form-switch py-3">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="nightModeSwitch"
                onClick={props.toggleColor}
              />
              <label
                className={`form-check-label text-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
              >
                {props.btnText}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};
