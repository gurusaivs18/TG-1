import marshall from "../assets/brandsPageLogos/MarshallBR.webp";
import dicota from "../assets/brandsPageLogos/DicotaBR.webp";
import soundpeats from "../assets/brandsPageLogos/SoundpeatsBR.webp";
import yaber from "../assets/brandsPageLogos/YaberBR.webp";

import choetic from "../assets/brandsPageLogos/ChoetechBR.webp";
import ikarao from "../assets/brandsPageLogos/IkaraoBR.webp";
import iqibla from "../assets/brandsPageLogos/IqiblaBR.webp";
import qcy from "../assets/brandsPageLogos/QCYBR.webp";
import shokz from "../assets/brandsPageLogos/SHOKZBR.webp";
import tapo from "../assets/brandsPageLogos/TapoBR.webp"; // currently unused — tp-link entry uses the combined tp-link|tapo lockup (tpLink import). Swap in if you want a separate Tapo sub-logo.
import ticnote from "../assets/brandsPageLogos/ticnoteBR.webp";
import titanSmart from "../assets/brandsPageLogos/Titan SmartBR.webp";
import tpLink from "../assets/brandsPageLogos/Tp Link - Brand Card.jpg.webp";
import fastrackSMART from "../assets/brandsPageLogos/Fastrack.brandpg.png";

