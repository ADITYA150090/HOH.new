import { useEffect, useState } from "react";
import { toRoute } from "../../hooks/useHashRoute";
import logo from "../../../src/assets/hoh.svg";

export default function Navbar({ routes, activePath }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let lastScroll = window.scrollY;
  
    const handleScroll = () => {
      const currentScroll = window.scrollY;
  
      setScrolled(currentScroll > 40);
  
      if (currentScroll > lastScroll && currentScroll > 120) {
        // scrolling down
        setHidden(true);
      } else {
        // scrolling up
        setHidden(false);
      }
  
      lastScroll = currentScroll;
    };
  
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
  
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navigate = (path) => {
    setOpen(false);
    toRoute(path);
  };

  return (
    <>
      <nav id="nav"  className={`
    ${scrolled ? "scrolled" : ""}
    ${hidden ? "nav-hidden" : ""}
  `}>
        <button className="nav-logo" type="button" onClick={() => navigate("/")}>
        <img src={logo} alt="HoH Logo" />
        </button>
        <ul className="nav-links">
          {routes.map((route) => (
            <li key={route.path}>
              <button
                className={`${route.cta ? "nav-cta" : ""} ${activePath === route.path ? "active" : ""}`}
                type="button"
                onClick={() => navigate(route.path)}
              >
                {route.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          className={`nav-burger ${open ? "open" : ""}`}
          type="button"
          aria-label="Open navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div id="mnav" className={open ? "open" : ""}>
        {routes.map((route) => (
          <button key={route.path} className={route.cta ? "mcta" : ""} type="button" onClick={() => navigate(route.path)}>
            {route.label}
          </button>
        ))}
        <div className="mnav-bottom">
          <a className="mnav-insta" href="https://www.instagram.com/hoh.commune/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <button className="mnav-close" type="button" onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
      </div>
    </>
  );
}
