import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export const Header = () => {
  const [show, setShow] = useState(false);

  const handleButtonToggle = () => setShow(!show);
  const handleCloseMenu = () => setShow(false);

  return (
    <header>
      <div className="container">
        {/* Logo Section */}
        <div className="logo">
          <NavLink to="/" onClick={handleCloseMenu}>
            <h1>Akash</h1>
          </NavLink>
        </div>

        {/* Navigation */}
        <nav className={show ? "menu-mobile" : "menu-web"}>
          <ul>
            <li><NavLink to="/" onClick={handleCloseMenu}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={handleCloseMenu}>About</NavLink></li>
            <li><NavLink to="/services" onClick={handleCloseMenu}>Services</NavLink></li>
            <li><NavLink to="/projects" onClick={handleCloseMenu}>Projects</NavLink></li>
            <li><NavLink to="/contact" onClick={handleCloseMenu}>Contact</NavLink></li>
          </ul>
        </nav>

        {/* Resume Button */}
        <NavLink to="/" className="resume-button">
          Resume <ArrowRight size={18} />
        </NavLink>

        {/* Hamburger Menu */}
        <div className="han-menu">
          <button onClick={handleButtonToggle}>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </header>
  );
};
