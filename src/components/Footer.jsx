import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">





        {/* =========================
            LEGAL DISCLOSURE (DROPDOWN)
        ========================== */}
        <details className="footer-legal">
          <summary>Important Mortgage Disclosures</summary>

          <p>
            All mortgage assistance and homebuyer readiness services provided through
            Initiative 2053 comply with Michigan state lending regulations and federal lending
            laws including ECOA, RESPA, HMDA, and Fair Housing requirements.
          </p>

          <p>
            Eligibility for down-payment assistance or mortgage readiness is not guaranteed.
            All applicants are subject to income verification, credit review, underwriting
            requirements, and lender program rules. Program availability is subject to change.
          </p>

          <p>
            Initiative 2053 and Caring Hands do not issue mortgage loans directly. All credit
            decisions, interest rates, and disclosures are provided by partnered licensed
            mortgage lenders in the State of Michigan.
          </p>
        </details>

        {/* DIVIDER */}
        <div className="footer-divider"></div>
        
        {/* =========================
             TOP SECTION
        ========================== */}
        <div className="footer-top">

          {/* BRAND + TAGLINE */}
          <div className="footer-brand">
            <img src="/Logo.png" alt="Initiative 2053 Logo" className="footer-logo" />

            <p className="footer-tagline">
              A long-term plan to help Detroiters build generational wealth
              through stable, community-rooted homeownership.
            </p>
          </div>

          {/* NAVIGATION GRID */}
          <div className="footer-grid">

            {/* EXPLORE */}
            <div className="footer-column">
              <h4>Explore</h4>
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About</Link>
              <Link to="/model" className="footer-link">Our Model</Link>
              <Link to="/impact" className="footer-link">Impact</Link>
            </div>

            {/* GET INVOLVED */}
            <div className="footer-column">
              <h4>Get Involved</h4>
              <Link to="/detroiters" className="footer-link">For Detroiters</Link>
              <Link to="/partners" className="footer-link">For Partners</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>

            {/* CONTACT */}
            <div className="footer-column">
              <h4>Contact</h4>
              <p className="footer-text">Detroit, Michigan</p>

              <a href="mailto:info@initiative2053.com" className="footer-link">
                info@initiative2053.com
              </a>

              <a href="tel:+13135552053" className="footer-link">
                (313) 555-2053
              </a>

              {/* SOCIAL ICONS */}
              <div className="footer-social">
                <a href="#" aria-label="Instagram">
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="#" aria-label="Facebook">
                  <i className="ri-facebook-circle-line"></i>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <i className="ri-linkedin-line"></i>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* DIVIDER */}
        <div className="footer-divider"></div>


        {/* =========================
             BOTTOM SECTION
        ========================== */}
        <div className="footer-bottom">
          <p>© {year} Caring Hands · All rights reserved.</p>

          <p className="footer-credit">
            Created by{" "}
            <a
              href="https://moguldesignagency.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MogulDesignAgency.com
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
