import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut" },
};

export default function About() {
  return (
    <div className="page">

      {/* ================================
          HERO
      =================================*/}
      <motion.section className="section" {...fadeUp}>
        <p className="kicker">About Initiative 2053</p>

        <h1 className="hero-title" style={{ marginBottom: "20px" }}>
          A Blueprint for Detroit’s Sustainable
          <br />
          Homeownership Revolution.
        </h1>

        <p className="body-lg" style={{ maxWidth: "760px" }}>
          Initiative 2053 is more than a housing program — it is Detroit’s 
          homeownership movement. A unified strategy designed to transform
          decades of disinvestment into generations of equity, stability, and
          wealth for Detroit families.
        </p>
      </motion.section>

      {/* ================================
          MISSION
      =================================*/}
      <motion.section className="section" {...fadeUp}>
        <h2>The Mission</h2>

        <p className="body-lg" style={{ maxWidth: "760px" }}>
          Rooted in lived experience and powered by practitioner expertise,
          Initiative 2053 brings together homebuyer education, financial
          preparation, down-payment assistance, and compliance systems
          that ensure families can not only buy homes — but keep them.
        </p>
      </motion.section>

      {/* ================================
          WHAT MAKES US DIFFERENT
      =================================*/}
      <motion.section className="section" {...fadeUp}>
        <h2>What Makes Initiative 2053 Different?</h2>

        <div className="pillars-grid" style={{ marginTop: "40px" }}>
          <div className="pillar-card">
            <h3>Built for Detroit’s Reality</h3>
            <p>
              The model addresses Detroit’s true barriers: credit readiness,
              affordability gaps, lack of savings, and insufficient navigation
              support through the mortgage and closing process.
            </p>
          </div>

          <div className="pillar-card">
            <h3>Education + DPA + Accountability</h3>
            <p>
              Our 3-pillar structure combines financial literacy, down-payment
              investment, and transparent reporting to create a lasting path to
              sustainable homeownership.
            </p>
          </div>

          <div className="pillar-card">
            <h3>Transparent, Measurable Results</h3>
            <p>
              Every participant is supported and tracked through a compliance
              dashboard, giving funders, lenders, and civic partners real-time
              insight into outcomes and progress.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ================================
          LEADERSHIP
      =================================*/}
      <motion.section className="section" {...fadeUp}>
        <p className="kicker">Leadership</p>

        <h2>Led by Caring Hands & Practitioner Expertise</h2>

        <div className="section-grid" style={{ marginTop: "40px" }}>
          
          {/* LEFT COPY */}
          <div className="leadership-copy">
            <p>
              Initiative 2053 is powered by <strong>Caring Hands</strong>, a
              Detroit-rooted nonprofit with over a decade of work in housing
              justice, family stabilization, and community investment.
            </p>

            <p>
              The program is guided by <strong>Moe Lucas</strong>, Director of
              Housing & Financial Empowerment — bringing 16+ years of experience
              across mortgage lending, real estate investing, credit coaching,
              and financial empowerment.
            </p>

            <p>
              Moe oversees the Homebuyer Readiness Program, which blends
              education, credit development, budgeting, and mortgage literacy
              into a single pathway that prepares families for long-term
              success — before and after they purchase a home.
            </p>
          </div>

          {/* IMAGE */}
          <div className="image-box">
            <img
              src="https://placehold.co/800x1000/0a0a0a/ffffff?text=Leadership+Photo"
              alt="Leadership"
            />
            <div className="image-overlay-gradient"></div>
          </div>
        </div>
      </motion.section>

      {/* ================================
          CTA
      =================================*/}
      <motion.section className="section section-center" {...fadeUp}>
        <h2 style={{ marginBottom: "20px" }}>
          Detroit’s Future Belongs to Detroiters.
        </h2>

        <p className="body-lg" style={{ maxWidth: "700px", marginBottom: "32px" }}>
          Join the growing movement to expand homeownership, build equity, and
          create generational wealth for Detroit families.
        </p>

        <div className="hero-ctas">
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
