import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { slideUp } from "@/lib/animations";

/* ---------- STATS ---------- */
const stats = [
  { value: 150, suffix: "+", label: "Brands Scaled" },
  { value: 5, suffix: "X", label: "Engagement Boost" },
  { value: 60, suffix: "%", label: "Watch Time Growth" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let s = 0;
    const step = value / (1200 / 16);
    const t = setInterval(() => {
      s += step;
      if (s >= value) { setCount(value); clearInterval(t); }
      else setCount(Math.floor(s));
    }, 16);
    return () => clearInterval(t);
  }, [inView, value]);

  return <span ref={ref}>{count}<span className="text-accent">{suffix}</span></span>;
};

/* ---------- COMPONENT ---------- */
export default function VisionSection() {
  return (
    <section className="relative py-20 md:py-28 px-6 lg:px-12 max-w-[1440px] mx-auto overflow-hidden">




      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } }, hidden: {} }}
        className="relative z-10"
      >
        {/* Row 1: Headline + description */}
        <motion.div variants={slideUp} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-12">
          <h2 className="lg:col-span-7 font-satoshi text-[36px] md:text-[52px] lg:text-[60px] font-black leading-[0.9] tracking-tight text-foreground">
            Transforming Brands<br />
            <span className="text-accent">With Vision & Craft</span>
          </h2>
          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="font-montserrat text-sm md:text-[15px] font-medium text-foreground/60 leading-[1.8] border-l-2 border-accent pl-6">
              A creative agency specializing in branding, web development, motion graphics, and art direction to bring your ideas to life.
            </p>
          </div>
        </motion.div>

        {/* Row 2: Stats Bento — mirrors AboutSection's card system */}
        <motion.div variants={slideUp} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 md:p-8 flex flex-col justify-center items-center text-center transition-all hover:-translate-y-1 duration-300 bg-accent/10 border border-accent/20"
            >
              <span className="font-satoshi text-3xl md:text-4xl font-black mb-2 text-foreground">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="font-montserrat text-[10px] tracking-wider uppercase font-bold text-foreground/50">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Row 3: CTA */}
        <motion.div variants={slideUp} className="mt-10 flex items-center justify-between border-t border-black/5 pt-8">
          <p className="font-montserrat text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">
            Measurable Growth. Proven Impact.
          </p>
          <Link
            to="/contact-us"
            className="group flex items-center gap-3 px-7 py-3.5 rounded-full bg-foreground text-background font-montserrat text-xs font-bold uppercase tracking-widest transition-all hover:bg-accent hover:text-white hover:shadow-lg hover:shadow-accent/30"
          >
            Start a Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
