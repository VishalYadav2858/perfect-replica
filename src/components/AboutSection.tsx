import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10 max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-oswald text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-none tracking-tight text-foreground mb-8">
          We get the job done
        </h2>
        <p className="font-inter text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
          We're a digital marketing team that specializes in providing end-to-end services to help
          businesses get the required task DONE. With a wide range of expertise, including content
          creation, brand development, performance marketing, website design and development, graphic
          design, photography, videography, and 3D animation, we offer a comprehensive suite of
          services to meet the diverse needs of our clients under one roof.
        </p>
        <a
          href="#services"
          className="inline-flex items-center mt-8 px-8 py-3 rounded-full bg-foreground text-background font-inter text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Our Brand Solutions
        </a>
      </motion.div>
    </section>
  );
};

export default AboutSection;
