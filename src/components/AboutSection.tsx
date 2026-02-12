import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-24 md:py-36 px-6 lg:px-12 max-w-[1440px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="font-montserrat text-[40px] md:text-[60px] lg:text-[80px] font-[900] uppercase leading-[0.9] tracking-[-0.03em] text-foreground mb-10">
          we get the<br />job done
        </h2>
        <p className="font-montserrat text-[14px] md:text-[16px] font-[400] text-muted-foreground max-w-3xl leading-[1.8]">
          We're a digital marketing team that specializes in providing end-to-end services to help
          businesses get the required task DONE. With a wide range of expertise, including content
          creation, brand development, performance marketing, website design and development, graphic
          design, photography, videography, and 3D animation, we offer a comprehensive suite of
          services to meet the diverse needs of our clients under one roof.
        </p>
        <Link to="/brand-solutions">
          <motion.span
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center mt-10 px-8 py-3.5 rounded-full bg-foreground text-background font-montserrat text-[12px] font-[600] uppercase tracking-[0.1em] hover:opacity-90 transition-opacity"
          >
            Our Brand Solutions
          </motion.span>
        </Link>
      </motion.div>
    </section>
  );
};

export default AboutSection;
