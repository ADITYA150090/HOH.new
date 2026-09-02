import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Cards.css";

import img1 from "../../../assets/review/1.png";
import img2 from "../../../assets/review/2.png";
import img3 from "../../../assets/review/3.png";
import img4 from "../../../assets/review/4.png";
import img5 from "../../../assets/review/5.png";
import img6 from "../../../assets/review/6.png";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    id: 1,
    bgColor: "#FF4B72",
    textColor: "#000000",
    quote: "If you're a brand looking to build community through crazy experiences, House of Hearts is a team I'd happily recommend. I absolutely loved being a part of their event.",
    name: "Simran Dhameja",
    role: "CEO & Founder | Shark.en India ",
    stars: 5,
    avatar: img1,
  },
  {
    id: 2,
    bgColor: "#2B95FF",
    textColor: "#ffffff",
    quote: "If you're a brand looking to build community through crazy experiences, House of Hearts is a team I'd happily recommend. I absolutely loved being a part of their event.",
    name: "Simran Dhameja",
    role: "CEO & Founder | Shark.en India ",
    stars: 5,
    avatar: img2,
  },
  {
    id: 3,
    bgColor: "#FFD500",
    textColor: "#000000",
    quote: "If you're a brand looking to build community through crazy experiences, House of Hearts is a team I'd happily recommend. I absolutely loved being a part of their event..",
    name: "Simran Dhameja",
    role: "CEO & Founder | Shark.en India ",
    stars: 5,
    avatar: img3,
  },
  {
    id: 4,
    bgColor: "#A855F7",
    textColor: "#ffffff",
    quote: "HoH made collaboration feel less like a campaign and more like a community showing up. A true game changer for creators in the city.",
    name: "Sahil Verma",
    role: "Creator, Nagpur",
    stars: 5,
    avatar: img4,
  },
  {
    id: 5,
    bgColor: "#05C793",
    textColor: "#000000",
    quote: "Best folks to partner with, always. Their community-centric approach and mindset are what make me come back for creative and conceptual experiential work.",
    name: "Bhavik Mehta",
    role: "Founder | Matra, Thinkin’Bird Communications",
    stars: 5,
    avatar: img5,
  },
  {
    id: 6,
    bgColor: "#2B95FF",
    textColor: "#ffffff",
    quote: "More than an event partner, House of Hearts brings cultural insight, creative thinking, and flawless execution to every collaboration. A team we'd gladly work with again.",
    name: "Azeem Khan",
    role: "Founder | The Tie Up ",
    stars: 5,
    avatar: img6,
  },
  

];

export default function CardStack() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cardElements = gsap.utils.toArray(".stack-card");

    cardElements.forEach((card, i) => {
      gsap.set(card, {
        rotate: gsap.utils.random(-6, 6),
        zIndex: cardElements.length - i,
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${cardElements.length * 800}`,
        pin: true,
        scrub: 1,
      },
    });

    cardElements.forEach((card, i) => {
      const isLast = i === cardElements.length - 1;
  if (isLast) return; // keep the last card pinned in place, don't animate it away
      const dir = i % 2 === 0 ? -1 : 1;

      tl.to(card, {
        x: dir * 1600,
        y: -150,
        rotate: dir * 20,
        opacity: 0,
        duration: 1,
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={sectionRef} className="stack-section">
      <div className="stack-container">
        {cardsData.map((card, index) => (
          <div
            className="stack-card"
            key={card.id || index}
            style={{ backgroundColor: card.bgColor, color: card.textColor }}
          >
            <div className="card-quote-mark">“</div>
            <div className="card-inner">
              <div className="card-left-content">
                <p className="card-quote-text">{card.quote}</p>
                <div className="card-author-block">
                  <div className="author-title-line">
                    <span className="author-name">{card.name}</span>
                    <span className="author-stars">{"★".repeat(card.stars)}</span>
                  </div>
                  <div className="author-role">{card.role}</div>
                </div>
              </div>

              {card.avatar && (
                <div className="card-avatar-frame">
                  <img src={card.avatar} alt={card.name} className="card-avatar-img" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}