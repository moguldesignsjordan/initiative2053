import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
};

// Team Data
const programLeadership = [
  {
    name: "Maurice Lucas Jr.",
    title: "Director of Initiative 2053 | Board Member",
    org: "Caring Hands of Benjamin",
    initials: "ML",
    bio: "Maurice Lucas Jr. is a seasoned housing and mortgage professional with extensive experience guiding affordability-constrained and first-time buyers through the homeownership process. As Director of Initiative 2053, he leads program strategy, education design, and readiness standards to ensure participants are not just approved, but prepared for sustainable ownership.",
  },
];

const boardMembers = [
  {
    name: "Antoine Hayes",
    title: "Founder & Executive Director",
    initials: "AH",
    bio: "Antoine Hayes provides organizational leadership and strategic oversight for Caring Hands of Benjamin and its initiatives. His work centers on building durable systems that prioritize long-term outcomes, accountability, and mission integrity over short-term activity.",
  },
  {
    name: "Benjamin J. Cunningham",
    title: "Treasurer",
    initials: "BC",
    bio: "Benjamin J. Cunningham, CPA, CFP®, brings extensive financial and compliance expertise shaped by a distinguished career with the Internal Revenue Service. As Treasurer, he provides fiduciary oversight, financial governance, and accountability to ensure transparency and long-term financial integrity.",
  },
  {
    name: "Shere' R. Kareem",
    title: "Secretary-Treasurer",
    initials: "SK",
    bio: "Shere' R. Kareem is a seasoned administrative and compliance professional with more than two decades of experience supporting executive operations, financial reporting, and regulatory compliance across nonprofit and corporate environments.",
  },
];

const advisoryCouncil = [
  {
    name: "Raymond Harris",
    title: "Real Estate Investment Advisor",
    initials: "RH",
    bio: "Raymond Harris is an experienced real estate investor with deep, hands-on knowledge of the Metro Detroit housing market. He provides market-level insight into pricing trends, neighborhood conditions, and housing stock suitability.",
  },
  {
    name: "Yelena Ramautar",
    title: "Housing & Policy Advisor",
    org: "Community Development Advocates of Detroit",
    website: "www.cdad-online.org",
    initials: "YR",
    bio: "Yelena Ramautar brings experience at the intersection of housing policy, affordability advocacy, and community engagement. She provides strategic guidance to ensure Initiative 2053's education pathways and readiness standards remain aligned with responsible housing practices.",
  },
  {
    name: "Lance Woods",
    title: "Housing Stability Advisor",
    org: "Renaissance Community Development Corporation",
    website: "www.rencdc.org",
    initials: "LW",
    bio: "Lance Woods is a community development professional focusing on neighborhood-level housing stabilization and resident support. He brings on-the-ground insight into how housing quality, affordability pressure, and neighborhood conditions affect long-term ownership outcomes.",
  },
  {
    name: "Emma Elder-Howell",
    title: "Title & Closing Advisor",
    org: "Detroit Title & Escrow",
    website: "www.detroitte.com",
    initials: "EH",
    bio: "Emma Elder-Howell brings expertise in title, escrow, and real-estate closing operations. Her guidance helps ensure Initiative 2053's preparation standards extend through clear-to-close and post-closing readiness.",
  },
  {
    name: "Javay L. Coleman, MA",
    title: "HUD Housing Counseling Advisor",
    org: "Matrix Human Services",
    website: "www.matrixhumanservices.org",
    initials: "JC",
    bio: "Javay L. Coleman, MA is a Certified HUD Housing Counselor bringing direct expertise in HUD-compliant housing counseling, foreclosure prevention, and long-term homeownership readiness.",
  },
];

const openSeats = [
  {
    title: "Real Estate Attorney",
    subtitle: "Housing Litigation Experience",
    description: "We are seeking a real estate attorney with experience in housing litigation, fair housing, foreclosure defense, landlord-tenant law, or related housing policy matters.",
  },
  {
    title: "IT / Data Systems Professional",
    subtitle: "CRM & Compliance Reporting",
    description: "We are seeking an IT or data systems professional with experience in CRM platforms, data governance, reporting, and compliance-driven system design.",
  },
];

