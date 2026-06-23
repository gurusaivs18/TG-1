import { useState } from "react";
import { Link } from "react-router-dom";
// import PageHero from "../components/PageHero";
import "../css/Brands.css";
// import brandsHero from "../assets/sp1.jpg";
import marshall from "../assets/marshall-logo-png_seeklogo-88775.png";
import benq from "../assets/benq rework2.jpeg";
import dicota from "../assets/dicota-logo-png_seeklogo-322545.png";
import soundpeats from "../assets/soundpeats.jpeg";
// import acefast from "../assets/acefast.png";
import alogic from "../assets/alogic.jpeg";

const BRANDS = [
  {
    id: "marshall",
    name: "Marshall",
    logo: marshall,
    category: "Audio",
    tagline: "Iconic rock & roll sound.",
    desc: "Marshall is a global audio brand...",
    products: ["Bluetooth Speakers", "Headphones", "Earphones", "Amplifiers"],
  },
  {
    id: "benq",
    name: "BenQ",
    logo: benq,
    category: "Video & Monitors",
    tagline: "Displays and projectors.",
    desc: "BenQ delivers industry-leading projectors...",
    products: ["Projectors", "Gaming Monitors", "Business Displays"],
  },
  {
    id: "dicota",
    name: "Dicota",
    logo: dicota,
    category: "Bags & Cases",
    tagline: "Laptop bags & backpacks.",
    desc: "Dicota is a European brand...",
    products: ["Laptop Bags", "Backpacks", "Sleeves"],
  },
  {
    id: "soundpeats",
    name: "SoundPEATS",
    logo: soundpeats,
    category: "Audio",
    tagline: "True wireless earbuds.",
    desc: "SoundPEATS delivers high-quality earbuds...",
    products: ["TWS Earbuds", "Neckband Earphones"],
  },
  // {
  //   id: "acefast",
  //   name: "AceFast",
  //   logo: acefast,
  //   category: "Accessories",
  //   tagline: "Smart charging accessories.",
  //   desc: "AceFast is a rising tech accessories brand...",
  //   products: ["Fast Chargers", "USB-C Cables"],
  // },
  {
    id: "alogic",
    name: "Alogic",
    logo: alogic,
    category: "Connectivity",
    tagline: "Premium connectivity solutions.",
    desc: "Alogic specializes in USB-C hubs...",
    products: ["USB-C Hubs", "Docking Stations"],
  },
];

const CATEGORIES_CONFIG = [
  {
    name: "Audio",
    icon: "🎵",
    desc: "Speakers, earphones, headphones and audio accessories",
    brands: ["Marshall", "SoundPEATS", "AceFast"],
  },
  {
    name: "Video & Monitors",
    icon: "🖥️",
    desc: "Projectors, displays, and professional monitors",
    brands: ["BenQ"],
  },
  {
    name: "Bags & Cases",
    icon: "💼",
    desc: "Laptop bags, backpacks, and travel accessories",
    brands: ["Dicota"],
  },
  {
    name: "Connectivity",
    icon: "🔌",
    desc: "Hubs, docks, cables and connectivity accessories",
    brands: ["Alogic", "AceFast"],
  },
];

const FILTERS = [
  "All",
  "Audio",
  "Video & Monitors",
  "Bags & Cases",
  "Connectivity",
  "Accessories",
];

