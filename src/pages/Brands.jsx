// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "../css/Brands.css";

// // ── Available logo imports (add more as assets arrive) ──
// import marshall from "../assets/marshall-logo-png_seeklogo-88775.png";
// import benq from "../assets/benq rework2.jpeg";
// import dicota from "../assets/dicota-logo-png_seeklogo-322545.png";
// import soundpeats from "../assets/soundpeats.jpeg";
// import alogic from "../assets/alogic.jpeg";

// // ─────────────────────────────────────────────────────────────────────────────
// // BRAND DATA  (sourced from company profile PDF, pages 6–19)
// // logo: null  →  logoText is rendered as styled text until asset is available
// // ─────────────────────────────────────────────────────────────────────────────
// const BRANDS = [
//   // ── AUDIO ─────────────────────────────────────────────────────────────────
//   {
//     id: "marshall",
//     name: "Marshall",
//     logo: marshall,
//     logoClass: "logo--marshall",
//     category: "Audio",
//     tagline: "Legendary Sound. Iconic Design.",
//     description:
//       "Marshall is a British audio icon with more than six decades of heritage rooted in rock & roll. From the legendary amplifiers that shaped music history to today's range of premium wireless speakers and headphones, Marshall brings unmistakable style and powerful acoustic performance to every product. As the authorised distributor across UAE and Qatar, Target One brings the full Marshall portfolio to power retailers and major chains throughout the Gulf region.",
//     subCategories: [
//       { name: "Home Speakers", icon: "🔊" },
//       { name: "TV Sound", icon: "📺" },
//       { name: "Portable Speakers", icon: "🎵" },
//       { name: "Party Speakers", icon: "🎉" },
//       { name: "Over-Ear Headphones", icon: "🎧" },
//       { name: "Earbuds", icon: "🎶" },
//       { name: "On-Ear Headphones", icon: "🎧" },
//     ],
//     highlights: [
//       "60+ Years of Audio Heritage",
//       "Rock & Roll DNA in Every Product",
//       "Premium Wireless Speaker Range",
//     ],
//     accentColor: "#1a1a1a",
//   },
//   {
//     id: "shokz",
//     name: "Shokz",
//     logo: null,
//     logoText: "SHOKZ",
//     category: "Audio",
//     tagline: "Open-Ear Design. Music On, Still Connected.",
//     description:
//       "Shokz pioneered the open-ear audio category with patented bone conduction technology, allowing listeners to enjoy clear audio while remaining fully aware of their surroundings. Designed for athletes, commuters, and professionals — Shokz delivers a truly unique listening experience that no traditional earphone can replicate.",
//     subCategories: [
//       { name: "True Wireless", icon: "🎵" },
//       { name: "Sports", icon: "🏃" },
//       { name: "Communications", icon: "📞" },
//       { name: "Swimming", icon: "🏊" },
//     ],
//     highlights: [
//       "Patented Bone Conduction Technology",
//       "IP68 Waterproof — Pool Ready",
//       "Safe Open-Ear Awareness",
//     ],
//     accentColor: "#111111",
//   },
//   {
//     id: "soundpeats",
//     name: "SoundPEATS",
//     logo: soundpeats,
//     logoClass: "logo--soundpeats",
//     category: "Audio",
//     tagline: "Hi-Fi Sound. Everyday Value.",
//     description:
//       "SoundPEATS delivers high-fidelity audio experiences at accessible price points. Specialising in true wireless earbuds with audiophile-grade drivers, active noise cancellation, and the latest Bluetooth connectivity — SoundPEATS makes premium listening available to everyone without compromise.",
//     subCategories: [
//       { name: "True Wireless", icon: "🎵" },
//       { name: "Audiophile", icon: "🎼" },
//       { name: "Noise Cancelling", icon: "🔇" },
//     ],
//     highlights: [
//       "Hi-Fi Audiophile Drivers",
//       "Active Noise Cancellation",
//       "IPX7 Waterproof Technology",
//     ],
//     accentColor: "#1565c0",
//   },
//   {
//     id: "ikarao",
//     name: "Ikarao",
//     logo: null,
//     logoText: "Ikarao®",
//     category: "Audio",
//     tagline: "Unleash the Singer in You.",
//     description:
//       "Ikarao is a globally recognised smart karaoke brand that blends entertainment technology with premium audio engineering. From the award-winning Break X1 — the #1 karaoke machine with a built-in screen — to portable party speakers with built-in batteries, Ikarao transforms any space into a stage. Ikarao's Break X1 won Best Product in the Entertainment category at Channel Summit META 2025.",
//     subCategories: [
//       { name: "Smart Karaoke Machines", icon: "🎤" },
//       { name: "Portable Speakers", icon: "🔊" },
//       { name: "Party Speakers", icon: "🎉" },
//     ],
//     highlights: [
//       "🏆 Best Product — Channel Summit META 2025",
//       "#1 Karaoke Machine with Built-in Screen",
//       "Portable with Built-in Battery",
//     ],
//     accentColor: "#6a1b9a",
//   },

