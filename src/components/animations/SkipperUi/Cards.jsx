import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Cards.css";

gsap.registerPlugin(ScrollTrigger);

export default function CardStack() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".stack-card");

    cards.forEach((card, i) => {
      gsap.set(card, {
        rotate: gsap.utils.random(-7, 7),
        zIndex: cards.length - i,
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${cards.length * 800}`,
        pin: true,
        scrub: 1,
      },
    });

    cards.forEach((card, i) => {
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

  const cards = [
    {
      number: "01",
      category: "Community",
      title: "People Build Communities.",
      text: "Real connections happen when people meet, create and grow together.",
      color: "paper1",
    },
    {
      number: "02",
      category: "Events",
      title: "Ideas Need A Stage.",
      text: "Every meetup starts as one crazy idea before becoming something memorable.",
      color: "paper2",
    },
    {
      number: "03",
      category: "Creators",
      title: "Create Without Permission.",
      text: "The internet rewards people who ship, not those who wait.",
      color: "paper3",
    },
    {
      number: "04",
      category: "Partners",
      title: "Build Together.",
      text: "Great brands grow through meaningful collaborations.",
      color: "paper4",
    },
    {
      number: "05",
      category: "Future",
      title: "The Next Story Starts Here.",
      text: "Join the movement shaping the future of creative communities.",
      color: "paper5",
    },
  ];

  return (
    <section ref={sectionRef} className="stack-section">
      <div className="stack-container">
        {cards.map((card, i) => (
          <div className={`stack-card ${card.color}`} key={i}>
            <div className="tape tape-left"></div>
            <div className="tape tape-right"></div>

            <div className="card-top">
              <span>{card.category}</span>
              <span>{card.number}</span>
            </div>

            <h2>{card.title}</h2>
            <div className="doodle doodle-lightning"></div>

            <p>{card.text}</p>

            <div className="card-bottom">
              <div className="logo-circle">HOH</div>
              <span>HOUSE OF HEARTS</span>
              
            </div>

            <div className="scribble"></div>
          </div>
        ))}
      </div>
    </section>
  );
}