function TeamCard({ member, index }) {
  return (
    <motion.div
      className="pillar-card team-card"
      {...stagger}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="team-card-top">
        <div className="team-avatar">{member.initials}</div>
        <div className="team-headings">
          <h3 className="team-name">{member.name}</h3>
          <p className="team-title">{member.title}</p>
          {member.org && <p className="team-org">{member.org}</p>}
          {member.website && (
            <a
              href={`https://${member.website}`}
              className="team-site"
              target="_blank"
              rel="noopener noreferrer"
            >
              {member.website}
            </a>
          )}
        </div>
      </div>
      <p className="team-bio">{member.bio}</p>
    </motion.div>
  );
}

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
          <strong>Initiative 2053</strong> is a Detroit-rooted homeownership and wealth-building 
          initiative created to confront the housing affordability crisis and its disproportionate 
          impact on Black households.
        </p>

        <p className="body-lg" style={{ maxWidth: "820px", marginTop: "14px" }}>
          We exist to help families move from <strong>rent pressure into ownership stability</strong> — 
          not just access, but <strong>ownership that lasts</strong>.
        </p>
      </motion.section>

      {/* ================================
          MISSION
      =================================*/}
      <motion.section className="section" {...fadeUp}>
        <h2>Our Mission</h2>

        <p className="body-lg" style={{ maxWidth: "820px" }}>
          To deliver <strong>structured education and financial preparation as a pathway to 
          sustainable homeownership</strong>, and in doing so, interrupt the trajectory toward 
          long-term Black wealth erosion.
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
            <h3>"Not ready" — with no roadmap</h3>
            <p>Too many families are told they are "not ready" — without being told <em>how</em> to become ready.</p>
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
            <p>We lead with knowledge, not pressure.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">02</div>
            <h3>Preparation before pressure</h3>
            <p>Readiness comes before opportunity.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">03</div>
            <h3>Measured readiness</h3>
            <p>Measured readiness, not assumptions.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">04</div>
            <h3>Long-term stability</h3>
            <p>Long-term stability as the goal.</p>
          </div>
        </div>

        <p className="body-lg" style={{ maxWidth: "820px", marginTop: "22px" }}>
          We build systems designed to <strong>outlive market cycles and headlines</strong>.
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
              We are an <strong>intervention point</strong> — preparing families, aligning partners, 
              and protecting long-term outcomes.
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
          Because the future of Black wealth deserves seriousness, not slogans.
        </p>
      </motion.section>

      {/* ================================
          MEET THE TEAM
      =================================*/}
      <motion.section className="section" {...fadeUp}>
        <p className="kicker">MEET THE TEAM</p>
        <h2>Leadership, Governance & Advisors</h2>

        <p className="body-lg" style={{ maxWidth: "900px", marginTop: "14px" }}>
          Initiative 2053 is guided by experienced housing, finance, policy, and community leaders 
          committed to sustainable homeownership and long-term wealth outcomes for Black families in Detroit.
        </p>

        <p className="body-lg" style={{ maxWidth: "900px", marginTop: "10px" }}>
          The initiative operates with formal nonprofit governance, clear program leadership, 
          and a multidisciplinary advisory council. Roles are intentionally structured to preserve 
          accountability, protect program integrity, and ensure long-term impact.
        </p>
      </motion.section>

      {/* Program Leadership */}
      <motion.section className="section" {...fadeUp}>
        <h3 style={{ marginBottom: "24px", color: "var(--accent)" }}>Program Leadership & Governance</h3>
        <div className="pillars-grid team-grid" style={{ gridTemplateColumns: "1fr" }}>
          {programLeadership.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </motion.section>

      {/* Board of Directors */}
      <motion.section className="section" {...fadeUp}>
        <h3 style={{ marginBottom: "8px", color: "var(--accent)" }}>Board of Directors</h3>
        <p className="body-lg" style={{ marginBottom: "24px", opacity: 0.7 }}>
          Caring Hands of Benjamin — Governing Body
        </p>
        <div className="pillars-grid team-grid">
          {boardMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </motion.section>

      {/* Open Board Seats */}
      <motion.section className="section" {...fadeUp}>
        <h3 style={{ marginBottom: "8px", color: "var(--accent)" }}>Open Board Seats</h3>
        <p className="body-lg" style={{ maxWidth: "900px", marginBottom: "24px" }}>
          Initiative 2053 and Caring Hands of Benjamin are intentionally expanding the Board of Directors 
          to strengthen governance, risk management, and long-term sustainability.
        </p>
        <div className="pillars-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {openSeats.map((seat, index) => (
            <motion.div
              key={seat.title}
              className="pillar-card"
              {...stagger}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ borderStyle: "dashed" }}
            >
              <div className="pillar-icon" style={{ background: "transparent", border: "1px dashed var(--accent)" }}>?</div>
              <h3>{seat.title}</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--accent)", marginBottom: "8px" }}>{seat.subtitle}</p>
              <p>{seat.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Advisory Council */}
      <motion.section className="section" {...fadeUp}>
        <h3 style={{ marginBottom: "8px", color: "var(--accent)" }}>Advisory Council</h3>
        <p className="body-lg" style={{ marginBottom: "24px", opacity: 0.7 }}>
          Initiative 2053 — Strategy, Market, Policy, Compliance & Community Advisors
        </p>
        <div className="pillars-grid team-grid">
          {advisoryCouncil.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </motion.section>

      {/* Our Collective Role */}
      <motion.section className="section" {...fadeUp}>
        <h3 style={{ marginBottom: "24px" }}>Our Collective Role</h3>
        <p className="body-lg" style={{ maxWidth: "900px", marginBottom: "16px" }}>
          Together, Initiative 2053's leadership, board, and advisory council provide:
        </p>
        <div className="pillars-grid" style={{ marginTop: "18px" }}>
          <div className="pillar-card">
            <h3>Fiduciary governance</h3>
            <p>Compliance oversight and financial accountability.</p>
          </div>
          <div className="pillar-card">
            <h3>Housing expertise</h3>
            <p>Finance, policy, counseling, and market knowledge.</p>
          </div>
          <div className="pillar-card">
            <h3>Execution awareness</h3>
            <p>Closing and execution risk management.</p>
          </div>
          <div className="pillar-card">
            <h3>Community insight</h3>
            <p>Neighborhood-level housing stability perspective.</p>
          </div>
          <div className="pillar-card">
            <h3>Mission integrity</h3>
            <p>Long-term vision and outcome accountability.</p>
          </div>
        </div>

        <p className="body-lg" style={{ maxWidth: "820px", marginTop: "28px" }}>
          Initiative 2053 is not personality-driven.<br />
          <strong>It is driven by structure, stewardship, and outcomes.</strong>
        </p>
      </motion.section>

      {/* ================================
          CTA
      =================================*/}
      <motion.section className="section section-center" {...fadeUp}>
        <p className="kicker">#Initiative2053</p>
        <h2 style={{ marginBottom: "20px" }}>Detroit's Future Belongs to Detroiters.</h2>

        <p className="body-lg" style={{ maxWidth: "700px", marginBottom: "10px" }}>
          <strong>Education first. Preparation next. Ownership that lasts.</strong>
        </p>

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