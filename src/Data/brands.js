import marshall from "../assets/Home Page Scroller cards/Marshall.jpg";
import dicota from "../assets/Home Page Scroller cards/Dicota.jpg";
import soundpeats from "../assets/Home Page Scroller cards/SoundPeats.jpg";
import yaber from "../assets/Home Page Scroller cards/Yaber.jpg";

import choetic from "../assets/Home Page Scroller cards/Choetech.jpg";
import ikarao from "../assets/Home Page Scroller cards/Ikarao.jpg";
import iqibla from "../assets/Home Page Scroller cards/Iqibla.jpg";
import qcy from "../assets/Home Page Scroller cards/QCY.jpg";
import shokz from "../assets/Home Page Scroller cards/SHOKZ.jpg";
import tapo from "../assets/Home Page Scroller cards/Tapo.jpg"; // currently unused — tp-link entry uses the combined tp-link|tapo lockup (tpLink import). Swap in if you want a separate Tapo sub-logo.
import ticnote from "../assets/Home Page Scroller cards/TicNote.jpg";
import titanSmart from "../assets/Home Page Scroller cards/Titan Smart.jpg";
import tpLink from "../assets/Home Page Scroller cards/Tp link.jpg";
export const BRANDS = [
  // ── AUDIO ─────────────────────────────────────────────────────────────────
  {
    id: "marshall",
    name: "Marshall",
    logo: marshall,
    detailLogo: marshall,
    logoClass: "logo--marshall",
    category: "Audio",
    tagline: "Legendary Sound. Iconic Design.",
    description:
      "Marshall is a British audio icon with more than six decades of heritage rooted in rock & roll. From the legendary amplifiers that shaped music history to today's range of premium wireless speakers and headphones, Marshall brings unmistakable style and powerful acoustic performance to every product. As the authorised distributor across UAE and Qatar, Target One brings the full Marshall portfolio to power retailers and major chains throughout the Gulf region.",

    subCategories: [
      { name: "Home Speakers", icon: "🔊" },
      { name: "TV Sound", icon: "📺" },
      { name: "Portable Speakers", icon: "🎵" },
      { name: "Party Speakers", icon: "🎉" },
      { name: "Over-Ear Headphones", icon: "🎧" },
      { name: "Earbuds", icon: "🎶" },
      { name: "On-Ear Headphones", icon: "🎧" },
    ],
    highlights: [
      "60+ Years of Audio Heritage",
      "Rock & Roll DNA in Every Product",
      "Premium Wireless Speaker Range",
    ],
    accentColor: "#1a1a1a",
  },
  {
    id: "shokz",
    name: "Shokz",
    logo: shokz,
    logoClass: "logo--shokz",
    category: "Audio",
    tagline: "Open-Ear Design. Music On, Still Connected.",
    description:
      "Shokz pioneered the open-ear audio category with patented bone conduction technology, allowing listeners to enjoy clear audio while remaining fully aware of their surroundings. Designed for athletes, commuters, and professionals — Shokz delivers a truly unique listening experience that no traditional earphone can replicate.",
    subCategories: [
      { name: "True Wireless", icon: "🎵" },
      { name: "Sports", icon: "🏃" },
      { name: "Communications", icon: "📞" },
      { name: "Swimming", icon: "🏊" },
    ],
    highlights: [
      "Patented Bone Conduction Technology",
      "IP68 Waterproof — Pool Ready",
      "Safe Open-Ear Awareness",
    ],
    accentColor: "#111111",
  },
  {
    id: "soundpeats",
    name: "SoundPEATS",
    logo: soundpeats,
    logoClass: "logo--soundpeats",
    category: "Audio",
    tagline: "Hi-Fi Sound. Everyday Value.",
    description:
      "SoundPEATS delivers high-fidelity audio experiences at accessible price points. Specialising in true wireless earbuds with audiophile-grade drivers, active noise cancellation, and the latest Bluetooth connectivity — SoundPEATS makes premium listening available to everyone without compromise.",
    subCategories: [
      { name: "True Wireless", icon: "🎵" },
      { name: "Audiophile", icon: "🎼" },
      { name: "Noise Cancelling", icon: "🔇" },
    ],
    highlights: [
      "Hi-Fi Audiophile Drivers",
      "Active Noise Cancellation",
      "IPX7 Waterproof Technology",
    ],
    accentColor: "#1565c0",
  },
  {
    id: "ikarao",
    name: "Ikarao",
    logo: ikarao,
    logoClass: "logo--ikarao",
    category: "Audio",
    tagline: "Unleash the Singer in You.",
    description:
      "Ikarao is a globally recognised smart karaoke brand that blends entertainment technology with premium audio engineering. From the award-winning Break X1 — the #1 karaoke machine with a built-in screen — to portable party speakers with built-in batteries, Ikarao transforms any space into a stage. Ikarao's Break X1 won Best Product in the Entertainment category at Channel Summit META 2025.",
    subCategories: [
      { name: "Smart Karaoke Machines", icon: "🎤" },
      { name: "Portable Speakers", icon: "🔊" },
      { name: "Party Speakers", icon: "🎉" },
    ],
    highlights: [
      "🏆 Best Product — Channel Summit META 2025",
      "#1 Karaoke Machine with Built-in Screen",
      "Portable with Built-in Battery",
    ],
    accentColor: "#6a1b9a",
  },
  {
    id: "qcy",
    name: "QCY",
    logo: qcy,
    logoClass: "logo--qcy",
    category: "Audio",
    tagline: "Block Out the Chaos. Everyday.",
    description:
      "QCY makes budget-friendly earbuds and headphones built for everyday chaos-blocking listening, including the MeloBuds A30 and H3 series. QCY focuses on accessible pricing without sacrificing the essentials — solid sound, all-day comfort, and reliable connectivity for daily use.",
    subCategories: [
      { name: "True Wireless", icon: "🎵" },
      { name: "MeloBuds Series", icon: "🎧" },
      { name: "H Series Headphones", icon: "🎶" },
    ],
    highlights: [
      "Budget-Friendly Everyday Audio",
      "MeloBuds A30 & H3 Series",
      "Designed to Block Out Daily Chaos",
    ],
    accentColor: "#0288d1",
  },

  // ── WEARABLE ──────────────────────────────────────────────────────────────
  {
    id: "titan-smart",
    name: "Titan Smart",
    logo: titanSmart,
    logoClass: "logo--titan-smart",
    category: "Wearable",
    tagline: "The Future of Smartwatches.",
    description:
      "Titan Smart, from India's iconic Titan Company, brings next-generation smartwatch technology to the Middle East. Featuring stunning AMOLED displays up to 3.53cm, AI-powered personalization, built-in GPS with Strava integration, and premium stainless steel construction — Titan Smart unites elegance with leading-edge wearable technology.",
    subCategories: [
      { name: "AMOLED Smartwatches", icon: "⌚" },
      { name: "Fitness Trackers", icon: "💪" },
      { name: "Premium Design Series", icon: "✨" },
    ],
    highlights: [
      "3.53cm AMOLED · 600 Nits Brightness",
      "AI-Powered Personalization",
      "Built-in GPS with Strava Support",
    ],
    accentColor: "#1a237e",
  },

  {
    id: "iqibla",
    name: "iQIBLA",
    logo: iqibla,
    logoClass: "logo--iqibla",
    category: "Wearable",
    tagline: "Technology for Faith.",
    description:
      "iQIBLA is the world's first Islamic Smart Zikr Ring — a revolutionary wearable that seamlessly fuses faith and technology. Designed for Muslims worldwide, it tracks Tasbeeh (Zikr), provides Qibla direction and prayer times, and connects to a dedicated companion app for a richer spiritual experience. Waterproof and available in stunning metallic designs.",
    subCategories: [
      { name: "Smart Zikr Ring", icon: "💍" },
      { name: "Islamic Wearables", icon: "🕌" },
      { name: "Faith-Tech Accessories", icon: "📿" },
    ],
    highlights: [
      "World's First Islamic Smart Ring",
      "Zikr & Tasbeeh Digital Tracking",
      "Qibla Direction & Prayer Time Integration",
    ],
    accentColor: "#b8860b",
  },

  // ── ACCESSORIES ───────────────────────────────────────────────────────────
  {
    id: "dicota",
    name: "Dicota",
    logo: dicota,
    logoClass: "logo--dicota",
    category: "Accessories",
    tagline: "Make Your Daily Commute a Breeze.",
    description:
      "Dicota is a leading European brand specialising in premium laptop bags, backpacks, and workspace accessories. Built on a foundation of functional design, durable materials, and ergonomic precision — Dicota keeps professionals organised and their devices protected across every journey.",
    subCategories: [
      { name: "Backpacks", icon: "🎒" },
      { name: "Laptop Bags & Sleeves", icon: "💼" },
      { name: "Travel Accessories", icon: "✈️" },
    ],
    highlights: [
      "European Engineered Design",
      'Protection Up to 16" Laptops',
      "Lightweight & Durable Materials",
    ],
    accentColor: "#e65100",
  },

  {
    id: "choetech",
    name: "Choetech",
    logo: choetic,
    logoClass: "logo--choetech",
    category: "Accessories",
    tagline: "Power That Keeps Up With You.",
    description:
      "Choetech is a charging accessories brand specialising in power banks and portable charging solutions, built to keep devices powered reliably throughout the day. NOTE: brand details below are a placeholder — please confirm tagline, description, subcategories, and highlights so this entry can be finalized.",
    subCategories: [
      { name: "Power Banks", icon: "🔋" },
      { name: "Chargers", icon: "⚡" },
    ],
    highlights: ["Power Bank Specialist", "Reliable All-Day Charging"],
    accentColor: "#455a64",
  },

  // ── PROJECTORS & NETWORKING ───────────────────────────────────────────────
  {
    id: "yaber",
    name: "Yaber",
    logo: yaber,
    logoClass: "logo--yaber",
    logoText: "Yaber",
    category: "Projectors & Networking",
    tagline: "Entertainment Projector. Anywhere.",
    description:
      "Yaben is a premium entertainment projector brand redefining the home cinema experience. From ultra-compact portable projectors with built-in batteries for outdoor adventures to stunning laser projection systems for premier home theatres — Yaben delivers immersive big-screen entertainment wherever you are.",
    subCategories: [
      { name: "Home Cinema", icon: "🎬" },
      { name: "Laser Projectors", icon: "💡" },
      { name: "Premier Theater", icon: "🎭" },
      { name: "Portable Projectors", icon: "📽️" },
    ],
    highlights: [
      "Laser Projection Technology",
      "Built-in Battery for Outdoor Use",
      "Smart OS with App Integration",
    ],
    accentColor: "#e65c00",
  },
  {
    id: "tp-link",
    name: "TP-Link & Tapo",
    logo: tpLink,
    logoClass: "logo--tp-link",
    category: "Projectors & Networking",
    tagline: "Reliable Networking. Smart Home Simplified.",
    description:
      "TP-Link is the world's #1 provider of Wi-Fi products, delivering high-performance networking solutions trusted by homes and businesses globally. Tapo — their smart home sub-brand — extends this expertise into smart cameras, sensors, bulbs, and plugs, making a fully connected smart home effortless and affordable.",
    subCategories: [
      { name: "Wi-Fi Routers", icon: "📡" },
      { name: "Mesh Networking", icon: "🔗" },
      { name: "Smart Cameras (Tapo)", icon: "📷" },
      { name: "Smart Home Devices", icon: "🏠" },
    ],
    highlights: [
      "World's #1 Wi-Fi Brand",
      "Tapo Smart Home Ecosystem",
      "Mesh & Whole-Home Coverage",
    ],
    accentColor: "#0074c2",
  },
  {
    id: "tapo",
    name: " Tapo",
    logo: tapo,
    logoClass: "logo--tp-link",
    category: "Projectors & Networking",
    tagline: "Reliable Networking. Smart Home Simplified.",
    description:
      "TP-Link is the world's #1 provider of Wi-Fi products, delivering high-performance networking solutions trusted by homes and businesses globally. Tapo — their smart home sub-brand — extends this expertise into smart cameras, sensors, bulbs, and plugs, making a fully connected smart home effortless and affordable.",
    subCategories: [
      { name: "Wi-Fi Routers", icon: "📡" },
      { name: "Mesh Networking", icon: "🔗" },
      { name: "Smart Cameras (Tapo)", icon: "📷" },
      { name: "Smart Home Devices", icon: "🏠" },
    ],
    highlights: [
      "World's #1 Wi-Fi Brand",
      "Tapo Smart Home Ecosystem",
      "Mesh & Whole-Home Coverage",
    ],
    accentColor: "#0074c2",
  },
  // ── TECHNOLOGY / AI POWERED ───────────────────────────────────────────────
  {
    id: "ticnote",
    name: "TicNote",
    logo: ticnote,
    logoClass: "logo--ticnote",
    category: "Technology / AI Powered",
    tagline: "Next Generation AI Voice Recorder.",
    description:
      "TicNote is a cutting-edge AI-powered voice recorder that redefines how professionals capture and act on conversations. Powered by the Shadow AI Agent, TicNote delivers real-time transcription, intelligent meeting summaries, and multilingual support — purpose-built for lawyers, consultants, executives, and anyone who needs to capture every word with precision.",
    subCategories: [
      { name: "AI Voice Recorders", icon: "🎙️" },
      { name: "Smart Transcription", icon: "📝" },
      { name: "AI Meeting Assistant", icon: "🤖" },
    ],
    highlights: [
      "Shadow AI Agent Technology",
      "Real-Time Transcription",
      "Multilingual Support",
    ],
    accentColor: "#37474f",
  },
];

// ── Category filter tabs (Brands page) ─────────────────────────────────────
export const CATEGORY_TABS = [
  "All",
  "Audio",
  "Wearable",
  "Accessories",
  "Projectors & Networking",
  "Technology / AI Powered",
];

// ── Category nav cards (Home page "Our Categories" section) ───────────────
export const BRAND_CATEGORIES = [
  {
    name: "Audio",
    icon: "🎧",
    desc: "Speakers, headphones, earbuds & smart karaoke systems.",
  },
  {
    name: "Wearable",
    icon: "⌚",
    desc: "Smartwatches, fitness trackers & smart rings.",
  },
  {
    name: "Accessories",
    icon: "🔌",
    desc: "Power banks, chargers, cables & laptop bags.",
  },
  {
    name: "Projectors & Networking",
    icon: "📡",
    desc: "Home cinema projectors, routers & smart home devices.",
  },
  {
    name: "Technology / AI Powered",
    icon: "🤖",
    desc: "AI voice recorders & next-generation smart devices.",
  },
];
