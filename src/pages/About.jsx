import { motion } from "framer-motion";
import "../styles/about.css";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.22 },
  transition: { duration: 0.7, ease: "easeOut" },
};

export default function About() {
  return (
    <div className="page about-page">
      {/* ================================
          HERO
      =================================*/}
      <motion.section className="section about-hero" {...fadeUp}>
        <p className="kicker">About Initiative 2053</p>

        <h1 className="hero-title">
          A Blueprint for Detroit’s Sustainable Homeownership Revolution.
        </h1>

        <p className="body-lg about-intro">
          Initiative 2053 is more than a housing program it’s a movement
          designed to turn decades of disinvestment into generations of equity,
          stability, and wealth for Detroit families.
        </p>
      </motion.section>

      {/* ================================
          MISSION
      =================================*/}
      <motion.section className="section about-mission" {...fadeUp}>
        <h2>The Mission</h2>

        <p className="body-lg about-text">
          Rooted in lived experience and powered by practitioner expertise,
          Initiative 2053 integrates homebuyer education, financial preparation,
          down-payment assistance, and long-term accountability — ensuring
          Detroit families can not only buy homes, but keep them.
        </p>
      </motion.section>

      {/* ================================
          WHAT MAKES US DIFFERENT
      =================================*/}
      <motion.section className="section about-different" {...fadeUp}>
        <h2>What Makes Initiative 2053 Different?</h2>

        <div className="about-pillars">
          <div className="pillar-card">
            <h3>Built for Detroit’s Reality</h3>
            <p>
              Designed for the real barriers Detroiters face credit readiness,
              affordability gaps, lack of savings, and navigation challenges.
            </p>
          </div>

          <div className="pillar-card">
            <h3>Education + DPA + Accountability</h3>
            <p>
              Our 3-pillar structure combines financial education, targeted DPA,
              and transparent reporting.
            </p>
          </div>

          <div className="pillar-card">
            <h3>Transparent, Measurable Results</h3>
            <p>
              Every participant is tracked through a compliance dashboard used by
              funders, lenders, and civic partners.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ================================
          LEADERSHIP
      =================================*/}
      <motion.section className="section about-leadership" {...fadeUp}>
        <div className="section-grid about-leadership-grid">
          {/* LEFT COLUMN — kicker, heading, copy all together */}
          <div className="about-leadership-text">
            <p className="kicker">Leadership</p>

            <h2>Led by Caring Hands & Practitioner Expertise</h2>

            <p>
              Initiative 2053 is powered by <strong>Caring Hands</strong>, a
              Detroit rooted nonprofit with over a decade of work in housing
              justice and community stabilization.
            </p>

            <p>
              The program is led by <strong>Moe Lucas</strong>, Director of
              Housing & Financial Empowerment bringing 16+ years of experience
              in mortgage lending, real estate investing, credit coaching, and
              financial empowerment.
            </p>

            <p>
              Moe oversees the Homebuyer Readiness Program, preparing families
              for long-term success before and after purchase.
            </p>
          </div>

          {/* RIGHT COLUMN — photo */}
          <div className="image-box about-leadership-photo">
            <img src="/moeant.jpg" alt="Leadership" />
            <div className="image-overlay-gradient"></div>
          </div>
        </div>
      </motion.section>

      {/* ================================
          CTA
      =================================*/}
      <motion.section className="section section-center about-cta" {...fadeUp}>
        <h2>Detroit’s Future Belongs to Detroiters.</h2>

        <p className="body-lg about-cta-text">
          Join the movement to expand homeownership, build equity, and create
          generational wealth for Detroit families.
        </p>

        <div className="about-cta-buttons">
          <a href="/detroiters" className="btn btn-primary">
            For Detroit Families
          </a>
          <a href="/partners" className="btn btn-outline">
            For Partners & Funders
          </a>
        </div>
      </motion.section>
    </div>
  );
}
