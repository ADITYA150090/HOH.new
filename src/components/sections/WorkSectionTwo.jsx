import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./WorkSectionTwo.css";

const projects = [
  {
    id: "villa",
    title: "Villa Project",
    category: "architecture",
    desc: "Luxury architecture and interior visualization for modern living.",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1600",
  },
  {
    id: "drone",
    title: "Drone Cinematics",
    category: "film",
    desc: "High-end FPV footage and cinematic storytelling.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600",
  },
  {
    id: "travel",
    title: "Travel Campaign",
    category: "branding",
    desc: "Creative direction and visual identity for tourism brands.",
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1600",
  },
  {
    id: "resort",
    title: "Resort Branding",
    category: "branding",
    desc: "Brand strategy, photography and digital experience.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600",
  },
];

export default function WorkSectionTwo() {
  const [active, setActive] = useState(null); // active project (with id)
  const [rect, setRect] = useState(null); // current animation bounding box
  const [closing, setClosing] = useState(false);
  const cardRefs = useRef({});
  const swiperRef = useRef(null);

  const openCard = (project, e) => {
    // pause autoplay while a card is expanded
    swiperRef.current?.autoplay?.stop();

    const cardEl = e.currentTarget;
    const bounds = cardEl.getBoundingClientRect();
    setRect(bounds);
    setActive(project);
    // next frame: trigger the expand animation
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setRect(null); // null rect = animate to fullscreen state
      });
    });
  };

  const closeCard = () => {
    const originEl = cardRefs.current[active.id];
    if (originEl) {
      const bounds = originEl.getBoundingClientRect();
      setClosing(true);
      setRect(bounds); // animate back down to the card's position
      setTimeout(() => {
        setActive(null);
        setRect(null);
        setClosing(false);
        // resume autoplay after closing
        swiperRef.current?.autoplay?.start();
      }, 600);
    } else {
      setActive(null);
      swiperRef.current?.autoplay?.start();
    }
  };

  return (
    <section className="portfolio">
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        centeredSlides
        loop
        loopAdditionalSlides={projects.length}
        slidesPerGroup={1}
        watchSlidesProgress
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        grabCursor
        slidesPerView={1.7}
        spaceBetween={-220}
        speed={900}
        className="portfolio-swiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id}>
            <div
              ref={(el) => {
                if (el) cardRefs.current[project.id] = el;
              }}
              className="portfolio-card"
              onClick={(e) => openCard(project, e)}
              style={{
                backgroundImage: `url(${project.image})`,
                visibility:
                  active?.id === project.id && !closing
                    ? "hidden"
                    : "visible",
              }}
            >
              <div className="portfolio-overlay" />

              <div className="portfolio-content">
                <span className="eyebrow">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")} —{" "}
                  {project.category}
                </span>
                <h2>{project.title}</h2>
                <div className="divider" />
                <p>{project.desc}</p>
                <div className="cta">
                  <span>View project</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {active && (
        <div
          className={`portfolio-expanded-backdrop ${
            rect ? "" : "backdrop-visible"
          }`}
          onClick={closeCard}
        >
          <div
            className="portfolio-expanded-card"
            onClick={(e) => e.stopPropagation()}
            style={
              rect
                ? {
                    position: "fixed",
                    top: rect.top,
                    left: rect.left,
                    width: rect.width,
                    height: rect.height,
                    borderRadius: "12px",
                    transform: "scale(1)",
                  }
                : {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    borderRadius: "0px",
                  }
            }
          >
            <div
              className="portfolio-card-inner"
              style={{ backgroundImage: `url(${active.image})` }}
            >
              <div className="portfolio-overlay" />
              <button className="close-btn" onClick={closeCard}>
                <span>close</span>
                <span className="close-x">×</span>
              </button>
              <div className="portfolio-content">
                <span className="eyebrow">
                  {String(
                    projects.findIndex((p) => p.id === active.id) + 1
                  ).padStart(2, "0")}{" "}
                  / {String(projects.length).padStart(2, "0")} —{" "}
                  {active.category}
                </span>
                <h2>{active.title}</h2>
                <div className="divider" />
                <p>{active.desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}