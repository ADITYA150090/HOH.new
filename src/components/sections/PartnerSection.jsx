import { useState } from "react";
import "./PartnerSection.css";

import Letter from "../../assets/Texture/Letter.png";

export default function PartnerSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="partner-section" id="partner">
      <div className="partner-container">

        {/* LEFT */}

        <div className="partner-left">

          <h2 className="partner-heading">
            JOIN THE
            <br />
            <span>CHAOS.</span>
          </h2>

          <p className="partner-description">
            Whether you're launching a brand, hosting an event,
            building a community, or creating something exciting,
            we'll help you connect with thousands of students and
            young professionals. Let's talk about your idea.
          </p>

          <div className="partner-image">
            <img src={Letter} alt="Letter Bird" />
          </div>

        </div>

        {/* RIGHT */}

        <div className="partner-card">

          <div className="partner-tag">
            LET'S TALK
          </div>

          {submitted ? (

            <div className="success-box">

              <h3>MESSAGE SENT!</h3>

              <p>
                We'll get back to you within
                24 hours.
              </p>

            </div>

          ) : (

            <form
              className="partner-form"
              onSubmit={handleSubmit}
            >

              <div className="row">

                <div className="field">

                  <label>YOUR NAME</label>

                  <input
                    type="text"
                    placeholder="Rohan Sharma"
                    required
                  />

                </div>

                <div className="field">

                  <label>BRAND / ORG</label>

                  <input
                    type="text"
                    placeholder="Your Brand"
                  />

                </div>

              </div>

              <div className="field">

                <label>EMAIL</label>

                <input
                  type="email"
                  placeholder="you@brand.com"
                  required
                />

              </div>

              <div className="field">

                <label>WHAT'S THE PLAN?</label>

                <textarea
                  rows={6}
                  placeholder="Tell us about your project..."
                />

              </div>

              <button
                className="submit-btn"
                type="submit"
              >
                LET'S BUILD SOMETHING
              </button>

            </form>

          )}

        </div>

      </div>
    </section>
  );
}