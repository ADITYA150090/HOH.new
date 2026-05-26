import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div id="loader">
      <div className="loader-logo">
        HoH<span>!</span>
      </div>
      <div className="loader-bar" />
      <div className="loader-label">Nagpur is loading</div>
    </div>
  );
}
