import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContactBanner = () => {
  return (
    <section className="bg-background py-12 px-6 lg:px-12 flex justify-center w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[860px] flex items-center justify-between gap-6 px-8 py-5 rounded-2xl border border-black/8 bg-foreground/[0.03] hover:bg-foreground/[0.06] transition-colors duration-300"
      >
        <div>
          <p className="font-montserrat text-[9px] font-[800] uppercase tracking-[0.25em] text-foreground/30 mb-1">
            Ready to start?
          </p>
          <p className="font-satoshi text-[15px] md:text-[17px] font-[700] text-foreground tracking-tight">
            Let's create something together
          </p>
        </div>
        <Link
          to="/contact-us"
          className="group shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background font-montserrat text-[10px] font-[700] uppercase tracking-widest hover:bg-accent hover:shadow-md hover:shadow-accent/20 transition-all duration-300"
        >
          Get in touch
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </motion.div>
    </section>
  );
};

export default ContactBanner;
