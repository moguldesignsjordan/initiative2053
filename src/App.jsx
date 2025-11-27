import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Model from "./pages/Model";
import Impact from "./pages/Impact";
import Partners from "./pages/Partners";
import Detroiters from "./pages/Detroiters";
import Contact from "./pages/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  /* ============================================================
     THEME: SYSTEM + MANUAL OVERRIDE
  ============================================================ */

  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";

    // Manual overrides come first
    const saved = localStorage.getItem("initiative2053-theme");
    if (saved) return saved;

    // Otherwise detect system preference
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });

  // Apply theme to <html data-theme="">
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("initiative2053-theme", theme);
  }, [theme]);

  // 🔥 NEW — Detect system theme changes live (Auto mode)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: light)");

    const handleChange = (e) => {
      const saved = localStorage.getItem("initiative2053-theme");

      // Only auto-update if user has NOT manually overridden the theme
      if (!saved) {
        setTheme(e.matches ? "light" : "dark");
      }
    };

    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  // Toggle theme manually
  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  /* ============================================================
     INITIAL LOADER
  ============================================================ */

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <Loader />;

  /* ============================================================
     APP LAYOUT
  ============================================================ */

  return (
    <>
      {/* Navbar receives theme + toggle */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/model" element={<Model />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/detroiters" element={<Detroiters />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
