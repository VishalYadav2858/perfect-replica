import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import food from "@/assets/food.mp4";
import f from "@/assets/f.mp4";
import p11 from "@/assets/p1.mp4";
import p22 from "@/assets/p2.mp4";
import v from "@/assets/v.mp4";
import v1 from "@/assets/v1.mp4";

const words = ["Creativity.", "Strategy.", "Growth.", "Content."];

const col1Videos = [food, p11, v];
const col2Videos = [p22, f, v1];

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
    }, 3500); // slightly longer duration to match the elegance
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-20 pb-20 md:pt-0 md:pb-0 overflow-hidden bg-background flex flex-col justify-center">




      {/* ================= LEFT: TEXT ================= */}
      <div className="relative z-20 w-full px-6 md:px-12 max-w-[1440px] mx-auto flex items-center h-full min-h-[60vh] md:min-h-screen pointer-events-none">
        
        <div className="flex flex-col items-start justify-center pt-0 lg:pt-0 w-full lg:w-[55%] pointer-events-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex items-center gap-4 mb-8 text-foreground/50 font-montserrat text-[10px] md:text-xs tracking-[0.2em] uppercase font-[800]"
          >
            <span>120+ Happy Clients</span>
            <span className="w-1 h-1 rounded-full bg-accent/50" />
            <span>30+ Brand Partners</span>
          </motion.div>

          {/* Elegant Changing Word */}
          <div className="h-[75px] sm:h-[90px] md:h-[110px] lg:h-[130px] flex items-center justify-start overflow-hidden w-full">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentWord}
                initial={{ y: "110%", opacity: 0, scale: 0.98 }}
                animate={{ y: "0%", opacity: 1, scale: 1 }}
                exit={{ y: "-110%", opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                className="font-satoshi uppercase leading-[0.85] text-[50px] sm:text-[70px] md:text-[85px] lg:text-[100px] xl:text-[115px] tracking-tight font-black whitespace-nowrap text-foreground"
                style={{
                  letterSpacing: "-0.04em",
                }}
              >
                {words[currentWord]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="font-montserrat text-sm md:text-lg text-foreground/60 leading-relaxed font-medium mt-6 mb-8 max-w-[450px]"
          >
                 WE CREATE. WE STRATEGIZE. WE SCALE. 
                 {/* <br />Your growth is our responsibility. */}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
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

      {/* ================= RIGHT: FULL HEIGHT VERTICAL VIDEO SCROLL ================= */}
      {/* Absolute positioned on the right half, pushed below the header. */}
      <div className="relative lg:absolute top-20 md:top-24 right-0 w-full lg:w-[45%] h-[600px] md:h-[800px] lg:h-[calc(100vh-6rem)] overflow-hidden z-10 pt-4 lg:pt-0">
        
        <div 
          className="grid grid-cols-2 gap-4 md:gap-6 h-full w-full px-4 lg:px-8"
        >
          
          {/* Column 1: Scrolling UP */}
          <div className="relative h-full overflow-visible flex flex-col justify-start">
            <motion.div
              className="flex flex-col w-full"
              animate={{ y: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: isMobile ? 25 : 45, // Faster on mobile if fewer items
                repeat: Infinity,
              }}
            >
              {(isMobile ? [...col1Videos, ...col1Videos] : [...col1Videos, ...col1Videos, ...col1Videos, ...col1Videos]).map((video, idx) => (
                <div 
                  key={`col1-${idx}`} 
                  className="w-full aspect-[3/4] overflow-hidden relative flex-shrink-0 group"
                >
                  <video
                    src={video}
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
          <div className="relative h-full overflow-visible flex flex-col justify-start -translate-y-24 md:-translate-y-32">
            <motion.div
              className="flex flex-col w-full"
              animate={{ y: ["-50%", "0%"] }}
              transition={{
                ease: "linear",
                duration: isMobile ? 30 : 55, // Faster on mobile if fewer items
                repeat: Infinity,
              }}
            >
              {(isMobile ? [...col2Videos, ...col2Videos] : [...col2Videos, ...col2Videos, ...col2Videos, ...col2Videos]).map((video, idx) => (
                <div 
                  key={`col2-${idx}`} 
                  className="w-full aspect-[3/4] overflow-hidden relative flex-shrink-0 group"
                >
                  <video
                    src={video}
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
