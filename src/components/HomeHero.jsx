export default function HomeHero({ children }) {
  return (
    <section className="hero">
      <div className="hero__bg-grid" />
      <div className="hero__accent" />

      <div className="container">
        <div className="hero__inner">{children}</div>
      </div>
    </section>
  );
}
