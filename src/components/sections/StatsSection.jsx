import { stats } from "../../data/siteData";
import  CountUp from "../CountUp/CountUp"


export default function StatsSection() {
  return (
    <section id="stats" aria-label="Key statistics">
      <div className="stats-grid">
        {stats.map((stat) => (
          <article className="stat-cell reveal" key={stat.label}>
           <div className="stat-big">
  <CountUp
    from={0}
    to={stat.value }
    separator=","
    direction="up"
    duration={2}
    className="count-up-text"
    
  />
  
</div>
            <div className="stat-name">{stat.label}</div>
            <p className="stat-note">{stat.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