//   // ── WEARABLE ──────────────────────────────────────────────────────────────
//   {
//     id: "titan-smart",
//     name: "Titan Smart",
//     logo: null,
//     logoText: "TITAN SMART",
//     category: "Wearable",
//     tagline: "The Future of Smartwatches.",
//     description:
//       "Titan Smart, from India's iconic Titan Company, brings next-generation smartwatch technology to the Middle East. Featuring stunning AMOLED displays up to 3.53cm, AI-powered personalization, built-in GPS with Strava integration, and premium stainless steel construction — Titan Smart unites elegance with leading-edge wearable technology.",
//     subCategories: [
//       { name: "AMOLED Smartwatches", icon: "⌚" },
//       { name: "Fitness Trackers", icon: "💪" },
//       { name: "Premium Design Series", icon: "✨" },
//     ],
//     highlights: [
//       "3.53cm AMOLED · 600 Nits Brightness",
//       "AI-Powered Personalization",
//       "Built-in GPS with Strava Support",
//     ],
//     accentColor: "#1a237e",
//   },
//   {
//     id: "fastrack-smart",
//     name: "Fastrack Smart",
//     logo: null,
//     logoText: "fastrack SMART",
//     category: "Wearable",
//     tagline: "Lag Free. Next-Gen Smart Living.",
//     description:
//       "Fastrack Smart is a bold, youth-driven smartwatch brand under the Titan Group umbrella. Built on a next-generation dual-core processor with a 60Hz AMOLED display, Hyper Personal UI, and a premium metal design — Fastrack Smart speaks the language of the next generation with equal parts style and substance.",
//     subCategories: [
//       { name: "AMOLED Smartwatches", icon: "⌚" },
//       { name: "Sports Series", icon: "🏃" },
//       { name: "Fashion Series", icon: "✨" },
//     ],
//     highlights: [
//       "Dual-Core Next-Gen Processor",
//       "60Hz AMOLED Refresh Rate",
//       "Hyper Personal UI with 3D Menu",
//     ],
//     accentColor: "#c62828",
//   },
//   {
//     id: "iqibla",
//     name: "iQIBLA",
//     logo: null,
//     logoText: "iQIBLA",
//     category: "Wearable",
//     tagline: "Technology for Faith.",
//     description:
//       "iQIBLA is the world's first Islamic Smart Zikr Ring — a revolutionary wearable that seamlessly fuses faith and technology. Designed for Muslims worldwide, it tracks Tasbeeh (Zikr), provides Qibla direction and prayer times, and connects to a dedicated companion app for a richer spiritual experience. Waterproof and available in stunning metallic designs.",
//     subCategories: [
//       { name: "Smart Zikr Ring", icon: "💍" },
//       { name: "Islamic Wearables", icon: "🕌" },
//       { name: "Faith-Tech Accessories", icon: "📿" },
//     ],
//     highlights: [
//       "World's First Islamic Smart Ring",
//       "Zikr & Tasbeeh Digital Tracking",
//       "Qibla Direction & Prayer Time Integration",
//     ],
//     accentColor: "#b8860b",
//   },

