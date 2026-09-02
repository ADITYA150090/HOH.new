import "./ImageTicker.css";

import img1 from "../../../assets/Brands/png/1.png";
import img2 from "../../../assets/Brands/png/2.png";
import img3 from "../../../assets/Brands/png/3.png";
import img4 from "../../../assets/Brands/png/4.png";
import img5 from "../../../assets/Brands/png/5.png";
import img6 from "../../../assets/Brands/png/6.png";
import img7 from "../../../assets/Brands/png/7.png";
import img8 from "../../../assets/Brands/png/8.png";
import img9 from "../../../assets/Brands/png/9.png";
import img10 from "../../../assets/Brands/png/10.png";
import img11 from "../../../assets/Brands/png/11.png";
import img12 from "../../../assets/Brands/png/12.png";
import img13 from "../../../assets/Brands/png/13.png";
import img14 from "../../../assets/Brands/png/14.png";
import img15 from "../../../assets/Brands/png/15.png";
import img16 from "../../../assets/Brands/png/16.png";
import img17 from "../../../assets/Brands/png/17.png";
import img18 from "../../../assets/Brands/png/18.png";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
];

export default function ImageTicker() {
  return (
    <div className="ticker-wrapper">
      <div className="ticker">
        <div className="ticker-track left">
          {[...images, ...images].map((img, i) => (
            <div key={i} className="ticker-item">
              <img src={img} alt={`Brand logo ${(i % images.length) + 1}`} className="ticker-img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}