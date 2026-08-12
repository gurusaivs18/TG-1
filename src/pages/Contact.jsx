import { useState, useEffect, useRef } from "react";
import PageHero from "../components/PageHero";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../css/Pages.css";
import "../css/Home.css";
import contactHero from "../assets/pages_hero/Final Contact US.png";

const SUBJECTS = [
  "General Enquiry",
  "Retail Partnership",
  "Brand Distribution",
  "Van Sales / IR Coverage",
  "Partnership Enquiry",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const revealRef = useRef(null);

  // Local scroll-reveal: don't depend on a global observer that may only
  // scan the DOM once on initial app load (and therefore miss this section
  // when it's mounted later via client-side routing).
  useEffect(() => {
    const el = revealRef.current;
    if (!el) return;

    // If it's already in the viewport when this mounts, reveal immediately.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("active");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .matches(/^[A-Za-z\s'-]+$/, "Enter a valid first name")
      .min(2)
      .required("First name is required"),

    lastName: Yup.string()
      .matches(/^[A-Za-z\s'-]+$/, "Enter a valid last name")
      .min(2)
      .required("Last name is required"),

    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),

    phone: Yup.string().matches(
      /^\+?[0-9\s\-()]{7,15}$/,
      "Enter a valid phone number",
    ),

    company: Yup.string(),

    subject: Yup.string().required("Please select a subject"),

    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    },

    validationSchema,

    onSubmit: (values, { resetForm }) => {
      const subject = encodeURIComponent(
        `Contact Request from ${values.firstName} ${values.lastName}`,
      );

      const body = encodeURIComponent(`
Name: ${values.firstName} ${values.lastName}

Email: ${values.email}

Phone: ${values.phone}

Company: ${values.company}

Subject:
${values.subject}

Message:
${values.message}
`);

      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=Marketing@targetoneme.com&su=${subject}&body=${body}`,
        "_blank",
      );

      setSubmitted(true);
      resetForm();
    },
  });

  const {
    values,
    errors,
    touched,
    submitCount,
    handleChange,
    handleBlur,
    handleSubmit,
  } = formik;

  // Show an error once the field has been touched (blurred) OR after any
  // submit attempt — covers users who go straight to Submit without
  // blurring each field individually.
  const showError = (field) =>
    (touched[field] || submitCount > 0) && errors[field];

  return (
    <>
      <PageHero backgroundImage={contactHero} />

      <section className="section reveal-left" ref={revealRef}>
        <div className="container">
          <div className="contact__grid">
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
                    <div className="contact__info-value">04-344 9174</div>
                  </div>
                </div>
                <div className="contact__info-item">
                  <div className="contact__info-icon-wrap">✉️</div>
                  <div>
                    <div className="contact__info-label">Email</div>
                    <a
                      href="mailto:info@targetone.ae"
                      className="contact__info-value"
                    >
                      Marketing@targetoneme.com
                    </a>
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
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">First Name *</label>
                        <input
                          className={`form-input ${
                            showError("firstName") ? "input-error" : ""
                          }`}
                          name="firstName"
                          value={values.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder=" "
                        />
                        {showError("firstName") && (
                          <span className="form-error">{errors.firstName}</span>
                        )}
                      </div>

                      <div className="form-group">
                        <label className="form-label">Last Name *</label>
                        <input
                          className={`form-input ${
                            showError("lastName") ? "input-error" : ""
                          }`}
                          name="lastName"
                          value={values.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder=" "
                        />
                        {showError("lastName") && (
                          <span className="form-error">{errors.lastName}</span>
                        )}
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Email Address *</label>
                        <input
                          type="email"
                          className={`form-input ${
                            showError("email") ? "input-error" : ""
                          }`}
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder=" "
                        />
                        {showError("email") && (
                          <span className="form-error">{errors.email}</span>
                        )}
                      </div>

                      <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          className={`form-input ${
                            showError("phone") ? "input-error" : ""
                          }`}
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {showError("phone") && (
                          <span className="form-error">{errors.phone}</span>
                        )}
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Company / Organisation
                      </label>
                      <input
                        className={`form-input ${
                          showError("company") ? "input-error" : ""
                        }`}
                        name="company"
                        value={values.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder=" "
                      />
                      {showError("company") && (
                        <span className="form-error">{errors.company}</span>
                      )}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Subject *</label>
                      <select
                        className={`form-select ${
                          showError("subject") ? "input-error" : ""
                        }`}
                        name="subject"
                        value={values.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value="">Select a subject...</option>
                        {SUBJECTS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>

                      {showError("subject") && (
                        <span className="form-error">{errors.subject}</span>
                      )}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Message *</label>
                      <textarea
                        className={`form-textarea ${
                          showError("message") ? "input-error" : ""
                        }`}
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Tell us how we can help you..."
                        rows={5}
                      />

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop: 6,
                        }}
                      >
                        {showError("message") ? (
                          <span className="form-error">{errors.message}</span>
                        ) : (
                          <span />
                        )}

                        <small
                          style={{
                            color:
                              values.message.length >= 10
                                ? "#16a34a"
                                : "var(--text-secondary)",
                          }}
                        >
                          {values.message.length}
                        </small>
                      </div>
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
