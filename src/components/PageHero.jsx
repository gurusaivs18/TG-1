import "../css/PageHero.css";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  backgroundImage,
}) {
  return (
    <section
      className="page-hero"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
            }
          : {}
      }
    >
      <div className="container">
        <div className="page-hero__inner">
          {eyebrow && (
            <span className="section-eyebrow section-eyebrow--light">
              {eyebrow}
            </span>
          )}

          <h1 className="page-hero__title">{title}</h1>

          {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}

          {children}
        </div>
      </div>
    </section>
  );
}
