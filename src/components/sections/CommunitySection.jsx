import { communityPosts } from "../../data/siteData";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

export default function CommunitySection() {
  return (
    <section id="community">
      <div className="max-w">
        <SectionHeader eyebrow="Community" title="If Nagpur is your city, this is your room.">
          The community shows up across Instagram, live events, college circles, creator collaborations, and venue
          activations.
        </SectionHeader>
        <div className="insta-grid" role="list">
          {communityPosts.map((post, index) => (
            <a
              className={`insta-post ip${(index % 9) + 1} reveal`}
              href="https://www.instagram.com/hoh.commune/"
              target="_blank"
              rel="noreferrer"
              role="listitem"
              key={post}
            >
              <div className={`ib ip${(index % 9) + 1}`} />
              <div className="ip-label">{post}</div>
              <div className="io">IG</div>
            </a>
          ))}
        </div>
        <div className="comm-cta-block reveal">
          <div className="comm-cta-text">
            If Nagpur is your city,
            <br />
            <span>this is your community.</span>
          </div>
          <div className="comm-actions">
            <Button href="https://www.instagram.com/hoh.commune/">Follow on Instagram</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
