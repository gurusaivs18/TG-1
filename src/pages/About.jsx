import { Link, useNavigate } from "react-router-dom";
import "../css/About.css";
import "../css/Home.css";
import { useEffect, useState, useCallback } from "react";
import { BRANDS as BRAND_CATALOG, BRAND_CATEGORIES } from "../Data/brands";

const SERVICES = [
  {
    icon: "🏪",
    title: "Intelligent Distribution:",
    desc: "Multi-Channel Distribution across retail online & B2B",
  },
  {
    icon: "🚐",
    title: "Market & Brand Development:",
    desc: "Driving brand growth through local expertise and strategic market access.",
  },
  {
    icon: "🔗",
    title: "Sales & Commercial Excellence:",
    desc: "Maximising growth through strategic sales, strong partnerships, and market-driven execution.",
  },
  {
    icon: "📱",
    title: "Retail & E-Commerce Enablement",
    desc: "Strengthening retail and online presence through connected channels and smarter execution.",
  },
  {
    icon: "📊",
    title: "Supply Chain & Logistics",
    desc: "Ensuring efficient, agile, and reliable movement of products from source to market.",
  },
  {
    icon: "🤝",
    title: "After-Sales & Service:",
    desc: "Delivering reliable support, warranty solutions, and service that build lasting customer trust.",
  },
];

// ── Category Modal (identical to Home.jsx) ──
// Lists every brand inside the selected category. Clicking a logo redirects
// to that brand's detail page on /brands.
function CategoryModal({ category, brands, onClose, onSelectBrand }) {
  const handleBackdropClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose],
  );

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="cat-modal__backdrop" onClick={handleBackdropClick}>
      <div className="cat-modal__box" role="dialog" aria-modal="true">
        <div className="cat-modal__header">
          <div className="cat-modal__header-left">
            <span className="cat-modal__icon">{category.icon}</span>
            <h3 className="cat-modal__title">{category.name}</h3>
          </div>
          <button
            className="cat-modal__close"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <p className="cat-modal__desc">{category.desc}</p>

        {brands.length > 0 ? (
          <div className="cat-modal__grid">
            {brands.map((brand) => (
              <button
                key={brand.id}
                className="cat-modal__logo-card"
                onClick={() => onSelectBrand(brand)}
              >
                <div className="cat-modal__logo-wrap">
                  {brand.logo ? (
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className={brand.logoClass || ""}
                    />
                  ) : (
                    <span
                      className="cat-modal__logo-text"
                      style={{ "--accent": brand.accentColor }}
                    >
                      {brand.logoText || brand.name}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        ) : (
          <p className="cat-modal__empty">Brands coming soon.</p>
        )}
      </div>
    </div>
  );
}

export default function About() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    // Existing reveal observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.2 },
    );
    document.querySelectorAll(".reveal-left, .reveal-right").forEach((el) => {
      revealObserver.observe(el);
    });

    // Journey hang animation
    const journeyItems = document.querySelectorAll(".journey-alt__item");
    const journeyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            journeyItems.forEach((item, i) => {
              setTimeout(() => {
                item.classList.add("hang-in");
              }, i * 300);
            });
            journeyObserver.disconnect();
          }
        });
      },
      { threshold: 0.1 },
    );
    const journeySection = document.querySelector(".journey-alt");
    if (journeySection) journeyObserver.observe(journeySection);

    return () => {
      revealObserver.disconnect();
      journeyObserver.disconnect();
    };
  }, []);

  // Redirect to the matching brand's detail page on /brands
  const handleSelectCategoryBrand = (brand) => {
    setActiveCategory(null);
    if (brand?.id) {
      navigate(`/brands?brand=${brand.id}`);
    }
  };

  return (
    <>
      <section className="section reveal-left">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="vm-card__text" style={{ marginBottom: "1.5rem" }}>
              <strong>Target One LLC</strong> is a trusted, results-driven
              distributor with over 10 years of experience across the UAE and
              Qatar. We have built a strong track record representing a diverse
              portfolio of leading brands across audio, accessories, wearables,
              projectors, networking, and AI-powered technology. Through our
              established omnichannel network, we connect global brands with
              consumers across the region, driving strong market presence, brand
              visibility, and sustainable distribution.
            </p>
            <span className="section-eyebrow">Our Purpose</span>

            <h2 className="section-title">Enabling Intelligent Distribution</h2>
          </div>
          <div className="vm-grid">
            <div className="vm-card vm-card--vision">
              <div className="vm-card__icon">🎯</div>
              <div className="vm-card__label">Vision</div>
              <div className="vm-card__title">Our Vision</div>
              <p className="vm-card__text">
                To establish ourselves as a trusted, technology-led distribution
                partner across the GCC and emerging markets, connecting global
                brands with regional expertise to drive stronger retail
                experiences, smarter distribution, and sustainable growth.
              </p>
            </div>
            <div className="vm-card vm-card--mission">
              <div className="vm-card__icon">🚀</div>
              <div className="vm-card__label">Mission</div>
              <div className="vm-card__title">Our Mission</div>
              <p className="vm-card__text">
                Our mission is to bridge global brands and regional markets
                through intelligent distribution and technology-led supply chain
                solutions, creating greater visibility, operational efficiency,
                and sustainable growth for every partner we serve.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--gray reveal-left">
        <div className="container">
          <div className="section-header section-header--center">
            <h2 className="section-title">Our Product Portfolio</h2>
            <p className="section-subtitle">
              A focused portfolio of electronics and accessories distributed
              through an omnichannel network across the UAE & Qatar.
            </p>
          </div>
          <div className="categories__grid">
            {BRAND_CATEGORIES.map((cat) => (
              <button
                key={cat.name}
                className="category-card"
                onClick={() => setActiveCategory(cat)}
                aria-haspopup="dialog"
              >
                <div className="category-card__icon">{cat.icon}</div>
                <div className="category-card__name">{cat.name}</div>
                <div className="category-card__desc">{cat.desc}</div>
                <div className="category-card__cta">
                  View Brands <span className="category-card__arrow">→</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--gray reveal-right">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">What We Do</span>
            <h2 className="section-title">Our Services & Capabilities</h2>
            <p className="section-subtitle">
              From power retail to last-mile van sales, we deliver end-to-end
              distribution solutions for electronics brands in the GCC.
            </p>
          </div>
          <div className="about-services__grid">
            {SERVICES.map((s) => (
              <div key={s.title} className="about-service-item">
                <div className="about-service-item__icon">{s.icon}</div>
                <div>
                  <div className="about-service-item__title">{s.title}</div>
                  <p className="about-service-item__desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner reveal-right">
        <div className="container">
          <div className="cta-banner__inner">
            <h2 className="cta-banner__title">
              Let's Grow Your Brand Together…
            </h2>
            <p className="cta-banner__sub">
              If you’re looking for the right distribution partner to grow your
              brand, we’d love to start a conversation.
            </p>
            <div className="cta-banner__actions">
              <Link to="/contact" className="btn btn-dark">
                Get in Touch
              </Link>
              <Link to="/brands" className="btn btn-secondary">
                View Our Brands
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Modal ── */}
      {activeCategory && (
        <CategoryModal
          category={activeCategory}
          brands={BRAND_CATALOG.filter(
            (b) => b.category === activeCategory.name,
          )}
          onClose={() => setActiveCategory(null)}
          onSelectBrand={handleSelectCategoryBrand}
        />
      )}
    </>
  );
}
