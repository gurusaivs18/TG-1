import { Link } from "react-router-dom";
import "../css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* ── Van Sales Banner ── always visible on every page */}
      {/* <div className="footer__van-banner">
        <div className="container">
          <div className="footer__van-banner-inner">
            <div className="footer__van-banner-text">
              <span className="footer__van-icon">🚐</span>
              <div>
                <div className="footer__van-headline">
                  Van Sales — IR Market Coverage Across UAE
                </div>
                <div className="footer__van-sub">
                  7 Emirates · 2800+ Active Retailers · Daily Route Coverage ·
                  Fast-Moving Replenishment
                </div>
              </div>
            </div>
            <Link to="/contact" className="btn btn-secondary">
              Partner With Us →
            </Link>
          </div>
        </div>
      </div> */}

      {/* ── Main Footer ── */}
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* Brand Column */}
            <div>
              <div className="footer__brand-logo">
                <div className="footer__brand-mark">T</div>
                <div className="footer__brand-name">Target One</div>
              </div>
              <p className="footer__tagline">
                Target One is a technology-driven distribution and business
                solutions company, enabling brands to scale through smart
                logistics, digital systems, and data intelligence.
              </p>
              <div className="footer__flags">
                <span className="footer__flag-badge">
                  🇦🇪 United Arab Emirates
                </span>
                <span className="footer__flag-badge">🇶🇦 Qatar</span>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <div className="footer__col-title">Company</div>
              <ul className="footer__links">
                <li>
                  <Link to="/" className="footer__link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="footer__link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/brands" className="footer__link">
                    Our Brands
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="footer__link">
                    Our Events
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="footer__link">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Brands Links */}
            <div>
              <div className="footer__col-title">Our Brands</div>
              <ul className="footer__links">
                <li>
                  <Link to="/brands" className="footer__link">
                    Marshall
                  </Link>
                </li>
                <li>
                  <Link to="/brands" className="footer__link">
                    BenQ
                  </Link>
                </li>
                <li>
                  <Link to="/brands" className="footer__link">
                    Dicota
                  </Link>
                </li>
                <li>
                  <Link to="/brands" className="footer__link">
                    SoundPEATS
                  </Link>
                </li>
                <li>
                  <Link to="/brands" className="footer__link">
                    AceFast
                  </Link>
                </li>
                <li>
                  <Link to="/brands" className="footer__link">
                    Alogic
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <div className="footer__col-title">Contact</div>
              <ul className="footer__contact-list">
                <li className="footer__contact-item">
                  <span className="footer__contact-icon">📍</span>
                  <span>Dubai, United Arab Emirates</span>
                </li>
                <li className="footer__contact-item">
                  <span className="footer__contact-icon">📞</span>
                  <span>+971 50 123 4567</span>
                </li>
                <li className="footer__contact-item">
                  <span className="footer__contact-icon">✉️</span>
                  <span>info@targetone.ae</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer Bottom ── */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p className="footer__copy">
              © {new Date().getFullYear()} Target One. All rights reserved.
            </p>
            <div className="footer__bottom-links">
              <a href="#" className="footer__bottom-link">
                Privacy Policy
              </a>
              <a href="#" className="footer__bottom-link">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
