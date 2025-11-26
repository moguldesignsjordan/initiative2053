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

/**
 * App with global light/dark theme
 */
export default function App() {
  const [loading, setLoading] = useState(true);

  // Read stored theme or default to dark
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("initiative2053-theme") || "dark";
  });

  // Fake loader
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  // Apply theme to <html> and persist
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("initiative2053-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />

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

      {/* THEME TOGGLE – fixed bottom-right, subtle */}
      <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle light and dark mode"
      >
        <span className="theme-toggle-track">
          <span className="theme-toggle-thumb" />
        </span>
        <span className="theme-toggle-label">
          {theme === "dark" ? "Dark" : "Light"}
        </span>
      </button>
    </>
  );
}
