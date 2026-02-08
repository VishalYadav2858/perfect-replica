import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const words = ["Creativity.", "Strategy.", "Content."];
const heroImages = [hero1, hero2, hero3, hero4, hero5];

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-28 pb-8 overflow-hidden">
      {/* Rotating Word */}
      <div className="text-center mb-4">
        <div className="h-[120px] md:h-[180px] lg:h-[220px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentWord}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -80, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="font-oswald text-[80px] md:text-[140px] lg:text-[180px] font-black uppercase leading-none tracking-tighter text-foreground"
            >
              {words[currentWord]}
            </motion.h1>
          </AnimatePresence>
        </div>
        <p className="font-inter text-sm md:text-base font-medium uppercase tracking-[0.2em] text-muted-foreground mt-2">
          We lead with content. We scale with digital.
        </p>
      </div>

      {/* Infinite Image Carousel */}
      <div className="mt-12 overflow-hidden">
        <div className="flex animate-carousel" style={{ width: "fit-content" }}>
          {[...heroImages, ...heroImages].map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[260px] md:w-[320px] h-[340px] md:h-[440px] mx-3 rounded-2xl overflow-hidden"
              style={{ transform: `rotate(${(i % 5 - 2) * 4}deg)` }}
            >
              <img
                src={img}
                alt={`Portfolio work ${(i % 5) + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
