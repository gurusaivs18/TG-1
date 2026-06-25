import { Link, useNavigate } from "react-router-dom";
import "../css/Home.css";
import heroBackground from "../assets/tg11.webp";
import UAENetworkMap from "../components/UAENetworkMap";
import { useEffect, useState, useCallback } from "react";
import { BRANDS as BRAND_CATALOG, BRAND_CATEGORIES } from "../Data/brands";

// brands (marquee)
import marshall from "../assets/marshall-logo-png_seeklogo-88775.png";
import benq from "../assets/benq rework2.jpeg";
import dicota from "../assets/dicota-logo-png_seeklogo-322545.png";
import soundpeats from "../assets/soundpeats.jpeg";
// import acefast from "../assets/brands/acefast.png";
import alogic from "../assets/alogic.jpeg";

// Brand data (marquee only — the modal below uses BRAND_CATALOG)
const BRANDS = [
  { name: "Marshall", img: marshall, className: "logo--marshall" },
  { name: "BenQ", img: benq, className: "logo--benq" },
  { name: "Dicota", img: dicota, className: "logo--dicota" },
  { name: "SoundPEATS", img: soundpeats, className: "logo--soundpeats" },
  { name: "Alogic", img: alogic, className: "logo--alogic" },
];

// Distribution Channels — replace logos with real imports when available
const CHANNELS = [
  {
    id: "power-retailers",
    label: "Power Retailers",
    icon: "🏬",
    desc: "Premium electronics & tech retail chains across UAE & Qatar.",
    partners: [
      { name: "Virgin Megastore", img: "/images/partners/virgin.png" },
      { name: "Jumbo Electronics", img: "/images/partners/jumbo.png" },
      { name: "Emax", img: "/images/partners/emax.png" },
      { name: "Sharaf DG", img: "/images/partners/sharafdg.png" },
      { name: "Grand Stores", img: "/images/partners/grandstores.png" },
      { name: "iStyle", img: "/images/partners/istyle.png" },
      { name: "Eros Digital Home", img: "/images/partners/eros.png" },
    ],
  },
  {
    id: "hypermarkets",
    label: "Hypermarkets",
    icon: "🛒",
    desc: "High-footfall hypermarket chains serving millions of shoppers.",
    partners: [
      { name: "Carrefour", img: "/images/partners/carrefour.png" },
      { name: "LuLu Hypermarket", img: "/images/partners/lulu.png" },
      { name: "Safari", img: "/images/partners/safari.png" },
      { name: "Géant", img: "/images/partners/geant.png" },
      { name: "Union Coop", img: "/images/partners/unioncoop.png" },
      { name: "Nesto", img: "/images/partners/nesto.png" },
    ],
  },
  {
    id: "ecommerce",
    label: "E-Commerce",
    icon: "🛍️",
    desc: "Leading online marketplaces and digital-first retail platforms.",
    partners: [
      { name: "Amazon", img: "/images/partners/amazon.png" },
      { name: "Noon", img: "/images/partners/noon.png" },
      { name: "Namshi", img: "/images/partners/namshi.png" },
      { name: "Microless", img: "/images/partners/microless.png" },
      { name: "Careem", img: "/images/partners/careem.png" },
    ],
  },
  {
    id: "operator",
    label: "Operator",
    icon: "📡",
    desc: "Telecom operator retail channels with nationwide coverage.",
    partners: [
      { name: "Etisalat by e&", img: "/images/partners/etisalat.png" },
    ],
  },
  {
    id: "travel-retail",
    label: "Travel Retail",
    icon: "✈️",
    desc: "Duty-free and airport retail locations serving global travellers.",
    partners: [
      { name: "Dubai Duty Free", img: "/images/partners/dubaidutyfree.png" },
      {
        name: "Abu Dhabi Duty Free",
        img: "/images/partners/abudhabidutyfree.png",
      },
      { name: "WHSmith", img: "/images/partners/whsmith.png" },
    ],
  },
  {
    id: "ir-channel",
    label: "Independent Reseller Channel (IR)",
    icon: "🚐",
    desc: "A fleet of six vans ensuring widespread coverage across the UAE.",
    partners: [],
    note: "A fleet of six vans to ensure widespread coverage across the UAE.",
  },
];

const WHAT_WE_DO = [
  {
    icon: "🏪",
    title: "Power Retail Distribution",
    desc: "Supplying major retailers with fast-moving electronics & accessories, backed by strong brand partnerships and reliable fulfillment.",
  },
  {
    icon: "🚐",
    title: "IR Market Coverage (Van Sales)",
    desc: "Reaching small retailers through an efficient van sales model, ensuring wide market coverage and consistent availability.",
  },
  {
    icon: "🔗",
    title: "Strong Supply Chain & Sourcing",
    desc: "Strategic sourcing helps us meet market demand quickly — balancing availability, pricing, and product relevance.",
  },
  {
    icon: "📦",
    title: "Modern Product Portfolio",
    desc: "Focused on the latest, most relevant products that retailers demand — built for sell-through and customer satisfaction.",
  },
];

