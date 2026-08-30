import { useState } from "react";
import "./PartnerSection.css";

export default function PartnerSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brief: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="partner-section" id="partner">
      <div className="partner-max-w">
        {/* TOP HEADER BAR */}

        {/* FORM CARD CONTAINER */}
        <div className="partner-card">
          <div className="partner-card-grid">
            {/* LEFT COLUMN: TITLE & CONTACT INFO */}
            <div className="partner-info-col">
              <div>
                <h2 className="partner-main-heading">
                  MEET OVER<br />COFFEE?
                </h2>
                <p className="partner-subtext">
                  Whether you're launching a brand, hosting an event, building a community,
                  or creating something exciting — we'd love to chat.
                </p>
              </div>

              {/* DIRECT CONTACT / SAY HI */}
              <div className="partner-direct-contact">
                <div className="say-hi-label">Say hi!</div>
                <a href="mailto:hello@moramba.in" className="partner-email-link">
                  hoh.commune@gmail.com
                </a>
                <div className="partner-social-tag">
                  Instagram: <a href="https://www.instagram.com/hoh.commune/" target="_blank" rel="noreferrer">@hoh.commune</a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: FORM */}
            <div className="partner-form-col">
              {submitted ? (
                <div className="partner-success-box">
                  <h3>MESSAGE SENT! </h3>
                  <p>We'll get back to you within 24 hours.</p>
                  <button
                    className="partner-reset-btn"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", brief: "" });
                    }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="partner-form" onSubmit={handleSubmit}>
                  <div className="form-fields-row">
                    <div className="form-field">
                      <label htmlFor="partner-name">NAME</label>
                      <input
                        id="partner-name"
                        name="name"
                        type="text"
                        placeholder="Your name, please."
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="partner-email">EMAIL ID</label>
                      <input
                        id="partner-email"
                        name="email"
                        type="email"
                        placeholder="Drop your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="partner-brief">BRIEF</label>
                    <textarea
                      id="partner-brief"
                      name="brief"
                      rows={4}
                      placeholder="Tell us everything! Well, almost everything."
                      value={formData.brief}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button className="partner-submit-btn" type="submit">
                    <span>LET'S TALK</span>
                    <span className="sparkle-icon"></span>
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