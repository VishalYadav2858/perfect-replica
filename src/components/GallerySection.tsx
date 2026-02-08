import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const images = [hero1, hero2, hero4, hero5];

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
            Available for Work
          </p>
          <h2 className="font-montserrat text-[28px] md:text-[36px] lg:text-[44px] font-[900] uppercase leading-[1.08] tracking-[-0.02em] text-foreground">
            Discover the stories, moments, and shared vision that shape a collaborative and vibrant
            space at our agency, where design thrives and bold concepts turn into reality.
          </h2>
        </motion.div>

        <motion.div style={{ y }} className="grid grid-cols-2 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-[16px] overflow-hidden aspect-square group"
            >
              <img
                src={img}
                alt={`Agency gallery ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
