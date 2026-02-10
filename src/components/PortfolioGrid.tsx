import { motion } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import aboutImage from "@/assets/about-image.jpg";
import hero3 from "@/assets/hero-3.jpg";

const projects = [
  { title: "Google FPV", category: "Campaign", image: portfolio1 },
  { title: "VIP Bags — Product Launch", category: "3D Animation", image: portfolio2 },
  { title: "Carlton Bags — Product Launch", category: "3D Animation", image: portfolio3 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const PortfolioGrid = () => {
  return (
    <section id="work" className="py-24 md:py-36 px-6 lg:px-12 max-w-[1440px] mx-auto">
      {/* Bento Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-20 auto-rows-[200px] md:auto-rows-[260px]">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" custom={0} viewport={{ once: true }}
          className="col-span-1 row-span-2 rounded-[20px] overflow-hidden group"
        >
          <img src={portfolio1} alt="Creative work" className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700" loading="lazy" />
        </motion.div>
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }}
          className="col-span-1 rounded-[20px] overflow-hidden group"
        >
          <img src={aboutImage} alt="Creative work" className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700" loading="lazy" />
        </motion.div>
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" custom={2} viewport={{ once: true }}
          className="col-span-1 rounded-[20px] overflow-hidden group"
        >
          <img src={portfolio2} alt="Creative work" className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700" loading="lazy" />
        </motion.div>
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" custom={3} viewport={{ once: true }}
          className="col-span-1 row-span-2 rounded-[20px] overflow-hidden group"
        >
          <img src={portfolio3} alt="Creative work" className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700" loading="lazy" />
        </motion.div>
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" custom={4} viewport={{ once: true }}
          className="col-span-2 rounded-[20px] overflow-hidden group"
        >
          <img src={hero3} alt="Creative work" className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700" loading="lazy" />
        </motion.div>
      </div>

      {/* Campaign Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href="#"
            variants={fadeUp} initial="hidden" whileInView="visible" custom={i} viewport={{ once: true }}
            className="group rounded-[20px] overflow-hidden bg-card border border-border/50 hover:shadow-xl transition-all duration-500"
          >
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-[800ms]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-400" />
            </div>
            <div className="p-6">
              <h4 className="font-montserrat text-[15px] font-[700] uppercase tracking-[-0.01em] text-foreground">
                {project.title}
              </h4>
              <p className="font-montserrat text-[11px] font-[500] text-muted-foreground mt-1.5 tracking-[0.05em]">
                View Campaign →
              </p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="font-montserrat text-[13px] font-[400] text-muted-foreground max-w-lg mt-12 leading-[1.8]"
      >
        Explore our curated projects that showcase creativity, strategy, and innovation across
        branding, web, and motion design.
      </motion.p>
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center mt-4 font-montserrat text-[11px] font-[700] uppercase tracking-[0.2em] text-foreground link-underline"
      >
        Know us
      </motion.a>
    </section>
  );
};

export default PortfolioGrid;
