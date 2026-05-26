import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return undefined;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let frame = 0;

    const onMove = (event) => {
      mx = event.clientX;
      my = event.clientY;
    };

    const loop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (dotRef.current) dotRef.current.style.transform = `translate(${mx}px, ${my}px)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`;
      frame = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove);
    frame = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div id="cur" ref={dotRef} />
      <div id="cur-ring" ref={ringRef} />
    </>
  );
}
