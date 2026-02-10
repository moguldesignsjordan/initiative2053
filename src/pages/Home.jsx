import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../styles/home.css";

/* ============================================================
   SCROLL TRIGGERS
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
   HOME
============================================================ */
export default function Home() {
  const heroProgress = useMotionValue(0);

  const imgOpacity = useTransform(heroProgress, [0, 900, 1800], [1, 1, 0]);
  const imgY = useTransform(heroProgress, [0, 1400], [0, -40]);
  const imgBlur = useTransform(
    heroProgress,
    [0, 900, 1800],
    ["0px", "0px", "10px"]
  );

  const arrowOpacity = useTransform(heroProgress, [0, 600, 1500], [1, 1, 0]);
  const arrowY = useTransform(heroProgress, [0, 300], [0, 12]);

  useEffect(() => {
    const update = () => heroProgress.set(window.scrollY || 0);
    update();
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="home">
      {/* ====================================================
          HERO
      ==================================================== */}
      <section className="hero">
        <motion.div
          className="hero-bg-glow"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

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
            #Initiative2053 · Detroit · Homeownership
          </motion.div>

          <h1 className="hero-title">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
            >
              The Housing Affordability <br>
              </br>Crisis Is Eroding{" "}
              <br />
              <span className="hero-highlight">
                Black Wealth <br></br>In Real Time
              </span>
            </motion.span>
          </h1>

          <motion.p
            className="hero-subcopy"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Nearly half of all renters spend more than 30% of their income on
            housing but after taxes, it's closer to 40%. For Black families,
            this pressure isn't temporary. It's generational.
            <br />
            
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Link to="/academy" className="btn btn-primary shimmer-btn">
              Start the Pre-Approval Academy
            </Link>
            <Link to="/about" className="btn btn-outline">
              Why This Matters →
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            opacity: imgOpacity,
            y: imgY,
            filter: imgBlur,
            willChange: "transform, opacity, filter",
          }}
        >
          <img src="/Genfamily.png" alt="Detroit Housing" className="hero-img" />

          <motion.div
            className="hero-float-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <span>Education first.</span>
            <strong>Ownership that lasts.</strong>
          </motion.div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          style={{ opacity: arrowOpacity, y: arrowY }}
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.div>
      </section>

      {/* ====================================================
          SECTION 1 — Wealth + "Affordable" isn't Affordable
      ==================================================== */}
      <motion.section className="section model" {...fadeUp}>
        <div className="section-header-center">
          <p className="kicker">Affordable" isn't Affordable</p>
          <h2>This Crisis Affects Us All But Not in the Same Way</h2>
        </div>

        <motion.div
          className="section-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          <motion.div {...fadeSideLeft}>
            <p className="body-lg">
              Nearly half of all wealth in America is held in primary home
              equity. When families are locked out of homeownership, they are
              locked out of the primary way wealth is built in this country.
            </p>

            <p className="body-lg" style={{ marginTop: 14 }}>
              The result is predictable and already projected. Without
              intervention, Black household net worth is expected to reach zero
              by 2053.
            </p>

            <motion.div
              className="stat-grid-mini"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
            >
              <motion.div className="stat-item" variants={fadeUp}>
                <span className="stat-number">30%</span>
                <span className="stat-desc">
                  HUD affordability benchmark (gross income)
                </span>
              </motion.div>

              <motion.div className="stat-item" variants={fadeUp}>
                <span className="stat-number">40%+</span>
                <span className="stat-desc">
                  Often the real impact after taxes + deductions
                </span>
              </motion.div>

              <motion.div className="stat-item full-width" variants={fadeUp}>
                <div className="comparison-bar">
                  <div>
                    <span className="label">What's on paper</span>
                    <span className="val bad">"Affordable"</span>
                  </div>
                  <div className="vs">vs</div>
                  <div>
                    <span className="label">What families feel</span>
                    <span className="val good">Rent dependency</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <div className="" style={{ marginTop: 22 }}>
              <Link to="/about" className="text-link large-link">
                Why 2053 Matters  → 
              </Link>
            </div>
          </motion.div>

          <motion.div className="image-box" {...imageFadeIn}>
            <img src="/renters.jpg" alt="Detroit neighborhood" loading="lazy" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ====================================================
          SECTION 2 — Pre-Approval Academy (Video + Copy)
      ==================================================== */}
      <motion.section className="section academy-promo-section" {...fadeUp}>
        <div className="section-header-center">
          <p className="kicker">The Pre-Approval Academy</p>
          <h2>Your First Step Towards Ownership Starts Here</h2>
        </div>

        <div className="academy-promo-card">
          <div className="academy-promo-layout">
            {/* Video */}
            <motion.div className="academy-promo-video" {...imageFadeIn}>
              <video
                controls
                playsInline
                preload="metadata"
                poster="/video.png"
              >
                <source src="/academy-intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>

            {/* Copy */}
            <motion.div className="academy-promo-copy" {...fadeSideRight}>
              <p className="body-lg">
                The Pre-Approval Academy was built for people who are tired of
                guessing. This is not a sales pitch it's a structured,
                education-first pathway that helps you understand:
              </p>

              <ul className="academy-promo-bullets">
                <li>Where you actually stand</li>
                <li>What lenders really look for</li>
                <li>What to fix and what to ignore</li>
                <li>How to prepare without risking your future</li>
              </ul>

              <p className="body-lg" style={{ marginTop: 8 }}>
                Complete this academy and you won't just be "pre-approved."
                <br />
                <strong style={{ color: "var(--accent)" }}>
                  You'll be ownership-ready.
                </strong>
              </p>

              <div className="academy-promo-actions">
                <Link to="/academy" className="btn btn-primary shimmer-btn">
                  Start the Pre-Approval Academy
                </Link>
                <span className="academy-promo-sub">
                </span>
              </div>
            </motion.div>
          </div>

          {/* Trust row */}
          <div className="academy-promo-trust">
            <span>✔ Built for cost-burdened households</span>
            <span>✔ Designed for long-term ownership</span>
            <span>✔ Aligned with #Initiative2053</span>
          </div>
        </div>
      </motion.section>

      {/* ====================================================
          SECTION 3 — Intervention Point (3 pillars)
      ==================================================== */}
      <motion.section className="section impact" {...fadeUp}>
        <div className="section-header-center">
          <p className="kicker">Impact</p>
          <h2>This Is the Intervention Point</h2>
        </div>

        <motion.div
          className="pillars-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          <motion.div
            className="pillar-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <div className="pillar-icon">01</div>
            <h3>Education before access</h3>
            <p>
              We don't confuse access with readiness. We build understanding
              first credit, income, assets, and buying strategy so families
              move with clarity.
            </p>
          </motion.div>

          <motion.div
            className="pillar-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <div className="pillar-icon">02</div>
            <h3>Preparation before pressure</h3>
            <p>
              We don't rush families into risk. We remove guesswork and replace
              it with structure so progress is sustainable, not stressful.
            </p>
          </motion.div>

          <motion.div
            className="pillar-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <div className="pillar-icon">03</div>
            <h3>Sustainability over volume</h3>
            <p>
              Stability over speed. Ownership that lasts not just approvals.
              This is how long-term wealth is built.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ====================================================
          SECTION 4 — From Awareness to Action (2 CTAs)
      ==================================================== */}
      <motion.section className="section audience" {...fadeUp}>
        <div className="section-header-center">
          <p className="kicker">Awarness</p>
          <h2>From Awareness to Action</h2>
        </div>

        <motion.div
          className="audience-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          <motion.div
            className="audience-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="img-wrap">
              <img src="/detroithomes.jpg" alt="Participants" />
            </div>
            <div className="card-content">
              <h3>For Participants</h3>
              <p>
                We built the Pre-Approval Academy to help families prepare for
                ownership the right way covering credit, income, assets, buying
                strategy, and long-term readiness.
              </p>
              <Link to="/academy" className="text-link">
                Get Started →
                
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="audience-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="img-wrap">
              <img src="/development.jpg" alt="Partners" />
            </div>
            <div className="card-content">
              <h3>For Partners</h3>
              <p>
                Initiative 2053 is a scalable, education-first model that
                organizations can support, fund, and align with to create
                lasting impact.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link to="/about" className="text-link">
            
                </Link>
                <Link to="/partners" className="text-link">
                Join the Movement →
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ====================================================
          FINAL CTA
      ==================================================== */}
      <section className="section final-cta-wrapper">
        <div className="final-cta-bg"></div>
        <div className="final-cta-overlay"></div>
        <div className="final-cta-glow"></div>

        <div className="final-cta">
          <motion.h2
            className="final-cta-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Education first. Preparation next. Ownership that lasts.
          </motion.h2>

          <motion.p
            className="final-cta-sub"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            #Initiative2053
            <br />
            A movement to intervene before the window closes.
          </motion.p>

          <motion.div
            className="final-cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/academy" className="btn btn-primary shimmer-btn">
             Pre-Approval Academy
            </Link>
            <Link to="/partners" className="btn btn-outline">
             Join the Movement
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}