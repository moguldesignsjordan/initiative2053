import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/home.css";

/* ============================================================
   FINAL — SMOOTH, NON-FLICKER MOTION PRESETS
   ============================================================ */

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const fadeSideLeft = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.85, ease: "easeOut" },
};

const fadeSideRight = {
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.85, ease: "easeOut" },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 }},
};

/* ============================================================
   REMOVE PARALLAX + REMOVE NOISE OVERLAY
   ============================================================ */

export default function Home() {
  return (
    <div className="home">

      {/* Removed noise-overlay to prevent page-wide flicker */}

      {/* ====================================================
          HERO SECTION — NOW STATIC + STABLE
      ==================================================== */}
      <section className="hero">

        <div className="hero-bg-glow"></div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.div 
            className="kicker-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Detroit · Homeownership · 2053
          </motion.div>

          <h1 className="hero-title">
            A Blueprint for Detroit's<br />
            <span className="hero-highlight">Homeownership Revolution.</span>
          </h1>

          <motion.p 
            className="hero-subcopy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Initiative 2053 is a comprehensive model transforming Detroit renters
            into sustainable homeowners through education, down-payment
            assistance, and transparent accountability.
          </motion.p>

          <motion.div 
            className="hero-ctas"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Link to="/detroiters" className="btn btn-primary shimmer-btn">
              I'm a Detroit Renter
            </Link>
            <Link to="/partners" className="btn btn-outline">
              Partnership Opportunities
            </Link>
          </motion.div>
        </motion.div>

        {/* HERO IMAGE — NO PARALLAX, NO BLUR, GPU SAFE */}
        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <img
            src="/Genfamily.png"
            alt="Detroit Housing"
            className="hero-img"
            decoding="async"
            loading="eager"
            style={{ willChange: "transform", transform: "translateZ(0)" }}
          />

          <motion.div 
            className="hero-float-card"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <span>Goal:</span>
            <strong>Generational Wealth</strong>
          </motion.div>
        </motion.div>
      </section>


      {/* ====================================================
          PROBLEM SECTION
      ==================================================== */}
      <motion.section className="section problem" {...fadeUp}>
        <div className="section-grid">

          <motion.div {...fadeSideLeft}>
            <p className="kicker">The Problem</p>
            <h2>Detroit's Recovery Is Real — But Uneven.</h2>

            <p className="body-lg">
              Despite billions in reinvestment, Detroit's homeownership gap
              remains one of the widest in the country. Nearly half of residents
              rent — many paying more in rent than they would for a mortgage.
            </p>

            <motion.div 
              className="stat-grid-mini"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
            >
              <motion.div className="stat-item" variants={fadeUp}>
                <span className="stat-number">~50%</span>
                <span className="stat-desc">Homeownership Rate</span>
              </motion.div>
              <motion.div className="stat-item" variants={fadeUp}>
                <span className="stat-number">57%</span>
                <span className="stat-desc">Renters Cost-Burdened</span>
              </motion.div>
              <motion.div className="stat-item full-width" variants={fadeUp}>
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
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="image-box"
            variants={fadeSideRight}
          >
            <img
              src="/detroithouse.jpg"
              alt="Detroit neighborhood"
              decoding="async"
              loading="lazy"
              style={{ willChange: "transform", transform: "translateZ(0)" }}
            />
          </motion.div>
        </div>
      </motion.section>


      {/* ====================================================
          MODEL SECTION
      ==================================================== */}
      <motion.section className="section model" {...fadeUp}>
        <div className="section-header-center">
          <p className="kicker">The Model</p>
          <h2>A 3-Pillar Pathway to Sustainable Homeownership.</h2>
        </div>

        <motion.div 
          className="pillars-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          <motion.div className="pillar-card" variants={fadeUp}>
            <div className="pillar-icon">01</div>
            <h3>Education</h3>
            <p>
              Caring Hands' Homebuyer Readiness Program provides
              budgeting, credit coaching, homebuyer education, and 
              personalized mortgage preparation.
            </p>
          </motion.div>

          <motion.div className="pillar-card" variants={fadeUp}>
            <div className="pillar-icon">02</div>
            <h3>Down-Payment Assistance</h3>
            <p>Targeted DPA grants help families close the affordability gap.</p>
          </motion.div>

          <motion.div className="pillar-card" variants={fadeUp}>
            <div className="pillar-icon">03</div>
            <h3>Accountability & Data</h3>
            <p>
              Every participant is tracked through a compliance dashboard,
              ensuring long-term transparency & stability.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>


      {/* ====================================================
          IMPACT SECTION
      ==================================================== */}
      <motion.section className="section impact" {...fadeUp}>
        <div className="section-header-center">
          <p className="kicker">Phase 1 — Proof of Concept</p>
          <h2>100 Families. $2M Invested. $17M+ in Equity Created.</h2>
        </div>

        <motion.div 
          className="impact-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          <motion.div className="impact-card" variants={fadeUp}>
            <span className="impact-value">100</span>
            <span className="impact-label">Families Served</span>
          </motion.div>
          <motion.div className="impact-card" variants={fadeUp}>
            <span className="impact-value">$175k</span>
            <span className="impact-label">Avg. Home Value</span>
          </motion.div>
          <motion.div className="impact-card" variants={fadeUp}>
            <span className="impact-value">$15k</span>
            <span className="impact-label">Avg. DPA Grant</span>
          </motion.div>
          <motion.div className="impact-card" variants={fadeUp}>
            <span className="impact-value">&lt;1%</span>
            <span className="impact-label">Projected Default Rate</span>
          </motion.div>
        </motion.div>

        <motion.div 
          className="center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link to="/impact" className="text-link large-link">
            See Full Impact Data →
          </Link>
        </motion.div>
      </motion.section>


      {/* ====================================================
          WHO WE SERVE
      ==================================================== */}
      <motion.section className="section audience" {...fadeUp}>
        <div className="section-header-center">
          <p className="kicker">Who We Serve</p>
          <h2>Detroit Families. Local Lenders. Mission-Driven Partners.</h2>
        </div>

        <motion.div 
          className="audience-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          <motion.div className="audience-card" variants={fadeUp}>
            <div className="img-wrap">
              <img
                src="/detroithomes.jpg"
                alt="Detroit renters"
                decoding="async"
                loading="lazy"
              />
            </div>
            <div className="card-content">
              <h3>Detroit Renters & First-Time Buyers</h3>
              <p>A clear, supportive roadmap to affordable, sustainable homeownership.</p>
              <Link to="/detroiters" className="text-link">Learn More →</Link>
            </div>
          </motion.div>

          <motion.div className="audience-card" variants={fadeUp}>
            <div className="img-wrap">
              <img
                src="/detroit.png"
                alt="Partners"
                decoding="async"
                loading="lazy"
              />
            </div>
            <div className="card-content">
              <h3>Funders, Lenders & City Partners</h3>
              <p>Transparent reporting, measurable outcomes, and sustainable community ROI.</p>
              <Link to="/partners" className="text-link">Partner With Us →</Link>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>


      {/* ====================================================
          LEADERSHIP
      ==================================================== */}
      <motion.section className="section leadership" {...fadeUp}>
        <div className="section-grid">
          
          <motion.div className="leadership-copy" {...fadeSideLeft}>
            <p className="kicker">Leadership</p>
            <h2 className="leadership-title">
              Led by Caring Hands & Practitioner Expertise.
            </h2>

            <p>
              Initiative 2053 is powered by <strong>Caring Hands</strong>, a
              Detroit-rooted nonprofit with deep experience in housing justice
              and stabilization.
            </p>

            <p>
              Guided by <strong>Moe Lucas</strong>, Director of Housing & Financial Empowerment —
              bringing 16+ years of mortgage & community finance leadership.
            </p>
          </motion.div>

          <motion.div
            className="image-box leadership-photo"
            variants={fadeSideRight}
          >
            <img
              src="/moeant2.JPG"
              alt="Leadership"
              decoding="async"
              loading="lazy"
            />
          </motion.div>
        </div>
      </motion.section>


      {/* ====================================================
          FINAL CTA
      ==================================================== */}
      <section className="section final-cta-wrapper">
        <div className="final-cta-bg"></div>
        <div className="final-cta-overlay"></div>
        <div className="final-cta-glow"></div>

        <div className="final-cta">
          <h2 className="final-cta-title">
            Build the Future of Detroit Homeownership.
          </h2>

          <p className="final-cta-sub">
            100 Families. $17M+ Equity Created.  
            <br />Join the movement reshaping Detroit for generations.
          </p>

          <div className="final-cta-buttons">
            <Link to="/contact" className="btn btn-primary shimmer-btn">
              Get Started
            </Link>
            <Link to="/partners" className="btn btn-outline">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
