import { useEffect, useState } from "react";
import "./Loader.css";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    // Start shutter animation
    const exitTimer = setTimeout(() => {
      setExit(true);
    }, 2400);

    // Remove loader after animation
    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 3600);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`loader ${exit ? "loader-exit" : ""}`}>
      <div className="action-space">

        <div className="speed-lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className="cube-panel">
          <div className="face f-f">
            <span className="content">Work</span>
          </div>

          <div className="face f-b">
            <span className="content">Ing</span>
          </div>

          <div className="face f-r">
            <span className="content">On</span>
          </div>

          <div className="face f-l">
            <span className="content">It</span>
          </div>

          <div className="face f-t">
            <span className="content">HOH</span>
          </div>

          <div className="face f-bt">
            <span className="content">...</span>
          </div>
        </div>

        <div className="onomatopoeia">BOOM....</div>
        {/* <div className="loader-bottom-text">WORKING ON IT...</div> */}

      </div>
    </div>
  );
}