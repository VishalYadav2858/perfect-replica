import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";

const stats = [
  { value: 5, suffix: "%", label: "" },
  { value: 30, suffix: "%", label: "" },
  { value: 60, suffix: "%", label: "" },
  { value: 100, suffix: "%", label: "" },
  { value: 200, suffix: "%", label: "" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
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
    <span ref={ref} className="font-montserrat text-[28px] md:text-[36px] font-[900] text-background">
      {count}{suffix}
    </span>
  );
};

const VisionSection = () => {
  return (
    <section id="about" className="py-24 md:py-36 px-6 lg:px-12 max-w-[1440px] mx-auto">
      {/* Top heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-20"
      >
        <p className="font-montserrat text-[10px] font-[700] uppercase tracking-[0.35em] text-muted-foreground mb-8">
          We get the job done
        </p>
        <h2 className="font-montserrat text-[36px] md:text-[56px] lg:text-[72px] font-[900] uppercase leading-[0.92] tracking-[-0.03em] text-foreground max-w-[900px] mx-auto">
          Transforming brands with vision and creativity
        </h2>
        <p className="font-montserrat text-[14px] md:text-[16px] font-[400] text-muted-foreground max-w-2xl mx-auto mt-8 leading-[1.8]">
          A creative agency specializing in branding, web development, motion graphics, and art
          direction to bring ideas to life.
        </p>
      </motion.div>

      {/* Dark card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="bg-foreground text-background rounded-[28px] p-10 md:p-16 lg:p-20"
      >
        <h3 className="font-montserrat text-[22px] md:text-[30px] lg:text-[38px] font-[700] leading-[1.25] max-w-[800px]">
          At AD KO, content isn't an afterthought — it's the strategy. Founded by creators, we
          think like storytellers and execute like marketers.
        </h3>

        {/* Stats Row */}
        <div className="flex flex-wrap gap-8 md:gap-14 mt-14 mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </motion.div>
          ))}
        </div>

        <p className="font-montserrat text-[13px] md:text-[14px] font-[400] text-background/60 max-w-lg leading-[1.8] mb-10">
          Explore our curated projects that showcase creativity, strategy, and innovation across
          branding, web, and motion design.
        </p>

        <Link to="/about">
          <motion.span
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-background text-foreground font-montserrat text-[12px] font-[600] uppercase tracking-[0.1em] hover:opacity-90 transition-opacity"
          >
            Our Brand Solutions
          </motion.span>
        </Link>
      </motion.div>
    </section>
  );
};

export default VisionSection;
