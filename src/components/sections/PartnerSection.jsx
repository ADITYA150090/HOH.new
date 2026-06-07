import { useState } from "react";

const types = [
  "Event Partner",
  "Content Partner",
  "Community Partner",
  "Creator Campaign",
  "Not sure yet",
];

export default function PartnerSection() {
  const [sent, setSent] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="partner">
      <div className="max-w">
        <div className="label">Partner With Us</div>

        <h2 className="partner-head">
          You need to reach
          <br />
          Nagpur's youth.
          <br />
          <span>We already have them.</span>
        </h2>

        <div className="form-box">
          {sent ? (
            <div className="form-done">
              <h4>Message Sent!</h4>
              <p>We'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="form-title">Let's Talk.</div>
              <p className="form-sub">
                Tell us what you're building. We'll tell you how we can help.
              </p>

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
                <textarea
                  name="message"
                  placeholder="What are you trying to build?"
                />
              </label>

              <label className="fg">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@brand.com"
                />
              </label>

              <button className="btn-submit" type="submit">
                Let's Build Something <span>→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}