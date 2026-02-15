import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Creativity.", "Strategy.", "Content."];

const heroVideos = [
  "https://cdn.prod.website-files.com/67baec8acda347f8a7b9e834/68188421c3da99dab97e2e7e_Starbucks%20India-transcode.mp4",
  "https://cdn.prod.website-files.com/67baec8acda347f8a7b9e834/68188421c3da99dab97e2e7e_Starbucks%20India-transcode.mp4",
  "https://cdn.prod.website-files.com/67baec8acda347f8a7b9e834/68188421c3da99dab97e2e7e_Starbucks%20India-transcode.mp4",
  "https://cdn.prod.website-files.com/67baec8acda347f8a7b9e834/68188421c3da99dab97e2e7e_Starbucks%20India-transcode.mp4",
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
    <section className="pt-32 overflow-hidden bg-white">

      {/* ================= TEXT ================= */}
      <div className="text-center px-4">

        <div className="h-[120px] md:h-[180px] flex items-center justify-center overflow-hidden">
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
                text-[110px]
                sm:text-[160px]
                md:text-[210px]
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
          className="font-satoshi uppercase text-[#2C2D2F] mt-8"
          style={{
            fontSize: "20px",
            lineHeight: "42px",
            letterSpacing: "0.18em",
          }}
        >
          WE CREATE. WE STRATEGIZE. WE SCALE.
        </motion.p>
      </div>

      {/* ================= 3D VIDEO CAROUSEL ================= */}
      <div className="relative mt-1">

        {/* 🔥 Perspective creates real 3D */}
        <div
          className="overflow-hidden py-24"
          style={{
            perspective: "2200px",
            perspectiveOrigin: "50% 65%",
          }}
        >

          {/* Tilt whole plane in 3D */}
          <div
            style={{
              transform:
                "rotateX(18deg) rotateY(-12deg) translateZ(-120px)",
              transformStyle: "preserve-3d",
            }}
          >

            <motion.div
              className="flex items-end gap-10"
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
                  whileHover={{
                    scale: 1.08,
                    translateZ: 60,
                  }}
                  className="
                    flex-shrink-0
                    w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px]
                    h-[340px] sm:h-[400px] md:h-[460px] lg:h-[520px]
                    rounded-[28px]
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
