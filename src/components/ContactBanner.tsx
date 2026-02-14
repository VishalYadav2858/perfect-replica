import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContactBanner = () => {
  return (
    <section className="py-0 bg-foreground overflow-hidden cursor-pointer group">
      <Link to="/contact-us" className="block">
        {/* Top marquee */}
        <div className="py-4 overflow-hidden border-b border-background/10">
          <div className="flex animate-contact-marquee items-center" style={{ width: "fit-content" }}>
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="flex items-center gap-6 mx-6 flex-shrink-0">
                <span className="font-montserrat text-[13px] md:text-[15px] font-[600] uppercase tracking-[0.15em] text-background whitespace-nowrap">
                  contact us
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-background/50" />
              </div>
            ))}
          </div>
        </div>
        {/* Bottom subtitle */}
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-4 text-center"
        >
          <span className="font-montserrat text-[12px] md:text-[14px] font-[400] text-background/50 tracking-[0.1em]">
            Let's create something together
          </span>
        </motion.div>
      </Link>
    </section>
  );
};

export default ContactBanner;
