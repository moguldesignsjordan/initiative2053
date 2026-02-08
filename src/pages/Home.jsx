import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../styles/home.css";

/* ============================================================
   SCROLL TRIGGERS — FIXED FOR LATENCY & SPACING
============================================================ */

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.03 },
  transition: {
    type: "spring",
    stiffness: 85,
    damping: 16,
    mass: 0.4,
    ease: "easeOut",
  },
};

const fadeSideLeft = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { type: "spring", stiffness: 100, damping: 20 },
};

const fadeSideRight = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { type: "spring", stiffness: 100, damping: 20 },
};

const imageFadeIn = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.22 },
  transition: { type: "spring", stiffness: 80, damping: 15 },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
};

/* ============================================================
   HERO — CINEMATIC PARALLAX WITH iPHONE-SAFE FIXES
============================================================ */

export default function Home() {
  const heroProgress = useMotionValue(0);

  // Desktop parallax transforms
  const imgOpacity = useTransform(heroProgress, [0, 900, 1800], [1, 1, 0]);
  const imgY = useTransform(heroProgress, [0, 1400], [0, -40]);
  const imgBlur = useTransform(heroProgress, [0, 900, 1800], ["0px", "0px", "10px"]);

  const arrowOpacity = useTransform(heroProgress, [0, 600, 1500], [1, 1, 0]);
  const arrowY = useTransform(heroProgress, [0, 300], [0, 12]);

  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const update = () => heroProgress.set(window.scrollY || 0);
    update();
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="home">

      {/* ====================================================
          HERO — FIXED TEXT + MOBILE-SAFE IMAGE PARALLAX
      ==================================================== */}
      <section className="hero">

        {/* Glow */}
        <motion.div
          className="hero-bg-glow"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* TEXT */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div
            className="kicker-badge"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Detroit · Homeownership · 2053
          </motion.div>

          <h1 className="hero-title">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
            >
            The Housing Affordability Crisis <br />
              <span className="hero-highlight">Is Eroding Black Wealth In Real Time</span>
            </motion.span>
          </h1>

          <motion.p
            className="hero-subcopy"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Initiative 2053 transforms Detroit renters into sustainable homeowners
            through education, down-payment support, and transparent accountability.
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Link to="/detroiters" className="btn btn-primary shimmer-btn">
              Start the Pre-Approval Academy
            </Link>
            <Link to="/partners" className="btn btn-outline">
              Why This Matters
            </Link>
          </motion.div>
        </motion.div>

        {/* =============================
            IMAGE — MOBILE-FLICKER FIX
        ============================== */}
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            // MOBILE = NO OPACITY/BLUR ANIMATION
            opacity: isMobile ? 1 : imgOpacity,
            y: imgY,
            filter: isMobile ? "none" : imgBlur,

            // GPU stability
            willChange: "transform",
            WebkitTransform: "translateZ(0)",
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
          }}
        >
          <img
            src="/Genfamily.png"
            alt="Detroit Housing"
            className="hero-img"
            style={{
              WebkitTransform: "translateZ(0)",
              backfaceVisibility: "hidden",
            }}
          />

          <motion.div
            className="hero-float-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <span>Goal:</span>
            <strong>Generational Wealth</strong>
          </motion.div>
        </motion.div>

        {/* Arrow */}
        <motion.div
          className="scroll-indicator"
          style={{
            opacity: isMobile ? 1 : arrowOpacity,
            y: arrowY,
          }}
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.div>
      </section>

{/* ====================================================
    PROBLEM SECTION
==================================================== */}
<motion.section className="section problem" {...fadeUp}>
  <div className="section-grid">
    <motion.div {...fadeSideLeft}>
      <p className="kicker">The Problem</p>
      <h2>This Crisis Affects Us All But Not in the Same Way</h2>
      <p className="body-lg">
        Despite billions in reinvestment, Detroit&apos;s homeownership gap remains
        one of the widest in the country. Nearly half of residents rent — many
        paying more in rent than they would for a mortgage.
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

    {/* Right side: YouTube-style 16:9 video (full frame visible) */}
    <motion.div className="video-box" {...imageFadeIn}>
      <div className="video-frame">
        <video
          className="media-video"
          src="/academy-intro.mp4"
          controls
          playsInline
          preload="metadata"
          aria-label="Initiative 2053 introduction video"
        />
      </div>
    </motion.div>
  </div>
