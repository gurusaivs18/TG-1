import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../css/Brands.css";
import { BRANDS, CATEGORY_TABS } from "../Data/brands";

// ─────────────────────────────────────────────────────────────────────────────
// HELPER — renders logo image OR styled text fallback
// ─────────────────────────────────────────────────────────────────────────────
function BrandLogoDisplay({ brand, context = "card" }) {
  const logo =
    context === "detail" && brand.detailLogo ? brand.detailLogo : brand.logo;

  if (logo) {
    return (
      <img
        src={logo}
        alt={brand.name}
        className={`bl-img bl-img--${context} ${brand.logoClass || ""}`}
      />
    );
  }

  return (
    <span
      className={`bl-text bl-text--${context}`}
      style={{ "--accent": brand.accentColor }}
    >
      {brand.logoText || brand.name}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER — renders a single sub-category card
// Prefers a supplied image (text baked into the artwork); falls back to the
// icon + number + name layout for any sub-category that hasn't got an image yet.
// ─────────────────────────────────────────────────────────────────────────────
function BrandSubCard({ sub, index, accentColor }) {
  if (sub.image) {
    return (
      <div
        className="bd-sub-card bd-sub-card--image"
        style={{ "--brand-accent": accentColor }}
      >
        <img
          src={sub.image}
          alt={sub.name}
          className="bd-sub-card__img"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="bd-sub-card" style={{ "--brand-accent": accentColor }}>
      <div className="bd-sub-card__icon">{sub.icon}</div>
      <div className="bd-sub-card__num">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="bd-sub-card__name">{sub.name}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// BRAND CARD  (listing grid)
// ─────────────────────────────────────────────────────────────────────────────
function BrandCard({ brand, onSelect }) {
  return (
    <div
      className="brand-card"
      onClick={() => onSelect(brand)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onSelect(brand)}
      style={{ "--brand-accent": brand.accentColor }}
    >
      {/* Logo area */}
      <div className="brand-card__image-wrap">
        <BrandLogoDisplay brand={brand} context="card" />
      </div>

      {/* Body */}
      <div className="brand-card__body">
        <div className="brand-card__category">{brand.category}</div>
        <h3 className="brand-card__name">{brand.name}</h3>
        <p className="brand-card__desc">{brand.tagline}</p>

        {/* Sub-category pills */}
        <div className="brand-card__tags">
          {brand.subCategories.slice(0, 3).map((s) => (
            <span key={s.name} className="brand-tag">
              {s.icon} {s.name}
            </span>
          ))}
          {brand.subCategories.length > 3 && (
            <span className="brand-tag brand-tag--more">
              +{brand.subCategories.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Hover CTA strip */}
      <div className="brand-card__cta">
        View Brand Details <span className="brand-card__arrow">→</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// BRAND DETAIL PAGE  (replaces listing when a brand is selected)
// ─────────────────────────────────────────────────────────────────────────────
function BrandDetailPage({ brand, onBack }) {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="brand-detail-page">
      {/* ── Hero band ── */}
      <div className="bd-hero" style={{ "--brand-accent": brand.accentColor }}>
        <div className="container">
          <button className="bd-back" onClick={onBack}>
            ← Back to Brands
          </button>

          <div className="bd-hero__inner">
            {/* Logo */}
            <div className="bd-hero__logo-wrap">
              <BrandLogoDisplay brand={brand} context="detail" />
            </div>

            {/* Meta */}
            <div className="bd-hero__meta">
              <span className="bd-category-badge">{brand.category}</span>
              <h1 className="bd-name">{brand.name}</h1>
              <p className="bd-tagline">{brand.tagline}</p>

              {/* Highlights */}
              <ul className="bd-highlights">
                {brand.highlights.map((h) => (
                  <li key={h} className="bd-highlight">
                    <span
                      className="bd-highlight__dot"
                      style={{ background: brand.accentColor }}
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="container">
        <div className="bd-content">
          {/* About */}
          <section className="bd-section">
            <span className="section-eyebrow">About the Brand</span>
            <h2 className="bd-section-title">Why We Distribute {brand.name}</h2>
            <p className="bd-description">{brand.description}</p>
          </section>

          {/* Sub-categories */}
          <section className="bd-section">
            <span className="section-eyebrow">Product Range</span>
            <h2 className="bd-section-title">
              {brand.name} — Categories We Carry
            </h2>
            <div className="bd-subs-grid">
              {brand.subCategories.map((sub, i) => (
                <BrandSubCard
                  key={sub.name}
                  sub={sub}
                  index={i}
                  accentColor={brand.accentColor}
                />
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bd-cta-row">
            <Link to="/contact" className="btn btn-primary">
              Enquire About {brand.name} →
            </Link>
            <button className="btn btn-outline" onClick={onBack}>
              ← View All Brands
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// BRANDS PAGE  (root component)
// ─────────────────────────────────────────────────────────────────────────────
export default function Brands() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState(null);

  // ── Deep-link support ──────────────────────────────────────────────────
  // Visiting /brands?brand=<id> (e.g. from the Home page category modal)
  // opens that brand's detail page directly, without an extra click.
  useEffect(() => {
    const brandId = searchParams.get("brand");
    if (!brandId) return;
    const match = BRANDS.find((b) => b.id === brandId);
    if (match) setSelectedBrand(match);
  }, [searchParams]);

  // Scroll-reveal for listing
  useEffect(() => {
    if (selectedBrand) return;

    const elements = document.querySelectorAll(".reveal-left, .reveal-right");

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("active");
        }),
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" },
    );

    elements.forEach((el) => {
      // If it's already in (or near) the viewport on mount, reveal it
      // immediately instead of waiting on the observer — mobile Safari/Chrome
      // often don't fire IntersectionObserver until the first scroll event.
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("active");
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [selectedBrand]);

  const handleSelectBrand = (brand) => {
    setSelectedBrand(brand);
    setSearchParams({ brand: brand.id });
  };

  const handleBack = () => {
    setSelectedBrand(null);
    setSearchParams({});
  };

  // If a brand is selected → show detail page
  if (selectedBrand) {
    return <BrandDetailPage brand={selectedBrand} onBack={handleBack} />;
  }

  const filtered =
    activeFilter === "All"
      ? BRANDS
      : BRANDS.filter((b) => b.category === activeFilter);

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero-band reveal-left">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Our Portfolio</span>
            <h1 className="section-title">Our Brand Partners</h1>
            <p className="section-subtitle">
              We are the authorised distributor for world-class brands across
              Audio, Wearables, Accessories, Projectors, Networking, and AI
              Technology — spanning the UAE and Qatar.
            </p>
          </div>
        </div>
      </section>

      {/* ── Brand Grid ── */}
      <section className="section reveal-right">
        <div className="container">
          {/* Filter bar */}
          <div className="brands-page__filter-bar">
            {CATEGORY_TABS.map((f) => (
              <button
                key={f}
                className={`filter-btn ${activeFilter === f ? "filter-btn--active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="brands-page__grid">
            {filtered.map((brand) => (
              <BrandCard
                key={brand.id}
                brand={brand}
                onSelect={handleSelectBrand}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
