import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand navbar-dark"
      aria-label="Second navbar example"
    >
      <div className="container-fluid ps-5" style={{ height: 65 }}>
        <Link className="navbar-brand" to={'/'}>
          <img src={logo} height={180} className=" mt-3" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample02"
          aria-controls="navbarsExample02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample02">
          <ul className="navbar-nav me-auto">
            <li className="nav-item me-4 text-capitalize">
              <Link className="nav-link active fw-bold fs-4" aria-current="page" to={'/'}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold fs-4" to={'menu'}>
                MENU
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
