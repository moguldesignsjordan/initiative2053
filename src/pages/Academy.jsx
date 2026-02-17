import { useMemo, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  HelpCircle,
  ArrowRight,
  BarChart3,
  Landmark,
  ShieldCheck,
  Home,
} from "lucide-react";

// Animation variants
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut" },
};

export default function Academy() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useRef();

  const videoSrc = useMemo(() => {
    const base = import.meta.env.BASE_URL || "/";
    const cleanBase = base.endsWith("/") ? base : `${base}/`;
    return `${cleanBase}academy-intro.mp4`;
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(formRef.current);
    const applicationData = {
      name: formData.get("user_name"),
      email: formData.get("user_email"),
      phone: formData.get("user_phone"),
      status: formData.get("user_status"),
      timeline: formData.get("user_timeline"),
      message: formData.get("message") || "",
      submittedAt: serverTimestamp(),
    };

    // EmailJS credentials
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      // 1. Save to Firestore (primary — persistent record)
      await addDoc(collection(db, "academy-applications"), applicationData);
      console.log("Firestore: application saved");

      // 2. Send email notification (secondary — so you get an alert)
      try {
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
        console.log("EmailJS: notification sent");
      } catch (emailErr) {
        // Email failure is non-critical — Firestore already has the data
        console.warn("EmailJS failed (data is safe in Firestore):", emailErr);
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      alert("Failed to send application. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="academy-page academy-shell">
      {/* ================================
          HERO + VIDEO SECTION
      =================================*/}
      <motion.section className="academy-section academy-hero" {...fadeUp}>
        <div className="academy-wrap academy-hero-grid">
          <div className="academy-hero-content">
            <span className="academy-kicker">The Pre-Approval Academy</span>

            <h1 className="academy-hero-title">
              Education-First Preparation for
              <br />
              <span className="academy-accent">Sustainable Homeownership.</span>
            </h1>

            <p className="academy-body-lg">
              The Pre-Approval Academy is the participant entry point into Initiative 2053.
              It was built for people who are tired of guessing, tired of misinformation, 
              and tired of being told "not yet" without a path forward.
            </p>

            <p className="academy-body-lg">
              This is not a sales funnel. It is a preparation pathway.
            </p>

            <div className="academy-hero-stats">
              <div className="academy-stat">
                <span className="academy-stat-label">Format</span>
                <span className="academy-stat-value">Cohort-based</span>
              </div>
              <div className="academy-stat">
                <span className="academy-stat-label">Focus</span>
                <span className="academy-stat-value">Verified readiness</span>
              </div>
              <div className="academy-stat">
                <span className="academy-stat-label">Outcome</span>
                <span className="academy-stat-value">Sustainable ownership</span>
              </div>
            </div>
          </div>

          <div className="academy-video-outer">
            <div className="academy-video-inner">
              <video
                className="academy-video-player"
                controls
                playsInline
                preload="metadata"
                controlsList="nodownload noplaybackrate"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="academy-video-badge">
              <span className="academy-live-dot" />
              <span>Course Introduction</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ================================
          IS / IS NOT (Comparison)
      =================================*/}
      <motion.section className="academy-section academy-offset" {...fadeUp}>
        <div className="academy-wrap">
          <div className="academy-center academy-mb-48">
            <h2 className="academy-h2">What the Academy Is — and Is Not</h2>
          </div>

          <div className="academy-compare-grid">
            <div className="academy-card academy-compare-card academy-is">
              <div className="academy-card-head">
                <CheckCircle2 className="academy-success" size={28} />
                <h3 className="academy-h3">This Program Is</h3>
              </div>
              <ul className="academy-list">
                <li>Structured</li>
                <li>Educational</li>
                <li>Outcome-focused</li>
                <li>Designed for long-term ownership</li>
              </ul>
            </div>

            <div className="academy-card academy-compare-card academy-not">
              <div className="academy-card-head">
                <XCircle className="academy-error" size={28} />
                <h3 className="academy-h3">This Program Is Not</h3>
              </div>
              <ul className="academy-list">
                <li>A guarantee of approval</li>
                <li>A shortcut to buying</li>
                <li>A promise of assistance</li>
                <li>A pressure-based sales process</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ================================
          5 PILLARS OF READINESS
      =================================*/}
      <motion.section className="academy-section" {...fadeUp}>
        <div className="academy-wrap">
          <h2 className="academy-h2 academy-mb-16">The 5 Pillars of Readiness</h2>
          <p className="academy-body-lg academy-mb-48">
            The academy prepares participants across five core areas.
          </p>

          <div className="academy-pillars-grid">
            <PillarCard
              icon={<BarChart3 />}
              title="1. Credit & Financial Profile"
              items={[
                "Understanding credit fundamentals",
                "Identifying real issues vs. noise",
                "Building sustainable improvement strategies",
              ]}
            />
            <PillarCard
              icon={<Landmark />}
              title="2. Debt-to-Income & Cash Flow"
              items={[
                "How lenders evaluate affordability",
                "How to manage obligations responsibly",
                "How housing costs impact long-term stability",
              ]}
            />
            <PillarCard
              icon={<ShieldCheck />}
              title="3. Assets & Savings"
              items={[
                "What counts — and what doesn't",
                "Why \"mattress money\" hurts outcomes",
                "How to prepare funds responsibly",
              ]}
            />
            <PillarCard
              icon={<Home />}
              title="4. Buying Strategy"
              items={[
                "Understanding ownership costs",
                "Avoiding common mistakes",
                "Making informed decisions",
              ]}
            />
            <PillarCard
              icon={<CheckCircle2 />}
              title="5. Ownership Readiness"
              items={[
                "What sustainable ownership actually requires",
                "Preparing for taxes, insurance, and maintenance",
                "Long-term financial discipline",
              ]}
            />
          </div>
        </div>
      </motion.section>

      {/* ================================
          APPLICATION FORM SECTION
      =================================*/}
      <motion.section className="academy-section academy-offset" {...fadeUp}>
        <div className="academy-wrap academy-form-grid">
          <div className="academy-form-context">
            <h2 className="academy-h2">Who This Program Is For</h2>
            <p className="academy-body-lg">The Pre-Approval Academy is for people who:</p>

            <ul className="academy-checklist">
              <li>Work hard but feel stuck</li>
              <li>Are cost-burdened by rent</li>
              <li>Want ownership without risking their future</li>
              <li>Are willing to prepare intentionally</li>
            </ul>

            <div className="academy-mt-48">
              <p className="academy-kicker">Your Next Step</p>
              <p className="academy-muted">
                If rent pressure is consuming your ability to move forward, the first step is education.
              </p>
            </div>
          </div>

          <div className="academy-card academy-application-card">
            <div className="academy-card-strip">
              <span>Application for Enrollment</span>
              <span>ID: 2053-ACAD</span>
            </div>

            {!submitted ? (
              <form ref={formRef} onSubmit={handleSubmit} className="academy-form-fields">
                <div className="academy-field academy-span-2">
                  <label>Full Legal Name</label>
                  <div className="academy-input">
                    <User size={18} className="academy-input-icon" />
                    <input type="text" name="user_name" required placeholder="First and Last Name" />
                  </div>
                </div>

                <div className="academy-field">
                  <label>Email Address</label>
                  <div className="academy-input">
                    <Mail size={18} className="academy-input-icon" />
                    <input type="email" name="user_email" required placeholder="you@example.com" />
                  </div>
                </div>

                <div className="academy-field">
                  <label>Phone Number</label>
                  <div className="academy-input">
                    <Phone size={18} className="academy-input-icon" />
                    <input type="tel" name="user_phone" required placeholder="(313) 555-0199" />
                  </div>
                </div>

                <div className="academy-field">
                  <label>Current Status</label>
                  <div className="academy-input">
                    <MapPin size={18} className="academy-input-icon" />
                    <select name="user_status" required defaultValue="">
                      <option value="" disabled>Select status...</option>
                      <option value="detroit-renter">Renting in Detroit</option>
                      <option value="metro-renter">Renting in Metro Detroit</option>
                      <option value="not-renter">Not Renting / Other</option>
                    </select>
                  </div>
                </div>

                <div className="academy-field">
                  <label>Target Move-in</label>
                  <div className="academy-input">
                    <Calendar size={18} className="academy-input-icon" />
                    <select name="user_timeline" required defaultValue="">
                      <option value="" disabled>Select timeframe...</option>
                      <option value="0-12">0–12 months</option>
                      <option value="12-24">12–24 months</option>
                      <option value="24+">24+ months</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div className="academy-field academy-span-2">
                  <label>Primary Concern / Question</label>
                  <div className="academy-input academy-textarea">
                    <HelpCircle size={18} className="academy-input-icon academy-input-icon-top" />
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="e.g., 'I'm worried about my credit score' or 'How do down payments work?'"
                    />
                  </div>
                </div>

                <div className="academy-actions academy-span-2">
                  <p className="academy-disclaimer">
                    Education first. Preparation next. Ownership that lasts.
                  </p>
                  <button type="submit" className="academy-btn-primary" disabled={sending}>
                    {sending ? "Sending..." : (
                      <>Submit Application <ArrowRight size={20} /></>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="academy-success-state">
                <div className="academy-success-badge">
                  <CheckCircle2 size={44} className="academy-success" />
                </div>
                <h3 className="academy-h3">Application Received</h3>
                <p className="academy-muted">
                  We have added you to the prospective student list. Check your email for the Syllabus and next steps.
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

function PillarCard({ icon, title, items }) {
  return (
    <div className="academy-card academy-pillar">
      <div className="academy-pillar-icon">{icon}</div>
      <h3 className="academy-h3">{title}</h3>
      <ul className="academy-list academy-list-tight">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}