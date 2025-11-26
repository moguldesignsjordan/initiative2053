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

  // Detect system theme on first load UNLESS user has manually chosen
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";

    const saved = localStorage.getItem("initiative2053-theme");
    if (saved) return saved;

    // System preference
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

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  if (loading) return <Loader />;

  return (
    <>
      {/* pass theme + toggle to Navbar */}
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
