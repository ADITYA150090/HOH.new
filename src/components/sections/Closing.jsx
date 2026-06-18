import Ballpit from "../animations/Ballpit";
export default function Closing() {
  return (
    <section className="closing">
      <div className="closing-bg">
        <Ballpit
          count={120}
          gravity={0}
          friction={0.96}
          wallBounce={0.95}
          followCursor={false}
          colors={[
            "#ff4237", // brand red
            "#ff6b61",
            "#ffd6d3",
            "#ffffff"
          ]}
        />
      </div>

      <div className="closing-content">
        <div className="closing-city">
          Nagpur · Est. December 27, 2023
        </div>

        <div className="closing-name">
          HOUSE
          <br />
          OF
          <br />
          HEARTS
        </div>

        <div className="closing-tag">
          Nagpur first. Always.
        </div>
      </div>
    </section>
  );
}