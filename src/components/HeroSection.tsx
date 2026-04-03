import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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

const col1Videos = [
  { src: food, poster: sVideoImg },
  { src: p11, poster: p1Img },
  { src: v, poster: h2Img }
];
const col2Videos = [
  { src: p22, poster: p2Img },
  { src: f, poster: h1Img },
  { src: v1, poster: h3Img }
];

// Creator Avatars for Hero Glimpse
import creator1 from "@/assets/anirudh.jpg";
import creator2 from "@/assets/gazi.jpg";
import creator3 from "@/assets/parth.jpg";
import creator4 from "@/assets/atharva.jpg";

const creatorAvatars = [creator1, creator2, creator3, creator4];

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
    <section className="relative min-h-screen pt-20 pb-20 md:pt-0 md:pb-0 overflow-hidden bg-background flex flex-col justify-center">

      {/* ================= LEFT: TEXT ================= */}
      <div className="relative z-20 w-full px-6 md:px-12 max-w-7xl mx-auto flex items-center h-full min-h-[60vh] md:min-h-screen pointer-events-none">
        <div className="flex flex-col items-start justify-center w-full lg:w-[75%] pointer-events-auto">

          {/* Animated headline */}
          <div className="h-[75px] sm:h-[90px] md:h-[110px] lg:h-[130px] flex items-center justify-start overflow-hidden w-full relative">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentWord}
                initial={{ y: "110%", opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                animate={{ y: "0%", opacity: 1, filter: "blur(0px)", scale: 1 }}
                exit={{ y: "-110%", opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-satoshi uppercase leading-[0.85] text-[38px] sm:text-[60px] md:text-[85px] lg:text-[100px] xl:text-[115px] tracking-tight font-black whitespace-nowrap text-foreground"
                style={{ letterSpacing: "-0.04em" }}
              >
                {words[currentWord]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Tagline — Staggered Reveal */}
          <div className="flex items-center gap-x-3 md:gap-x-6 mt-4 mb-10 overflow-hidden whitespace-nowrap">
            {["We Create.", "We Strategize.", "We Scale."].map((text, i) => (
              <motion.span
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="font-montserrat text-[10px] sm:text-[12px] md:text-[14px] font-[700] uppercase tracking-[0.15em] md:tracking-[0.25em] text-foreground"
              >
                {text}
              </motion.span>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
          >
            <Link
              to="/contact-us"
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-montserrat text-xs font-bold uppercase tracking-widest transition-all hover:bg-accent hover:text-white hover:shadow-lg hover:shadow-accent/30 w-fit"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats — Aligned with Container */}
      <div className="absolute bottom-8 left-0 w-full z-30 hidden md:block pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.8 }}
            className="flex items-center gap-10"
          >
            <div className="flex flex-col gap-1">
              <span className="font-satoshi text-[44px] font-[900] text-foreground leading-none">120+</span>
              <span className="font-montserrat text-[9px] font-[700] uppercase tracking-[0.2em] text-foreground">Happy Clients</span>
            </div>
            <div className="w-[1px] h-12 bg-foreground/15" />
            <div className="flex flex-col gap-1">
              <span className="font-satoshi text-[44px] font-[900] text-foreground leading-none">30+</span>
              <span className="font-montserrat text-[9px] font-[700] uppercase tracking-[0.2em] text-foreground">Brand Partners</span>
            </div>
            <div className="w-[1px] h-12 bg-foreground/15" />
            <div className="flex flex-col gap-2">
              <div className="flex -space-x-3">
                {creatorAvatars.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-muted"
                  >
                    <img src={img} alt="Creator" className="w-full h-full object-cover" />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                  className="w-10 h-10 rounded-full border-2 border-background bg-accent flex items-center justify-center font-montserrat text-[10px] font-bold text-black uppercase tracking-tighter"
                >
                  20+
                </motion.div>
              </div>
              <span className="font-montserrat text-[9px] font-[700] uppercase tracking-[0.2em] text-foreground/40">Creators Network</span>
            </div>
          </motion.div>
        </div>
      </div>


      {/* ================= RIGHT: FULL HEIGHT VERTICAL VIDEO SCROLL ================= */}
      <div className="relative lg:absolute top-20 md:top-24 right-0 w-full lg:w-[45%] h-[600px] md:h-[800px] lg:h-[calc(100vh-6rem)] overflow-hidden z-10 pt-4 lg:pt-0">
        <div 
          className="grid grid-cols-2 gap-4 md:gap-6 h-full w-full px-4 lg:px-8"
          style={{
            willChange: "transform",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden"
          }}
        >
          {/* Column 1: Scrolling UP */}
          <div 
            className="relative h-full overflow-visible flex flex-col justify-start"
            style={{ transform: "translate3d(0,0,0)" }}
          >
            <motion.div
              className="flex flex-col w-full gap-4 md:gap-6"
              style={{ willChange: "transform" }}
              animate={{ y: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: isMobile ? 20 : 45,
                repeat: Infinity,
              }}
            >
              {(isMobile ? [...col1Videos.slice(0, 2)] : [...col1Videos, ...col1Videos]).map((video, idx) => (
                <div 
                  key={`col1-${idx}`} 
                  className="w-full aspect-[3/4] overflow-hidden relative flex-shrink-0 group rounded-xl"
                  style={{ willChange: "transform" }}
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
                    className="w-full h-full object-cover scale-[1.02] group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Column 2: Scrolling DOWN & Staggered (50% offset) */}
          <div 
            className="relative h-full overflow-visible flex flex-col justify-start -translate-y-24 md:-translate-y-32"
            style={{ transform: "translate3d(0,0,0)" }}
          >
            <motion.div
              className="flex flex-col w-full gap-4 md:gap-6"
              style={{ willChange: "transform" }}
              animate={{ y: ["-50%", "0%"] }}
              transition={{
                ease: "linear",
                duration: isMobile ? 24 : 55,
                repeat: Infinity,
              }}
            >
              {(isMobile ? [...col2Videos.slice(0, 2)] : [...col2Videos, ...col2Videos]).map((video, idx) => (
                <div 
                  key={`col2-${idx}`} 
                  className="w-full aspect-[3/4] overflow-hidden relative flex-shrink-0 group rounded-xl"
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
                    className="w-full h-full object-cover scale-[1.02] group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/30 md:hidden z-30 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <MoveDown className="w-4 h-4 text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
