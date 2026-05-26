import { useState } from "react";

const types = ["Event Partner", "Content Partner", "Community Partner", "Creator Campaign", "Not sure yet"];

export default function PartnerSection() {
  const [sent, setSent] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="partner">
      <div className="max-w">
        <div className="label reveal">Partner With Us</div>
        <h2 className="partner-head reveal">
          You need to reach
          <br />
          Nagpur's youth.
          <br />
          <span>We already have them.</span>
        </h2>
        <div className="partner-grid">
          <div className="reveal">
            <p className="partner-intro">
              Trusted by The Beer Cafe, TEDxNagpur, Ramdeobaba University, and more. HoH is Nagpur's credible youth
              platform: real community, engaged audience, and proven execution.
            </p>
            <div className="ptype-list">
              {types.slice(0, 4).map((type) => (
                <article className="ptype" key={type}>
                  <div className="ptype-title">{type}</div>
                  <p className="ptype-desc">
                    Strategy, social distribution, event execution, and creator involvement shaped around your goal.
                  </p>
                </article>
              ))}
            </div>
          </div>
          <div className="partner-right reveal-right">
            <div className="proof-box">
              <div className="proof-title">What You Actually Get</div>
              {["UGC and footfall", "City-wide creator network", "Organic credibility", "Full-spectrum execution"].map(
                (proof) => (
                  <div className="proof-item" key={proof}>
                    <span className="proof-bullet">-&gt;</span>
                    <p className="proof-text">{proof}</p>
                  </div>
                ),
              )}
            </div>
            <div className="form-box">
              {sent ? (
                <div className="form-done">
                  <h4>Message Sent!</h4>
                  <p>We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <div className="form-title">Let's Talk.</div>
                  <p className="form-sub">Tell us what you're building. We'll tell you how we can help.</p>
                  <div className="frow">
                    <label className="fg">
                      Your Name
                      <input required name="name" placeholder="Rohan Sharma" />
                    </label>
                    <label className="fg">
                      Brand / Organisation
                      <input name="brand" placeholder="Your Brand" />
                    </label>
                  </div>
                  <label className="fg">
                    Type of Partnership
                    <select required name="partnershipType" defaultValue="">
                      <option value="" disabled>
                        Select one...
                      </option>
                      {types.map((type) => (
                        <option key={type}>{type}</option>
                      ))}
                    </select>
                  </label>
                  <label className="fg">
                    Your Goal or Idea
                    <textarea name="message" placeholder="What are you trying to build?" />
                  </label>
                  <label className="fg">
                    Email
                    <input required type="email" name="email" placeholder="you@brand.com" />
                  </label>
                  <button className="btn-submit" type="submit">
                    Let's Build Something <span>-&gt;</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
