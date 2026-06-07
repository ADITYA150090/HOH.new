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
          House of Hearts is Nagpur's creative house for Gen Z — a platform that discovers talent, curates experiences they actually care about, and builds a cultural identity that has never existed here before.


          </p>
          <p>
          We create content that represents the city's youth. We host events they want to attend. We connect creators, brands, and communities under one roof. Everything we do contributes to a larger movement shaping the future of youth culture in Nagpur.
          </p>
          <Button variant="ghost" onClick={() => toRoute("/story")}>
            Our Full Story
          </Button>
        </div>
      </div>
    </section>
  );
}
