"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { slideUp } from "@/lib/animations";

const services = [
  {
    index: "01",
    title: "Video Production",
    description:
      "We create content that connects with your audience — built on strategy, guided by insight, and designed to deliver across platforms.",
    tag: "Content & Strategy",
  },
  {
    index: "02",
    title: "Website Design & Development",
    description:
      "We design user experiences that are intuitive, goal-driven, and built around real user behavior — turning complexity into clarity.",
    tag: "UX / Engineering",
  },
  {
    index: "03",
    title: "Personal Branding",
    description:
      "Your brand is not confined to a niche. We craft a narrative that spans various facets of your personality and accomplishments.",
    tag: "Identity & Narrative",
  },
  {
    index: "04",
    title: "Social Media Growth",
    description:
      "Data-driven strategies to accelerate brand growth and maximize monetization. Your social media is our responsibility.",
    tag: "Growth & Analytics",
  },
  {
    index: "05",
    title: "Performance Marketing",
    description:
      "Precision-targeted campaigns designed to maximize ROI and scale your business across Facebook, Instagram, and Google.",
    tag: "Performance & Scaling",
  },
];

const ACCENT = "hsl(var(--accent))";

function ServiceRow({ service, i }: { service: (typeof services)[0]; i: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden cursor-default border-t border-black/10 group bg-black/[0.01] hover:bg-black/[0.03] transition-colors duration-500"
    >
      {/* Left Accent Bar */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: hovered ? "100%" : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "4px",
          backgroundColor: ACCENT,
          zIndex: 20,
        }}
      />
      {/* Sliding fill */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: ACCENT,
          transformOrigin: "left",
          zIndex: 0,
          opacity: 0.1,
        }}
      />

      <div
        className="relative z-10 px-6 md:px-10 py-4 md:py-6"
        style={{
          display: "grid",
          gridTemplateColumns: "48px 1fr",
          gridTemplateRows: "auto",
          rowGap: "0px",
          columnGap: "24px",
        }}
      >
        {/* Index */}
        <motion.span
          animate={{ color: hovered ? "hsl(var(--accent))" : "rgba(0, 0, 0, 0.4)" }}
          transition={{ duration: 0.3 }}
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: "11px",
            letterSpacing: "0.1em",
            fontWeight: 500,
            paddingTop: "4px",
            gridRow: "1 / 2",
            gridColumn: "1 / 2",
          }}
        >
          {service.index}
        </motion.span>

        {/* Title + tag */}
        <div
          style={{
            gridRow: "1 / 2",
            gridColumn: "2 / 3",
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <motion.h3
            animate={{ color: hovered ? "hsl(var(--accent))" : "#111111" }}
            transition={{ duration: 0.3 }}
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: "clamp(22px, 3.5vw, 46px)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              lineHeight: 1,
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            {service.title}
            <motion.span
              animate={{ 
                opacity: hovered ? 0 : 1,
                x: hovered ? 5 : 0
              }}
              transition={{ duration: 0.3 }}
              style={{
                display: "inline-block",
                fontFamily: "'Satoshi', sans-serif",
                fontSize: "10px",
                fontWeight: 800,
                letterSpacing: "0.15em",
                color: "rgba(0,0,0,0.3)",
                textTransform: "uppercase",
                marginTop: "4px",
              }}
            >
              Explore
            </motion.span>
          </motion.h3>

        </div>

        {/* Description - Animated on Hover */}
        <div style={{ gridRow: "2 / 3", gridColumn: "2 / 3", overflow: "hidden" }}>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: hovered ? "auto" : 0, 
              opacity: hovered ? 1 : 0,
              marginTop: hovered ? 16 : 0 
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: "height, opacity" }}
          >
            <p
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: "15px",
                lineHeight: "1.7",
                fontWeight: 400,
                color: "#111111",
                maxWidth: "620px",
              }}
            >
              {service.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right side icon - Pulsing Plus */}
      <div style={{ position: "absolute", right: "32px", top: "40px", transform: "translateY(-50%)" }}>
        <motion.div
          animate={{ 
            rotate: hovered ? 45 : 0, 
            color: hovered ? "hsl(var(--accent))" : "#111111",
            scale: hovered ? 1.1 : 1
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontSize: "24px", fontWeight: 700, lineHeight: 1 }}
        >
          +
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const headingRef = useRef(null);
  const inView = useInView(headingRef, { once: true });

  return (
    <section
      id="services"
      className="scroll-mt-24 py-24 md:py-32"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* GRID HEADING BLOCK */}
        <motion.div
          ref={headingRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } }, hidden: {} }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-16"
        >
          {/* Left: Heading */}
          <div className="lg:col-span-7">
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                variants={slideUp}
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontSize: "clamp(40px, 6vw, 75px)",
                  fontWeight: 900,
                  color: "#111111",
                  letterSpacing: "-0.04em",
                  lineHeight: 0.92,
                  display: "block",
                }}
              >
                Our
              </motion.h2>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                variants={slideUp}
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontSize: "clamp(40px, 6vw, 75px)",
                  fontWeight: 900,
                  color: "hsl(var(--accent))",
                  letterSpacing: "-0.04em",
                  lineHeight: 0.92,
                  display: "block",
                }}
              >
                Expertise.
              </motion.h2>
            </div>
          </div>

          {/* Right: Description + CTA */}
          <div className="lg:col-span-5 flex flex-col justify-end gap-8">
            <motion.p
              variants={slideUp}
              className="font-montserrat text-sm md:text-[15px] font-medium text-foreground/60 leading-[1.8] border-l-2 border-accent pl-6"
            >
              We provide end-to-end digital solutions from high-impact content and branding to technical engineering and social growth all designed to scale your vision.
            </motion.p>
            <motion.div variants={slideUp}>
              <Link
                to="/contact-us"
                className="group self-start flex items-center gap-3 px-7 py-3.5 rounded-full bg-foreground text-background font-montserrat text-xs font-bold uppercase tracking-widest transition-all hover:bg-accent hover:text-white hover:shadow-lg hover:shadow-accent/30 w-fit"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>


        {/* ROWS */}
        <div
          className="rounded-[32px] overflow-hidden"
          style={{
            border: "1px solid rgba(0, 0, 0, 0.08)",
            background: "#ffffff",
          }}
        >
          <div className="rounded-[32px] overflow-hidden">
            {services.map((s, i) => (
              <ServiceRow key={s.index} service={s} i={i} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            marginTop: "32px",
            padding: "0 12px",
          }}
        >
          <span
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.15em",
              color: "rgba(0, 0, 0, 0.5)",
              textTransform: "uppercase",
            }}
          >
            Hover to explore
          </span>
          <span
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.15em",
              color: "rgba(0, 0, 0, 0.5)",
            }}
          >
            5 Services
          </span>
        </motion.div>
      </div>
    </section>
  );
}



// hello change
