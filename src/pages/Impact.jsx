import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut" },
};

export default function Impact() {
  return (
    <div className="page impact-page">

      {/* ===============================
          HERO / TOP
      ================================== */}
      <motion.section className="section" {...fadeUp}>
        <p className="kicker">Our Impact</p>

        <h1 className="hero-title">
          100 Families. $2M Invested.  
          <br />
          <span className="hero-highlight">$17M+ in Equity Created.</span>
        </h1>

        <p className="body-lg" style={{ maxWidth: "760px" }}>
          Initiative 2053 is proving what’s possible when Detroiters are equipped 
          with education, down-payment support, and transparent accountability. 
          Phase 1 demonstrates a replicable model: an 8.5× return on investment
          and a projected default rate under 1%. 
        </p>
      </motion.section>


      {/* ===============================
          KPI GRID
      ================================== */}
      <motion.section className="section" {...fadeUp}>
        <div className="impact-grid">

          <motion.div className="impact-card" {...fadeUp}>
            <span className="impact-value">100</span>
            <span className="impact-label">Families Served</span>
          </motion.div>

          <motion.div className="impact-card" {...fadeUp}>
            <span className="impact-value">$175k</span>
            <span className="impact-label">Avg. Home Value</span>
          </motion.div>

          <motion.div className="impact-card" {...fadeUp}>
            <span className="impact-value">$15k</span>
            <span className="impact-label">Avg. DPA Grant</span>
          </motion.div>

          <motion.div className="impact-card" {...fadeUp}>
            <span className="impact-value">8.5×</span>
            <span className="impact-label">ROI Per $1 Invested</span>
          </motion.div>

          <motion.div className="impact-card" {...fadeUp}>
            <span className="impact-value">&lt;1%</span>
            <span className="impact-label">Projected Default Rate</span>
          </motion.div>

          <motion.div className="impact-card" {...fadeUp}>
            <span className="impact-value">$17M+</span>
            <span className="impact-label">Equity Created (Phase 1)</span>
          </motion.div>
        </div>
      </motion.section>


      {/* ===============================
          DETROIT LANDSCAPE SECTION
      ================================== */}
      <motion.section className="section" {...fadeUp}>
        <p className="kicker">Detroit Housing Landscape</p>
        <h2>Detroit’s Recovery Is Real — But Uneven.</h2>

        <p className="body-lg" style={{ maxWidth: "760px" }}>
          Despite $4.6B in homeowner wealth gains across the city, nearly half of 
          Detroiters are still renters — many paying <strong>more for rent than a mortgage</strong>.
          Initiative 2053 directly targets the barriers outlined in the city’s housing data:
          income volatility, lack of savings, affordability gaps, and credit readiness.
        </p>

        <div className="stat-grid-mini" style={{ marginTop: "32px" }}>
          <div className="stat-item">
            <span className="stat-number">~50%</span>
            <span className="stat-desc">Homeownership Rate</span>
          </div>

          <div className="stat-item">
            <span className="stat-number">57%</span>
            <span className="stat-desc">Renters Cost-Burdened</span>
          </div>

          <div className="stat-item full-width">
            <div className="comparison-bar">
              <div>
                <span className="label">Avg Rent</span>
                <span className="val bad">$1,103</span>
              </div>
              <div className="vs">vs</div>
              <div>
                <span className="label">Avg Mortgage</span>
                <span className="val good">$910</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>


      {/* ===============================
          3-PILLAR MODEL (Condensed)
      ================================== */}
      <motion.section className="section" {...fadeUp}>
        <p className="kicker">Our Model</p>
        <h2>The 3-Pillar Pathway to Long-Term Stability</h2>

        <div className="pillars-grid" style={{ marginTop: "40px" }}>
          <div className="pillar-card">
            <h3>Education & Readiness</h3>
            <p>
              Financial coaching, mortgage literacy, budgeting, and personalized 
              credit development prepare Detroiters for sustainable homeownership.
            </p>
          </div>

          <div className="pillar-card">
            <h3>Down-Payment Assistance</h3>
            <p>
              $15,000 average grants used to close affordability gaps and eliminate
              barriers to mortgage qualification.
            </p>
          </div>

          <div className="pillar-card">
            <h3>Accountability & Data</h3>
            <p>
              Every participant is tracked through a real-time compliance dashboard, 
              offering lenders and funders complete transparency.
            </p>
          </div>
        </div>
      </motion.section>


      {/* ===============================
          OUTREACH + COMMUNITY IMPACT
      ================================== */}
      <motion.section className="section" {...fadeUp}>
        <p className="kicker">Community Impact</p>
        <h2>A Movement Rooted in Trust & Community.</h2>

        <p className="body-lg" style={{ maxWidth: "760px" }}>
          From church partnerships to neighborhood workshops, Initiative 2053 meets 
          Detroiters where they already are. Digital storytelling, social content, 
          bootcamps, and lender collaborations expand our reach across the city.
        </p>

        <ul className="bullet-list" style={{ marginTop: "24px" }}>
          <li>Faith-based partnerships & block-club outreach</li>
          <li>Monthly homebuyer bootcamps with HUD-certified educators</li>
          <li>Pop-up workshops in high-renter neighborhoods</li>
          <li>Digital campaigns under #Initiative2053</li>
        </ul>
      </motion.section>


      {/* ===============================
          CTA
      ================================== */}
      <motion.section className="section section-center" {...fadeUp}>
        <h2 style={{ marginBottom: "20px" }}>
          Detroit’s Future Belongs to Detroiters.
        </h2>

        <p className="body-lg" style={{ maxWidth: "700px", marginBottom: "32px" }}>
          Join the movement to expand homeownership and build generational wealth—
          one family at a time.
        </p>

        <a href="/detroiters" className="btn btn-primary">Get Started</a>
      </motion.section>

    </div>
  );
}