//   // ── ACCESSORIES ───────────────────────────────────────────────────────────
//   {
//     id: "dicota",
//     name: "Dicota",
//     logo: dicota,
//     logoClass: "logo--dicota",
//     category: "Accessories",
//     tagline: "Make Your Daily Commute a Breeze.",
//     description:
//       "Dicota is a leading European brand specialising in premium laptop bags, backpacks, and workspace accessories. Built on a foundation of functional design, durable materials, and ergonomic precision — Dicota keeps professionals organised and their devices protected across every journey.",
//     subCategories: [
//       { name: "Backpacks", icon: "🎒" },
//       { name: "Laptop Bags & Sleeves", icon: "💼" },
//       { name: "Travel Accessories", icon: "✈️" },
//     ],
//     highlights: [
//       "European Engineered Design",
//       'Protection Up to 16" Laptops',
//       "Lightweight & Durable Materials",
//     ],
//     accentColor: "#e65100",
//   },
//   {
//     id: "ugreen",
//     name: "Ugreen",
//     logo: null,
//     logoText: "UGREEN",
//     category: "Accessories",
//     tagline: "Connect. Power. Energize Your Devices.",
//     description:
//       "Ugreen is a global technology accessories brand trusted by millions for premium charging solutions, cables, hubs, and power banks. With GaN charging technology, a portfolio exceeding 1,000 SKUs, and consistent engineering quality — Ugreen powers the fully connected lifestyle with reliability and speed.",
//     subCategories: [
//       { name: "GaN Fast Chargers", icon: "⚡" },
//       { name: "Cables & Hubs", icon: "🔌" },
//       { name: "Power Banks", icon: "🔋" },
//       { name: "Mobile Accessories", icon: "📱" },
//     ],
//     highlights: [
//       "GaN Charging Technology",
//       "1,000+ Product SKUs",
//       "Ugreen Connect Award 2024",
//     ],
//     accentColor: "#2e7d32",
//   },
//   {
//     id: "romoss",
//     name: "Romoss",
//     logo: null,
//     logoText: "ROMOSS",
//     category: "Accessories",
//     tagline: "Charge Fast. Last Long.",
//     description:
//       "Romoss is a specialist power bank and portable charging accessories brand, delivering reliable high-capacity power in slim, travel-ready form factors. With a focus on fast-charge technology and premium build quality, Romoss ensures your devices stay powered through even the longest days.",
//     subCategories: [
//       { name: "Power Banks", icon: "🔋" },
//       { name: "Fast Chargers", icon: "⚡" },
//       { name: "Charging Cables", icon: "🔌" },
//     ],
//     highlights: [
//       "High-Capacity Power Banks",
//       "Fast Charge & PD Technology",
//       "Slim & Travel-Friendly Design",
//     ],
//     accentColor: "#00695c",
//   },

//   // ── PROJECTORS & NETWORKING ───────────────────────────────────────────────
//   {
//     id: "yaben",
//     name: "Yaben",
//     logo: null,
//     logoText: "Yaben",
//     category: "Projectors & Networking",
//     tagline: "Entertainment Projector. Anywhere.",
//     description:
//       "Yaben is a premium entertainment projector brand redefining the home cinema experience. From ultra-compact portable projectors with built-in batteries for outdoor adventures to stunning laser projection systems for premier home theatres — Yaben delivers immersive big-screen entertainment wherever you are.",
//     subCategories: [
//       { name: "Home Cinema", icon: "🎬" },
//       { name: "Laser Projectors", icon: "💡" },
//       { name: "Premier Theater", icon: "🎭" },
//       { name: "Portable Projectors", icon: "📽️" },
//     ],
//     highlights: [
//       "Laser Projection Technology",
//       "Built-in Battery for Outdoor Use",
//       "Smart OS with App Integration",
//     ],
//     accentColor: "#e65c00",
//   },
//   {
//     id: "tp-link",
//     name: "TP-Link & Tapo",
//     logo: null,
//     logoText: "tp-link | tapo",
//     category: "Projectors & Networking",
//     tagline: "Reliable Networking. Smart Home Simplified.",
//     description:
//       "TP-Link is the world's #1 provider of Wi-Fi products, delivering high-performance networking solutions trusted by homes and businesses globally. Tapo — their smart home sub-brand — extends this expertise into smart cameras, sensors, bulbs, and plugs, making a fully connected smart home effortless and affordable.",
//     subCategories: [
//       { name: "Wi-Fi Routers", icon: "📡" },
//       { name: "Mesh Networking", icon: "🔗" },
//       { name: "Smart Cameras (Tapo)", icon: "📷" },
//       { name: "Smart Home Devices", icon: "🏠" },
//     ],
//     highlights: [
//       "World's #1 Wi-Fi Brand",
//       "Tapo Smart Home Ecosystem",
//       "Mesh & Whole-Home Coverage",
//     ],
//     accentColor: "#0074c2",
//   },

