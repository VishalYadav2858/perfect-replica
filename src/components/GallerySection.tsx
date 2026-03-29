import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const images = [hero1, hero2, hero4, hero5];

const GalleryCard = ({ img, i }: { img: string; i: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Motion values for magnetic tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for tilt
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Transform springs into rotation
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate relative position (-0.5 to 0.5)
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-[16px] overflow-hidden aspect-square group cursor-none cursor-pointer"
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        className="w-full h-full relative"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src={img}
          alt={`Agency gallery ${i + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 will-change-transform"
          loading="lazy"
        />
        
        {/* Premium Overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-accent/20 backdrop-blur-[2px] pointer-events-none flex flex-col items-center justify-center p-6"
        >
          <div className="border border-white/30 px-4 py-2 rounded-full mb-3 translate-z-20">
            <span className="font-montserrat text-[8px] font-bold uppercase tracking-[0.2em] text-white">DelightX View</span>
          </div>
          <motion.h4 
            animate={{ y: hovered ? 0 : 10 }}
            className="font-satoshi text-2xl font-black text-white text-center leading-none"
          >
            CREATIVE<br />DOMINANCE.
          </motion.h4>
        </motion.div>

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/20 to-transparent"
          animate={{
            opacity: hovered ? 0.3 : 0,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const GallerySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} className="py-24 md:py-36 px-6 lg:px-12 max-w-[1440px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-montserrat text-[10px] font-[700] uppercase tracking-[0.35em] text-accent mb-6">
            Our Work Culture
          </p>
          <h2 className="font-montserrat text-[28px] md:text-[36px] lg:text-[44px] font-[900] uppercase leading-[1.08] tracking-[-0.02em] text-foreground">
            Discover the stories, moments, and shared vision that shape a collaborative and vibrant
            space at our agency.
          </h2>
        </motion.div>

        <motion.div style={{ y }} className="grid grid-cols-2 gap-4">
          {images.map((img, i) => (
            <GalleryCard key={i} img={img} i={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
