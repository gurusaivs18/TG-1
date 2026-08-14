import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// Layout components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

// Pages
import Home from "./components/Home";
import About from "./pages/About";
import Brands from "./pages/Brands";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
// import TermsOfUse from "./components/TermsOfUse";
// ---------------------------------------------
// Scroll to Top + Page Loader
// ---------------------------------------------
function PageTransition() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader whenever route changes
    setLoading(true);

    // Scroll to top immediately
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    // Keep loader visible for a short delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [pathname]);

  return loading ? <Loader /> : null;
}

// ---------------------------------------------
// App Content
// ---------------------------------------------
function AppContent() {
  return (
    <>
      <PageTransition />

      <Navbar />

      <main>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />

          {/* Fallback */}
          <Route path="*" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* <Route path="/terms-of-use" element={<TermsOfUse />} /> */}
        </Routes>
      </main>

      <Footer />
    </>
  );
}

// ---------------------------------------------
// Main App
// ---------------------------------------------
export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
