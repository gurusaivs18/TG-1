import { Link } from "react-router-dom";
// import PageHero from "../components/PageHero";
import "../css/About.css";
import "../css/Home.css";
// import aboutHero from "../assets/sp2.jpg";
const JOURNEY = [
  {
    year: "2016",
    title: "Founded in UAE",
    desc: "Established in Dubai with a focused portfolio of electronics accessories, serving the UAE market with a lean and agile supply chain.",
  },
  {
    year: "2018",
    title: "Retail Network Expansion",
    desc: "Onboarded key power retailers including Sharaf DG, Jumbo, and Lulu — growing brand presence across 7 emirates.",
  },
  {
    year: "2020",
    title: "Van Sales Model Launch",
    desc: "Launched the IR (independent retailer) van sales division, covering thousands of small shops with daily route-based replenishment.",
  },
  {
    year: "2022",
    title: "Qatar Operations",
    desc: "Extended distribution operations to Qatar, enabling GCC-wide reach and cross-border brand coverage.",
  },
  {
    year: "2024",
    title: "B2B Platform Launch",
    desc: "Launched a digital B2B ordering platform for retailers, enabling real-time inventory visibility and faster order processing.",
  },
  {
    year: "2026",
    title: "Regional Presence",
    desc: "Expanding into new GCC markets, building a scalable technology-driven distribution infrastructure for the future.",
  },
];

const SERVICES = [
  {
    icon: "🏪",
    title: "Power Retail Distribution",
    desc: "Supplying major electronics retailers with premium brand portfolios and logistics support.",
  },
  {
    icon: "🚐",
    title: "Van Sales (IR Coverage)",
    desc: "Daily van routes reaching independent retailers across all 7 UAE emirates.",
  },
  {
    icon: "🔗",
    title: "Supply Chain & Sourcing",
    desc: "Strategic global sourcing that delivers the right products at the right time.",
  },
  {
    icon: "📱",
    title: "Brand Representation",
    desc: "Full brand management including in-store merchandising, POS support, and sell-through programs.",
  },
  {
    icon: "📊",
    title: "B2B Digital Platform",
    desc: "Real-time ordering, inventory visibility, and retailer-facing tools for smarter operations.",
  },
  {
    icon: "🤝",
    title: "Retailer Partnerships",
    desc: "Long-term, value-based partnerships that help retailers grow their electronics categories.",
  },
];

export default function About() {
  return (
    <>
      {/* <PageHero
        eyebrow="About Us"
        title="About Target One"
        subtitle="Leading electronics distributor"
        backgroundImage={aboutHero}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            marginTop: 24,
          }}
        >
          <span className="hero__tag">🇦🇪 United Arab Emirates</span>
          <span className="hero__tag">🇶🇦 Qatar</span>
        </div>
      </PageHero> */}

      {/* ── Vision & Mission ── */}
      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Our Purpose</span>
            <h2 className="section-title">Enabling Intelligent Distribution</h2>
          </div>
          <div className="vm-grid">
            <div className="vm-card vm-card--vision">
              <div className="vm-card__icon">🎯</div>
              <div className="vm-card__label">Vision</div>
              <div className="vm-card__title">Our Vision</div>
              <p className="vm-card__text">
                To become the most trusted and technology-driven electronics
                accessories distribution partner across the GCC and emerging
                markets — building bridges between global brands and regional
                retail excellence.
              </p>
            </div>
            <div className="vm-card vm-card--mission">
              <div className="vm-card__icon">🚀</div>
              <div className="vm-card__label">Mission</div>
              <div className="vm-card__title">Our Mission</div>
              <p className="vm-card__text">
                To connect global brands with regional retailers through
                intelligent distribution, real-time inventory visibility, and
                scalable supply chain solutions that drive sustainable growth
                for every partner we work with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="section section--gray">
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

      {/* ── Our Journey ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Journey</span>
            <h2 className="section-title">
              Building Regional Presence Since 2016
            </h2>
            <p className="section-subtitle">
              From a single-market startup to a multi-country distribution
              partner — here's how we've grown.
            </p>
          </div>
          <div className="journey-alt">
            {JOURNEY.map((item) => (
              <div key={item.year} className="journey-alt__item">
                <div className="journey-alt__year">{item.year}</div>
                <div className="journey-alt__title">{item.title}</div>
                <p className="journey-alt__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner__inner">
            <h2 className="cta-banner__title">
              Let's Build Something Together
            </h2>
            <p className="cta-banner__sub">
              Whether you're a brand looking for distribution or a retailer
              seeking supply — we'd love to connect.
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
    </>
  );
}
