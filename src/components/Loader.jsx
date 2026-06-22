import "../css/Loader.css";

export default function Loader() {
  return (
    <div className="preloader">
      <div className="loader-content">
        <div className="loader-ring"></div>
        <h2 className="loader-logo">Target One</h2>
        <p>Loading Experience...</p>
      </div>
    </div>
  );
}