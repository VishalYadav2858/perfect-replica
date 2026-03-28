import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { slideUp } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-36 px-6 lg:px-12 max-w-[1440px] mx-auto overflow-hidden">


      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
          hidden: {}
        }}
        className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
      >
        {/* Left main text block */}
        <motion.div variants={slideUp} className="lg:col-span-7 flex flex-col justify-center">
          <h2 className="font-satoshi text-[40px] md:text-[60px] lg:text-[75px] font-black leading-[1] tracking-tight text-foreground mb-6">
            WE GET  <br className="hidden md:block" />
            <span className="text-accent">THINGS DONE</span>
          </h2>
          <p className="font-montserrat text-sm md:text-lg font-medium text-foreground/70 max-w-2xl leading-[1.8] mb-10 border-l-2 border-accent pl-6">
            We’re a digital marketing team delivering end-to-end solutions that help creators and businesses get things done. From content creation and brand building to performance marketing, website development, and creative production, we offer a complete suite of services designed to meet diverse needs seamlessly under one roof.
          </p>
          
          <div className="flex items-center gap-6">
            <Link to="/brand-solutions">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-montserrat text-xs font-bold uppercase tracking-widest transition-all hover:bg-accent hover:text-white hover:shadow-lg hover:shadow-accent/30"
              >
                Brand Solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
        
        {/* Right side bento stats/images */}
        <motion.div variants={slideUp} className="lg:col-span-5 grid grid-cols-2 gap-4 h-full min-h-[400px]">
          <div className="flex flex-col gap-4">
            <div className="bg-muted/30 rounded-3xl p-6 flex flex-col justify-center items-center text-center flex-1 border border-border/50 transition-all hover:bg-muted/50">
              <span className="font-satoshi text-4xl md:text-5xl font-black text-accent mb-2">30+</span>
              <span className="font-montserrat text-xs tracking-wider uppercase text-foreground/60 font-bold">Brands Scaled</span>
            </div>
            <div className="bg-foreground rounded-3xl p-6 flex flex-col justify-center items-center text-center flex-1 transition-transform hover:-translate-y-2 group shadow-xl">
              <span className="font-satoshi text-4xl md:text-5xl font-black text-background mb-2">98%</span>
              <span className="font-montserrat text-xs tracking-wider uppercase text-background/60 font-bold group-hover:text-background/90">Client Growth</span>
            </div>
          </div>
          <div className="bg-accent/10 rounded-3xl p-6 flex flex-col justify-end overflow-hidden relative border border-accent/20">


             <div className="relative z-10">
               <h3 className="font-satoshi text-2xl font-black text-foreground leading-tight mb-2">Data-Driven Creativity</h3>
               <p className="font-montserrat text-xs text-foreground/70 leading-relaxed font-medium">Where analytical precision meets unapologetic design.</p>
             </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
