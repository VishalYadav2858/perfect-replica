import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContactBanner = () => {
  return (
    <section className="bg-background pt-0 pb-20 md:pb-32 px-6 lg:px-12 flex justify-center w-full relative z-10 -mt-16 md:-mt-20 pointer-events-none">
      <Link to="/contact-us" className="group block w-full pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between gap-4 px-8 py-4 md:px-12 md:py-5 w-full rounded-2xl md:rounded-full bg-foreground text-background font-satoshi shadow-xl hover:shadow-2xl hover:shadow-[#8A2BE2]/40 hover:-translate-y-1 transition-all duration-300 hover:bg-[#8A2BE2] hover:text-white"
        >
          <span className="text-[18px] md:text-[22px] font-[900] tracking-tight uppercase">
            Let's create something together
          </span>
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" />
        </motion.div>
      </Link>
    </section>
  );
};

export default ContactBanner;
