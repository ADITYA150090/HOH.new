import { useState } from "react";
import "./PartnerSection.css"
const partnershipTypes = [
  "Event Partner",
  "Content Partner",
  "Community Partner",
  "Creator Campaign",
  "Not sure yet",
];

export default function PartnerSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="partner-section" id="partner">
      <div className="partner-container">
        <span className="partner-label">Partner With Us</span>

        <h2 className="partner-heading">
          You need to reach
          <br />
          Nagpur's youth.
          <br />
          <span>We already have them.</span>
        </h2>

        <div className="partner-form-card">
          {isSubmitted ? (
            <div className="partner-success">
              <h3>Message Sent 🎉</h3>
              <p>We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="partner-form">
              <h3 className="partner-form-heading">Let's Talk.</h3>

              <p className="partner-form-description">
                Tell us what you're building. We'll tell you how we can help.
              </p>

              <div className="partner-row">
                <div className="partner-field">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Rohan Sharma"
                    required
                  />
                </div>

                <div className="partner-field">
                  <label>Brand / Organisation</label>
                  <input
                    type="text"
                    name="brand"
                    placeholder="Your Brand"
                  />
                </div>
              </div>

              <div className="partner-field">
                <label>Type of Partnership</label>
                <select required defaultValue="">
                  <option value="" disabled>
                    Select one...
                  </option>

                  {partnershipTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="partner-field">
                <label>Your Goal or Idea</label>
                <textarea
                  rows="5"
                  placeholder="What are you trying to build?"
                />
              </div>

              <div className="partner-field">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="you@brand.com"
                  required
                />
              </div>

              <button type="submit" className="partner-submit-btn">
                Let's Build Something
                <span>→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}