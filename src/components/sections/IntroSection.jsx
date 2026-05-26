import { toRoute } from "../../hooks/useHashRoute";
import Button from "../ui/Button";

export default function IntroSection() {
  return (
    <section id="what" className="dark-section">
      <div className="max-w intro-grid">
        <div className="reveal">
          <div className="label">What is House of Hearts?</div>
          <h2 className="intro-title">
            Not a media page.
            <br />
            Not an event company.
            <br />
            <span>A community.</span>
          </h2>
        </div>
        <div className="intro-copy reveal-right">
          <p>
            House of Hearts is Nagpur's creative home for Gen Z: a platform that discovers the city's talent, curates
            experiences they care about, and builds a cultural identity that feels like home.
          </p>
          <p>
            We create content, host events, connect creators, and give brands a way into youth culture without losing the
            room.
          </p>
          <Button variant="ghost" onClick={() => toRoute("/story")}>
            Our Full Story
          </Button>
        </div>
      </div>
    </section>
  );
}
