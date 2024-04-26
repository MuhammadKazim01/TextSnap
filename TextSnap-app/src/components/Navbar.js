import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const handleSetActivePage = (page) => {
    props.activePage(page);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.modePage} bg-${props.modePage}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" onClick={() => handleSetActivePage("home")} to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ "--bs-scroll-height": "100px" }}
          >
            <li className="nav-item">
              <Link
                className={`nav-link ${props.page === 'home' ? 'active' : ''}`}
                onClick={() => handleSetActivePage("home")}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${props.page === 'about' ? 'active' : ''}`}
                onClick={() => handleSetActivePage("about")}
                to="about"
              >
                About
              </Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.modePage === 'light'?'dark':'light'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable {props.modePage==='light'?'dark':'light'} mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};