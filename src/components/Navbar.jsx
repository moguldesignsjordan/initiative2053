import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// 1. Import the logo explicitly so Vite bundles it correctly for production
import logoImg from "/Logo.png"; 

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Scroll listener for blur / background change
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
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
    { label: "Model", to: "/model" },
    { label: "Impact", to: "/impact" },
    { label: "Detroiters", to: "/detroiters" },
    { label: "Partners", to: "/partners" },
    { label: "About", to: "/about" },
  ];

  return (
    <header className={scrolled ? "nav nav-scrolled" : "nav"}>
      <div className="nav-inner">
        {/* BRAND / LOGO */}
        <Link to="/" className="brand">
          <img
            src={logoImg} /* 2. Use the imported variable here */
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
        </nav>

        {/* MOBILE TOGGLE */}
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

      {/* MOBILE MENU OVERLAY */}
      {/* 3. Added the "open" class below so CSS allows it to display: flex */}
      {open && (
        <div className="nav-mobile-overlay open" onClick={() => setOpen(false)}>
          <div
            className="nav-mobile-panel"
            onClick={(e) => e.stopPropagation()}
          >
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
            </div>
          </div>
        </div>
      )}
    </header>
  );
}