</motion.section>


      {/* MODEL SECTION */}
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
          <motion.div className="pillar-card" 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once:true }}
            transition={{ duration: 0.6, type:"spring" }}
          >
            <div className="pillar-icon">01</div>
            <h3>Education</h3>
            <p>
              Caring Hands' Homebuyer Readiness Program provides
              budgeting, credit coaching, homebuyer education, and 
              personalized mortgage preparation.
            </p>
          </motion.div>

          <motion.div className="pillar-card" 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once:true }}
            transition={{ duration: 0.6, type:"spring" }}
          >
            <div className="pillar-icon">02</div>
            <h3>Down-Payment Assistance</h3>
            <p>Targeted DPA grants help families close the affordability gap.</p>
          </motion.div>

          <motion.div className="pillar-card" 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once:true }}
            transition={{ duration: 0.6, type:"spring" }}
          >
            <div className="pillar-icon">03</div>
            <h3>Accountability & Data</h3>
            <p>
              Participants are tracked through a compliance dashboard for stability + transparency.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>


      {/* IMPACT SECTION */}
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
            <span className="impact-value">&lt;1%</span>
            <span className="impact-label">Projected Default Rate</span>
          </motion.div>
        </motion.div>

        <motion.div className="center" initial={{ opacity:0,y:10 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}>
          <Link to="/impact" className="text-link large-link">See Full Impact Data →</Link>
        </motion.div>
      </motion.section>


      {/* WHO WE SERVE */}
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
          <motion.div className="audience-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{once:true}}>
            <div className="img-wrap">
              <img src="/detroithomes.jpg" alt="Detroit renters" />
            </div>
            <div className="card-content">
              <h3>Detroit Renters</h3>
              <p>A clear path to affordable, stable homeownership.</p>
              <Link to="/detroiters" className="text-link">Learn More →</Link>
            </div>
          </motion.div>

          <motion.div className="audience-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{once:true}}>
            <div className="img-wrap">
              <img src="/development.jpg" alt="Partners" />
            </div>
            <div className="card-content">
              <h3>Funders & Partners</h3>
              <p>Sustainable ROI, measurable impact, transparent reporting.</p>
              <Link to="/partners" className="text-link">Partner With Us →</Link>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>


      {/* LEADERSHIP */}
      <motion.section className="section leadership" {...fadeUp}>
        <div className="section-grid">

          <motion.div className="leadership-copy" {...fadeSideLeft}>
            <p className="kicker">Leadership</p>
            <h2 className="leadership-title">
              Led by Caring Hands & Practitioner Expertise.
            </h2>
            <p>
              Initiative 2053 is powered by <strong>Caring Hands</strong>, a Detroit-rooted nonprofit with deep experience in housing stability.
            </p>
            <p>
              Guided by <strong>Moe Lucas</strong>, Director of Housing & Financial Empowerment.
            </p>
          </motion.div>

          <motion.div className="image-box leadership-photo" {...imageFadeIn}>
            <img src="/moeant2.JPG" alt="Leadership" />
          </motion.div>
        </div>
      </motion.section>


      {/* FINAL CTA */}
      <section className="section final-cta-wrapper">
        <div className="final-cta-bg"></div>
        <div className="final-cta-overlay"></div>
        <div className="final-cta-glow"></div>

        <div className="final-cta">
          <motion.h2 className="final-cta-title" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            Build the Future of Detroit Homeownership.
          </motion.h2>

          <motion.p className="final-cta-sub" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            100 Families. $17M+ Equity Created.  
            <br/>Join the movement reshaping Detroit for generations.
          </motion.p>

          <motion.div className="final-cta-buttons" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            <Link to="/contact" className="btn btn-primary shimmer-btn">
              Get Started
            </Link>
            <Link to="/partners" className="btn btn-outline">
              Partner With Us
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
