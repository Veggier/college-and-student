import React from "react";
import "./styles/NavBarView.css";
import { Link } from "react-router-dom";

const NavBarView = (props) => {
  return (
    <>
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/campuses" className="nav-link">Campuses</Link>
      </li>
      <li className="nav-item">
        <Link to="/students" className="nav-link">Students</Link>
      </li>
    </ul>
    </>
  );
};

export default NavBarView;
