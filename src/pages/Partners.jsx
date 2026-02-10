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
        <p className="kicker">Funding & Partnerships</p>

        <h1 className="hero-title" style={{ marginBottom: "20px" }}>
          Partnering to Build Sustainable Homeownership and Protect Black Wealth in Detroit.
        </h1>

        <p className="body-lg" style={{ maxWidth: "760px" }}>
          Initiative 2053 exists in direct response to the housing affordability 
          crisis and its disproportionate impact on Black households — particularly 
          in Detroit, where rising housing costs, rent dependency, and ownership 
          barriers are converging into a long-term wealth crisis.
        </p>

        <p className="body-lg" style={{ maxWidth: "760px", marginTop: "20px" }}>
          This work is made possible through mission-aligned partnerships with 
          organizations that understand housing as a wealth-building system, 
          not a single transaction.
        </p>
      </motion.section>


      {/* ================================
          OUR PARTNERSHIP APPROACH
      =================================*/}
      <motion.section className="section" {...fadeUp}>
        <p className="kicker">Our Approach</p>
        <h2>Relationship-driven partnerships, not transactional funding.</h2>

        <p className="body-lg" style={{ maxWidth: "760px" }}>
          Initiative 2053 does not pursue transactional funding or broad solicitation.
          We build relationship-driven partnerships grounded in alignment on mission 
          and outcomes, accountability and transparency, long-term community impact, 
          and stewardship of capital and trust.
        </p>

        <p className="body-lg" style={{ maxWidth: "760px", marginTop: "20px", fontWeight: "500" }}>
          Our partners are not sponsors. They are co-architects of a durable solution.
        </p>
      </motion.section>


      {/* ================================
          WHO WE PARTNER WITH
      =================================*/}
      <motion.section className="section" {...fadeUp}>
        <p className="kicker">Who We Partner With</p>
        <h2>Organizations that recognize housing stability as a foundation for economic mobility.</h2>

        <div className="pillars-grid" style={{ marginTop: "40px" }}>
          <div className="pillar-card">
            <h3>Philanthropic Foundations</h3>
            <p>
              Focused on racial equity, wealth-building, and Detroit-based impact.
            </p>
          </div>

          <div className="pillar-card">
            <h3>Financial Institutions</h3>
            <p>
              Corporate partners aligned through CRA, impact, and community 
              reinvestment priorities.
            </p>
          </div>

          <div className="pillar-card">
            <h3>Housing & Community Development</h3>
            <p>
              Organizations focused on readiness, access, and long-term 
              ownership sustainability.
            </p>
          </div>

          <div className="pillar-card">
            <h3>Education & Workforce Partners</h3>
            <p>
              Committed to financial stability and intergenerational opportunity.
            </p>
          </div>

          <div className="pillar-card">
            <h3>Real Estate Professionals</h3>
            <p>
              Ensuring families are home-ready, supported, and empowered 
              throughout the buying process.
            </p>
          </div>

          <div className="pillar-card">
            <h3>Workforce Unions & Employers</h3>
            <p>
              Supporting employee wealth-building through sustainable 
              homeownership pathways.
            </p>
          </div>
        </div>

        <p className="body-lg" style={{ maxWidth: "760px", marginTop: "32px" }}>
          Each partnership is structured intentionally — not uniformly — to ensure 
          clarity, impact, and shared accountability.
        </p>
      </motion.section>


      {/* ================================
          HOW PARTNER SUPPORT IS DEPLOYED
      =================================*/}
      <motion.section className="section" {...fadeUp}>
        <p className="kicker">How Partner Support Is Deployed</p>
        <h2>A comprehensive homeownership readiness ecosystem.</h2>

        <p className="body-lg" style={{ maxWidth: "760px", marginBottom: "40px" }}>
          Partnership resources support a comprehensive ecosystem designed to move 
          families from affordability pressure into ownership stability.
        </p>

        <div className="pillars-grid">
          <div className="pillar-card">
            <h3>1. Education & Financial Preparation</h3>
            <p>
              Structured homebuyer education, credit and debt-to-income readiness 
              guidance, mortgage readiness assessments, and clear preparation 
              pathways tied to real-world ownership outcomes. The goal is not 
              participation — it is ownership readiness and successful execution.
            </p>
          </div>

          <div className="pillar-card">
            <h3>2. Housing Counseling & Ownership Stability</h3>
            <p>
              Post-purchase counseling and check-ins, budget stabilization and 
              financial habit reinforcement, early intervention to prevent distress 
              or default, and education on taxes, insurance, maintenance, and 
              long-term ownership responsibilities.
            </p>
          </div>

          <div className="pillar-card">
            <h3>3. Access to Quality Ownership Opportunities</h3>
            <p>
              Collaboration with mission-aligned housing, lending, and community 
              partners to ensure prepared participants are connected to ownership 
              opportunities that support long-term affordability, neighborhood 
              stability, and responsible lending practices.
            </p>
          </div>

          <div className="pillar-card">
            <h3>4. Responsible Access Tools</h3>
            <p>
              When appropriate, we help qualified, ownership-ready participants 
              access responsible affordability tools — including down payment 
              assistance — after financial readiness has been demonstrated. 
              Down payment assistance is treated as a bridge — not a shortcut.
            </p>
          </div>

          <div className="pillar-card">
            <h3>5. Data, Measurement & Accountability</h3>
            <p>
              Tracking readiness, ownership, and post-purchase stability milestones. 
              Transparent reporting to partners. Continuous program improvement. 
              Data-informed decision-making. We measure what matters — because 
              impact must be demonstrable and durable.
            </p>
          </div>
        </div>
      </motion.section>


      {/* ================================
          OUR PARTNERSHIP PHILOSOPHY
      =================================*/}
      <motion.section className="section" {...fadeUp}>
        <p className="kicker">Our Philosophy</p>
        <h2>Responsible funding requires discipline.</h2>

        <div className="impact-grid" style={{ marginTop: "40px" }}>
          <div className="impact-card">
            <span className="impact-label">We do not pursue one-size-fits-all funding structures</span>
          </div>

          <div className="impact-card">
            <span className="impact-label">We do not publicly assign funding tiers or dollar amounts</span>
          </div>

          <div className="impact-card">
            <span className="impact-label">We do not prioritize speed over stewardship</span>
          </div>
        </div>

        <p className="body-lg" style={{ maxWidth: "760px", marginTop: "32px" }}>
          Each partnership is developed through direct conversation to ensure 
          resources are deployed where they create the greatest long-term benefit 
          for families and communities.
        </p>
      </motion.section>


      {/* ================================
          CTA
      =================================*/}
      <motion.section className="section section-center" {...fadeUp}>
        <h2 style={{ marginBottom: "20px" }}>
          Join the Movement.
        </h2>

        <p className="body-lg" style={{ maxWidth: "700px", marginBottom: "20px" }}>
          Organizations aligned with sustainable homeownership, housing stability, 
          and Black wealth preservation are invited to explore partnership with 
          Initiative 2053.
        </p>

        <p className="body-lg" style={{ maxWidth: "700px", marginBottom: "32px" }}>
          Partnership discussions are confidential, customized, and mission-driven.
        </p>

        <a href="/contact" className="btn btn-primary">
          Become a Partner
        </a>

        <p className="body-sm" style={{ maxWidth: "600px", marginTop: "40px", opacity: 0.7 }}>
          Funding partnerships are developed on a relationship-driven basis to ensure 
          alignment, accountability, and long-term community impact.
        </p>
      </motion.section>

    </div>
  );
}