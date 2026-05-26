import { partners } from "../../data/siteData";

export default function PartnersBand() {
  return (
    <div className="partners-band" aria-label="Our partners">
      <div className="pb-label">Trusted by brands across Nagpur</div>
      <div className="pb-logos">
        {partners.map((partner) => (
          <div className="pb-chip" key={partner}>
            {partner}
          </div>
        ))}
      </div>
    </div>
  );
}
