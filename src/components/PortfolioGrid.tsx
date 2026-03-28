import { useEffect, useRef, useState } from "react";
import LazyVideo from "./LazyVideo";

// Video Assets
import food from "@/assets/food.mp4";
import f from "@/assets/f.mp4";
import p11 from "@/assets/p1.mp4";
import p22 from "@/assets/p2.mp4";
import v11 from "@/assets/video 1.mp4";
import p from "@/assets/p.mp4";

// Poster/Image Assets
import p3 from "@/assets/profile 3.png";
import p2 from "@/assets/profile2.jpg";
import p1Img from "@/assets/p1.jpg";
import p2Img from "@/assets/p2.jpg";
import h1Img from "@/assets/hero-1.jpg";
import h3Img from "@/assets/hero-3.jpg";
import sVideoImg from "@/assets/service-video.jpg";

const MEDIA = [
  { type: "video", src: food, poster: sVideoImg },
  { type: "video", src: v11, poster: h3Img },
  { type: "image", src: p3 },
  { type: "video", src: f, poster: h1Img },
  { type: "video", src: food, poster: sVideoImg }, // Center Video (Index 4)
  { type: "image", src: p2 },
  { type: "video", src: p22, poster: p2Img },
  { type: "video", src: p11, poster: p1Img },
  { type: "video", src: p, poster: p2Img },
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
        const isMob = window.innerWidth < 768;
        gsap.to(gridRef.current, {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: isMob ? "+=800" : "+=1200",
            scrub: 0.5,
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
      id="work"
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
          transform: "translate3d(0,0,0) scale(3)",
          willChange: "transform",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transformOrigin: "center center",
        }}
      >
        {MEDIA.map((item, i) => {
          // Deep Mobile Optimization: Only the center item (index 4) should be a video on mobile
          const isMob = isMobile;
          const shouldPlayVideo = item.type === "video" && (!isMob || i === 4);
          
          return (
            <div key={i} style={{ overflow: "hidden" }}>
              {shouldPlayVideo ? (
                <LazyVideo
                  src={item.src}
                  poster={item.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div 
                  className="w-full h-full bg-black/5 flex items-center justify-center relative"
                  style={{
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden"
                  }}
                >
                   <img
                    src={item.src}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: item.type === "video" ? 0.6 : 1
                    }}
                    loading="lazy"
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