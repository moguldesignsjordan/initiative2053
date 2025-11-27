// src/pages/Detroiters.jsx
import { motion } from "framer-motion";

/* GLOBAL ANIMATION PRESET */
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut" },
};

export default function Detroiters() {
  return (
    <div className="page">

      {/* ================================
          HERO
      =================================*/}
      <motion.section className="section section-center" {...fadeUp}>
        <p className="kicker">For Detroit Renters</p>

        <h1 className="hero-title" style={{ marginBottom: "20px" }}>
          Your Path to Becoming a Homeowner Starts Here.
        </h1>

        <p className="body-lg" style={{ maxWidth: "760px" }}>
          Initiative 2053 gives Detroit renters a realistic, accessible, 
          fully-supported path to homeownership.  
          Education, down-payment support, credit strengthening, 
          and hands-on guidance — all in one place.
        </p>
      </motion.section>


      {/* ================================
          WHY THIS MATTERS
      =================================*/}
      <motion.section className="section" {...fadeUp}>
        <p className="kicker">Why This Matters</p>
        <h2>Detroit Renters Pay More in Rent Than a Mortgage.</h2>

        <p className="body-lg" style={{ maxWidth: "760px" }}>
          Detroiters are paying an average of <strong>$1,103/month</strong>  
          for rent — while the average mortgage in the city is only  
          <strong>$910/month</strong>.  
          That gap forces families to rent longer and delays wealth-building.
        </p>

        <div className="impact-grid" style={{ marginTop: "40px" }}>
          <div className="impact-card">
            <span className="impact-value">57%</span>
            <span className="impact-label">Renters Cost-Burdened</span>
          </div>
          <div className="impact-card">
            <span className="impact-value">~50%</span>
            <span className="impact-label">Homeownership Rate</span>
          </div>
          <div className="impact-card">
            <span className="impact-value">$4.6B</span>
            <span className="impact-label">Wealth Gained by Homeowners (2013–2023)</span>
          </div>
        </div>
      </motion.section>


      {/* ================================
          THE 3-PILLAR PATHWAY
      =================================*/}
      <motion.section className="section" {...fadeUp}>
        <p className="kicker">The Model</p>
        <h2>A Straightforward Path to Becoming a Homeowner</h2>

        <div className="pillars-grid" style={{ marginTop: "40px" }}>
          <div className="pillar-card">
            <h3>1. Homebuyer Readiness</h3>
            <p>
              Personalized budgeting, credit building, income planning, and 
              mortgage education through Caring Hands’ readiness program.
            </p>
          </div>

          <div className="pillar-card">
            <h3>2. Down-Payment Assistance</h3>
            <p>
              Up to <strong>$15,000</strong> in targeted assistance to close Detroit’s affordability gap 
              and help families buy sooner.
            </p>
          </div>

          <div className="pillar-card">
            <h3>3. Ongoing Support & Stability</h3>
            <p>
              After purchase, families receive support, coaching, and community
              resources to stay stable — reducing the default rate to under 1%.
            </p>
          </div>
        </div>
      </motion.section>


      {/* ================================
          HOW IT WORKS
      =================================*/}
      <motion.section className="section" {...fadeUp}>
        <p className="kicker">How It Works</p>
        <h2>A Simple 4-Step Journey</h2>

        <div className="pillars-grid" style={{ marginTop: "40px" }}>
          <div className="pillar-card">
            <h3>1. Apply</h3>
            <p>
              A quick intake form helps us understand your goals, income, and current
              readiness.
            </p>
          </div>

          <div className="pillar-card">
            <h3>2. Build Your Readiness Plan</h3>
            <p>
              You’ll work with trained specialists to improve credit, budgeting,
              and mortgage preparation.
            </p>
          </div>

          <div className="pillar-card">
            <h3>3. Get DPA Support</h3>
            <p>
              As you reach readiness, Initiative 2053 activates DPA support to help
              cover down payment or closing needs.
            </p>
          </div>

          <div className="pillar-card">
            <h3>4. Become a Homeowner</h3>
            <p>
              You purchase a home with confidence — and with community and data-backed
              support for long-term stability.
            </p>
          </div>
        </div>
      </motion.section>


      {/* ================================
          CTA
      =================================*/}
      <motion.section className="section section-center" {...fadeUp}>
        <h2 style={{ marginBottom: "16px" }}>
          Ready to Start Your Journey?
        </h2>

        <p className="body-lg" style={{ maxWidth: "680px", marginBottom: "32px" }}>
          If you're a Detroit renter and ready to explore if homeownership is possible
          for you, we’ll walk with you every step of the way.
        </p>

        <a href="/contact" className="btn btn-primary">
          Get Started Today
        </a>
      </motion.section>

    </div>
  );
}
