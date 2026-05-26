import { stats } from "../../data/siteData";

export default function StatsSection() {
  return (
    <section id="stats" aria-label="Key statistics">
      <div className="stats-grid">
        {stats.map((stat) => (
          <article className="stat-cell reveal" key={stat.label}>
            <div className="stat-big">{stat.value}</div>
            <div className="stat-name">{stat.label}</div>
            <p className="stat-note">{stat.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
