import { useState, useEffect, useRef } from "react";
import PageHero from "../components/PageHero";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import "../css/Pages.css";
import "../css/Home.css";
import contactHero from "../assets/pages_hero/Final Contact US.webp";

const SUBJECTS = [
  "General Enquiry",
  "Retail Partnership",
  "Brand Distribution",
  "Van Sales / IR Coverage",
  "Partnership Enquiry",
  "Other",
];

/* ============================================================
   OFFICE LOCATIONS
   Only these four contact details change when switching
   between UAE and Qatar.
   ============================================================ */

const LOCATIONS = {
  UAE: {
    location: "Dubai, United Arab Emirates",
    phone: "+971 4 344 9174",
    email: "marketing@targetoneme.com",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM GST",
  },

  Qatar: {
    location: "Doha, Qatar",
    phone: "+971 43090 9740",
    email: "marketing@targetoneme.com",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM GST",
  },
};

/* ============================================================
   STRICT EMAIL VALIDATION REGEX
   Requires a proper name@domain.tld shape
   ============================================================ */
const STRICT_EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sendError, setSendError] = useState(false);

  /* Default location is UAE */
  const [selectedLocation, setSelectedLocation] = useState("UAE");

  const revealRef = useRef(null);

  /* Current office details */
  const currentLocation = LOCATIONS[selectedLocation];

  // ============================================================
  // Local scroll reveal
  // ============================================================

  useEffect(() => {
    const el = revealRef.current;

    if (!el) return;

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

  // ============================================================
  // Validation
  // ============================================================

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .matches(/^[A-Za-z\s'-]+$/, "Enter a valid first name")
      .min(2, "First name must be at least 2 characters")
      .required("First name is required"),

    lastName: Yup.string()
      .matches(/^[A-Za-z\s'-]+$/, "Enter a valid last name")
      .min(2, "Last name must be at least 2 characters")
      .required("Last name is required"),

    email: Yup.string()
      .matches(
        STRICT_EMAIL_REGEX,
        "Enter a valid email address (e.g. name@example.com)",
      )
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

  // ============================================================
  // Formik
  // ============================================================

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

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      setSendError(false);

      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            first_name: values.firstName,
            last_name: values.lastName,
            email: values.email,
            phone: values.phone,
            company: values.company,
            subject: values.subject,
            message: values.message,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        );

        setSubmitted(true);
        resetForm();
      } catch (err) {
        console.error("Email send failed:", err);
        setSendError(true);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const {
    values,
    errors,
    touched,
    submitCount,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = formik;

  // ============================================================
  // Error helper
  // ============================================================

  const showError = (field) =>
    (touched[field] || submitCount > 0) && errors[field];

  return (
    <>
      {/* ========================================================
          PAGE HERO
          ======================================================== */}

      <PageHero backgroundImage={contactHero} />

      {/* ========================================================
          CONTACT SECTION
          ======================================================== */}

      <section className="section reveal-left" ref={revealRef}>
        <div className="container">
          <div className="contact__grid">
            {/* ==================================================
                LEFT SIDE — CONTACT INFORMATION
                ================================================== */}

            <div>
              <h2 className="contact__info-title">Get in Touch</h2>

              <p className="contact__info-desc">
                Connect with Target One for retail partnerships, brand
                distribution enquiries, van sales coverage, or any other
                business queries.
              </p>

              {/* ==================================================
                  UAE / QATAR LOCATION SWITCHER
                  ================================================== */}

              <div className="location-switcher">
                <button
                  type="button"
                  className={`location-tag ${
                    selectedLocation === "UAE" ? "location-tag--active" : ""
                  }`}
                  onClick={() => setSelectedLocation("UAE")}
                >
                  🇦🇪 UAE Operations
                </button>

                <button
                  type="button"
                  className={`location-tag ${
                    selectedLocation === "Qatar" ? "location-tag--active" : ""
                  }`}
                  onClick={() => setSelectedLocation("Qatar")}
                >
                  🇶🇦 Qatar Operations
                </button>
              </div>

              {/* ==================================================
                  CONTACT DETAILS
                  These four values change based on location.
                  ================================================== */}

              <div className="contact__info-items">
                {/* LOCATION */}
                <div className="contact__info-item">
                  <div className="contact__info-icon-wrap">📍</div>

                  <div>
                    <div className="contact__info-label">Head Office</div>

                    <div className="contact__info-value">
                      {currentLocation.location}
                    </div>
                  </div>
                </div>

                {/* PHONE */}
                <div className="contact__info-item">
                  <div className="contact__info-icon-wrap">📞</div>

                  <div>
                    <div className="contact__info-label">Phone</div>

                    <div className="contact__info-value">
                      {currentLocation.phone}
                    </div>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="contact__info-item">
                  <div className="contact__info-icon-wrap">✉️</div>

                  <div>
                    <div className="contact__info-label">Email</div>

                    <a
                      href={`mailto:${currentLocation.email}`}
                      className="contact__info-value"
                    >
                      {currentLocation.email}
                    </a>
                  </div>
                </div>

                {/* BUSINESS HOURS */}
                <div className="contact__info-item">
                  <div className="contact__info-icon-wrap">🕐</div>

                  <div>
                    <div className="contact__info-label">Business Hours</div>

                    <div className="contact__info-value">
                      {currentLocation.hours}
                    </div>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  UAE / QATAR BADGES
                  ==================================================

                  These are now the clickable location buttons above,
                  so the old static badges are intentionally removed.
                  ================================================== */}

              {/* ==================================================
                  PARTNERSHIP BANNER
                  This remains unchanged.
                  ================================================== */}

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

            {/* ==================================================
                RIGHT SIDE — CONTACT FORM
                ================================================== */}

            <div className="contact__form">
              {/* ==================================================
                  SUCCESS MESSAGE
                  ================================================== */}

              {submitted ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "40px 0",
                  }}
                >
                  <div
                    style={{
                      fontSize: 48,
                      marginBottom: 16,
                    }}
                  >
                    ✅
                  </div>

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
                    style={{
                      color: "var(--text-secondary)",
                      marginBottom: 24,
                    }}
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
                /* ==================================================
                   FORM
                   ================================================== */

                <>
                  <h3 className="contact__form-title">Send Us a Message</h3>

                  {sendError && (
                    <div
                      style={{
                        background: "#fee2e2",
                        color: "#991b1b",
                        padding: "12px 16px",
                        borderRadius: 8,
                        marginBottom: 16,
                        fontSize: "var(--text-sm)",
                      }}
                    >
                      Something went wrong sending your message. Please try
                      again, or email us directly at{" "}
                      <a href={`mailto:${currentLocation.email}`}>
                        {currentLocation.email}
                      </a>
                      .
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate>
                    {/* ==================================================
                        FIRST NAME + LAST NAME
                        ================================================== */}

                    <div className="form-row">
                      {/* FIRST NAME */}
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

                      {/* LAST NAME */}
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

                    {/* ==================================================
                        EMAIL + PHONE
                        ================================================== */}

                    <div className="form-row">
                      {/* EMAIL */}
                      <div className="form-group">
                        <label className="form-label">Email Address *</label>

                        <input
                          type="email"
                          inputMode="email"
                          autoComplete="email"
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

                      {/* PHONE */}
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

                    {/* ==================================================
                        COMPANY
                        ================================================== */}

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

                    {/* ==================================================
                        SUBJECT
                        ================================================== */}

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

                    {/* ==================================================
                        MESSAGE
                        ================================================== */}

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

                    {/* ==================================================
                        SUBMIT
                        ================================================== */}

                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={isSubmitting}
                      style={{
                        width: "100%",
                        justifyContent: "center",
                        padding: "14px",
                        opacity: isSubmitting ? 0.7 : 1,
                        cursor: isSubmitting ? "not-allowed" : "pointer",
                      }}
                    >
                      {isSubmitting ? "Sending..." : "Send Message →"}
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
