import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Cards.css";

import img1 from "../../../assets/review/1.png";
import img2 from "../../../assets/review/2.png";
import img3 from "../../../assets/review/3.png";
import img4 from "../../../assets/review/4.png";
import img5 from "../../../assets/review/5.png";

gsap.registerPlugin(ScrollTrigger);

export default function CardStack() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cardElements = gsap.utils.toArray(".stack-card");

    cardElements.forEach((card, i) => {
      gsap.set(card, {
        rotate: gsap.utils.random(-7, 7),
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

  const cards = [img1, img2, img3, img4, img5];

  return (
    <section ref={sectionRef} className="stack-section">
      <div className="stack-container">
        {cards.map((img, index) => (
          <div className="stack-card" key={index}>
            <img src={img} alt={`Card ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}