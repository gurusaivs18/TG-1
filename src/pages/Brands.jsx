import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import "../css/Brands.css";
import "../css/Home.css";
import brandsHero from "../assets/sp1.jpg";

const BRANDS = [
  {
    id: "marshall",
    name: "Marshall",
    logo: "/images/brands/marshall.png",
    category: "Audio",
    tagline:
      "Iconic rock & roll sound. Premium headphones, speakers, and earphones.",
    desc: "Marshall is a global audio brand known for its legendary rock heritage. We distribute the full Marshall portfolio across UAE & Qatar — from portable Bluetooth speakers to premium headphones.",
    products: ["Bluetooth Speakers", "Headphones", "Earphones", "Amplifiers"],
    gallery: [
      "/images/brands/lifestyle_marshall.png",
      "/images/brands/marshall.png",
    ],
  },
  {
    id: "benq",
    name: "BenQ",
    logo: "/images/brands/benq.png",
    category: "Video & Monitors",
    tagline:
      "Bringing Enjoyment Quality to Life — displays, projectors, and monitors.",
    desc: "BenQ delivers industry-leading projectors and professional-grade monitors for business, gaming, and education. We distribute BenQ across the GCC with full retail and B2B support.",
    products: [
      "Projectors",
      "Gaming Monitors",
      "Business Displays",
      "4K Monitors",
    ],
    gallery: [],
  },
  {
    id: "dicota",
    name: "Dicota",
    logo: "/images/brands/dicota.png",
    category: "Bags & Cases",
    tagline: "Professional laptop bags, backpacks, and travel accessories.",
    desc: "Dicota is a European brand specializing in high-quality laptop bags, backpacks, and accessories designed for professionals and business travelers.",
    products: ["Laptop Bags", "Backpacks", "Sleeves", "Travel Accessories"],
    gallery: [],
  },
  {
    id: "soundpeats",
    name: "SoundPEATS",
    logo: "/images/brands/soundpeats.png",
    category: "Audio",
    tagline: "True wireless earbuds and audio accessories for everyday life.",
    desc: "SoundPEATS delivers high-quality True Wireless Stereo (TWS) earbuds and audio products at competitive price points, ideal for the mid-range retail segment.",
    products: ["TWS Earbuds", "Neckband Earphones", "Sports Earphones"],
    gallery: [],
  },
  {
    id: "acefast",
    name: "AceFast",
    logo: "/images/brands/acefast.png",
    category: "Accessories",
    tagline: "Smart charging, cables, and connectivity accessories.",
    desc: "AceFast is a rising tech accessories brand with a strong portfolio of fast chargers, USB-C cables, audio adapters, and lifestyle accessories.",
    products: [
      "Fast Chargers",
      "USB-C Cables",
      "Audio Adapters",
      "Power Banks",
    ],
    gallery: [],
  },
  {
    id: "alogic",
    name: "Alogic",
    logo: "/images/brands/alogic.png",
    category: "Connectivity",
    tagline: "Premium connectivity solutions for modern workspaces.",
    desc: "Alogic specializes in premium USB-C hubs, docking stations, HDMI cables, and workspace connectivity products for professionals and businesses.",
    products: ["USB-C Hubs", "Docking Stations", "Cables", "Adapters"],
    gallery: [],
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
      <PageHero
        title="Our Brands"
        subtitle="Premium global brands"
        backgroundImage={brandsHero}
      />

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
                    className="brand-card__logo"
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