// ── Sub-category images ─────────────────────────────────────────────────
import marshal1 from "../assets/Brand-image-banners/Marshall-1.jpg.jpeg";
import marshal2 from "../assets/Brand-image-banners/Marshall 2.jpg (1).jpeg";

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
      "For over six decades, Marshall’s legacy has grown chord to chord, person to person, generation to generation. Marshall speakers combine legendary rock-inspired design with powerful, high-quality sound, delivering an exceptional audio experience for music lovers. Built with premium craftsmanship and advanced acoustic performance, they offer rich, balanced sound for every setting—whether at home, on the go, or during gatherings.",

    subCategories: [
      { name: "H-speakers", icon: "📺", image: marshal1 },
      { name: "TV Sound", icon: "📺", image: marshal2 },
      { name: "Portable Speakers", icon: "🎵", image: null },
      { name: "Party Speakers", icon: "🎉", image: null },
      { name: "Over-Ear Headphones", icon: "🎧", image: null },
      { name: "Earbuds", icon: "🎶", image: null },
      { name: "On-Ear Headphones", icon: "🎧", image: null },
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
      "SHOKZ is a leading innovator in open-ear audio technology, delivering premium wireless headphones powered by bone conduction and DirectPitch™ technology. Designed for comfort, safety, and all-day wear, SHOKZ lets users stay connected to their music while remaining aware of their surroundings—making it ideal for sports, work, and everyday life.",
    subCategories: [
      { name: "True Wireless", icon: "🎵", image: null },
      { name: "Sports", icon: "🏃", image: null },
      { name: "Communications", icon: "📞", image: null },
      { name: "Swimming", icon: "🏊", image: null },
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
      "SOUNDPEATS is a global audio brand known for delivering high-quality wireless earbuds and headphones that combine innovative technology, impressive sound performance, and exceptional value. Designed for everyday use, SOUNDPEATS products offer comfort, reliability, and advanced features to enhance music, calls, and entertainment on the go.",
    subCategories: [
      { name: "True Wireless", icon: "🎵", image: null },
      { name: "Audiophile", icon: "🎼", image: null },
      { name: "Noise Cancelling", icon: "🔇", image: null },
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
      "IKARAO is an innovative karaoke entertainment brand that combines powerful audio performance with smart technology to deliver an immersive singing experience. Designed for home entertainment, parties, and gatherings, IKARAO karaoke systems bring together high-quality sound, interactive features, and user-friendly design for endless entertainment.",
    subCategories: [
      { name: "Smart Karaoke Machines", icon: "🎤", image: null },
      { name: "Portable Speakers", icon: "🔊", image: null },
      { name: "Party Speakers", icon: "🎉", image: null },
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
      "QCY is a global audio brand specializing in innovative wireless earbuds, headphones, and smart audio solutions. Combining advanced technology, stylish design, and exceptional value, QCY delivers high-quality sound experiences with features such as noise cancellation, smart connectivity, and long-lasting performance for everyday users.",
    subCategories: [
      { name: "True Wireless", icon: "🎵", image: null },
      { name: "MeloBuds Series", icon: "🎧", image: null },
      { name: "H Series Headphones", icon: "🎶", image: null },
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
      "Titan Smart is a premium smartwatch brand from Titan, designed to blend advanced technology with modern lifestyle needs. Featuring health and fitness tracking, smart connectivity, stylish designs, and innovative features, Titan Smart helps users stay connected, active, and in control of their daily lives.",
    subCategories: [
      { name: "AMOLED Smartwatches", icon: "⌚", image: null },
      { name: "Fitness Trackers", icon: "💪", image: null },
      { name: "Premium Design Series", icon: "✨", image: null },
    ],
    highlights: [
      "3.53cm AMOLED · 600 Nits Brightness",
      "AI-Powered Personalization",
      "Built-in GPS with Strava Support",
    ],
    accentColor: "#1a237e",
  },
  {
    id: "fastrack-smart",
    name: "Fastrack Smart",
    logo: fastrackSMART,
    logoClass: "logo--fastrack",
    category: "Wearable",
    tagline: "Designed for the young and active generation. ",
    description:
      "Fastrack Smart is a smartwatch range from Titan’s youth-focused brand, Fastrack, designed for the young and active generation. Combining stylish designs with smart technology, Fastrack Smart offers features such as fitness tracking, health monitoring, smart notifications, and lifestyle-focused functionality to keep users connected and active.",
    subCategories: [
      { name: "AMOLED Smartwatches", icon: "⌚", image: null },
      { name: "Fitness Trackers", icon: "💪", image: null },
      { name: "Premium Design Series", icon: "✨", image: null },
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
      "IQIBLA is the world’s first Islamic smart Zikr ring, combining spiritual practice with innovative technology. Designed to support daily remembrance, the smart ring features intelligent Zikr counting, prayer-related functions, and a seamless digital experience, helping users stay connected with their faith anytime and anywhere.",
    subCategories: [
      { name: "Smart Zikr Ring", icon: "💍", image: null },
      { name: "Islamic Wearables", icon: "🕌", image: null },
      { name: "Faith-Tech Accessories", icon: "📿", image: null },
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
      "DICOTA is a German brand specializing in premium laptop bags, backpacks, and sleeves. Known for its quality craftsmanship, innovative designs, and practical functionality, DICOTA delivers reliable protection and stylish carrying solutions for professionals and everyday users.",
    subCategories: [
      { name: "Backpacks", icon: "🎒", image: null },
      { name: "Laptop Bags & Sleeves", icon: "💼", image: null },
      { name: "Travel Accessories", icon: "✈️", image: null },
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
      "CHOETECH is a leading consumer electronics brand specializing in innovative charging solutions and connectivity accessories. From wall chargers, travel chargers, cables, and USB-C hubs to other everyday tech essentials, CHOETECH combines reliability, performance, and convenience to keep users connected and powered wherever they go.",
    subCategories: [
      { name: "Power Banks", icon: "🔋", image: null },
      { name: "Chargers", icon: "⚡", image: null },
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
      "YABER is a leading smart projector brand dedicated to delivering immersive home entertainment experiences through advanced projection technology. With powerful performance, high-quality visuals, and user-friendly features, YABER projectors transform everyday spaces into personal cinemas for movies, gaming, presentations, and more.",
    subCategories: [
      { name: "Home Cinema", icon: "🎬", image: null },
      { name: "Laser Projectors", icon: "💡", image: null },
      { name: "Premier Theater", icon: "🎭", image: null },
      { name: "Portable Projectors", icon: "📽️", image: null },
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
    name: "TP-Link",
    logo: tpLink,
    logoClass: "logo--tp-link",
    category: "Projectors & Networking",
    tagline: "Reliable Networking. Smart Home Simplified.",
    description:
      "TP-Link is a global leader in networking and smart connectivity solutions, offering reliable products designed to keep people and businesses connected. With a wide range of solutions including Wi-Fi routers, networking devices, and smart home products, TP-Link delivers seamless connectivity, advanced technology, and dependable performance for everyday digital needs.",
    subCategories: [
      { name: "Wi-Fi Routers", icon: "📡", image: null },
      { name: "Mesh Networking", icon: "🔗", image: null },
      { name: "Smart Cameras (Tapo)", icon: "📷", image: null },
      { name: "Smart Home Devices", icon: "🏠", image: null },
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
      "Tapo is a smart home brand by TP-Link, offering innovative and affordable smart devices designed to make everyday living more convenient and connected. With products including smart cameras, smart lighting, plugs, and other home automation solutions, Tapo helps users create a safer, smarter, and more efficient home environment.",
    subCategories: [
      { name: "Wi-Fi Routers", icon: "📡", image: null },
      { name: "Mesh Networking", icon: "🔗", image: null },
      { name: "Smart Cameras (Tapo)", icon: "📷", image: null },
      { name: "Smart Home Devices", icon: "🏠", image: null },
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
      "TicNote is an innovative AI-powered voice recorder designed to transform the way people capture, organize, and manage information. With advanced AI features including real-time transcription, intelligent note-taking, voice recording, and instant translation, TicNote helps professionals, students, content creators, and everyday users improve productivity and stay organized.",
    subCategories: [
      { name: "AI Voice Recorders", icon: "🎙️", image: null },
      { name: "Smart Transcription", icon: "📝", image: null },
      { name: "AI Meeting Assistant", icon: "🤖", image: null },
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
