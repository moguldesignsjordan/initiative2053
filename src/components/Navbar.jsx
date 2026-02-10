import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "/Logo.png";

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    // Check on mount in case we reload halfway down the page
    onScroll(); 
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; }; // Cleanup
  }, [open]);

  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Academy", to: "/academy" },
    { label: "Partners", to: "/partners" },
    
  ];

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""} ${open ? "nav-open" : ""}`}>
      <div className="nav-inner">
        
        {/* LOGO */}
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src={logoImg} alt="Initiative 2053" className="brand-logo" />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="nav-links nav-links-desktop">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-outline nav-cta">Contact</Link>
          <Link to="/detroiters" className="btn btn-primary nav-cta">Get Started</Link>

          {/* Desktop Theme Toggle */}
          <button
            type="button"
            className="nav-theme-toggle desktop-toggle"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            <div className="toggle-track">
              <div className={`toggle-thumb ${theme === "light" ? "light" : ""}`} />
            </div>
          </button>
        </nav>

        {/* MOBILE HEADER CONTROLS */}
        <div className="nav-mobile-controls">
          <button 
            className="nav-theme-toggle mobile-header-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            <div className="toggle-track">
              <div className={`toggle-thumb ${theme === "light" ? "light" : ""}`} />
            </div>
          </button>

          {/* HAMBURGER */}
          <button 
            className="nav-toggle" 
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span className={`nav-toggle-bar ${open ? "open" : ""}`} />
            <span className={`nav-toggle-bar ${open ? "open" : ""}`} />
            <span className={`nav-toggle-bar ${open ? "open" : ""}`} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`nav-mobile-overlay ${open ? "open" : ""}`}>
        <div className="nav-mobile-panel">
          <div className="nav-mobile-links">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  "nav-link mobile" + (isActive ? " active" : "")
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="nav-mobile-ctas">
            <Link to="/contact" className="btn btn-outline full-width" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Link to="/detroiters" className="btn btn-primary full-width" onClick={() => setOpen(false)}>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}