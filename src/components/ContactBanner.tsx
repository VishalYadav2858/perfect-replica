import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ContactBanner = () => {
  return (
    <section className="py-6 bg-foreground overflow-hidden cursor-pointer group">
      <a href="#contact" className="block">
        <div className="flex animate-contact-marquee items-center" style={{ width: "fit-content" }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-center gap-6 mx-6 flex-shrink-0">
              <span className="font-montserrat text-[14px] md:text-[16px] font-[600] uppercase tracking-[0.15em] text-background whitespace-nowrap">
                contact us
              </span>
              <ArrowRight className="w-4 h-4 text-background/60" />
            </div>
          ))}
        </div>
      </a>
    </section>
  );
};

export default ContactBanner;
