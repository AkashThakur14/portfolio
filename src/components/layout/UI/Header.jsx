import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="container">
        <div className="brand">Akash</div>

        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
        <NavLink to="/services" onClick={() => setIsOpen(false)}>Services</NavLink>
        <NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
      </div>
    </nav>
  );
};
