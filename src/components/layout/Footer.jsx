import { toRoute } from "../../hooks/useHashRoute";
import Button from "../ui/Button";

export default function Footer({ routes }) {
  return (
    <footer id="footer">
      <div className="max-w ft-grid">
        <div className="ft-brand">
          <div className="ft-brand-name">HoH!</div>
          <p className="ft-tagline">
            Nagpur's youth culture community. Building the spaces, content, and experiences that define what it means to
            be young and creative in this city.
          </p>
          <a className="ft-email" href="mailto:hello@moramba.in">
            hello@moramba.in
          </a>
        </div>
        <div>
          <div className="ft-col-head">Pages</div>
          <nav className="ft-links" aria-label="Footer navigation">
            {routes.map((route) => (
              <button key={route.path} type="button" onClick={() => toRoute(route.path)}>
                {route.label}
              </button>
            ))}
          </nav>
        </div>
        <div>
          <div className="ft-col-head">Connect</div>
          <div className="ft-links">
            <a href="https://instagram.com/houseofhearts.ngp" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://linkedin.com/company/houseofhearts-ngp" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:hello@moramba.in">Email</a>
          </div>
        </div>
        <div>
          <div className="ft-col-head">The Studio</div>
          <div className="ft-links">
            <a href="https://moramba.in" target="_blank" rel="noreferrer">
              Moramba Media
            </a>
            <button type="button" onClick={() => toRoute("/partner")}>
              Partner Enquiries
            </button>
          </div>
          <div className="ft-cta">
            <Button href="https://instagram.com/houseofhearts.ngp">Follow on Instagram</Button>
          </div>
        </div>
      </div>
      <div className="ft-bottom max-w">
        <div>© {new Date().getFullYear()} House of Hearts / Moramba Media. All rights reserved.</div>
        <div>Built in Nagpur. Made with intent.</div>
      </div>
    </footer>
  );
}
