"use client";
import { useEffect, useRef, useState } from "react";

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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
        height: isMobile ? "56.25vw" : "100vh",
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
        {MEDIA.map((item, i) => {
          // On mobile, play only a subset of videos to save resources
          const shouldPlayVideo = item.type === "video" && (!isMobile || i % 2 === 0);
          
          return (
            <div key={i} style={{ overflow: "hidden" }}>
              {shouldPlayVideo ? (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <div className="w-full h-full bg-black/5 flex items-center justify-center relative">
                   {/* Fallback to image if it's an image type or if video is disabled on mobile */}
                   <img
                    src={item.src}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: item.type === "video" ? 0.6 : 1 // Dim disabled videos slightly
                    }}
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 bg-black/10" />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}