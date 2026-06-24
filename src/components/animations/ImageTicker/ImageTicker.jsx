import "./ImageTicker.css";

import img1 from "../../../assets/Brands/1.svg";
import img2 from "../../../assets/Brands/2.svg";
import img3 from "../../../assets/Brands/3.svg";
import img4 from "../../../assets/Brands/4.svg";
import img5 from "../../../assets/Brands/5.svg";
import img6 from "../../../assets/Brands/6.svg";
import img7 from "../../../assets/Brands/7.svg";
import img8 from "../../../assets/Brands/8.svg";
import img9 from "../../../assets/Brands/9.svg";
import img10 from "../../../assets/Brands/10.svg";
import img11 from "../../../assets/Brands/11.svg";
import img12 from "../../../assets/Brands/12.svg";
import img13 from "../../../assets/Brands/13.svg";
import img14 from "../../../assets/Brands/14.svg";
import img15 from "../../../assets/Brands/15.svg";
import img16 from "../../../assets/Brands/16.svg";
import img17 from "../../../assets/Brands/17.svg";
import img18 from "../../../assets/Brands/18.svg";

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
      {/* Row 1 */}
      <div className="ticker">
      <div className="ticker-track left">
  {[...images, ...images].map((img, i) => (
    <div key={i} className="ticker-item">
      <img src={img} alt="" className="ticker-img" />
    </div>
  ))}
</div>
      </div>

      {/* Row 2 */}
      {/* <div className="ticker">
        <div className="ticker-track right">
          {[...images, ...images].map((img, i) => (
            <img key={i} src={img} alt="" className="ticker-img" />
          ))}
        </div>
      </div> */}
    </div>
  );
}