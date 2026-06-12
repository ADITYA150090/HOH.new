import "./WorkSectionTwo.css";

const works = [
  {
    date: "Dec '23",
    title: "Instagram Launch & Carousel Series",
    desc: "Launched HoH on Instagram with a digital magazine approach — carousels crafted with city designers and writers. Built audience through pure content resonance, zero paid promotion.",
    metrics: ["Organic growth", "City-wide reach"],
    visual: "Launch",
    className: "wv-1",
  },
  {
    date: "Feb '24",
    title: "HOH Creator Carnival",
    desc: "Nagpur's first creator-led fair. 8 content creators in panel discussions, 20 stalls, live music — built from scratch with zero prior event experience. Debut event, instant city landmark.",
    metrics: ["2,000 footfall", "8 creators", "20 stalls", "200K reach"],
    visual: "Creator Carnival",
    className: "wv-2",
  },
  {
    date: "Mid '24",
    title: "Book Exchange at RBU",
    desc: "A first-of-its-kind literary experience in Nagpur — partnering with Ramdeobaba University, local book communities, and the RBU Literary Club. Fully sold out.",
    metrics: ["60+ paid attendees", "Sold out"],
    visual: "Book Exchange",
    className: "wv-3",
  },
  {
    date: "Oct '24",
    title: "No Solo Tribe Halloween",
    desc: "Full-spectrum partner for Nagpur's biggest Halloween event — owning planning, social media, influencer marketing, sponsorship outreach, and on-ground support. City record.",
    metrics: ["5,000+ footfall", "5 major sponsors", "20 stalls", "100K+ reach"],
    visual: "Halloween",
    className: "wv-4",
  },
  {
    date: "Dec '24",
    title: "NGP Spotlight × The Beer Café",
    desc: "3-night brand activation for India's largest alco-bev chain's 3rd anniversary. Open Mic, Creator Evening, and a Bollywood Hip-Hop DJ Night.",
    metrics: ["100K+ reach", "150 attendees", "Record brand UGC"],
    visual: "NGP Spotlight",
    className: "wv-5",
  },
  {
    date: "Jun '25",
    title: "HOH Art Popup × Corridor Seven",
    desc: "Two-day, six-workshop cultural experience featuring zine making, theatre, journaling, storytelling and film screening.",
    metrics: ["6 workshops", "All sold out", "200K+ impressions"],
    visual: "Art Popup",
    className: "wv-6",
  },
  {
    date: "Oct '25",
    title: "TEDxNagpur 2025",
    desc: "Official content and community partner for Nagpur's first independently licensed TEDx event.",
    metrics: ["15 live content pieces", "City-wide marketing", "Major milestone"],
    visual: "TEDxNagpur",
    className: "wv-7",
  },
  {
    date: "Oct '25",
    title: "Dilwali Party",
    desc: "Community-demanded Diwali celebration. Tickets sold before public announcement and creative went viral organically.",
    metrics: ["100+ tickets", "60K reach", "Venue record sales"],
    visual: "Dilwali",
    className: "wv-8",
  },
  {
    date: "Dec '25",
    title: "HOH Got Latent × Traders Café",
    desc: "A city-wide talent event inspired by India's Got Latent. Massive registrations and a housefull venue.",
    metrics: ["Housefull", "100+ registrations", "200K+ reach"],
    visual: "Got Latent",
    className: "wv-9",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="work-section">
      <div className="max-w">
        <p className="section-label">Portfolio</p>

        <h2 className="section-h2">
          Everything we've built.
          <br />
          <span>All of it real.</span>
        </h2>

        <p className="section-sub">
          No paid campaigns. No manufactured numbers. Every project below is
          proof of what's possible when a community trusts you enough to show
          up.
        </p>

        <div className="work-grid">
          {works.map((item, index) => (
            <div className="work-item" key={index}>
              <div className="work-date">{item.date}</div>

              <div className="work-info">
                <h3 className="work-name">{item.title}</h3>

                <p className="work-desc">{item.desc}</p>

                <div className="work-metrics">
                  {item.metrics.map((metric, i) => (
                    <span key={i} className="work-metric">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`work-visual ${item.className}`}>
                <div className="work-visual-overlay"></div>
                <div className="work-visual-label">{item.visual}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="work-btn-wrap">
          <button
            className="btn-primary"
            onClick={() =>
              document
                .getElementById("partner")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Want Results Like These? →
          </button>
        </div>
      </div>
    </section>
  );
}