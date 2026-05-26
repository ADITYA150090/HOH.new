const words = [
  ["We", false],
  ["are", false],
  ["not", true],
  ["waiting", false],
  ["for", false],
  ["culture", true],
  ["to", false],
  ["arrive.", false],
  ["We", false],
  ["are", false],
  ["building", true],
  ["it", false],
  ["in", false],
  ["Nagpur.", true],
];

export default function Manifesto() {
  return (
    <section id="manifesto">
      <div className="manifesto-sticky">
        <div className="manifesto-bg-glow" />
        <div className="manifesto-inner">
          <div className="manifesto-label">Manifesto</div>
          <p className="m-phrase">
            {words.map(([word, pink], index) => (
              <span className={`m-word lit ${pink ? "pink" : ""}`} key={`${word}-${index}`}>
                {word}
              </span>
            ))}
          </p>
          <div className="manifesto-progress">
            <div className="manifesto-progress-fill" />
          </div>
        </div>
      </div>
    </section>
  );
}