//   // ── TECHNOLOGY / AI POWERED ───────────────────────────────────────────────
//   {
//     id: "ticnote",
//     name: "TicNote",
//     logo: null,
//     logoText: "TicNote",
//     category: "Technology / AI Powered",
//     tagline: "Next Generation AI Voice Recorder.",
//     description:
//       "TicNote is a cutting-edge AI-powered voice recorder that redefines how professionals capture and act on conversations. Powered by the Shadow AI Agent, TicNote delivers real-time transcription, intelligent meeting summaries, and multilingual support — purpose-built for lawyers, consultants, executives, and anyone who needs to capture every word with precision.",
//     subCategories: [
//       { name: "AI Voice Recorders", icon: "🎙️" },
//       { name: "Smart Transcription", icon: "📝" },
//       { name: "AI Meeting Assistant", icon: "🤖" },
//     ],
//     highlights: [
//       "Shadow AI Agent Technology",
//       "Real-Time Transcription",
//       "Multilingual Support",
//     ],
//     accentColor: "#37474f",
//   },
// ];

// // ── Category filter tabs ───────────────────────────────────────────────────────
// const CATEGORY_TABS = [
//   "All",
//   "Audio",
//   "Wearable",
//   "Accessories",
//   "Projectors & Networking",
//   "Technology / AI Powered",
// ];

// // ─────────────────────────────────────────────────────────────────────────────
// // HELPER — renders logo image OR styled text fallback
// // ─────────────────────────────────────────────────────────────────────────────
// function BrandLogoDisplay({ brand, context = "card" }) {
//   if (brand.logo) {
//     return (
//       <img
//         src={brand.logo}
//         alt={brand.name}
//         className={`bl-img bl-img--${context} ${brand.logoClass || ""}`}
//       />
//     );
//   }
//   return (
//     <span
//       className={`bl-text bl-text--${context}`}
//       style={{ "--accent": brand.accentColor }}
//     >
//       {brand.logoText || brand.name}
//     </span>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // BRAND CARD  (listing grid)
// // ─────────────────────────────────────────────────────────────────────────────
// function BrandCard({ brand, onSelect }) {
//   return (
//     <div
//       className="brand-card"
//       onClick={() => onSelect(brand)}
//       role="button"
//       tabIndex={0}
//       onKeyDown={(e) => e.key === "Enter" && onSelect(brand)}
//       style={{ "--brand-accent": brand.accentColor }}
//     >
//       {/* Logo area */}
//       <div className="brand-card__image-wrap">
//         <BrandLogoDisplay brand={brand} context="card" />
//       </div>

//       {/* Body */}
//       <div className="brand-card__body">
//         <div className="brand-card__category">{brand.category}</div>
//         <h3 className="brand-card__name">{brand.name}</h3>
//         <p className="brand-card__desc">{brand.tagline}</p>

//         {/* Sub-category pills */}
//         <div className="brand-card__tags">
//           {brand.subCategories.slice(0, 3).map((s) => (
//             <span key={s.name} className="brand-tag">
//               {s.icon} {s.name}
//             </span>
//           ))}
//           {brand.subCategories.length > 3 && (
//             <span className="brand-tag brand-tag--more">
//               +{brand.subCategories.length - 3} more
//             </span>
//           )}
//         </div>
//       </div>