const STATS = [
  { num: "10", suffix: "+", label: "Years in Market" },
  { num: "15", suffix: "", label: "Power Retailers" },
  { num: "7", suffix: "", label: "Emirates Covered" },
  { num: "1000", suffix: "+", label: "Quality Products" },
];

const TICKER_ITEMS = [
  "DISTRIBUTION",
  "TECHNOLOGY",
  "CONNECTIVITY",
  "SUPPLY CHAIN",
  "UAE",
  "QATAR",
  "GCC",
  "ELECTRONICS",
  "ACCESSORIES",
  "DISTRIBUTION",
  "TECHNOLOGY",
  "CONNECTIVITY",
  "SUPPLY CHAIN",
  "UAE",
  "QATAR",
  "GCC",
  "ELECTRONICS",
  "ACCESSORIES",
];

const JOURNEY = [
  { year: "2016", milestone: "Founded in UAE" },
  { year: "2018", milestone: "Retail Network Expansion" },
  { year: "2020", milestone: "Van Sales Model" },
  { year: "2022", milestone: "Qatar Operations" },
  { year: "2024", milestone: "B2B Platform Launch" },
  { year: "2026", milestone: "Regional Presence" },
];

// ── Channel Modal ──
function ChannelModal({ channel, onClose }) {
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
    <div className="ch-modal__backdrop" onClick={handleBackdropClick}>
      <div className="ch-modal__box" role="dialog" aria-modal="true">
        <div className="ch-modal__header">
          <div className="ch-modal__header-left">
            <span className="ch-modal__icon">{channel.icon}</span>
            <h3 className="ch-modal__title">{channel.label}</h3>
          </div>
          <button
            className="ch-modal__close"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <p className="ch-modal__desc">{channel.desc}</p>

        {channel.note && <div className="ch-modal__note">{channel.note}</div>}

        {channel.partners.length > 0 ? (
          <div className="ch-modal__grid">
            {channel.partners.map((p) => (
              <div key={p.name} className="ch-modal__logo-card">
                <div className="ch-modal__logo-wrap">
                  <img src={p.img} alt={p.name} />
                </div>
                <span className="ch-modal__logo-name">{p.name}</span>
              </div>
            ))}
          </div>
        ) : (
          !channel.note && <p className="ch-modal__empty">Logos coming soon.</p>
        )}
      </div>
    </div>
  );
}

// ── Category Modal ──
// Same interaction pattern as ChannelModal above, but lists every brand
// inside the selected category. Clicking a logo redirects to that brand's
// detail page on /brands.
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
                <span className="cat-modal__logo-name">{brand.name}</span>
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

