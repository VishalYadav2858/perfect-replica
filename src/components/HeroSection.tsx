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

export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-32 overflow-hidden bg-white">

      {/* TEXT AREA */}
      <div className="text-center px-4">

        <div className="h-[90px] sm:h-[120px] md:h-[120px] lg:h-[180px] flex items-center justify-center overflow-hidden">

          <AnimatePresence mode="wait">
            
            <motion.h1
              key={currentWord}
              initial={{ y: 160, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -160, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}

              /* 🔥 EXACT TYPOGRAPHY */
              className="
                font-satoshi
                uppercase
                text-[#2C2D2F]
                leading-[0.78]

                text-[110px]
                sm:text-[160px]
                md:text-[210px]
                lg:text-[180px]
              "

              style={{
                fontWeight: 1000,
                fontStretch: "95%",
                letterSpacing: "-0.09em",
              }}
            >
              {words[currentWord]}
            </motion.h1>

          </AnimatePresence>

        </div>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}

          className="font-satoshi uppercase text-[#2C2D2F] mt-8"

          style={{
            fontSize: "20px",
            lineHeight: "42px",
            fontWeight: 400,
            letterSpacing: "0.18em",
          }}
        >
          WE CREATE. WE STRATEGIZE. WE SCALE.
        </motion.p>

      </div>

      {/* IMAGE CAROUSEL */}
      <div className="mt-20 overflow-hidden pb-10">

        <div
          className="flex items-end animate-carousel"
          style={{ width: "fit-content" }}
        >
          {[...heroImages, ...heroImages, ...heroImages].map((img, i) => (

            <motion.div
              key={i}
              className="
                flex-shrink-0
                w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px]
                h-[320px] sm:h-[380px] md:h-[440px] lg:h-[500px]
                mx-2 md:mx-3
                rounded-[20px]
                overflow-hidden
                shadow-xl
              "
              
              
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={img}
                alt={`Creative ${(i % 5) + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

          ))}
        </div>

      </div>

    </section>
  );
}
