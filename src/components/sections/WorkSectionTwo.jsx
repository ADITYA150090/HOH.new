import { useState } from "react";
import "./WorkSection.css";
import TV from "../../assets/Texture/TVhoh.webp";
import "./IntroSection.css";

const portfolio = [
  { no:"01",date:"Dec '23",title:"Instagram Launch & Carousel Series",body:"Launched HoH on Instagram with a digital magazine approach — carousels crafted with city designers and writers. Built audience through pure content resonance.",tags:["Organic Growth","City-wide Reach"]},
  { no:"02",date:"Feb '24",title:"HOH Creator Carnival",body:"Nagpur's first creator-led fair with 8 creators, 20 stalls and live music. Built from scratch with zero prior event experience.",tags:["2,000 Footfall","8 Creators","20 Stalls","200K Reach"]},
  { no:"03",date:"Mid '24",title:"Book Exchange at RBU",body:"A first-of-its-kind literary experience in Nagpur in partnership with Ramdeobaba University and local book communities.",tags:["60+ Attendees","Sold Out"]},
  { no:"04",date:"Oct '24",title:"No Solo Tribe Halloween",body:"Planning, influencer marketing, sponsorships and on-ground execution for Nagpur's biggest Halloween event.",tags:["5000+ Footfall","5 Sponsors","100K Reach"]},
  { no:"05",date:"Dec '24",title:"NGP Spotlight × The Beer Café",body:"Three-night anniversary activation featuring creator evening, open mic and Bollywood DJ night.",tags:["100K Reach","Record UGC"]},
  { no:"06",date:"Jun '25",title:"HOH Art Popup × Corridor Seven",body:"A two-day cultural experience with workshops, storytelling and film screenings.",tags:["6 Workshops","Sold Out"]},
  { no:"07",date:"Oct '25",title:"TEDxNagpur 2025",body:"Official content & community partner with live production, volunteers and influencer campaigns.",tags:["15 Live Pieces","City-wide Marketing"]},
  { no:"08",date:"Oct '25",title:"Year-End Party",body:"Community-demanded celebration that sold out before public announcement.",tags:["100+ Tickets","60K Views"]},
  { no:"09",date:"Dec '25",title:"HOH Got Latent",body:"Housefull talent show with 100+ registrations in under five days.",tags:["Housefull","100+ Registrations"]},
];

export default function WorkSectionTwo(){
 const [showAll,setShowAll]=useState(false);
 const visible=showAll?portfolio:portfolio.slice(0,3);

 return(
<section id="work">
<div className="max-w">

<div className="services-header">
<div>
<div className="label">Portfolio</div>
<h2 className="services-h2">
Everything we've built.
<span className="acc"> All of it real.</span>
</h2>
</div>

<img src={TV} alt="Portfolio" className="services-tv"/>
</div>

<p className="services-intro">
No paid campaigns. No manufactured numbers. Every project below is proof of what's possible when a community trusts you enough to show up.
</p>

<div className="svc-list">
{visible.map(item=>(
<div className="svc-item" key={item.no}>
<div className="svc-num-col">
<span className="svc-num">{item.no}</span>
</div>

<div className="svc-content">
<div className="svc-title">{item.title}</div>
<div className="project-date">{item.date}</div>
<div className="svc-body">{item.body}</div>

<div className="svc-tags">
{item.tags.map(tag=>(
<span className="svc-tag" key={tag}>{tag}</span>
))}
</div>
</div>

<div className="svc-icon-col">
<div className="svc-arrow">↗</div>
</div>
</div>
))}
</div>

<div className="services-more">
<button className="btn btn-ghost-dark" onClick={()=>setShowAll(!showAll)}>
{showAll?"Show Less":"See More Projects"}
</button>
</div>

</div>
</section>
 );
}
