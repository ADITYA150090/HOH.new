import { values } from "../../data/siteData";

export default function StorySection() {
  return (
    <section id="about" >
      <div className="max-w about-grid">
        <div className="about-story reveal">
          <div className="label">Our Story</div>
          <p>
            HoH began with a simple belief: Nagpur has more creative energy than it has cultural infrastructure.
            House of Hearts exists to close that gap.
          </p>
          <p>
            What started as a youth community has become a platform for events, creator discovery, social storytelling,
            and brand collaborations. Every project is a small argument that this city deserves sharper culture and
            bigger rooms.
          </p>
          <div className="values">
            {values.map((value, index) => (
              <article className="value-box" key={value.title}>
                <div className="value-n">{String(index + 1).padStart(2, "0")}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-desc">{value.desc}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="about-right reveal-right">
          <h2 className="about-big">
            Nagpur
            <br />
            <span className="pink">first.</span>
            <br />
            <span className="ghost">Always.</span>
          </h2>
          <div className="founders">
            {["Community", "Content", "Events"].map((name) => (
              <article className="founder" key={name}>
                <div className="founder-av">{name[0]}</div>
                <div>
                  <div className="founder-name">{name}</div>
                  <div className="founder-role">House of Hearts pillar</div>
                </div>
              </article>
            ))}
          </div>
          <div className="moramba">
            <h4>Powered by Moramba Media</h4>
            <p>Strategy, production, social storytelling, and cultural execution under one roof.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
