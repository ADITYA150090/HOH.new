import { useState } from "react";
import "./WorkSectionTwo.css";

const workItems = [
  {
    date: "Dec '23",
    title: "Instagram Launch & Carousel Series",
    desc: "Launched HoH on Instagram with a digital magazine approach — carousels crafted with city designers and writers. Built audience through pure content resonance.",
    metrics: ["Organic Growth", "City-wide Reach"],
  },
  {
    date: "Feb '24",
    title: "HOH Creator Carnival",
    desc: "Nagpur's first creator-led fair. 8 content creators in panel discussions on youth and culture, 20 stalls, live music — built from scratch with zero prior event experience.",
    metrics: ["2,000 Footfall", "8 Creators", "20 Stalls", "200K Reach"],
  },
  {
    date: "Mid '24",
    title: "Book Exchange at RBU",
    desc: "A first-of-its-kind literary experience in Nagpur, partnering with Ramdeobaba University, local book communities, and RBU's Literary Club.",
    metrics: ["60+ Paid Attendees", "Sold Out"],
  },
  {
    date: "Oct '24",
    title: "No Solo Tribe Halloween",
    desc: "Full-spectrum partner for Nagpur's biggest Halloween event — owning planning, social media, influencer marketing, sponsorship outreach, and on-ground support.",
    metrics: ["5,000+ Footfall","5 Major Sponsors","20 Stalls","100K+ Reach"],
  },
  {
    date: "Dec '24",
    title: "NGP Spotlight × The Beer Café",
    desc: "3-night brand activation for India's largest alco-beverage chain's 3rd anniversary. Open Mic night, Creator Evening, and a Bollywood Hip-Hop DJ Night.",
    metrics: ["100K+ Reach","150 Over 3 Nights","Record Brand UGC"],
  },
  {
    date: "Jun '25",
    title: "HOH Art Popup × Corridor Seven",
    desc: "Two-day, six-workshop cultural experience: zine making, log painting, theatre, journaling, content storytelling, and film screening — all sold out.",
    metrics: ["6 Workshops","All Sold Out","Lakhs in Brand Reach"],
  },
  {
    date: "Oct '25",
    title: "TEDxNagpur 2025 — Content & Community Partner",
    desc: "Official partner for Nagpur's first independently licensed TEDx. End-to-end creative direction, Nagpur Naama Series, sponsor acquisition, influencer campaigns, volunteer deployment, and live content production.",
    metrics: ["15 Real-time Pieces","City-wide Marketing","Debut Event Milestone"],
  },
  {
    date: "Oct '25",
    title: "Dilwali Party",
    desc: "Community-demanded Diwali celebration. Tickets sold before the event was even publicly announced. Pulled off in under 10 days. The creative went viral at 60K views.",
    metrics: ["100+ Tickets","60K Viral Reach","Venue Record Sales"],
  },
  {
    date: "Dec '25",
    title: "HOH Got Latent × Traders Café",
    desc: "A spinoff of India's Got Latent. 5 prominent city panelists, 15 selected performers from 50+ applicants, 100+ registrations in under 5 days. Housefull — café's highest-ever crowd.",
    metrics: ["Housefull","100+ Registrations","Lakhs in Reach"],
  },
];

export default function WorkSectionTwo() {
  const [showAll, setShowAll] = useState(false);

  const displayedItems = showAll ? workItems : workItems.slice(0,3);

  const scrollToPartner = () => {
    document.getElementById("partner")?.scrollIntoView({behavior:"smooth"});
  };

  return (
    <section id="work" className="work-section">
      <div className="work-container">
        <p className="work-label">Portfolio</p>

        <h2 className="work-heading">
          Everything we've built.<br />
          <span>All of it real.</span>
        </h2>

        <p className="work-subtitle">
          No paid campaigns. No manufactured numbers. Every project below is proof
          of what's possible when a community trusts you enough to show up.
        </p>

        <div className="work-timeline">
          {displayedItems.map((item,index)=>(
            <div className="work-item" key={index}>
              <div className="work-date">{item.date}</div>

              <div className="work-info">
                <h3 className="work-name">{item.title}</h3>
                <p className="work-desc">{item.desc}</p>

                <div className="work-metrics">
                  {item.metrics.map((metric,i)=>(
                    <span className="work-metric" key={i}>{metric}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="work-see-more">
            <button className="work-btn-outline" onClick={()=>setShowAll(true)}>
              See More Events ↓
            </button>
          </div>
        )}

        {showAll && (
          <div className="work-see-more">
            <button className="work-btn-outline" onClick={()=>setShowAll(false)}>
              See Less ↑
            </button>
          </div>
        )}

        <div className="work-btn-wrap">
          <button className="work-btn" onClick={scrollToPartner}>
            Want Results Like These? <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
