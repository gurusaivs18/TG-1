import "../css/Loader.css";
// import targetOneLogo from "../assets/targetone_transparent.png"; // adjust the path
export default function Loader() {
  return (
    <div className="preloader">
      <div className="loader-content">
        <div className="loader-ring"></div>
        <div className="loader-brand">
          {/* <img src={targetOneLogo} alt="Target One" className="loader-logo" /> */}
          <h2 className="loader-title">Target One</h2>
        </div>{" "}
        <p className="bottom-text">please Wait...</p>
      </div>
    </div>
  );
}
