"use client";
import { useEffect, useRef } from "react";

import food from "@/assets/food.mp4";
import f from "@/assets/f.mp4";
import p11 from "@/assets/p1.mp4";
import p22 from "@/assets/p2.mp4";
import v11 from "@/assets/video 1.mp4";

// import p3 from "@/assets/profile 3.png";
import p3 from "@/assets/profile 3.png";
import p2 from "@/assets/profile2.jpg";
import p from "@/assets/p.mp4";

const MEDIA = [
  { type: "video", src: food },
  { type: "video", src: v11 },
  { type: "image", src: p3 },

  { type: "video", src: f },
  { type: "video", src: food },
  { type: "image", src: p2 },

  { type: "video", src: p22 },
  { type: "video", src: p11 },
  { type: "video", src: p},
];

export default function VideoScrollGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.to(gridRef.current, {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=1200",
            scrub: 1,
            pin: true,
          },
        });
      });
    };

    init();
    return () => ctx?.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        height: "100vh",
        overflow: "hidden",
        background: "#fff",
        position: "relative",
      }}
    >
      <div
        ref={gridRef}
        style={{
          position: "absolute",
          inset: 0,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          gap: "3px",
          transform: "scale(3)",
          transformOrigin: "center center",
        }}
      >
        {MEDIA.map((item, i) => (
          <div key={i} style={{ overflow: "hidden" }}>
            {item.type === "video" ? (
              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <img
                src={item.src}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}