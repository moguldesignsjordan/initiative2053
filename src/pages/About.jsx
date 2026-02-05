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
        <p className="kicker">ABOUT US</p>

        <h1 className="hero-title" style={{ marginBottom: "20px" }}>
          Who We Are
        </h1>

        <p className="body-lg" style={{ maxWidth: "820px" }}>
          Initiative 2053 is a Detroit-rooted homeownership and wealth-building initiative created
          to confront the housing affordability crisis and its disproportionate impact on Black
          households.
        </p>

        <p className="body-lg" style={{ maxWidth: "820px", marginTop: "14px" }}>
          We exist to help families move from rent pressure into ownership stability not just
          access, but ownership that lasts.
        </p>
      </motion.section>

      {/* ================================
          MISSION
      =================================*/}
      <motion.section className="section" {...fadeUp}>
        <h2>Our Mission</h2>

        <p className="body-lg" style={{ maxWidth: "820px" }}>
          To deliver structured education and financial preparation as a pathway to
          sustainable homeownership, and in doing so, interrupt the trajectory toward long-term
          Black wealth erosion.
        </p>
      </motion.section>

      {/* ================================
          WHY WE WERE FORMED
      =================================*/}
      <motion.section className="section" {...fadeUp}>
        <h2>Why We Were Formed</h2>

        <div className="pillars-grid" style={{ marginTop: "34px" }}>
          <div className="pillar-card">
            <div className="pillar-icon">01</div>
            <h3>“Not ready” — with no roadmap</h3>
            <p>Too many families are told they are “not ready” — without being told how to become ready.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">02</div>
            <h3>Access without preparation</h3>
            <p>Too many programs focus on access without preparation.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">03</div>
            <h3>Volume over sustainability</h3>
            <p>Too many systems prioritize volume over sustainability.</p>
          </div>
        </div>

        <p className="body-lg" style={{ maxWidth: "820px", marginTop: "22px" }}>
          Initiative 2053 was formed to change that.
        </p>
      </motion.section>

      {/* ================================
          HOW WE WORK
      =================================*/}
      <motion.section className="section" {...fadeUp}>
        <h2>How We Work</h2>

        <p className="body-lg" style={{ maxWidth: "820px" }}>
          Our work is grounded in discipline, structure, and accountability.
        </p>

        <p className="body-lg" style={{ maxWidth: "820px", marginTop: "14px" }}>
          We believe:
        </p>

        <div className="pillars-grid" style={{ marginTop: "18px" }}>
          <div className="pillar-card">
            <div className="pillar-icon">A</div>
            <h3>Education before access</h3>
            <p>Education must come before access.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">B</div>
            <h3>Preparation before ownership</h3>
            <p>Preparation must precede ownership.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">C</div>
            <h3>Sustainability over speed</h3>
            <p>Sustainability matters more than speed.</p>
          </div>
        </div>

        <div className="pillars-grid" style={{ marginTop: "24px" }}>
          <div className="pillar-card">
            <div className="pillar-icon">—</div>
            <h3>Risk discipline</h3>
            <p>We do not rush families into risk.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">—</div>
            <h3>Not transactional</h3>
            <p>We do not treat housing as a transaction.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">—</div>
            <h3>Outcome integrity</h3>
            <p>We do not separate mission from outcomes.</p>
          </div>
        </div>

        <p className="body-lg" style={{ maxWidth: "820px", marginTop: "22px" }}>
          This discipline is how we protect long-term outcomes — and it aligns with our 3-pillar model.
        </p>
      </motion.section>

      {/* ================================
          WHAT MAKES US DIFFERENT
      =================================*/}
      <motion.section className="section" {...fadeUp}>
        <h2>What Makes Us Different</h2>

        <div className="pillars-grid" style={{ marginTop: "34px" }}>
          <div className="pillar-card">
            <div className="pillar-icon">01</div>
            <h3>Education-first, not sales-driven</h3>
            <p>Education-first, not sales-driven</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">02</div>
            <h3>Preparation before pressure</h3>
            <p>Preparation before pressure</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">03</div>
            <h3>Measured readiness</h3>
            <p>Measured readiness, not assumptions</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">04</div>
            <h3>Long-term stability</h3>
            <p>Long-term stability as the goal</p>
          </div>
        </div>

        <p className="body-lg" style={{ maxWidth: "820px", marginTop: "22px" }}>
          We build systems designed to outlive market cycles and headlines.
        </p>
      </motion.section>

      {/* ================================
          OUR ROLE IN THE ECOSYSTEM
      =================================*/}
      <motion.section className="section" {...fadeUp}>
        <p className="kicker">Ecosystem</p>
        <h2>Our Role in the Ecosystem</h2>

        <div className="section-grid" style={{ marginTop: "40px" }}>
          <div>
            <p className="body-lg" style={{ maxWidth: "820px" }}>
              Initiative 2053 is not a lender.
            </p>
            <p className="body-lg" style={{ maxWidth: "820px", marginTop: "10px" }}>
              We are not a real estate sales platform.
            </p>
            <p className="body-lg" style={{ maxWidth: "820px", marginTop: "10px" }}>
              We are not a one-time assistance program.
            </p>

            <p className="body-lg" style={{ maxWidth: "820px", marginTop: "14px" }}>
              We are an intervention point — preparing families, aligning partners, and protecting
              long-term outcomes.
            </p>
          </div>

          <div style={{ display: "grid", gap: "18px" }}>
            <div className="pillar-card" style={{ padding: "22px 20px" }}>
              <h3 style={{ marginTop: 0 }}>Preparing families</h3>
              <p>Structured readiness, not assumptions.</p>
            </div>

            <div className="pillar-card" style={{ padding: "22px 20px" }}>
              <h3 style={{ marginTop: 0 }}>Aligning partners</h3>
              <p>Coordination that reduces risk and improves outcomes.</p>
            </div>

            <div className="pillar-card" style={{ padding: "22px 20px" }}>
              <h3 style={{ marginTop: 0 }}>Protecting outcomes</h3>
              <p>Long-term stability matters more than speed.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ================================
          OUR COMMITMENT
      =================================*/}
      <motion.section className="section section-center" {...fadeUp}>
        <h2 style={{ marginBottom: "18px" }}>Our Commitment</h2>

        <div className="pillars-grid" style={{ marginTop: "26px" }}>
          <div className="pillar-card">
            <div className="pillar-icon">01</div>
            <h3>We measure what matters.</h3>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">02</div>
            <h3>We steward resources responsibly.</h3>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">03</div>
            <h3>We build trust through execution.</h3>
          </div>
        </div>

        <p className="body-lg" style={{ maxWidth: "820px", margin: "22px auto 0" }}>
          Because the future of Black wealth deserves seriousness,
        </p>
      </motion.section>

      {/* ================================
          CTA
      =================================*/}
      <motion.section className="section section-center" {...fadeUp}>
        <h2 style={{ marginBottom: "20px" }}>Detroit’s Future Belongs to Detroiters.</h2>

        <p className="body-lg" style={{ maxWidth: "700px", marginBottom: "32px" }}>
          Join the growing movement to expand homeownership, 
          build equity, and create generational wealth for Detroit families.
        </p>

        <div className="hero-ctas hero-ctas-center">
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
