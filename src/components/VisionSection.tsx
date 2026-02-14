import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";

/* ---------------- STATS ---------------- */

const stats = [
  { value: 5, suffix: "%", label: "Engagement Boost" },
  { value: 30, suffix: "%", label: "Audience Growth" },
  { value: 60, suffix: "%", label: "Watch Time Increase" },
  { value: 100, suffix: "%", label: "Brand Visibility" },
  { value: 200, suffix: "%", label: "Revenue Growth" },
];

/* ---------------- COUNTER ---------------- */

const AnimatedCounter = ({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const step = value / (duration / 16);

    const timer = setInterval(() => {
      start += step;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span
      ref={ref}
      className="
        font-satoshi
        text-[32px]
        md:text-[44px]
        font-black
        text-[#2C2D2F]
      "
    >
      {count}
      {suffix}
    </span>
  );
};

/* ---------------- SECTION ---------------- */

const VisionSection = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-36 px-6 lg:px-12 max-w-[1440px] mx-auto"
    >
      {/* ---------- TOP HEADING ---------- */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-20"
      >
        <p className="font-satoshi text-[10px] font-bold uppercase tracking-[0.35em] text-gray-500 mb-8">
          We get the job done
        </p>

        <h2
          className="
            font-satoshi
            text-[36px]
            md:text-[56px]
            lg:text-[72px]
            font-black
            uppercase
            leading-[0.92]
            tracking-[-0.03em]
            text-[#2C2D2F]
            max-w-[900px]
            mx-auto
          "
        >
          Transforming Brands With Vision & Creativity
        </h2>

        <p className="font-satoshi text-[14px] md:text-[16px] text-gray-500 max-w-2xl mx-auto mt-8 leading-[1.8]">
          A creative agency specializing in branding, web development, motion
          graphics, and art direction to bring ideas to life.
        </p>
      </motion.div>

      {/* ---------- ADKO STYLE WHITE CARD ---------- */}

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="
          bg-white
          border border-gray-200
          rounded-[28px]
          p-10 md:p-16 lg:p-20
          shadow-sm
        "
      >
        {/* ---------- CHART HEADING ---------- */}

        <h3
          className="
            font-satoshi
            text-[22px]
            md:text-[30px]
            lg:text-[36px]
            font-black
            uppercase
            tracking-[-0.02em]
            text-[#2C2D2F]
            mb-14
          "
        >
          Measurable Growth. Proven Impact.
        </h3>

        {/* ---------- STATS ROW ---------- */}

        <div className="flex flex-wrap gap-10 md:gap-16 mb-14">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
              />

              <p
                className="
                  mt-3
                  text-[12px]
                  uppercase
                  tracking-[0.18em]
                  text-gray-500
                  font-satoshi
                "
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ---------- CTA BUTTON ---------- */}

        <Link to="/about">
          <motion.span
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="
              inline-flex
              items-center
              px-8
              py-3.5
              rounded-full
              bg-[#2C2D2F]
              text-white
              font-satoshi
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.1em]
              hover:opacity-90
              transition-opacity
            "
          >
            Our Brand Solutions
          </motion.span>
        </Link>
      </motion.div>
    </section>
  );
};

export default VisionSection;
