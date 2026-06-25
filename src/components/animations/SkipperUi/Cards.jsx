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
        rotate: gsap.utils.random(-8, 8),
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
        const direction = i % 2 === 0 ? -1 : 1;
      
        tl.to(card, {
          x: direction * 1600,
          y: -180,
          rotate: direction * 25,
          opacity: 0,
          duration: 1,
        });
      });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDsSKcQedWs1uK4Nz-tokFTV4tjhI99lL4OptFf357JH1FBaj14svViIlu&s=10",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
  ];

  return (
    <section ref={sectionRef} className="stack-section">
      <div className="stack-container">
        <h1></h1>
        {images.map((img, index) => (
          <div className="stack-card" key={index}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}