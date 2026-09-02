import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Story.css";

export default function OurStory() {
  const cardsRef = useRef([]);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  cardsRef.current = [];

  const addCardRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const cards = cardsRef.current;

    // entrance stagger
    gsap.set(cards, { opacity: 0, y: 20 });
    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: "power2.out",
    });

    // per-card mouse tilt
    const cleanups = cards.map((card) => {
      const xTo = gsap.quickTo(card, "rotationY", { duration: 0.4, ease: "power3.out" });
      const yTo = gsap.quickTo(card, "rotationX", { duration: 0.4, ease: "power3.out" });
      const liftTo = gsap.quickTo(card, "y", { duration: 0.4, ease: "power3.out" });
      const scaleTo = gsap.quickTo(card, "scale", { duration: 0.4, ease: "power3.out" });

      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        xTo(px * 16);
        yTo(-py * 16);
        liftTo(-4);
        scaleTo(1.03);
      };

      const onLeave = () => {
        xTo(0);
        yTo(0);
        liftTo(0);
        scaleTo(1);
      };

      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);

      return () => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      };
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  const values = [
    { num: "01", title: "Real over polished.", body: "We'd rather make something that hits than something that looks safe." },
    { num: "02", title: "Community over content.", body: "The people come first. Content is how we find each other." },
    { num: "03", title: "Nagpur first. Always.", body: "This city is not a Tier-2 footnote. It's the origin story." },
    { num: "04", title: "Show, don't tell.", body: "Everything we believe, we've already done." },
  ];

  return (
    <section className="story" id="story">
    <div className="story-container">
  
      <div className="story-top">
  
        <div className="story-heading">
          <h1 className="story-title">
            We saw a gap.
            <br />
            So we built
            <br />
            what was missing.
          </h1>
        </div>
  
        <div className="story-content">
          <p>
            The cafes were opening. The coffee culture was arriving. Young people in
            Nagpur were going out, creating, building — and nobody was speaking
            their language. A culturally driven, digitally native, creative
            community for the city's youth? That didn't exist.
          </p>
  
          <p>
            House of Hearts launched on December 27, 2023 — with an Instagram post,
            a small team, and a clear conviction: this city's youth deserved
            something that actually represented them.
          </p>
  
          <p>
            We started with carousels. Collaborating with Nagpur's designers and
            writers, we built content that got shared because it felt real. Two
            months in, we had an audience. Three months in, our first event. Within
            two years, a cultural institution from scratch — no funding, no
            playbook, no guarantees.
          </p>
  
          <p>
            Two founders. One city. A community that showed up, every single time.
          </p>
        </div>
  
      </div>
  
      {/* <div className="values-grid">
        {values.map((v) => (
          <div className="value-card" ref={addCardRef} key={v.num}>
            <span>{v.num}</span>
            <h3>{v.title}</h3>
            <p>{v.body}</p>
          </div>
        ))}
      </div> */}
  
    </div>
    {/* KNOW OUR STORY BUTTON */}
<div className="know-story-wrapper">
  <button
    className="know-story-btn"
    onClick={() => setIsStoryOpen(true)}
  >
    Know Our Story
    <span>↗</span>
  </button>
</div>

{/* STORY MODAL */}
{isStoryOpen && (
  <div
    className="story-modal-overlay"
    onClick={() => setIsStoryOpen(false)}
  >
    <div
      className="story-paper"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="story-close"
        onClick={() => setIsStoryOpen(false)}
      >
        ×
      </button>

      <div className="paper-content">
        <p className="paper-label">HOUSE OF HEARTS — OUR STORY</p>

        <h1>
          It started with
          <br />
          a gap.
        </h1>

        <p>
          Nagpur was changing.
        </p>

        <p>
          Cafes were opening. Coffee culture was arriving. Young people were
          creating, building, experimenting and going out.
        </p>

        <p>
          But something was missing.
        </p>

        <p>
          Nobody was really speaking their language.
        </p>

        <p>
          There was no culturally driven, digitally native creative community
          representing the city's youth. So instead of waiting for one to
          appear, we decided to build it ourselves.
        </p>

        <p>
          <strong>House of Hearts launched on December 27, 2023.</strong>
        </p>

        <p>
          No big funding. No perfect plan. No playbook.
        </p>

        <p>
          Just two founders, a small team, an Instagram post and a belief that
          Nagpur's youth deserved something that actually felt like them.
        </p>

        <p>
          We started with content. Carousels. Stories. Collaborations with
          local designers and writers.
        </p>

        <p>
          Slowly, people started noticing.
        </p>

        <p>
          Then they started sharing.
        </p>

        <p>
          Then they started showing up.
        </p>

        <p>
          Two months in, we had an audience.
          <br />
          Three months in, we had our first event.
        </p>

        <p>
          And somewhere along the way, this stopped being just a content page.
        </p>

        <p>
          It became a community.
        </p>

        <p className="paper-ending">
          Nagpur isn't a Tier-2 footnote.
          <br />
          <strong>It's the origin story.</strong>
        </p>

        <p className="paper-signature">
          — House of Hearts
        </p>
      </div>
    </div>
  </div>
)}
  </section>
  );
}