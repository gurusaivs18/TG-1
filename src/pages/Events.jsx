import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Pages.css";
import "../css/Home.css";
import Blogs from "./Blogs";

const EVENTS = [
  {
    id: 1,
    title: "GITEX Global 2025",
    category: "Trade Show",
    date: { day: "14", month: "Oct", year: "2025" },
    location: "Dubai World Trade Centre, UAE",
    desc: "Target One participated in GITEX Global 2025, showcasing our full brand portfolio including Marshall, BenQ, and AceFast to retail buyers and trade visitors.",
    status: "past",
  },
  {
    id: 2,
    title: "Marshall Brand Launch — UAE",
    category: "Brand Event",
    date: { day: "12", month: "Jun", year: "2025" },
    location: "Dubai, UAE",
    desc: "Official UAE launch event for Marshall's latest portable speaker lineup, held in partnership with our key retail partners.",
    status: "past",
  },
  {
    id: 3,
    title: "Retailer Summit 2025",
    category: "Partner Event",
    date: { day: "20", month: "Mar", year: "2025" },
    location: "Abu Dhabi, UAE",
    desc: "Annual summit bringing together Target One's top retail partners to discuss sell-out strategies, new brand introductions, and market trends.",
    status: "past",
  },
  {
    id: 4,
    title: "BenQ Gaming Display Showcase",
    category: "Brand Event",
    date: { day: "10", month: "Feb", year: "2025" },
    location: "Dubai, UAE",
    desc: "In-store gaming monitor showcase at Sharaf DG featuring BenQ's latest MOBIUZ gaming monitors and Zowie displays.",
    status: "past",
  },
  {
    id: 5,
    title: "Qatar Retail Expansion 2026",
    category: "Market Entry",
    date: { day: "15", month: "Sep", year: "2026" },
    location: "Doha, Qatar",
    desc: "Target One expanding our Qatar retail network with new brand onboarding and retailer partnerships planned for Q3 2026.",
    status: "upcoming",
  },
  {
    id: 6,
    title: "GITEX Global 2026",
    category: "Trade Show",
    date: { day: "13", month: "Oct", year: "2026" },
    location: "Dubai World Trade Centre, UAE",
    desc: "Join us at GITEX 2026 as we showcase our latest brand additions and B2B distribution platform to trade visitors across the GCC.",
    status: "upcoming",
  },
];

const YEARS = ["All", "2026", "2025"];

export default function Events() {
  const [yearFilter, setYearFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

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

  const filtered = EVENTS.filter((e) => {
    const matchYear = yearFilter === "All" || e.date.year === yearFilter;
    let matchStatus = true;
    if (statusFilter === "Past")
      matchStatus = e.status === "past" && Number(e.date.year) >= 2025;
    else if (statusFilter === "Upcoming") matchStatus = e.status === "upcoming";
    return matchYear && matchStatus;
  });

  return (
    <>
      <section className="section reveal-left">
        <div className="container">
          <div
            style={{
              display: "flex",
              gap: 16,
              marginBottom: 40,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <div className="events__year-filter">
              {YEARS.map((y) => (
                <button
                  key={y}
                  className={`filter-btn ${yearFilter === y ? "filter-btn--active" : ""}`}
                  onClick={() => setYearFilter(y)}
                >
                  {y}
                </button>
              ))}
            </div>
            <div style={{ marginBottom: 0 }}>
              {["All", "Upcoming", "Past"].map((s) => (
                <button
                  key={s}
                  className={`filter-btn ${statusFilter === s ? "filter-btn--active" : ""}`}
                  onClick={() => setStatusFilter(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="events__grid">
            {filtered.map((event) => (
              <div key={event.id} className="event-card">
                <div
                  className="event-card__image"
                  style={{
                    background:
                      event.status === "upcoming"
                        ? "var(--color-secondary)"
                        : "#2a2a3a",
                  }}
                >
                  <div className="event-card__date-badge">
                    <div className="event-card__date-day">{event.date.day}</div>
                    <div className="event-card__date-month">
                      {event.date.month} '{event.date.year.slice(2)}
                    </div>
                  </div>
                  <div
                    className={`event-card__status event-card__status--${event.status}`}
                  >
                    {event.status === "upcoming"
                      ? "📅 Upcoming"
                      : "✓ Completed"}
                  </div>
                </div>
                <div className="event-card__body">
                  <div className="event-card__category">{event.category}</div>
                  <h3 className="event-card__title">{event.title}</h3>
                  <p className="event-card__desc">{event.desc}</p>
                  <div className="event-card__meta">
                    <div className="event-card__meta-item">
                      📍 {event.location}
                    </div>
                    <div className="event-card__meta-item">
                      🗓️ {event.date.day} {event.date.month} {event.date.year}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "80px 0",
                color: "var(--text-muted)",
              }}
            >
              No events found for this filter.
            </div>
          )}
        </div>
      </section>

      <section className="section section--gray reveal-left">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-eyebrow">Stay Connected</span>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            Want to Meet Us at an Event?
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto 32px" }}>
            Reach out to connect at upcoming trade shows, brand activations, or
            retailer events across the GCC.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