export default function Brands() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState(null);

  const filtered =
    activeFilter === "All"
      ? BRANDS
      : BRANDS.filter(
          (b) =>
            b.category === activeFilter ||
            b.products.some((p) =>
              p.toLowerCase().includes(activeFilter.toLowerCase()),
            ),
        );

  return (
    <>
      {/* <PageHero
        title="Our Brands"
        subtitle="Premium global brands"
        backgroundImage={brandsHero}
      /> */}

      {/* ── Brand Listing ── */}
      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">All Brands</span>
            <h2 className="section-title">Browse Our Portfolio</h2>
          </div>

          {/* Filter Bar */}
          <div className="brands-page__filter-bar">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`filter-btn ${activeFilter === f ? "filter-btn--active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Brand Cards */}
          <div className="brands-page__grid">
            {filtered.map((brand) => (
              <div
                key={brand.id}
                className="brand-card"
                onClick={() => setSelectedBrand(brand)}
              >
                <div className="brand-card__image-wrap">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className={`brand-card__logo brand-card__logo--${brand.id}`}
                  />
                </div>
                <div className="brand-card__body">
                  <div className="brand-card__category">{brand.category}</div>
                  <h3 className="brand-card__name">{brand.name}</h3>
                  <p className="brand-card__desc">{brand.tagline}</p>
                  <div className="brand-card__tags">
                    {brand.products.slice(0, 3).map((p) => (
                      <span key={p} className="brand-tag">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category Browse Sections ── */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Browse by Category</span>
            <h2 className="section-title">Products by Category</h2>
            <p className="section-subtitle">
              Scroll through our portfolio organised by product category — each
              with curated brand and item selections.
            </p>
          </div>

          {CATEGORIES_CONFIG.map((cat) => {
            const catBrands = BRANDS.filter((b) => cat.brands.includes(b.name));
            return (
              <div key={cat.name} className="brands-category-section">
                <div className="brands-category__header">
                  <div>
                    <span className="section-eyebrow">
                      {cat.icon} {cat.name}
                    </span>
                    <h3 className="brands-category__title">{cat.name}</h3>
                    <p
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "var(--text-sm)",
                      }}
                    >
                      {cat.desc}
                    </p>
                  </div>
                </div>
                <div className="brands-category__items">
                  {catBrands.map((b) => (
                    <div
                      key={b.id}
                      className="brand-item-mini"
                      onClick={() => setSelectedBrand(b)}
                    >
                      <div className="brand-item-mini__logo">
                        <img src={b.logo} alt={b.name} />
                      </div>
                      <div className="brand-item-mini__name">{b.name}</div>
                      <div className="brand-item-mini__sub">
                        {b.products[0]}
                      </div>
                    </div>
                  ))}
                  {/* Menu-style items under each brand */}
                  {catBrands
                    .flatMap((b) =>
                      b.products.map((p) => (
                        <div key={`${b.id}-${p}`} className="brand-item-mini">
                          <div
                            className="brand-item-mini__logo"
                            style={{ fontSize: 20 }}
                          >
                            📦
                          </div>
                          <div
                            className="brand-item-mini__name"
                            style={{ fontSize: "var(--text-xs)" }}
                          >
                            {p}
                          </div>
                          <div className="brand-item-mini__sub">{b.name}</div>
                        </div>
                      )),
                    )
                    .slice(0, 4)}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Brand Modal ── */}
      {selectedBrand && (
        <div className="brand-modal">
          <div
            className="brand-modal__overlay"
            onClick={() => setSelectedBrand(null)}
          />
          <div className="brand-modal__box">
            <button
              className="brand-modal__close"
              onClick={() => setSelectedBrand(null)}
            >
              ✕
            </button>
            <div className="brand-modal__header">
              <div className="brand-modal__logo-panel">
                <img
                  src={selectedBrand.logo}
                  alt={selectedBrand.name}
                  className="brand-modal__logo"
                />
              </div>
              <div className="brand-modal__info">
                <div className="brand-modal__category">
                  {selectedBrand.category}
                </div>
                <h2 className="brand-modal__name">{selectedBrand.name}</h2>
                <p className="brand-modal__tagline">{selectedBrand.tagline}</p>
              </div>
            </div>
            <div className="brand-modal__content">
              <p
                style={{
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: 24,
                }}
              >
                {selectedBrand.desc}
              </p>
              {selectedBrand.gallery.length > 0 && (
                <div className="brand-modal__gallery">
                  {selectedBrand.gallery.map((img, i) => (
                    <img key={i} src={img} alt={selectedBrand.name} />
                  ))}
                </div>
              )}
              <div className="brand-modal__products-title">Product Lines</div>
              <div className="brand-modal__products">
                {selectedBrand.products.map((p) => (
                  <span key={p} className="brand-tag">
                    {p}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: 28 }}>
                <Link
                  to="/contact"
                  className="btn btn-primary"
                  onClick={() => setSelectedBrand(null)}
                >
                  Enquire About {selectedBrand.name}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
