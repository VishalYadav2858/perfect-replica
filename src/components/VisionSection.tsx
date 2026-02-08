import { motion } from "framer-motion";

const VisionSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-10 max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="font-oswald text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-6">
          We get the job done
        </p>
        <h2 className="font-oswald text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] tracking-tight text-foreground max-w-4xl mx-auto">
          Transforming brands with vision and creativity
        </h2>
        <p className="font-inter text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mt-8 leading-relaxed">
          A creative agency specializing in branding, web development, motion graphics, and art
          direction to bring ideas to life.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-20 bg-foreground text-background rounded-3xl p-10 md:p-16"
      >
        <h3 className="font-oswald text-2xl md:text-3xl lg:text-4xl font-bold leading-snug max-w-3xl">
          At AD KO, content isn't an afterthought — it's the strategy. Founded by creators, we
          think like storytellers and execute like marketers.
        </h3>
        <a
          href="#services"
          className="inline-flex items-center mt-10 px-8 py-3 rounded-full bg-background text-foreground font-inter text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Our Brand Solutions
        </a>
      </motion.div>
    </section>
  );
};

export default VisionSection;
