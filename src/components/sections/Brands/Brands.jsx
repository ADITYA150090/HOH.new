
import "./Brands.css";
export default function Brands() {
    const brands = [
      "Cafe Aroma",
      "Urban Brew",
      "PrintWorld",
      "Studio 47",
      "The Local Co",
      "Crafted"
    ];
  
    return (
      <section className="brands">
        <div className="brands-header">
          <span className="brands-label">TRUSTED BY</span>
  
          <h2 className="brands-title">
            Brands we've
            <br />
            worked with.
          </h2>
        </div>
  
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div key={index} className="brand-card">
              {brand}
            </div>
          ))}
        </div>
      </section>
    );
  }