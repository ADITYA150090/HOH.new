import { useState } from "react";
import "./WorkSection.css";
import TV from "../../assets/Texture/TV.webp";

const services = [
  {
    no: "01",
    title: "Content Creation & Digital Storytelling",
    body: "Reels, carousels, vox pops, and brand films rooted in cultural insight — not algorithm-chasing. Content Gen Z actually saves and shares.",
    tags: ["Carousels", "Reels", "Vox Pops", "Brand Films"],
  },
  {
    no: "02",
    title: "Event Production & Experience Design",
    body: "From intimate cultural nights to city-scale events — concept, plan, execute end-to-end. We pulled 2,000 for a debut event with zero prior experience.",
    tags: ["Concept", "Execution", "Logistics", "Marketing"],
  },
  {
    no: "03",
    title: "Brand & Venue Partnerships",
    body: "We bring brands into conversations their audience is already having — not as sponsors, but as participants.",
    tags: ["Strategy", "Integration", "Activation"],
  },
  {
    no: "04",
    title: "Creator Ecosystem & Collaborations",
    body: "Relationships with Nagpur's most influential creators. The right voices for maximum resonance.",
    tags: ["Influencer", "Outreach", "Campaigns"],
  },
  {
    no: "05",
    title: "Community Experiences & Cultural Events",
    body: "Book exchanges, art popups, open mics, themed nights — each one a statement about what Nagpur's culture can look like.",
    tags: ["Workshops", "Experiences", "Programming"],
  },
  {
    no: "06",
    title: "Social Media & Campaign Management",
    body: "Full social presences managed with the cultural fluency that built HoH.",
    tags: ["Strategy", "Production", "Analytics"],
  },
];

export default function Services() {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll
    ? services
    : services.slice(0, 2);

  return (
    <section id="services">
      <div className="max-w">
        <div className="services-header">
          <div>
            <div className="services-label">
              <span></span>
              What We Do
            </div>

            <h2 className="services-h2">
              One community.
              <span className="acc"> Six </span>
              ways we can help you.
            </h2>
          </div>

          <img
            src={TV}
            alt="TV Texture"
            className="services-tv"
          />
        </div>

        <p className="services-intro">
          For brands reaching Gen Z, venues wanting to fill rooms,
          or creators wanting to grow — built to work for all of it.
        </p>

        <div className="svc-list">
          {visibleServices.map((service) => (
            <div key={service.no} className="svc-item">
              <div className="svc-num-col">
                <span className="svc-num">{service.no}</span>
              </div>

              <div className="svc-content">
                <div className="svc-title">
                  {service.title}
                </div>

                <div className="svc-body">
                  {service.body}
                </div>

                <div className="svc-tags">
                  {service.tags.map((tag) => (
                    <span key={tag} className="svc-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="svc-icon-col">
                <div className="svc-arrow">↗</div>
              </div>
            </div>
          ))}
        </div>

        <div className="services-more">
          <button
            className="btn btn-ghost-dark"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll
              ? "Show Less"
              : "See More Services"}
          </button>
        </div>

        <div className="services-cta">
         
        </div>
      </div>
    </section>
  );
}