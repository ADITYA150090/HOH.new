import { work } from "../../data/siteData";
import SectionHeader from "../ui/SectionHeader";

export default function WorkSection({ compact = false }) {
  const items = compact ? work.slice(0, 4) : work;

  return (
    <section id="work" className="work-section">
      <div className="work-header max-w">
        <SectionHeader eyebrow="Our Work" title="Proof that the city shows up.">
          Formats, partnerships, and cultural moments with real attendance, real content, and real community memory.
        </SectionHeader>
      </div>
      <div className="work-track-wrap">
        <div className={compact ? "work-track compact" : "work-track"}>
          {items.map((item, index) => (
            <article className="work-card reveal-scale" key={item.name}>
              <div className={`wc-bg wc-${(index % 6) + 1}`} />
              <div className="wc-overlay" />
              <div className="wc-date">{item.date}</div>
              <h3 className="wc-name">{item.name}</h3>
              <div className="wc-metrics">
                {item.metrics.map((metric) => (
                  <span className="wc-metric" key={metric}>
                    {metric}
                  </span>
                ))}
              </div>
              <div className="wc-tag">{item.tag}</div>
            </article>
          ))}
        </div>
      </div>
      <div className="work-drag-hint">
        <div className="drag-line" />
        <span className="drag-text">Drag sideways</span>
      </div>
    </section>
  );
}
