import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-nav">
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img alt="Carved Rock Fitness" src="/images/logo.png" />
            </Link>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? 'activeStyle' : ''} to="/shoes">
              Shoes
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? 'activeStyle' : ''} to="/cart">
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
