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

const PortfolioGrid = () => {
  return (
    <section id="work" className="py-20 md:py-32 px-6 md:px-10 max-w-[1400px] mx-auto">
      {/* Bento-style image grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="col-span-1 row-span-2 rounded-2xl overflow-hidden"
        >
          <img src={portfolio1} alt="Portfolio work" className="w-full h-full object-cover" loading="lazy" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="col-span-1 rounded-2xl overflow-hidden"
        >
          <img src={aboutImage} alt="Portfolio work" className="w-full h-full object-cover aspect-square" loading="lazy" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="col-span-1 rounded-2xl overflow-hidden"
        >
          <img src={portfolio2} alt="Portfolio work" className="w-full h-full object-cover aspect-square" loading="lazy" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="col-span-1 row-span-2 rounded-2xl overflow-hidden"
        >
          <img src={portfolio3} alt="Portfolio work" className="w-full h-full object-cover" loading="lazy" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="col-span-2 rounded-2xl overflow-hidden"
        >
          <img src={hero3} alt="Portfolio work" className="w-full h-full object-cover aspect-video" loading="lazy" />
        </motion.div>
      </div>

      {/* Project cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-lg transition-all duration-500"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h4 className="font-oswald text-lg font-bold uppercase text-foreground">{project.title}</h4>
              <p className="font-inter text-xs text-muted-foreground mt-1">View Campaign →</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;
