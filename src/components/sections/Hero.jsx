import { toRoute } from "../../hooks/useHashRoute";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      {/* Background Grid */}
      <div className="hero-grid" />

      {/* Floating Shapes */}
      <div className="shape star-outline" />
      <div className="shape orange-star" />
      <div className="shape globe" />
      <div className="shape green-shape" />

      {/* Floating Cards */}
      <div className="creator-card card-left">
       
        <span>6</span>
      </div>

      <div className="creator-card card-right">
        
        <span>7</span>
      </div>

      {/* Main Content */}
      <div className="hero-content">
        <h1>
           <br />
          Let's Build <br />
          <span>Culture</span>
        </h1>

        <p>
          Find the perfect team for your business goals.
        </p>

        <button className="hero-btn">
          GET A QUOTE
          <span>IN 2 MINS</span>
        </button>
      </div>
    </section>
  );
}