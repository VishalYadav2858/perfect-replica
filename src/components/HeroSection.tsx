import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LazyVideo from "./LazyVideo";

// Video Assets
import food from "@/assets/food.mp4";
import f from "@/assets/f.mp4";
import p11 from "@/assets/p1.mp4";
import p22 from "@/assets/p2.mp4";
import v from "@/assets/v.mp4";
import v1 from "@/assets/v1.mp4";

// Poster Assets (Images to show before video loads)
import p1Img from "@/assets/p1.jpg";
import p2Img from "@/assets/p2.jpg";
import h1Img from "@/assets/hero-1.jpg";
import h2Img from "@/assets/hero-2.jpg";
import h3Img from "@/assets/hero-3.jpg";
import sVideoImg from "@/assets/service-video.jpg";

const words = ["Creativity.", "Strategy.", "Growth.", "Content."];

const heroVideos = [
  { src: food, poster: sVideoImg },
  { src: p11, poster: p1Img },
  { src: p22, poster: p2Img },
  { src: v, poster: h2Img },
  { src: f, poster: h1Img },
  { src: v1, poster: h3Img },
];

export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[820px] md:h-[1040px] pt-28 md:pt-36 overflow-hidden bg-background">
      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center">
        <div className="flex h-[86px] w-full items-center justify-center overflow-hidden sm:h-[118px] md:h-[156px] lg:h-[176px]">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentWord}
                initial={{ rotateX: -90, y: "90%", opacity: 0 }}
                animate={{ rotateX: 0, y: "0%", opacity: 1 }}
                exit={{ rotateX: 90, y: "-90%", opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="font-adko-heading whitespace-nowrap uppercase text-[64px] leading-[0.92] text-foreground sm:text-[96px] md:text-[132px] lg:text-[150px]"
                style={{ transformOrigin: "50% 50% -48px" }}
              >
                {words[currentWord]}
              </motion.h1>
            </AnimatePresence>
          </div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-2 font-montserrat text-[13px] font-[800] uppercase leading-tight tracking-[-0.03em] text-foreground sm:text-[18px] md:text-[22px]"
        >
          We lead with content. We scale with digital.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, x: isMobile ? -120 : -300, y: isMobile ? 70 : 120, rotateX: 20, rotateY: 19, rotateZ: -20, skewX: 8, skewY: 11 }}
        animate={{ opacity: 1, x: isMobile ? -40 : -210, y: isMobile ? 36 : 92, rotateX: 20, rotateY: 19, rotateZ: -20, skewX: 8, skewY: 11 }}
        transition={{ duration: 1.15, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-[330px] z-10 flex w-max origin-center gap-4 md:top-[410px] md:gap-6"
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      >
        <motion.div
          className="flex w-max gap-4 md:gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: isMobile ? 22 : 36, repeat: Infinity }}
        >
          {[...heroVideos, ...heroVideos].map((video, idx) => (
            <div
              key={`hero-card-${idx}`}
              className="relative h-[350px] w-[240px] flex-none overflow-hidden rounded-[20px] bg-muted md:h-[550px] md:w-[480px] md:rounded-[40px]"
            >
              <LazyVideo
                src={video.src}
                poster={video.poster}
                fetchpriority={idx === 0 ? "high" : "auto"}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-background/5" />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
