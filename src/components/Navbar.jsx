import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Navbar.css";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Pressence", path: "/ourpressence" },
  { label: "Categories", path: "/categories" },
  { label: "Our Brands", path: "/brands" },
  { label: "Events", path: "/events" },
  { label: "Blogs", path: "/blogs" },
  { label: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navbarRef = useRef(null);
  const lastScrollY = useRef(0);

  // ── Scroll: hide on scroll down, show on scroll up ──
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const lastY = lastScrollY.current;

      setScrolled(currentY > 40);

      const scrollingDown = currentY > lastY;
      const scrollingUp = currentY < lastY;

      if (currentY > 100 && scrollingDown) {
        setHidden(true);
        setMenuOpen(false);
      }

      if (scrollingUp) {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // ── Close menu when resized to desktop ──
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ── Close menu on route change ──
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // ── Close menu when clicking outside the navbar ──
  useEffect(() => {
    const onClickOutside = (e) => {
      if (
        menuOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("touchstart", onClickOutside, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("touchstart", onClickOutside);
    };
  }, [menuOpen]);

  return (
    <header
      ref={navbarRef}
      className={`navbar
        ${scrolled ? "navbar--scrolled" : "navbar--transparent"}
        ${hidden ? "navbar--hidden" : ""}
      `}
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
            onClick={() => setMenuOpen((prev) => !prev)}
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
