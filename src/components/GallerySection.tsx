import { motion } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const images = [hero1, hero2, hero4, hero5];

const GallerySection = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-oswald text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4">
            Available for Work
          </p>
          <h2 className="font-oswald text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.1] tracking-tight text-foreground">
            Discover the stories, moments, and shared vision that shape a collaborative and vibrant
            space at our agency, where design thrives and bold concepts turn into reality.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl overflow-hidden aspect-square"
            >
              <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
