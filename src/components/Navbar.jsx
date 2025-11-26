import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navWrap">
      <div className="brand">UNITED STATES • 1776 → 2025</div>
      <nav className="nav">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/founding">Founding</NavLink>
        <NavLink to="/new-england">New England</NavLink>
        <NavLink to="/timeline">Timeline</NavLink>
        <NavLink to="/resources">Resources</NavLink>
        <NavLink to="/map">Map</NavLink>
      </nav>
    </header>
  );
}
