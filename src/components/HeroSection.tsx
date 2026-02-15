import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import food from "@/assets/food.mp4";
import f from "@/assets/f.mp4";
import p from "@/assets/p.mp4";
import p11 from "@/assets/p1.mp4";
import p22 from "@/assets/p2.mp4";
import v from "@/assets/v.mp4";
import v1 from "@/assets/v1.mp4";

const words = ["Creativity.", "Strategy.", "Content."];

const heroVideos = [
  food,
  p11,
  p22,
  f,
];

export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-24 sm:pt-36 overflow-hidden bg-white">

      {/* ================= TEXT ================= */}
      <div className="text-center px-4">

        <div className="h-[70px] sm:h-[120px] md:h-[180px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentWord}
              initial={{ y: 160, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -160, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="
                font-satoshi
                uppercase
                text-[#2C2D2F]
                leading-[0.78]
                text-[56px]
                sm:text-[110px]
                md:text-[160px]
                lg:text-[180px]
              "
              style={{
                fontWeight: 1000,
                letterSpacing: "-0.09em",
              }}
            >
              {words[currentWord]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="font-satoshi uppercase text-[#2C2D2F] mt-4 sm:mt-8 text-[12px] sm:text-[16px] md:text-[20px]"
          style={{
            lineHeight: "1.8",
            letterSpacing: "0.18em",
          }}
        >
          WE CREATE. WE STRATEGIZE. WE SCALE.
        </motion.p>
      </div>

      {/* ================= 3D VIDEO CAROUSEL ================= */}
      <div className="relative mt-2">

        {/* 🔥 Perspective creates real 3D */}
        <div
          className="overflow-hidden py-4"
          style={{
            perspective: "2200px",
            perspectiveOrigin: "50% 65%",
          }}
        >

          {/* Tilt whole plane in 3D */}
          <div
            style={{
              transform:
                "rotateX(12deg) rotateY(-6deg) translateZ(-40px)",
              transformStyle: "preserve-3d",
            }}
          >

            <motion.div
              className="flex items-end gap-2"
              animate={{ x: ["0%", "-60%"] }}
              transition={{
                ease: "linear",
                duration: 32,
                repeat: Infinity,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {[...heroVideos, ...heroVideos].map((video, i) => (
                <motion.div
                  key={i}
                  // whileHover={{
                  //   scale: 1.08,
                  //   translateZ: 60,
                  // }}
                  className="
                    flex-shrink-0
                    w-[180px] sm:w-[260px] md:w-[340px] lg:w-[380px]
                    h-[240px] sm:h-[340px] md:h-[460px] lg:h-[520px]
                    rounded-[18px] sm:rounded-[28px]
                    overflow-hidden
                    shadow-2xl
                    bg-black
                  "
                  style={{
                    transform: `
                      
                      
                    `,
                  }}
                >
                  <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}







