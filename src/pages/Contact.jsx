import { useState } from "react";
import PageHero from "../components/PageHero";
import "../css/Pages.css";
import "../css/Home.css";

const SUBJECTS = [
  "General Enquiry",
  "Retail Partnership",
  "Brand Distribution",
  "Van Sales / IR Coverage",
  "Partnership Enquiry",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    isPartnership: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Reach Out"
        title="Contact Us"
        subtitle="Whether you're a retailer, brand, or partner — we'd love to hear from you. Our team typically responds within 24 hours."
      />

      <section className="section">
        <div className="container">
          <div className="contact__grid">
            {/* Info Column */}
            <div>
              <h2 className="contact__info-title">Get in Touch</h2>
              <p className="contact__info-desc">
                Connect with Target One for retail partnerships, brand
                distribution enquiries, van sales coverage, or any other
                business queries.
              </p>

              <div className="contact__info-items">
                <div className="contact__info-item">
                  <div className="contact__info-icon-wrap">📍</div>
                  <div>
                    <div className="contact__info-label">Head Office</div>
                    <div className="contact__info-value">
                      Dubai, United Arab Emirates
                    </div>
                  </div>
                </div>
                <div className="contact__info-item">
                  <div className="contact__info-icon-wrap">📞</div>
                  <div>
                    <div className="contact__info-label">Phone</div>
                    <div className="contact__info-value">+971 50 123 4567</div>
                  </div>
                </div>
                <div className="contact__info-item">
                  <div className="contact__info-icon-wrap">✉️</div>
                  <div>
                    <div className="contact__info-label">Email</div>
                    <div className="contact__info-value">info@targetone.ae</div>
                  </div>
                </div>
                <div className="contact__info-item">
                  <div className="contact__info-icon-wrap">🕐</div>
                  <div>
                    <div className="contact__info-label">Business Hours</div>
                    <div className="contact__info-value">
                      Mon – Fri: 9:00 AM – 6:00 PM GST
                    </div>
                  </div>
                </div>
              </div>

              {/* Flags */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span
                  className="hero__tag"
                  style={{
                    background: "var(--color-light-gray)",
                    border: "1px solid var(--color-mid-gray)",
                    color: "var(--text-secondary)",
                    padding: "6px 14px",
                    borderRadius: "var(--radius-full)",
                    fontSize: "var(--text-sm)",
                  }}
                >
                  🇦🇪 UAE Operations
                </span>
                <span
                  className="hero__tag"
                  style={{
                    background: "var(--color-light-gray)",
                    border: "1px solid var(--color-mid-gray)",
                    color: "var(--text-secondary)",
                    padding: "6px 14px",
                    borderRadius: "var(--radius-full)",
                    fontSize: "var(--text-sm)",
                  }}
                >
                  🇶🇦 Qatar Operations
                </span>
              </div>

              {/* Partnership Enquiry Banner — Contact page only */}
              <div className="partnership-banner" style={{ marginTop: 36 }}>
                <div>
                  <div className="partnership-banner__text">
                    🤝 Partnership Enquiry
                  </div>
                  <div className="partnership-banner__sub">
                    Looking to partner with us as a brand or retailer? Use the
                    form and select "Partnership Enquiry" as your subject — or
                    reach out directly.
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="contact__form">
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-2xl)",
                      marginBottom: 12,
                    }}
                  >
                    Message Received!
                  </h3>
                  <p
                    style={{ color: "var(--text-secondary)", marginBottom: 24 }}
                  >
                    Thank you for reaching out. Our team will get back to you
                    within 24 hours.
                  </p>
                  <button
                    className="btn btn-outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="contact__form-title">Send Us a Message</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">First Name *</label>
                        <input
                          className="form-input"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          required
                          placeholder=" "
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Last Name *</label>
                        <input
                          className="form-input"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          required
                          placeholder=" "
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Email Address *</label>
                        <input
                          className="form-input"
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder=" "
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input
                          className="form-input"
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder=" "
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Company / Organisation
                      </label>
                      <input
                        className="form-input"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="     "
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Subject *</label>
                      <select
                        className="form-select"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a subject...</option>
                        {SUBJECTS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Message *</label>
                      <textarea
                        className="form-textarea"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        placeholder=" "
                        rows={5}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{
                        width: "100%",
                        justifyContent: "center",
                        padding: "14px",
                      }}
                    >
                      Send Message →
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
