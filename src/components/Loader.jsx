import { useEffect, useState } from "react";
import "./Loader.css";

export default function Loader() {
  const [visible, setVisible] = useState(true);
const [exit, setExit] = useState(false);

useEffect(() => {
  // Start shutter animation
  const exitTimer = setTimeout(() => {
    setExit(true);
  }, 2500);

  // Remove loader after animation
  const removeTimer = setTimeout(() => {
    setVisible(false);
  }, 3700);

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
            <span className="content">Wait</span>
          </div>

          <div className="face f-b">
            <span className="content">Load</span>
          </div>

          <div className="face f-r">
            <span className="content">Load</span>
          </div>

          <div className="face f-l">
            <span className="content">Ing</span>
          </div>

          <div className="face f-t">
            <span className="content">Now</span>
          </div>

          <div className="face f-bt">
            <span className="content">...</span>
          </div>
        </div>

        <div className="onomatopoeia">BOOM!</div>

      </div>
    </div>
  );
}