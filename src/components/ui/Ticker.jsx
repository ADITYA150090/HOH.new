export default function Ticker({ items, tone = "pink", reverse = false }) {
  const repeated = [...items, ...items,...items,...items,...items];

  return (
    <div className={`ticker ticker-${tone}`} aria-hidden="true">
      <div className="ticker-inner" style={{ animationDirection: reverse ? "reverse" : "normal" }}>
        {repeated.map((item, index) => (
          <span key={`${item}-${index}`}>
            {item}
            <span className="sep">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
