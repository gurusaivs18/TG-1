import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Navbar.css";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Categories", path: "/categories" },
  { label: "Our Brands", path: "/brands" },
  { label: "Events", path: "/events" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`navbar ${scrolled ? "navbar--scrolled" : "navbar--transparent"}`}
    >
      <div className="container">
        <div className="navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo">
            <div className="navbar__logo-mark">T</div>
            <div className="navbar__logo-text">
              Target One
              <span className="navbar__logo-sub">Electronics Distribution</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="navbar__nav">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar__link ${location.pathname === link.path ? "navbar__link--active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="btn btn-primary navbar__cta">
              Get in Touch
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`navbar__mobile ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`navbar__mobile-link ${location.pathname === link.path ? "navbar__link--active" : ""}`}
          >
            {link.label}
          </Link>
        ))}
        <div className="navbar__mobile-cta">
          <Link
            to="/contact"
            className="btn btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
