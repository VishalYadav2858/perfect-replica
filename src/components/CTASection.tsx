import { motion } from "framer-motion";
import ctaImage from "@/assets/cta-image.jpg";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-10 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-oswald text-3xl md:text-5xl font-black uppercase leading-tight tracking-tight text-foreground mb-6">
            Ready to bring your vision to life?
          </h2>
          <h3 className="font-oswald text-2xl md:text-4xl font-black uppercase leading-tight tracking-tight text-foreground mb-8">
            Contact ADKO today!
          </h3>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-inter text-sm font-medium hover:gap-5 transition-all duration-300 group"
          >
            Get in touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="font-inter text-sm text-muted-foreground mt-8 max-w-md leading-relaxed">
            We'd love to hear from you! Whether you have questions, feedback, or a project idea, feel
            free to reach out. Our team is committed to responding within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden"
        >
          <img src={ctaImage} alt="Creative team at work" className="w-full h-full object-cover aspect-square" loading="lazy" />
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
