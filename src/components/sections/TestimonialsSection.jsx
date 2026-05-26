import { testimonials } from "../../data/siteData";

export default function TestimonialsSection() {
  return (
    <section id="testi">
      <div className="max-w testi-grid">
        <div className="testi-feature reveal">
          <div className="testi-quote-mark">“</div>
          <p className="testi-quote">
            We build for the people who do not just like posts. They buy tickets, bring friends, make reels, and turn up.
          </p>
          <div className="testi-cite">House of Hearts</div>
        </div>
        <div className="testi-cards">
          {testimonials.map((item) => (
            <article className="testi-card reveal-right" key={item.quote}>
              <p className="testi-card-quote">{item.quote}</p>
              <div className="testi-person">
                <div className="testi-avatar">{item.name.slice(0, 1)}</div>
                <div>
                  <div className="testi-name">{item.name}</div>
                  <div className="testi-role">{item.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
