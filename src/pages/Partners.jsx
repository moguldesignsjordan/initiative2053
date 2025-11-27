// src/pages/Partners.jsx
import { motion } from "framer-motion";

/* GLOBAL ANIMATION PRESET */
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut" },
};

export default function Partners() {
  return (
    <div className="page">

      {/* ================================
          HERO
      =================================*/}
      <motion.section className="section section-center" {...fadeUp}>
        <p className="kicker">For Lenders · Realtors · Nonprofits</p>

        <h1 className="hero-title" style={{ marginBottom: "20px" }}>
          Partnership That Transforms Detroit’s Housing Future.
        </h1>

        <p className="body-lg" style={{ maxWidth: "760px" }}>
          Initiative 2053 partners with mortgage lenders, real estate
          professionals, community organizations, and philanthropic institutions
          to expand access to homeownership for Detroit families.  
          Together, we build a scalable, data-backed model that strengthens
          neighborhoods and accelerates generational wealth.
        </p>
      </motion.section>


      {/* ================================
          WHY PARTNERSHIP MATTERS
      =================================*/}
      <motion.section className="section" {...fadeUp}>
        <p className="kicker">Why This Matters</p>
        <h2>Your partnership strengthens Detroit’s long-term stability.</h2>

        <p className="body-lg" style={{ maxWidth: "760px" }}>
          Detroit renters face steep barriers to ownership credit readiness,
          low savings, and limited navigation support.  
          With your partnership, we shorten the path to readiness and provide
          families with education, down-payment support, and transparent
          accountability systems.
        </p>

        <div className="impact-grid" style={{ marginTop: "40px" }}>
          <div className="impact-card">
            <span className="impact-value">100</span>
            <span className="impact-label">Families Served (Phase 1)</span>
          </div>

          <div className="impact-card">
            <span className="impact-value">$17M+</span>
            <span className="impact-label">Household Equity Created</span>
          </div>

          <div className="impact-card">
            <span className="impact-value">&lt;1%</span>
            <span className="impact-label">Projected Default Rate</span>
          </div>

          <div className="impact-card">
            <span className="impact-value">8.5×</span>
            <span className="impact-label">Community ROI (per $1 invested)</span>
          </div>
        </div>
      </motion.section>


      {/* ================================
          WHO WE PARTNER WITH
      =================================*/}
      <motion.section className="section" {...fadeUp}>
        <p className="kicker">Who We Work With</p>
        <h2>A cross-sector coalition committed to a stronger Detroit.</h2>

        <div className="pillars-grid" style={{ marginTop: "40px" }}>
          <div className="pillar-card">
            <h3>Mortgage Lenders</h3>
            <p>
              Align lending pipelines with educated, mortgage-ready Detroit
              buyers supported through compliance and accountability.
            </p>
          </div>

          <div className="pillar-card">
            <h3>Real Estate Professionals</h3>
            <p>
              Ensure families are home-ready, supported, and empowered with
              accurate expectations throughout the buying process.
            </p>
          </div>

          <div className="pillar-card">
            <h3>Community Organizations</h3>
            <p>
              Integrate homeownership readiness into neighborhood programs,
              financial empowerment, and long-term stability efforts.
            </p>
          </div>

          <div className="pillar-card">
            <h3>Philanthropy & Institutions</h3>
            <p>
              Fund down-payment assistance, readiness education, and data-backed
              reporting that tracks progress in real time.
            </p>
          </div>
        </div>
      </motion.section>


      {/* ================================
          HOW PARTNERSHIP WORKS
      =================================*/}
      <motion.section className="section" {...fadeUp}>
        <p className="kicker">How Partnership Works</p>
        <h2>Simple. Scalable. Transparent.</h2>

        <div className="pillars-grid" style={{ marginTop: "40px" }}>
          <div className="pillar-card">
            <h3>1. Partnership Alignment</h3>
            <p>
              We identify your organization's goals and tailor the collaboration 
              to align with Detroit’s homeownership challenges and opportunities.
            </p>
          </div>

          <div className="pillar-card">
            <h3>2. Integrated Readiness Pipeline</h3>
            <p>
              Partner-referred clients receive structured education, credit
              support, budgeting, and navigation through the full mortgage process.
            </p>
          </div>

          <div className="pillar-card">
            <h3>3. DPA & Compliance Support</h3>
            <p>
              Families receive targeted down-payment assistance and are tracked
              in our compliance dashboard for transparent reporting.
            </p>
          </div>

          <div className="pillar-card">
            <h3>4. Reporting & Accountability</h3>
            <p>
              Real-time dashboards provide KPIs, process visibility, and
              measurable outcomes for funders and partners.
            </p>
          </div>
        </div>
      </motion.section>


      {/* ================================
          CTA
      =================================*/}
      <motion.section className="section section-center" {...fadeUp}>
        <h2 style={{ marginBottom: "20px" }}>
          Let’s Build a Stronger Detroit Together.
        </h2>

        <p className="body-lg" style={{ maxWidth: "700px", marginBottom: "32px" }}>
          Whether you're a lender, realtor, nonprofit, or institutional partner,
          Initiative 2053 provides a proven structure for sustainable,
          community-rooted homeownership.  
          Detroit’s next chapter depends on collaboration.
        </p>

        <a href="/contact" className="btn btn-primary">
          Become a Partner
        </a>
      </motion.section>

    </div>
  );
}
