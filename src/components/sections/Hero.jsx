
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
      <div className="shape star-outline" />
      <div className="shape orange-star" />
      {/* <div className="shape globe" /> */}
      <div className="shape green-shape" />
      <div className="shape blob-shape" />
      <div className="shape starburst" />
      <div className="shape blob" />
<div className="shape flower-shape" />
{/* <div className="shape scalloped-shape" /> */}
<div className="shape wiggly-shape" />
<div className="shape starbrust" />

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
        A creative collective from Nagpur building  <br/> culture through content, community, and celebration.
        </p>

        <button className="hero-btn">
          PARTNER WITH US
          
        </button>
      </div>
    </section>
  );
}