import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="navbar-logo">
          MERN App
        </div>

        {/* Menu */}
        <div className="navbar-menu">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/propsdrilling">Props</NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navigation;
