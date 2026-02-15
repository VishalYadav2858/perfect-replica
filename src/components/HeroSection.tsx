import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Creativity.", "Strategy.", "Content."];

// 🔥 Replace with your video URLs (mp4 recommended)
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

      {/* ================= TEXT AREA ================= */}
      <div className="text-center px-4">

        <div className="h-[90px] sm:h-[120px] md:h-[120px] lg:h-[180px] flex items-center justify-center overflow-hidden">

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
                fontStretch: "95%",
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
            fontWeight: 400,
            letterSpacing: "0.18em",
          }}
        >
          WE CREATE. WE STRATEGIZE. WE SCALE.
        </motion.p>

      </div>

      {/* ================= VIDEO CAROUSEL ================= */}
      <div className="relative mt-24">
        <div className="overflow-hidden">

          {/* Extra spacing so rotated corners don't cut */}
          <div className="py-24 h-[750px]">

            {/* Tilt entire track */}
            <div className="rotate-[-6deg]">

              <motion.div
                className="flex items-end gap-8"
                animate={{ x: ["0%", "-60%"] }}
                transition={{
                  ease: "linear",
                  duration: 30,
                  repeat: Infinity,
                }}
              >
                {[...heroVideos, ...heroVideos].map((video, i) => (
                  <motion.div
                    key={i}
                    className="
                      flex-shrink-0
                      w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px]
                      h-[340px] sm:h-[400px] md:h-[460px] lg:h-[520px]
                      rounded-[24px]
                      overflow-hidden
                      shadow-2xl
                      bg-black
                    "
                    
                  >
                    <video
                      src={video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover"
                      onCanPlay={(e) => (e.target as HTMLVideoElement).play()}
                    />
                  </motion.div>
                ))}

              </motion.div>

            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
