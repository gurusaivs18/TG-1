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
import fastrackSMART from "../assets/brandsPageLogos/Fastrack.brandpg.webp";

// ── Sub-category images ─────────────────────────────────────────────────
// Audio;
// marshall
import marshal1 from "../assets/Brand-image-banners/Audio/Marshall_brand_images/Marshall-1.jpg.webp";
import marshal2 from "../assets/Brand-image-banners/Audio/Marshall_brand_images/Marshall 2.jpg (1).webp";
// shokzz
import shokz01 from "../assets/Brand-image-banners/Audio/SHOKZ_brand_images/shokz01.jpg";
import shokz02 from "../assets/Brand-image-banners/Audio/SHOKZ_brand_images/shokz02.jpg";
import shokz03 from "../assets/Brand-image-banners/Audio/SHOKZ_brand_images/shokz03.jpg";
import shokz04 from "../assets/Brand-image-banners/Audio/SHOKZ_brand_images/shokz04.jpg";
// soundpeats
import soundpeats1 from "../assets/Brand-image-banners/Audio/Soundpeats_brand_images/soundpeats01.jpg";
import soundpeats2 from "../assets/Brand-image-banners/Audio/Soundpeats_brand_images/soundpeats02.jpg";
import soundpeats3 from "../assets/Brand-image-banners/Audio/Soundpeats_brand_images/soundpeats03.jpg";
// Ikarao
import ikarao1 from "../assets/Brand-image-banners/Audio/Ikarao_brand_images/ikarao1.jpg";
import ikarao2 from "../assets/Brand-image-banners/Audio/Ikarao_brand_images/ikarao2.jpg";
import ikarao3 from "../assets/Brand-image-banners/Audio/Ikarao_brand_images/ikarao3.jpg";
// QCY
import qcy1 from "../assets/Brand-image-banners/Audio/QCY_brand_images/qcy1.jpg";
import qcy2 from "../assets/Brand-image-banners/Audio/QCY_brand_images/qcy2.jpg";
import qcy3 from "../assets/Brand-image-banners/Audio/QCY_brand_images/qcy3.jpg";
import qcy4 from "../assets/Brand-image-banners/Audio/QCY_brand_images/qcy4.jpg";

// WEARABLE

// titan
import titan1 from "../assets/Brand-image-banners/WEARBALES/Titan_brand_images/titan1.jpg";
import titanW2 from "../assets/Brand-image-banners/WEARBALES/Titan_brand_images/titanW2.jpg";
// fastrack
import fastrack1 from "../assets/Brand-image-banners/WEARBALES/FASTRACK_brand_images/Fastrack01.jpg";
import fastrack2 from "../assets/Brand-image-banners/WEARBALES/FASTRACK_brand_images/fastrack02.jpg";
// IQUIBLA
import iquibla1 from "../assets/Brand-image-banners/WEARBALES/IQIBLA_brand_images/iquibla1.jpg";
import iquibla2 from "../assets/Brand-image-banners/WEARBALES/IQIBLA_brand_images/iquibla2.jpg";
import iquibla3 from "../assets/Brand-image-banners/WEARBALES/IQIBLA_brand_images/iquibla3.jpg";
// ACCESSORIES
// DICOTA
import dicota1 from "../assets/Brand-image-banners/Accessoriees/Dicota_brand_images/dicota1.jpg";
import dicota2 from "../assets/Brand-image-banners/Accessoriees/Dicota_brand_images/dicota2.jpg";
// CHOETECH
import choetech1 from "../assets/Brand-image-banners/Accessoriees/Choetech_brand_images/choetech1.jpg";
import choetech2 from "../assets/Brand-image-banners/Accessoriees/Choetech_brand_images/choetech2.jpg";
import choetech3 from "../assets/Brand-image-banners/Accessoriees/Choetech_brand_images/choetech3.jpg";
import choetech4 from "../assets/Brand-image-banners/Accessoriees/Choetech_brand_images/choetech4.jpg";
import choetech5 from "../assets/Brand-image-banners/Accessoriees/Choetech_brand_images/choetech5.jpg";
import choetech6 from "../assets/Brand-image-banners/Accessoriees/Choetech_brand_images/choetech6.jpg";
// NETWORKING
// tp-link
import tplink1 from "../assets/Brand-image-banners/Networking/Tp-Link/Tplink 1.jpg";
import tplink2 from "../assets/Brand-image-banners/Networking/Tp-Link/Tplink 2.jpg";
import tplink3 from "../assets/Brand-image-banners/Networking/Tp-Link/Tplink (3).jpg";
//
import tapo1 from "../assets/Brand-image-banners/Networking/Tapo/Tapo.jpg";

