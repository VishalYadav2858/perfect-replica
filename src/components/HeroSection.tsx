import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const words = ["Creativity.", "Strategy.", "Content."];
const heroImages = [hero1, hero2, hero3, hero4, hero5];
const rotations = [-8, -3, 2, 6, -5];

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-28 md:pt-32 pb-0 overflow-hidden">
      {/* Rotating Word */}
      <div className="text-center px-4">
        <div className="h-[80px] sm:h-[120px] md:h-[160px] lg:h-[200px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentWord}
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -120, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-montserrat text-[64px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-[900] uppercase leading-[0.85] tracking-[-0.04em] text-foreground"
              style={{ fontStretch: "ultra-condensed" }}
            >
              {words[currentWord]}
            </motion.h1>
          </AnimatePresence>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-montserrat text-[10px] sm:text-[11px] md:text-[13px] font-[700] uppercase tracking-[0.3em] text-muted-foreground mt-6"
        >
          We lead with content. We scale with digital.
        </motion.p>
      </div>

      {/* Infinite Tilted Image Carousel */}
      <div className="mt-14 md:mt-20 overflow-hidden pb-8">
        <div className="flex animate-carousel items-end" style={{ width: "fit-content" }}>
          {[...heroImages, ...heroImages, ...heroImages].map((img, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] h-[320px] sm:h-[380px] md:h-[440px] lg:h-[500px] mx-2 md:mx-3 rounded-[20px] overflow-hidden shadow-xl"
              style={{
                transform: `rotate(${rotations[i % 5]}deg)`,
              }}
              whileHover={{ scale: 1.04, rotate: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src={img}
                alt={`Creative work ${(i % 5) + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
