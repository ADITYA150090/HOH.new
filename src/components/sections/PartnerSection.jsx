import { useState } from "react";
import "./PartnerSection.css";


import Letter from "../../assets/Texture/Letter.png"

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

        {/* Left Side */}
        <div className="partner-left">

          <span className="partner-label">
            Partner With Us
          </span>

          <div className="partner-image">
            {/* Replace with your image */}
            <img
              src={Letter}
              alt="Partner Illustration"
            />
          </div>

          <h2 className="partner-heading">
            You need to reach
            <br />
            Nagpur's youth.
            <br />
            <span>We already have them.</span>
          </h2>

          <p className="partner-text">
            Whether you're launching a brand, hosting an event,
            or building a community, we'll help you connect with
            thousands of students and young professionals.
          </p>

        </div>

        {/* Right Side */}
        <div className="partner-form-card">

          {isSubmitted ? (
            <div className="partner-success">
              <h3>Message Sent 🎉</h3>
              <p>We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form className="partner-form" onSubmit={handleSubmit}>

              <h3 className="partner-form-heading">
                Let's Talk
              </h3>

              <p className="partner-form-description">
                Tell us about your idea.
              </p>

              <div className="partner-row">

                <div className="partner-field">
                  <label>Your Name</label>

                  <input
                    type="text"
                    placeholder="Rohan Sharma"
                    required
                  />
                </div>

                <div className="partner-field">
                  <label>Brand / Organisation</label>

                  <input
                    type="text"
                    placeholder="Your Brand"
                  />
                </div>

              </div>

              <div className="partner-field">

                <label>Partnership Type</label>

                <select required defaultValue="">
                  <option value="" disabled>
                    Select one...
                  </option>

                  {partnershipTypes.map((type) => (
                    <option key={type}>
                      {type}
                    </option>
                  ))}
                </select>

              </div>

              <div className="partner-field">

                <label>Email</label>

                <input
                  type="email"
                  placeholder="you@brand.com"
                  required
                />

              </div>

              <div className="partner-field">

                <label>Your Goal or Idea</label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your partnership..."
                />

              </div>

              <button
                type="submit"
                className="partner-submit-btn"
              >
                Let's Build Something →
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}