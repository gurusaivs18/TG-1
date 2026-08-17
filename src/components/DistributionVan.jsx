import "../css/DistributionVan.css";
import targetOneLogo from "../assets/Company_logos/targetone_transparent.webp";

export default function DistributionVan() {
  return (
    <div className="distribution-van" aria-hidden="true">
      <div className="distribution-van__scene">
        {/* Dust */}
        <div className="van-dust">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        {/* Roof-mounted flag — anchored at the rear-top corner of the van,
            trailing backward. z-index sits above the van so it can never
            be crossed by anything on the wheels. */}
        <div className="van-banner-wrap">
          <div className="van-pole" />
          <div className="van-banner">
            <img src={targetOneLogo} alt="" />
          </div>
        </div>

        {/* Van */}
        <svg
          className="van-svg"
          viewBox="0 0 760 330"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="vanBodyGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="55%" stopColor="#f2f2f2" />
              <stop offset="100%" stopColor="#e2e2e2" />
            </linearGradient>
            <linearGradient id="vanWindowGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3a4652" />
              <stop offset="55%" stopColor="#161c22" />
              <stop offset="100%" stopColor="#05070a" />
            </linearGradient>
            <linearGradient id="vanRedGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9a1119" />
              <stop offset="100%" stopColor="#650d13" />
            </linearGradient>
          </defs>

          {/* Shadow */}
          <ellipse cx="375" cy="295" rx="300" ry="18" className="van-shadow" />

          {/* Light pool on the road, cast forward from the headlight.
              Drawn early so the bumper/wheel painted later sit on top
              of its left portion — only the forward part shows. */}
          <ellipse
            cx="740"
            cy="267"
            rx="75"
            ry="11"
            className="van-road-glow"
          />

          {/* Main body */}
          <path
            className="van-body"
            d="
              M115 250
              L115 135
              Q115 105 145 105
              L510 105
              Q545 105 565 130
              L655 205
              Q675 222 675 250
              L675 267
              L115 267
              Z
            "
          />

          {/* Dark red lower section */}
          <path
            className="van-red-body"
            d="
              M115 225
              L665 225
              L675 250
              L675 267
              L115 267
              Z
            "
          />

          {/* Red side graphic */}
          <path
            className="van-red-stripe"
            d="
              M145 110
              L235 110
              L330 225
              L245 225
              Z
            "
          />

          {/* Roofline highlight — subtle painted-metal sheen */}
          <path
            className="van-roof-highlight"
            d="M150 108 L505 108 Q525 108 538 120 L520 122 L150 122 Z"
          />

          {/* Cabin */}
          <path
            className="van-window"
            d="
              M475 122
              L530 122
              Q548 122 563 140
              L625 200
              L475 200
              Z
            "
          />

          {/* Windshield */}
          <path
            className="van-window"
            d="
              M540 125
              Q551 127 563 141
              L615 194
              L548 194
              Z
            "
          />

          {/* Door */}
          <path className="van-door" d="M470 120 L470 225" />

          {/* Door handle */}
          <rect
            x="500"
            y="165"
            width="28"
            height="5"
            rx="2"
            className="van-handle"
          />

          {/* Front bumper */}
          <path
            className="van-bumper"
            d="M650 245 L690 245 Q700 245 700 258 L700 267 L660 267 Z"
          />

          {/* Headlight — plain housing + lens, flush against the body.
              No glow halo here; the light effect lives only in the
              road-reflection ellipse above. */}

          {/* Rear */}
          <rect
            x="105"
            y="155"
            width="12"
            height="80"
            rx="3"
            className="van-rear-light"
          />

          {/* Wheels — static chrome hub + lug nuts */}
          <g className="van-wheel van-wheel--rear">
            <circle cx="220" cy="267" r="47" className="wheel-outer" />
            <circle cx="220" cy="267" r="30" className="wheel-inner" />
            <circle cx="220" cy="267" r="11" className="wheel-hub" />
            <g className="wheel-lugs" transform="translate(220 267)">
              <circle cx="0" cy="-18" r="2.4" />
              <circle cx="15.6" cy="-9" r="2.4" />
              <circle cx="15.6" cy="9" r="2.4" />
              <circle cx="0" cy="18" r="2.4" />
              <circle cx="-15.6" cy="9" r="2.4" />
              <circle cx="-15.6" cy="-9" r="2.4" />
            </g>
          </g>

          <g className="van-wheel van-wheel--front">
            <circle cx="595" cy="267" r="47" className="wheel-outer" />
            <circle cx="595" cy="267" r="30" className="wheel-inner" />
            <circle cx="595" cy="267" r="11" className="wheel-hub" />
            <g className="wheel-lugs" transform="translate(595 267)">
              <circle cx="0" cy="-18" r="2.4" />
              <circle cx="15.6" cy="-9" r="2.4" />
              <circle cx="15.6" cy="9" r="2.4" />
              <circle cx="0" cy="18" r="2.4" />
              <circle cx="-15.6" cy="9" r="2.4" />
              <circle cx="-15.6" cy="-9" r="2.4" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
