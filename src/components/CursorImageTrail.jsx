// src/components/CursorImageTrail.jsx

import { useEffect, useRef } from "react";
import "./CursorImageTrail.css";

import img1 from "../assets/1png.png";
import img2 from "../assets/2png.png";
import img3 from "../assets/3png.png";

import img5 from "../assets/5png.png";
import img6 from "../assets/6png.png";
import img7 from "../assets/7png.png";
import img8 from "../assets/8png.png";
import img9 from "../assets/9png.png";
import img10 from "../assets/10png.png";
import img11 from "../assets/11png.png";
import img12 from "../assets/12.jpg";
import img13 from "../assets/13.png";
import img14 from "../assets/14.jpg";

import img16 from "../assets/16.jpg";
import img17 from "../assets/17.jpg";
import img18 from "../assets/18.jpg";
import img19 from "../assets/19.jpg";
import img20 from "../assets/20.jpg";
import img21 from "../assets/21.jpg";
import img22 from "../assets/22.png";
import img23 from "../assets/23.png";
import img24 from "../assets/24.png";
import img25 from "../assets/25.png";
import img26 from "../assets/26.png";

const images = [
  
  
  img1,
  img2,
  img3,
  img13,
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

  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img13,
];

export default function CursorImageTrail() {
  const containerRef = useRef(null);
  const indexRef = useRef(0);

  const lastSpawnRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;

    const handleMove = (e) => {

      // delay between image spawns
      const now = Date.now();

      if (now - lastSpawnRef.current < 120) return;

      lastSpawnRef.current = now;

      const img = document.createElement("img");

      img.src = images[indexRef.current % images.length];

      indexRef.current++;

      img.className = "trail-image";

// Random size
const randomSize = Math.floor(Math.random() * 180) + 120;
// 120px → 300px

img.style.width = `${randomSize}px`;

// Random rotation
const randomRotate = Math.floor(Math.random() * 60) - 30;
// -30deg → +30deg

img.style.setProperty("--rotate", `${randomRotate}deg`);

// Random scale pop
const randomScale = (Math.random() * 0.5 + 0.8).toFixed(2);
// 0.8 → 1.3

img.style.setProperty("--scale", randomScale);

      const rect = container.getBoundingClientRect();

img.style.left = `${e.clientX - rect.left - 60}px`;
img.style.top = `${e.clientY - rect.top - 60}px`;

      container.appendChild(img);

      requestAnimationFrame(() => {
        img.style.opacity = "1";
        img.style.transform = `
        scale(${randomScale})
        rotate(${randomRotate}deg)
      `;
      });

      setTimeout(() => {
        img.style.opacity = "0";
        img.style.transform = `
        scale(0.4)
        rotate(${randomRotate + 15}deg)
      `;
      }, 2200);

      setTimeout(() => {
        img.remove();
      }, 4200);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
        window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return <div ref={containerRef} className="cursor-trail" />;
}