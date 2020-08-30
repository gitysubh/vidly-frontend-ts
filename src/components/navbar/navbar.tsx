import * as React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/" className="navbar-brand">
      Vidly
    </Link>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink
          to="/movies"
          activeClassName="active"
          className="nav-item nav-link"
        >
          Movies
        </NavLink>
        <NavLink
          to="/customers"
          activeClassName="active"
          className="nav-item nav-link"
        >
          Customers
        </NavLink>
        <NavLink
          to="/Rental"
          activeClassName="active"
          className="nav-item nav-link"
        >
          Rental
        </NavLink>
        <NavLink
          to="/login"
          activeClassName="active"
          className="nav-item nav-link"
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          activeClassName="active"
          className="nav-item nav-link"
        >
          Register
        </NavLink>
      </div>
    </div>
  </nav>
);

export default Navbar;
