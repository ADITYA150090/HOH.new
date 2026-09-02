import "./Footer.css";
import { toRoute } from "../../../hooks/useHashRoute";
import Button from "../../ui/Button";
import logo from "../../../../src/assets/hoh.svg"

export default function Footer({ routes }) {
  return (
    <footer id="footer">
      <div className="wave-blue"></div>
      <div className="wave-teal"></div>

      <div className="max-w ft-grid">
        <div className="ft-brand">
          <div className="ft-brand-name">
            <img className="logo-hoh" src={logo} alt="HoH Logo" />
          </div>

          <p className="ft-tagline">
            Nagpur's youth culture community. Building the spaces, content,
            and experiences that define what it means to be young and creative
            in this city.
            <br />
          </p>
          <br />
          <a className="ft-email" href="mailto:hoh.commune@gmail.com">
            hoh.commune@gmail.com
          </a>
        </div>

        <div>
          <div className="ft-col-head">Pages</div>

          <nav className="ft-links" aria-label="Footer navigation">
            {routes.map((route) => (
              <button
                key={route.path}
                type="button"
                onClick={() => toRoute(route.path)}
              >
                {route.label}
              </button>
            ))}
          </nav>
        </div>

        <div>
          <div className="ft-col-head">Connect</div>

          <div className="ft-links">
            <a
              href="https://www.instagram.com/hoh.commune/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://linkedin.com/company/houseofhearts-ngp"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:hello@moramba.in">Email</a>
          </div>
        </div>

        <div>
          <div className="ft-col-head">The Studio</div>

          <div className="ft-links">
            <a
              href="https://moramba.in"
              target="_blank"
              rel="noreferrer"
            >
              Moramba Media
            </a>

            <button
              type="button"
              onClick={() => toRoute("/partner")}
            >
              Partner Enquiries
            </button>
          </div>

          <div className="ft-cta">
            <Button href="https://www.instagram.com/hoh.commune/">
              <span className="commune-small-btn">@hoh.commune</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="ft-bottom max-w">
  <div>
    © {new Date().getFullYear()} House of Hearts / Moramba Media.
    All rights reserved.
  </div>

  <div className="ft-credit"
  
><a href="https://www.linkedin.com/in/aditya-dhawle-3932a124b/">Developed by Aditya </a></div>

  <div>Built in Nagpur. Made with intent.</div>
</div>
    </footer>
  );
}