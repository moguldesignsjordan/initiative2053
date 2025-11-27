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

  // Detect system theme + user override
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";

    const saved = localStorage.getItem("initiative2053-theme");
    if (saved) return saved;

    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });

  // Fake loader
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  // Apply theme globally
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("initiative2053-theme", theme);
  }, [theme]);

  // 🔥 LIVE SYSTEM THEME SYNC
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");

    const handleSystemChange = (e) => {
      const saved = localStorage.getItem("initiative2053-theme");
      // Only auto-change if user has NOT manually chosen a theme
      if (!saved) {
        setTheme(e.matches ? "light" : "dark");
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, []);

  const toggleTheme = () => {
    // Manual override — user preference wins over system
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("initiative2053-theme", next);
      return next;
    });
  };

  if (loading) return <Loader />;

  return (
    <>
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
