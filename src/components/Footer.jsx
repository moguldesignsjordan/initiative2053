import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* TOP ROW */}
        <div className="footer-top">
          {/* Brand + logo */}
          <div className="footer-brand">
            <div className="brand">
              {/* ⬇️ swap /vite.svg with the same logo path you use in your Navbar */}
              <img
                src="src/assets/Logo.png"
                alt="Initiative 2053 logo"
                className="brand-logo"
              />
              <div>
                <p className="footer-kicker">Detroit · Homeownership · 2053</p>
                <h3>Initiative 2053</h3>
              </div>
            </div>

            <p className="footer-description">
              A long-term plan to help Detroiters build generational wealth
              through stable, community-rooted homeownership.
            </p>
          </div>

          {/* Link columns */}
          <div className="footer-grid">
            <div className="footer-column">
              <h4>Explore</h4>
              <Link to="/" className="footer-link">
                Home
              </Link>
              <Link to="/about" className="footer-link">
                About
              </Link>
              <Link to="/model" className="footer-link">
                Our Model
              </Link>
              <Link to="/impact" className="footer-link">
                Impact
              </Link>
            </div>

            <div className="footer-column">
              <h4>Get Involved</h4>
              <Link to="/detroiters" className="footer-link">
                For Detroiters
              </Link>
              <Link to="/partners" className="footer-link">
                For Partners
              </Link>
              <Link to="/contact" className="footer-link">
                Contact
              </Link>
            </div>

            <div className="footer-column">
              <h4>Contact</h4>
              <p className="footer-text">Detroit, Michigan</p>
              <a
                href="mailto:hello@initiative2053.org"
                className="footer-link"
              >
                hello@initiative2053.org
              </a>
              <a href="tel:+13135552053" className="footer-link">
                (313) 555-2053
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="footer-bottom">
          <p>© {year} Caring Hands · All rights reserved.</p>

          <div className="footer-social">
            <a href="#" className="footer-social-link" aria-label="Instagram">
              Instagram
            </a>
            <a href="#" className="footer-social-link" aria-label="Facebook">
              Facebook
            </a>
            <a href="#" className="footer-social-link" aria-label="LinkedIn">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