//       {/* Hover CTA strip */}
//       <div className="brand-card__cta">
//         View Brand Details <span className="brand-card__arrow">→</span>
//       </div>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // BRAND DETAIL PAGE  (replaces listing when a brand is selected)
// // ─────────────────────────────────────────────────────────────────────────────
// function BrandDetailPage({ brand, onBack }) {
//   // Scroll to top on mount
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   return (
//     <div className="brand-detail-page">
//       {/* ── Hero band ── */}
//       <div className="bd-hero" style={{ "--brand-accent": brand.accentColor }}>
//         <div className="container">
//           <button className="bd-back" onClick={onBack}>
//             ← Back to Brands
//           </button>

//           <div className="bd-hero__inner">
//             {/* Logo */}
//             <div className="bd-hero__logo-wrap">
//               <BrandLogoDisplay brand={brand} context="detail" />
//             </div>

//             {/* Meta */}
//             <div className="bd-hero__meta">
//               <span className="bd-category-badge">{brand.category}</span>
//               <h1 className="bd-name">{brand.name}</h1>
//               <p className="bd-tagline">{brand.tagline}</p>

//               {/* Highlights */}
//               <ul className="bd-highlights">
//                 {brand.highlights.map((h) => (
//                   <li key={h} className="bd-highlight">
//                     <span
//                       className="bd-highlight__dot"
//                       style={{ background: brand.accentColor }}
//                     />
//                     {h}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── Content ── */}
//       <div className="container">
//         <div className="bd-content">
//           {/* About */}
//           <section className="bd-section">
//             <span className="section-eyebrow">About the Brand</span>
//             <h2 className="bd-section-title">Why We Distribute {brand.name}</h2>
//             <p className="bd-description">{brand.description}</p>
//           </section>

//           {/* Sub-categories */}
//           <section className="bd-section">
//             <span className="section-eyebrow">Product Range</span>
//             <h2 className="bd-section-title">
//               {brand.name} — Categories We Carry
//             </h2>
//             <div className="bd-subs-grid">
//               {brand.subCategories.map((sub, i) => (
//                 <div
//                   key={sub.name}
//                   className="bd-sub-card"
//                   style={{ "--brand-accent": brand.accentColor }}
//                 >
//                   <div className="bd-sub-card__icon">{sub.icon}</div>
//                   <div className="bd-sub-card__num">
//                     {String(i + 1).padStart(2, "0")}
//                   </div>
//                   <div className="bd-sub-card__name">{sub.name}</div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* CTA */}
//           <div className="bd-cta-row">
//             <Link to="/contact" className="btn btn-primary">
//               Enquire About {brand.name} →
//             </Link>
//             <button className="btn btn-outline" onClick={onBack}>
//               ← View All Brands
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // BRANDS PAGE  (root component)
// // ─────────────────────────────────────────────────────────────────────────────
// export default function Brands() {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [selectedBrand, setSelectedBrand] = useState(null);

//   // Scroll-reveal for listing
//   useEffect(() => {
//     if (selectedBrand) return;
//     const observer = new IntersectionObserver(
//       (entries) =>
//         entries.forEach((e) => {
//           if (e.isIntersecting) e.target.classList.add("active");
//         }),
//       { threshold: 0.1 },
//     );
//     document
//       .querySelectorAll(".reveal-left, .reveal-right")
//       .forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, [selectedBrand]);

//   // If a brand is selected → show detail page
//   if (selectedBrand) {
//     return (
//       <BrandDetailPage
//         brand={selectedBrand}
//         onBack={() => setSelectedBrand(null)}
//       />
//     );
//   }

//   const filtered =
//     activeFilter === "All"
//       ? BRANDS
//       : BRANDS.filter((b) => b.category === activeFilter);

//   return (
//     <>
//       {/* ── Page Hero ── */}
//       <section className="page-hero-band reveal-left">
//         <div className="container">
//           <div className="section-header section-header--center">
//             <span className="section-eyebrow">Our Portfolio</span>
//             <h1 className="section-title">Our Brand Partners</h1>
//             <p className="section-subtitle">
//               We are the authorised distributor for world-class brands across
//               Audio, Wearables, Accessories, Projectors, Networking, and AI
//               Technology — spanning the UAE and Qatar.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ── Brand Grid ── */}
//       <section className="section reveal-right">
//         <div className="container">
//           {/* Filter bar */}
//           <div className="brands-page__filter-bar">
//             {CATEGORY_TABS.map((f) => (
//               <button
//                 key={f}
//                 className={`filter-btn ${activeFilter === f ? "filter-btn--active" : ""}`}
//                 onClick={() => setActiveFilter(f)}
//               >
//                 {f}
//               </button>
//             ))}
//           </div>

//           {/* Grid */}
//           <div className="brands-page__grid">
//             {filtered.map((brand) => (
//               <BrandCard
//                 key={brand.id}
//                 brand={brand}
//                 onSelect={setSelectedBrand}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../css/Brands.css";
import { BRANDS, CATEGORY_TABS } from "../data/brands";

// ─────────────────────────────────────────────────────────────────────────────
// HELPER — renders logo image OR styled text fallback
// ─────────────────────────────────────────────────────────────────────────────
function BrandLogoDisplay({ brand, context = "card" }) {
  if (brand.logo) {
    return (
      <img
        src={brand.logo}
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
                <div
                  key={sub.name}
                  className="bd-sub-card"
                  style={{ "--brand-accent": brand.accentColor }}
                >
                  <div className="bd-sub-card__icon">{sub.icon}</div>
                  <div className="bd-sub-card__num">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="bd-sub-card__name">{sub.name}</div>
                </div>
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
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("active");
        }),
      { threshold: 0.1 },
    );
    document
      .querySelectorAll(".reveal-left, .reveal-right")
      .forEach((el) => observer.observe(el));
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
