import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import "../styles/home.css";

// Enhanced animation presets
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.12,
    }
  }
};

export default function Home() {
  const heroRef = useRef(null);

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, -150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="home">
      {/* Texture Overlay for Grainy/Film look */}
      <div className="noise-overlay"></div>

      {/* ================================
          HERO SECTION (PARALLAX)
      =================================*/}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg-glow"></div>

        {/* TEXT */}
        <motion.div
          className="hero-content"
          style={{ opacity: heroOpacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            className="kicker-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
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
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Initiative 2053 is a comprehensive model transforming Detroit renters
            into sustainable homeowners through education, down-payment
            assistance, and transparent accountability.
          </motion.p>

          <motion.div 
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/detroiters" className="btn btn-primary shimmer-btn">
              I'm a Detroit Renter
            </Link>
            <Link to="/partners" className="btn btn-outline">
              Partnership Opportunities
            </Link>
          </motion.div>
        </motion.div>

        {/* PARALLAX IMAGE */}
        <motion.div 
          className="hero-image-wrapper" 
          style={{ y: yParallax }}
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/Genfamily.png"
            alt="Detroit Housing"
            className="hero-img"
          />
          {/* Decorative floating badge on image */}
          <motion.div 
            className="hero-float-card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <span>Goal:</span>
            <strong>Generational Wealth</strong>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        >
          <span className="arrow-down">↓</span>
        </motion.div>

      </section>


      {/* ================================
          PROBLEM SECTION
      =================================*/}
      <motion.section className="section problem" {...fadeUp}>
        <div className="section-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
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
              viewport={{ once: true }}
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
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="image-overlay-gradient"></div>
            <img
              src="/detroithouse.jpg"
              alt="Detroit neighborhood"
            />
          </motion.div>
        </div>
      </motion.section>


      {/* ================================
          INITIATIVE MODEL
      =================================*/}
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
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="pillar-card" variants={fadeUp}>
            <div className="pillar-icon">01</div>
            <h3>Education</h3>
            <p>
              Caring Hands' Homebuyer Readiness Program provides budgeting,
              credit coaching, homebuyer education, and personalized mortgage
              preparation.
            </p>
          </motion.div>

          <motion.div className="pillar-card" variants={fadeUp}>
            <div className="pillar-icon">02</div>
            <h3>Down-Payment Assistance</h3>
            <p>
              Targeted DPA grants help families close the affordability gap and
              access sustainable mortgage products.
            </p>
          </motion.div>

          <motion.div className="pillar-card" variants={fadeUp}>
            <div className="pillar-icon">03</div>
            <h3>Accountability & Data</h3>
            <p>
              Every participant is tracked through a compliance dashboard,
              ensuring transparency and long-term homeowner stability.
            </p>
          </motion.div>
        </motion.div>

      </motion.section>


      {/* ================================
          IMPACT
      =================================*/}
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
          viewport={{ once: true, amount: 0.3 }}
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
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/impact" className="text-link large-link">See Full Impact Data →</Link>
        </motion.div>
      </motion.section>


      {/* ================================
          WHO WE SERVE
      =================================*/}
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
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="audience-card" variants={fadeUp}>
            <div className="img-wrap">
                <img
                src="/detroithomes.jpg"
                alt="Detroit renters"
                />
            </div>
            <div className="card-content">
                <h3>Detroit Renters & First-Time Buyers</h3>
                <p>
                A clear, supportive roadmap to affordable, sustainable homeownership.
                </p>
                <Link to="/detroiters" className="text-link">Learn More →</Link>
            </div>
          </motion.div>

          <motion.div className="audience-card" variants={fadeUp}>
            <div className="img-wrap">
                <img
                src="/detroit.png"
                alt="Partners"
                />
            </div>
            <div className="card-content">
                <h3>Funders, Lenders & City Partners</h3>
                <p>
                Transparent reporting, measurable outcomes, and sustainable community ROI.
                </p>
                <Link to="/partners" className="text-link">Partner With Us →</Link>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>


      {/* ================================
          LEADERSHIP
      =================================*/}
      <motion.section className="section leadership" {...fadeUp}>
        <div className="section-grid">
          <motion.div
            className="leadership-copy"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="kicker">Leadership</p>
            <h2 className="leadership-title">
              Led by Caring Hands & Practitioner Expertise.
            </h2>

            <p>
              Initiative 2053 is powered by <strong>Caring Hands</strong>, a
              Detroit-rooted nonprofit with over a decade of experience in
              housing justice and family stabilization.
            </p>

            <p>
              The program is guided by <strong>Moe Lucas</strong>, Director of
              Housing & Financial Empowerment — bringing 16+ years in mortgages,
              real estate investing, and community-centered financial
              empowerment.
            </p>
          </motion.div>

          <motion.div
            className="image-box leadership-photo"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="photo-accent-border"></div>
            <img
              src="/moeant2.JPG"
              alt="Leadership"
            />
          </motion.div>
        </div>
      </motion.section>


      {/* ================================
          FINAL CTA
      =================================*/}
      <motion.section className="section final-cta-wrapper" {...fadeUp}>
        <motion.div
          className="final-cta"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="cta-content">
            <h2>Detroit's Future Belongs to Detroiters.</h2>
            <p>Join the movement to build generational wealth through ownership.</p>

            <div className="hero-ctas">
                <Link to="/detroiters" className="btn btn-primary shimmer-btn">
                Start My Journey
                </Link>
                <Link to="/partners" className="btn btn-outline">
                Become a Partner
                </Link>
            </div>
          </div>
          {/* Decorative Grid on CTA */}
          <div className="cta-grid-bg"></div>
        </motion.div>
      </motion.section>

    </div>
  );
}