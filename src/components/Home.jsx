import { Link } from "react-router-dom";
import "../css/Home.css";
import heroBackground from "../assets/tg11.png";
import UAENetworkMap from "../components/UAENetworkMap";
import { useEffect } from "react";

// brands
import marshall from "../assets/marshall-logo-png_seeklogo-88775.png";
import benq from "../assets/benq rework2.jpeg";
import dicota from "../assets/dicota-logo-png_seeklogo-322545.png";
import soundpeats from "../assets/soundpeats.jpeg";
// import acefast from "../assets/brands/acefast.png";
import alogic from "../assets/alogic.jpeg";

// Brand data
const BRANDS = [
  { name: "Marshall", img: marshall, className: "logo--marshall" },
  { name: "BenQ", img: benq, className: "logo--benq" },
  { name: "Dicota", img: dicota, className: "logo--dicota" },
  { name: "SoundPEATS", img: soundpeats, className: "logo--soundpeats" },
  { name: "Alogic", img: alogic, className: "logo--alogic" },
];

const PARTNERS = [
  {
    name: "Sharaf DG",
    img: "/images/partners/sharafdg.png",
    desc: "One of UAE's largest electronics retailers with strong omni-channel presence.",
  },
  {
    name: "Jumbo Electronics",
    img: "/images/partners/jumbo.png",
    desc: "Premium electronics retailer with a strong footprint across the GCC.",
  },
  {
    name: "Lulu Hypermarket",
    img: "/images/partners/lulu.png",
    desc: "Regional retail giant serving millions of customers across Middle East.",
  },
  {
    name: "Virgin Megastore",
    img: "/images/partners/virgin.png",
    desc: "Lifestyle electronics and entertainment brand with flagship stores.",
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

const CATEGORIES = [
  {
    name: "Audio",
    brand: "Marshall & AceFast",
    sub: "Speakers · Earbuds · Accessories",
    path: "/brands",
    color: "#1A1A2E",
  },
  {
    name: "Video",
    brand: "BenQ",
    sub: "Projectors · Displays",
    path: "/brands",
    color: "#0d1b2a",
  },
  {
    name: "Monitors",
    brand: "BenQ",
    sub: "Business · Gaming",
    path: "/brands",
    color: "#1a0a12",
  },
  {
    name: "Bags",
    brand: "Dicota",
    sub: "Laptop · Travel · Office",
    path: "/brands",
    color: "#0a1a10",
  },
];

const JOURNEY = [
  { year: "2016", milestone: "Founded in UAE" },
  { year: "2018", milestone: "Retail Network Expansion" },
  { year: "2020", milestone: "Van Sales Model" },
  { year: "2022", milestone: "Qatar Operations" },
  { year: "2024", milestone: "B2B Platform Launch" },
  { year: "2026", milestone: "Regional Presence" },
];

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.2 },
    );

    document.querySelectorAll(".reveal-left, .reveal-right").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="hero reveal-left"
        style={{
          // Pass image URL as CSS variable so media queries can override the gradient overlay
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
            {CATEGORIES.map((cat) => (
              <Link
                to={cat.path}
                key={cat.name}
                className="categories__card"
                style={{ background: cat.color }}
              >
                <div className="categories__card-bg" />
                <div className="categories__card-content">
                  <div className="categories__brand-tag">{cat.brand}</div>
                  <div className="categories__card-name">{cat.name}</div>
                  <div className="categories__card-sub">{cat.sub}</div>
                  <div className="categories__card-link">Explore →</div>
                </div>
              </Link>
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

      {/* ── Retail Partners ── */}
      <section className="section section--gray reveal-left">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Market Presence</span>
            <h2 className="section-title">Our Retail Partners</h2>
            <p className="section-subtitle">
              Working with leading power retailers across UAE & Qatar, enabling
              strong brand visibility and nationwide distribution.
            </p>
          </div>
          <div className="partners__grid">
            {PARTNERS.map((p) => (
              <div key={p.name} className="partner-card">
                <div className="partner-card__logo">
                  <img src={p.img} alt={p.name} />
                </div>
                <div className="partner-card__name">{p.name}</div>
                <div className="partner-card__desc">{p.desc}</div>
              </div>
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
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            {JOURNEY.map((item) => (
              <div
                key={item.year}
                style={{
                  display: "flex",
                  gap: 24,
                  alignItems: "flex-start",
                  marginBottom: 28,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    minWidth: 60,
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    color: "var(--color-primary)",
                    fontSize: "var(--text-sm)",
                    paddingTop: 3,
                  }}
                >
                  {item.year}
                </div>
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "var(--color-primary)",
                    flexShrink: 0,
                    marginTop: 5,
                    position: "relative",
                    zIndex: 1,
                  }}
                />
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: "var(--text-base)",
                    paddingTop: 2,
                  }}
                >
                  {item.milestone}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      {/* <section className="cta-banner reveal-right">
        <div className="container">
          <div className="cta-banner__inner">
            <h2 className="cta-banner__title">
              Ready to Grow Your Retail Business?
            </h2>
            <p className="cta-banner__sub">
              Partner with Target One for reliable supply, strong brand support,
              and GCC-wide reach.
            </p>
            <div className="cta-banner__actions">
              <Link to="/contact" className="btn btn-dark">
                Contact Us Today
              </Link>
              <Link to="/brands" className="btn btn-secondary">
                Browse Our Brands
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
