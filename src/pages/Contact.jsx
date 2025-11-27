import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut" },
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔥 You can replace this with Webhook, Firebase, Email API, Make.com, etc.
    console.log("Form submitted:", form);

    alert("Message sent! Our team will reach out shortly.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="page">
      {/* =======================
          HEADER SECTION
      ======================== */}
      <motion.section className="section section-center" {...fadeUp}>
        <p className="kicker">Contact Us</p>

        <h1 className="hero-title" style={{ marginBottom: "20px" }}>
          Let’s Build Detroit’s Ownership Future
        </h1>

        <p className="body-lg" style={{ maxWidth: "720px", margin: "0 auto" }}>
          Whether you're a Detroit renter, community partner, policymaker, or
          institution looking to advance equitable homeownership — our team is
          ready to connect.
        </p>
      </motion.section>

      {/* =======================
          CONTACT FORM
      ======================== */}
      <motion.section className="section" {...fadeUp}>
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* NAME */}
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* EMAIL */}
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* PHONE */}
            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                placeholder="(313) 555-2053"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            {/* MESSAGE */}
            <div className="form-group">
              <label>Your Message</label>
              <textarea
                name="message"
                placeholder="How can we help?"
                rows="6"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary shimmer-btn">
              Send Message
            </button>
          </form>
        </div>
      </motion.section>

      {/* =======================
          ALT CONTACT (OPTIONAL)
      ======================== */}
      <motion.section
        className="section section-center"
        style={{ marginTop: "-40px" }}
        {...fadeUp}
      >
        <p className="body-lg">
          Prefer email? Reach us directly at{" "}
          <a
            href="mailto:info@initiative2053.com"
            className="text-link"
            style={{ color: "var(--accent)" }}
          >
            info@initiative2053.com
          </a>
        </p>
      </motion.section>
    </div>
  );
}
