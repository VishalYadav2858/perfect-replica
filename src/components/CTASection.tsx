import { motion } from "framer-motion";
import ctaImage from "@/assets/cta-image.jpg";
import { ArrowUpRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 md:py-36 px-6 lg:px-12 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-montserrat text-[32px] md:text-[44px] lg:text-[56px] font-[900] uppercase leading-[0.95] tracking-[-0.03em] text-foreground mb-3">
            Ready to bring your vision to life?
          </h2>
          <h3 className="font-montserrat text-[28px] md:text-[38px] lg:text-[48px] font-[900] uppercase leading-[0.95] tracking-[-0.03em] text-foreground mb-10">
            Contact ADKO today!
          </h3>

          <motion.a
            href="mailto:hello@adko.in"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-foreground text-background font-montserrat text-[13px] font-[600] tracking-[0.05em] group"
          >
            Get in touch
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </motion.a>

          <p className="font-montserrat text-[13px] font-[400] text-muted-foreground mt-10 max-w-md leading-[1.8]">
            We'd love to hear from you! Whether you have questions, feedback, or a project idea, feel
            free to reach out. Our team is committed to responding within 24 hours to assist you
            promptly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[28px] overflow-hidden"
        >
          <img
            src={ctaImage}
            alt="ADKO creative team"
            className="w-full h-full object-cover aspect-[4/3] lg:aspect-square"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