//  Projectors
//  yaber
import yaber1 from "../assets/Brand-image-banners/Projectors/Yaber_brand_images/yaber1.jpg";
import yaber2 from "../assets/Brand-image-banners/Projectors/Yaber_brand_images/yaber2.jpg";
import yaber3 from "../assets/Brand-image-banners/Projectors/Yaber_brand_images/yaber3.jpg";
// TECHNOLOGY / AI POWERED
import ticnote1 from "../assets/Brand-image-banners/AI Powered/ticnote1.jpg";
import ticnote2 from "../assets/Brand-image-banners/AI Powered/ticnote2.jpg";

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
    accentColor: "black",
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
      { name: "True Wireless", icon: "🎵", image: shokz01 },
      { name: "Sports", icon: "🏃", image: shokz02 },
      { name: "Communications", icon: "📞", image: shokz03 },
      { name: "Swimming", icon: "🏊", image: shokz04 },
    ],
    highlights: [
      "Patented Bone Conduction Technology",
      "IP68 Waterproof — Pool Ready",
      "Safe Open-Ear Awareness",
    ],
    accentColor: "black",
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
      { name: "True Wireless", icon: "🎵", image: soundpeats1 },
      { name: "Audiophile", icon: "🎼", image: soundpeats2 },
      { name: "Noise Cancelling", icon: "🔇", image: soundpeats3 },
    ],
    highlights: [
      "Hi-Fi Audiophile Drivers",
      "Active Noise Cancellation",
      "IPX7 Waterproof Technology",
    ],
    accentColor: "black",
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
      { name: "Smart Karaoke Machines", icon: "🎤", image: ikarao1 },
      { name: "Portable Speakers", icon: "🔊", image: ikarao2 },
      { name: "Party Speakers", icon: "🎉", image: ikarao3 },
    ],
    highlights: [
      "🏆 Best Product — Channel Summit META 2025",
      "#1 Karaoke Machine with Built-in Screen",
      "Portable with Built-in Battery",
    ],
    accentColor: "black ",
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
      { name: "True Wireless", icon: "🎵", image: qcy1 },
      { name: "MeloBuds Series", icon: "🎧", image: qcy2 },
      { name: "H Series Headphones", icon: "🎶", image: qcy3 },
      { name: "H Series Headphones", icon: "🎶", image: qcy4 },
    ],
    highlights: [
      "Budget-Friendly Everyday Audio",
      "MeloBuds A30 & H3 Series",
      "Designed to Block Out Daily Chaos",
    ],
    accentColor: "black",
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
      { name: "AMOLED Smartwatches", icon: "⌚", image: titan1 },
      { name: "Fitness Trackers", icon: "💪", image: titanW2 },
      { name: "Premium Design Series", icon: "✨", image: null },
    ],
    highlights: [
      "3.53cm AMOLED · 600 Nits Brightness",
      "AI-Powered Personalization",
      "Built-in GPS with Strava Support",
    ],
    accentColor: "black",
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
      { name: "AMOLED Smartwatches", icon: "⌚", image: fastrack1 },
      { name: "Fitness Trackers", icon: "💪", image: fastrack2 },
      { name: "Premium Design Series", icon: "✨", image: null },
    ],
    highlights: [
      "3.53cm AMOLED · 600 Nits Brightness",
      "AI-Powered Personalization",
      "Built-in GPS with Strava Support",
    ],
    accentColor: "black",
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
      { name: "Smart Zikr Ring", icon: "💍", image: iquibla1 },
      { name: "Islamic Wearables", icon: "🕌", image: iquibla2 },
      { name: "Faith-Tech Accessories", icon: "📿", image: iquibla3 },
    ],
    highlights: [
      "World's First Islamic Smart Ring",
      "Zikr & Tasbeeh Digital Tracking",
      "Qibla Direction & Prayer Time Integration",
    ],
    accentColor: "black",
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
      { name: "Backpacks", icon: "🎒", image: dicota1 },
      { name: "Laptop Bags & Sleeves", icon: "💼", image: dicota2 },
      { name: "Travel Accessories", icon: "✈️", image: null },
    ],
    highlights: [
      "European Engineered Design",
      'Protection Up to 16" Laptops',
      "Lightweight & Durable Materials",
    ],
    accentColor: "black",
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
      { name: "Power Banks", icon: "🔋", image: choetech1 },
      { name: "Chargers1", icon: "⚡", image: choetech2 },
      { name: "Chargers2", icon: "⚡", image: choetech3 },
      { name: "Chargers3", icon: "⚡", image: choetech4 },
      { name: "Chargers4", icon: "⚡", image: choetech5 },
      { name: "Chargers5", icon: "⚡", image: choetech6 },
    ],
    highlights: ["Power Bank Specialist", "Reliable All-Day Charging"],
    accentColor: "black",
  },

  // ── NETWORKING ───────────────────────────────────────────────

  {
    id: "tp-link",
    name: "TP-Link",
    logo: tpLink,
    logoClass: "logo--tp-link",
    category: "Networking",
    tagline: "Reliable Networking. Smart Home Simplified.",
    description:
      "TP-Link is a global leader in networking and smart connectivity solutions, offering reliable products designed to keep people and businesses connected. With a wide range of solutions including Wi-Fi routers, networking devices, and smart home products, TP-Link delivers seamless connectivity, advanced technology, and dependable performance for everyday digital needs.",
    subCategories: [
      { name: "Wi-Fi Routers", icon: "📡", image: tplink1 },
      { name: "Mesh Networking", icon: "🔗", image: tplink2 },
      { name: "Smart Cameras (Tapo)", icon: "📷", image: tplink3 },
    ],
    highlights: ["World's #1 Wi-Fi Brand", "Mesh & Whole-Home Coverage"],
    accentColor: "black",
  },
  {
    id: "tapo",
    name: " Tapo",
    logo: tapo,
    logoClass: "logo--tp-link",
    category: "Networking",
    tagline: "Reliable Networking. Smart Home Simplified.",
    description:
      "Tapo is a smart home brand by TP-Link, offering innovative and affordable smart devices designed to make everyday living more convenient and connected. With products including smart cameras, smart lighting, plugs, and other home automation solutions, Tapo helps users create a safer, smarter, and more efficient home environment.",
    subCategories: [{ name: "Wi-Fi Routers", icon: "📡", image: tapo1 }],
    highlights: ["Tapo Smart Home Ecosystem", "Mesh & Whole-Home Coverage"],
    accentColor: "black",
  },
  // Projectors
  {
    id: "yaber",
    name: "Yaber",
    logo: yaber,
    logoClass: "logo--yaber",
    logoText: "Yaber",
    category: "Projectors",
    tagline: "Entertainment Projector. Anywhere.",
    description:
      "YABER is a leading smart projector brand dedicated to delivering immersive home entertainment experiences through advanced projection technology. With powerful performance, high-quality visuals, and user-friendly features, YABER projectors transform everyday spaces into personal cinemas for movies, gaming, presentations, and more.",
    subCategories: [
      { name: "Home Cinema", icon: "🎬", image: yaber1 },
      { name: "Laser Projectors", icon: "💡", image: yaber2 },
      { name: "Premier Theater", icon: "🎭", image: yaber3 },
      // { name: "Portable Projectors", icon: "📽️", image: null },
    ],
    highlights: [
      "Laser Projection Technology",
      "Built-in Battery for Outdoor Use",
      "Smart OS with App Integration",
    ],
    accentColor: "black",
  },
  // ── TECHNOLOGY / AI POWERED ───────────────────────────────────────────────
  {
    id: "ticnote",
    name: "TicNote",
    logo: ticnote,
    logoClass: "logo--ticnote",
    category: "AI Powered",
    tagline: "Next Generation AI Voice Recorder.",
    description:
      "TicNote is an innovative AI-powered voice recorder designed to transform the way people capture, organize, and manage information. With advanced AI features including real-time transcription, intelligent note-taking, voice recording, and instant translation, TicNote helps professionals, students, content creators, and everyday users improve productivity and stay organized.",
    subCategories: [
      { name: "AI Voice Recorders", icon: "🎙️", image: ticnote1 },
      { name: "Smart Transcription", icon: "📝", image: ticnote2 },
      // { name: "AI Meeting Assistant", icon: "🤖", image: null },
    ],
    highlights: [
      "Shadow AI Agent Technology",
      "Real-Time Transcription",
      "Multilingual Support",
    ],
    accentColor: "black",
  },
];

// ── Category filter tabs (Brands page) ─────────────────────────────────────
export const CATEGORY_TABS = [
  "All",
  "Audio",
  "Wearable",
  "Accessories",
  "Networking",
  "Projectors",
  "AI Powered",
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
    name: "Networking",
    icon: "📡",
    desc: "Routers & smart home devices.",
  },
  {
    name: "Projectors",
    icon: "️📽️",
    desc: "Home cinema projectors & portable display devices.",
  },
  {
    name: "AI Powered",
    icon: "🤖",
    desc: "AI voice recorders & next-generation smart devices.",
  },
];