export default function Home() {
  const navigate = useNavigate();
  const [activeChannel, setActiveChannel] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.05 },
    );

    document.querySelectorAll(".reveal-left, .reveal-right").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Redirect to the matching brand's detail page on /brands
  const handleSelectCategoryBrand = (brand) => {
    setActiveCategory(null);
    navigate(`/brands?brand=${brand.id}`);
  };

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="hero reveal-left"
        style={{
          "--hero-bg": `url(${heroBackground})`,
          backgroundImage: `linear-gradient(rgba(15,15,36,0.35), rgba(15,15,36,0.35)), url(${heroBackground})`,
        }}
      >
        <div className="hero__bg-grid" />
        <div className="hero__accent" />
        <div className="container">
          <div className="hero__inner">
            <div className="hero__content">
              {/* Presence Flags */}
              <div className="hero__presence">
                <span className="hero__tag">🇦🇪 United Arab Emirates</span>
                <span className="hero__tag">🇶🇦 Qatar</span>
                <span className="hero__tag">
                  Dubai-based · GCC Distribution
                </span>
              </div>

              <h1 className="hero__title">
                A Complete
                <span className="hero__title-accent">
                  {" "}
                  Accessory Solutions
                </span>{" "}
                Partner for Modern Retail
              </h1>

              <p className="hero__description">
                We distribute world-renowned electronics & accessory brands,
                helping retailers grow with reliable supply, merchandising
                support, and fast fulfillment across the Gulf region.
              </p>

              <div className="hero__actions">
                <Link to="/brands" className="btn btn-secondary">
                  Explore Our Brands →
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Become a Retail Partner
                </Link>
              </div>

              {/* Stats bar */}
              <div className="hero__stats">
                {STATS.map((s) => (
                  <div key={s.label} className="hero__stat">
                    <div className="hero__stat-num">
                      {s.num}
                      {s.suffix}
                    </div>
                    <div className="hero__stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ticker ── */}
      <div className="ticker reveal-right">
        <div className="ticker__track">
          {TICKER_ITEMS.map((item, i) => (
            <span key={i} className="ticker__item">
              {item}
              <span className="ticker__dot" />
            </span>
          ))}
        </div>
      </div>

      {/* ── What We Do ── */}
      <section className="section reveal-left">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">What We Do</span>
            <h2 className="section-title">
              UAE & Qatar · Electronics Distribution
            </h2>
            <p className="section-subtitle">
              We distribute electronics and accessories to Power Retailers and
              the IR Market across the UAE and Qatar. Our strong supply chain
              ensures access to the latest and most relevant products.
            </p>
          </div>
          <div className="what-we-do__grid">
            {WHAT_WE_DO.map((item) => (
              <div key={item.title} className="what-we-do__card">
                <div className="what-we-do__icon">{item.icon}</div>
                <h3 className="what-we-do__card-title">{item.title}</h3>
                <p className="what-we-do__card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="stats-section reveal-right">
        <div className="container">
          <div className="stats-section__grid">
            {STATS.map((s) => (
              <div key={s.label} className="stats-section__item">
                <div className="stats-section__num">
                  {s.num}
                  <span className="stats-section__suffix">{s.suffix}</span>
                </div>
                <div className="stats-section__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="section section--gray reveal-left">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Product Portfolio</span>
            <h2 className="section-title">Our Categories</h2>
            <p className="section-subtitle">
              A focused portfolio of electronics and accessories distributed to
              power retailers and IR markets across UAE & Qatar.
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

      {/* ── Brands Marquee ── */}
      <section className="section reveal-right">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Our Portfolio</span>
            <h2 className="section-title">Our Brands</h2>
          </div>
        </div>
        <div className="brands__marquee-wrap">
          <div className="brands__marquee-track">
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <div
                key={i}
                className={`brands__logo-item ${brand.className || ""}`}
              >
                <img src={brand.img} alt={brand.name} />
              </div>
            ))}
          </div>
        </div>
        <div
          className="container"
          style={{ marginTop: "32px", textAlign: "center" }}
        >
          <Link to="/brands" className="btn btn-outline">
            View All Brands →
          </Link>
        </div>
      </section>

      {/* ── Channels of Distribution ── */}
      <section className="section section--gray reveal-left">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Market Presence</span>
            <h2 className="section-title">Channels of Distribution</h2>
            <p className="section-subtitle">
              Working with leading retailers across every channel — from power
              retail to e-commerce and travel retail — enabling strong brand
              visibility and nationwide distribution.
            </p>
          </div>
          <div className="channels__grid">
            {CHANNELS.map((ch) => (
              <button
                key={ch.id}
                className="channel-card"
                onClick={() => setActiveChannel(ch)}
                aria-haspopup="dialog"
              >
                <div className="channel-card__icon">{ch.icon}</div>
                <div className="channel-card__label">{ch.label}</div>
                <div className="channel-card__desc">{ch.desc}</div>
                <div className="channel-card__cta">
                  View Partners <span className="channel-card__arrow">→</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Van Sales ── */}
      <section className="van-sales reveal-right">
        <div className="container">
          <div className="van-sales__grid">
            <div className="van-sales__content">
              <span className="section-eyebrow section-eyebrow--light">
                IR Sales Network
              </span>
              <h2 className="section-title section-title--light">
                Van Sales Coverage Across the UAE
              </h2>
              <p className="section-subtitle section-subtitle--light">
                Our IR market distribution model enables fast-moving coverage to
                thousands of small retailers through a structured van sales
                network. We cover the entire UAE with dedicated routes, ensuring
                strong market penetration and reliable last-mile delivery.
              </p>
              <div className="van-sales__metrics">
                {[
                  { num: "7", label: "Emirates · Nationwide Presence" },
                  { num: "2800+", label: "Active Retail Network" },
                  { num: "Daily Routes", label: "Van Sales Coverage" },
                  {
                    num: "On-Time Fulfillment",
                    label: "Reliable Supply Chain",
                  },
                ].map((m) => (
                  <div key={m.label} className="van-sales__metric">
                    <div className="van-sales__metric-num">{m.num}</div>
                    <div className="van-sales__metric-label">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="van-sales__canvas-wrap">
              <UAENetworkMap />
            </div>
          </div>
        </div>
      </section>

      {/* ── Journey ── */}
      <section className="section reveal-left">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Our Journey</span>
            <h2 className="section-title">
              Building Regional Presence Since 2016
            </h2>
          </div>

          <div className="journey__timeline">
            {JOURNEY.map((item) => (
              <div key={item.year} className="journey__item">
                <div className="journey__year">{item.year}</div>

                <div className="journey__center">
                  <span className="journey__line" />
                  <span className="journey__dot" />
                </div>

                <div className="journey__milestone">{item.milestone}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Channel Modal ── */}
      {activeChannel && (
        <ChannelModal
          channel={activeChannel}
          onClose={() => setActiveChannel(null)}
        />
      )}

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
