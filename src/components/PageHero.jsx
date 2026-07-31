import "../css/PageHero.css";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  backgroundImage,
}) {
  return (
    <section className="page-hero">
      <img src={backgroundImage} alt={title} className="hero-bg-image" />

      <div className="page-hero-overlay">
        <div className="container">
          {eyebrow && <span className="page-hero__eyebrow">{eyebrow}</span>}

          <h1 className="page-hero__title">{title}</h1>

          {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}

          {children}
        </div>
      </div>
    </section>
  );
}
