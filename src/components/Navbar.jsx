import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "/Logo.png";

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Scroll listener for blur / background change
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Impact", to: "/impact" },
    { label: "Detroiters", to: "/detroiters" },
    { label: "Partners", to: "/partners" },
  ];

  return (
    <header className={scrolled ? "nav nav-scrolled" : "nav"}>
      <div className="nav-inner">

        {/* BRAND / LOGO */}
        <Link to="/" className="brand">
          <img
            src={logoImg}
            alt="Initiative 2053"
            className="brand-logo"
          />
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

          <Link to="/contact" className="btn btn-outline nav-cta">
            Contact
          </Link>
          <Link to="/detroiters" className="btn btn-primary nav-cta">
            Get Started
          </Link>

          {/* DESKTOP THEME TOGGLE */}
          <button
            type="button"
            className="nav-theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <div className="toggle-track">
              <div
                className={
                  theme === "light" ? "toggle-thumb light" : "toggle-thumb"
                }
              />
            </div>
          </button>
        </nav>

        {/* MOBILE HEADER CONTROLS (theme toggle + hamburger) */}
        <div className="nav-mobile-controls">
          {/* MOBILE THEME TOGGLE IN HEADER */}
          <button
            type="button"
            className="nav-theme-toggle mobile-header-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <div className="toggle-track">
              <div
                className={
                  theme === "light" ? "toggle-thumb light" : "toggle-thumb"
                }
              />
            </div>
          </button>

          {/* HAMBURGER BUTTON */}
          <button
            className="nav-toggle"
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <span className={open ? "nav-toggle-bar open" : "nav-toggle-bar"} />
            <span className={open ? "nav-toggle-bar open" : "nav-toggle-bar"} />
            <span className={open ? "nav-toggle-bar open" : "nav-toggle-bar"} />
          </button>
        </div>

      </div>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <div className="nav-mobile-overlay open" onClick={() => setOpen(false)}>
          <div
            className="nav-mobile-panel"
            onClick={(e) => e.stopPropagation()}
          >
            {/* MOBILE LINKS */}
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

            {/* MOBILE CTAS + THEME TOGGLE */}
            <div className="nav-mobile-ctas">
              <Link
                to="/contact"
                className="btn btn-outline nav-cta mobile"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/detroiters"
                className="btn btn-primary nav-cta mobile"
                onClick={() => setOpen(false)}
              >
                Get Started
              </Link>

              {/* MOBILE THEME TOGGLE (inside the menu) */}
              <button
                type="button"
                className="nav-theme-toggle mobile-toggle"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                <div className="toggle-track">
                  <div
                    className={
                      theme === "light"
                        ? "toggle-thumb light"
                        : "toggle-thumb"
                    }
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
