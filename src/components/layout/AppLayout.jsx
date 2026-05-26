import { useEffect, useState } from "react";
import { routes } from "../../routes";
import Cursor from "./Cursor";
import Footer from "./Footer";
import Loader from "../Loader";
import Navbar from "./Navbar";

export default function AppLayout({ activePath, children }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div id="pb" style={{ width: `${progress}%` }} />
      <Loader />
      <Cursor />
      <Navbar routes={routes} activePath={activePath} />
      {children}
      <Footer routes={routes} />
    </>
  );
}
