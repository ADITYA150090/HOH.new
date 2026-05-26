import { toRoute } from "../../hooks/useHashRoute";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section id="hero" aria-label="Hero">
      <div className="hero-glow" />
      <div className="hero-glow2" />
      <div className="hero-rule left" />
      <div className="hero-rule right" />
      <div className="hero-type-wrap">
        <div className="hero-badge">Nagpur / Est. 2023</div>
        <h1 className="hero-h">
          <span className="line">Nagpur's</span>
          <span className="line pink">Youth</span>
          <span className="line outline">Culture</span>
          <span className="line sm">Community.</span>
        </h1>
      </div>
      <div className="hero-bottom">
        <p className="hero-sub">
          House of Hearts builds the events, content, and experiences that Gen Z actually shows up for.
        </p>
        <div className="hero-actions">
          <Button onClick={() => toRoute("/partner")}>Partner With Us</Button>
          <Button variant="ghost" onClick={() => toRoute("/work")}>
            See Our Work
          </Button>
        </div>
        <div className="hero-stats" aria-label="Highlights">
          <div className="hero-stat-row">
            <span className="hero-stat-num">200K+</span>
            <span className="hero-stat-label">Reach</span>
          </div>
          <div className="hero-stat-row">
            <span className="hero-stat-num">7K+</span>
            <span className="hero-stat-label">Footfall</span>
          </div>
          <div className="hero-stat-row">
            <span className="hero-stat-num">5</span>
            <span className="hero-stat-label">Sold-out events</span>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
