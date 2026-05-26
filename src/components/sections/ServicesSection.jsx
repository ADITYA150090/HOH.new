import { services } from "../../data/siteData";
import SectionHeader from "../ui/SectionHeader";

export default function ServicesSection() {
  return (
    <section id="services" className="cream-section">
      <div className="max-w">
        <SectionHeader eyebrow="What We Do" title="Content, events, creators, partnerships." dark>
          We are the cultural layer between Nagpur's youth and the brands, venues, colleges, and creators trying to reach
          them.
        </SectionHeader>
        <div className="svc-list">
          {services.map((service, index) => (
            <article className="svc-item reveal" key={service.title}>
              <div className="svc-num-col">
                <span className="svc-num">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="svc-content">
                <h3 className="svc-title">{service.title}</h3>
                <p className="svc-body">{service.body}</p>
                <div className="svc-tags">
                  {service.tags.map((tag) => (
                    <span className="svc-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="svc-icon-col">
                <span className="svc-arrow">-&gt;</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
