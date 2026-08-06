import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import Home from "./components/Home";
import About from "./pages/About";
import Brands from "./pages/Brands";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

// -----------------------------
// Scroll to Top on Route Change
// -----------------------------
// Only reacts to pathname changes now — NOT location.search.
// Filters and brand selection use setSearchParams() (query-string only,
// same pathname), so they must never trigger this global reset anymore.
// Per-page scroll behavior (e.g. Brands detail view) is handled locally
// inside that page instead.
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location.pathname]);

  return null;
}

// -----------------------------
// App Layout
// -----------------------------
function AppLayout() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <Loader />}

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

// -----------------------------
// Root App
// -----------------------------
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppLayout />
    </BrowserRouter>
  );
}
