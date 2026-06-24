import { useRef, useEffect } from "react";
import gsap from "gsap";
import "./Events.css";

const events = [
  {
    year: "2022",
    title: "OLA Internship",
    description:
      "Joined OLA as an intern and worked on production systems.",
  },
  {
    year: "2023",
    title: "Frontend Development",
    description:
      "Built React applications and learned modern web development.",
  },
  {
    year: "2024",
    title: "House of Hearts",
    description:
      "Started building a creative community and organizing events.",
  },
  {
    year: "2025",
    title: "Scaling Up",
    description:
      "Focused on products, branding, and community growth.",
  },
  {
    year: "2022",
    title: "OLA Internship",
    description:
      "Joined OLA as an intern and worked on production systems.",
  },
  {
    year: "2023",
    title: "Frontend Development",
    description:
      "Built React applications and learned modern web development.",
  },
  {
    year: "2024",
    title: "House of Hearts",
    description:
      "Started building a creative community and organizing events.",
  },
  {
    year: "2025",
    title: "Scaling Up",
    description:
      "Focused on products, branding, and community growth.",
  },  {
    year: "2023",
    title: "Frontend Development",
    description:
      "Built React applications and learned modern web development.",
  },
  {
    year: "2024",
    title: "House of Hearts",
    description:
      "Started building a creative community and organizing events.",
  },
  {
    year: "2025",
    title: "Scaling Up",
    description:
      "Focused on products, branding, and community growth.",
  },
  
  
];

export default function Events() {
  const panelsRef = useRef([]);

  useEffect(() => {
    const panels = panelsRef.current;

    panels.forEach((panel) => {
      panel.addEventListener("mouseenter", () => {
        gsap.to(panels, {
          flex: 1,
          duration: 0.6,
          ease: "power3.out",
        });

        gsap.to(panel, {
          flex: 5,
          duration: 0.8,
          ease: "power4.out",
        });
      });
    });
  }, []);

  return (
    <section className="events">
      {events.map((event, i) => (
        <div
          key={i}
          ref={(el) => (panelsRef.current[i] = el)}
          className="panel"
        >
          <div className="vertical">
            <span>{event.year}</span>
            <h3>{event.title}</h3>
          </div>

          <div className="content">
            <span>{event.year}</span>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}