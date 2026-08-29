
import CursorImageTrail from "../../components/CursorImageTrail";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">

      {/* Cursor Trail */}
      <CursorImageTrail />

      {/* Background Grid */}
      <div className="hero-grid" />

      {/* Floating Shapes */}
      <svg viewBox="0 0 100 100" className="shape star-outline">
        <polygon points="50 0, 61 35, 98 35, 68 57, 79 91, 50 70, 21 91, 32 57, 2 35, 39 35" fill="#ff4f79" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
      </svg>
      <svg viewBox="0 0 100 100" className="shape orange-star">
        <polygon points="50 0, 61 35, 98 35, 68 57, 79 91, 50 70, 21 91, 32 57, 2 35, 39 35" fill="#d9ff00" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
      </svg>
      {/* <svg viewBox="0 0 100 180" className="shape green-shape">
        <polygon points="100 0, 23 83, 46 79, 15 124, 38 121, 0 180, 76 103, 53 104, 88 60, 60 67" fill="#00e676" stroke="#000000" strokeWidth="5" strokeLinejoin="round" />
      </svg> */}
      <div className="shape blob-shape" />
      <svg viewBox="0 0 100 100" className="shape starburst">
        <polygon points="100 50, 78.98 57.76, 93.3 75, 71.21 71.21, 75 93.3, 57.76 78.98, 50 100, 42.24 78.98, 25 93.3, 28.79 71.21, 6.7 75, 21.02 57.76, 0 50, 21.02 42.24, 6.7 25, 28.79 28.79, 25 6.7, 42.24 21.02, 50 0, 57.76 21.02, 75 6.7, 71.21 28.79, 93.3 25, 78.98 42.24" fill="#1F51FF" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
      </svg>
      {/* <svg viewBox="0 0 100 100" className="shape blob">
        <path d="M 87.45 45.02 C 90.99 50, 93.97 62.91, 92.05 69.35 C 90.14 75.8, 74.69 78.49, 71.01 83.22 C 67.33 87.95, 56.49 95.12, 49.74 96.95 C 42.99 98.79, 34.41 84.13, 25.99 85.79 C 17.56 87.44, 13.2 73.65, 14.3 66.9 C 15.41 60.16, 11.25 50, 11.2 44.3 C 11.14 38.59, 12.75 26.06, 16.84 21.25 C 20.92 16.44, 33.7 14.32, 38.83 11.12 C 43.95 7.93, 56.83 2.53, 62.85 5.6 C 68.88 8.67, 76.53 19.39, 79.11 24.51 C 81.69 29.63, 83.91 40.04, 87.45 45.02 Z" fill="#dca2f7" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
      </svg> */}
      {/* <svg viewBox="0 0 100 100" className="shape wiggly-shape">
        <polygon points="50 0, 61 35, 98 35, 68 57, 79 91, 50 70, 21 91, 32 57, 2 35, 39 35" fill="#ffbd2e" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
      </svg> */}
      <div className="shape neon-puddle" />

      {/* Floating Cards */}
      {/* <div className="creator-card card-left">
        <span>6</span>
      </div>

      <div className="creator-card card-right">
        <span>7</span>
      </div> */}

      {/* Main Content */}
      <div className="hero-content">
        <h1>
          <br />
          Let's Build <br />
          <span>Culture</span>
        </h1>

        <p>
          A creative collective from Nagpur building  <br /> culture through content, community, and celebration.
        </p>

        <button className="hero-btn">
          PARTNER WITH US

        </button>
      </div>
    </section>
  );
}