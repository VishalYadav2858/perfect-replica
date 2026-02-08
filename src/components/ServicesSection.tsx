import { motion } from "framer-motion";
import serviceVideo from "@/assets/service-video.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceCgi from "@/assets/service-cgi.jpg";
import servicePhoto from "@/assets/service-photo.jpg";

const services = [
  {
    title: "Videography",
    description:
      "We create content that connects with your audience — built on strategy, guided by insight, and designed to deliver across platforms.",
    images: [serviceVideo],
  },
  {
    title: "Website Design & Development",
    description:
      "We design user experiences that are intuitive, goal-driven, and built around real user behavior — turning complexity into clarity.",
    images: [serviceWeb],
  },
  {
    title: "CGI and Animation",
    description:
      "We create sharp, visual content through motion and 3D — built to explain, engage, and stand out across brand and product.",
    images: [serviceCgi],
  },
  {
    title: "Photography",
    description:
      "We create content that speaks to your audience and solves for their needs — rooted in strategy, shaped by insight, and built to perform.",
    images: [servicePhoto],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-36 px-6 lg:px-12 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {services.map((service, i) => (
          <motion.a
            key={service.title}
            href="#"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-[24px] overflow-hidden bg-card border border-border/50 hover:border-foreground/15 transition-all duration-600 cursor-pointer"
          >
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={service.images[0]}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-[800ms] ease-out"
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
            </div>

            {/* Content */}
            <div className="p-7 md:p-9">
              <h3 className="font-montserrat text-[18px] md:text-[22px] font-[800] uppercase tracking-[-0.01em] text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-montserrat text-[13px] font-[400] text-muted-foreground leading-[1.7] mb-5">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-2 font-montserrat text-[11px] font-[700] uppercase tracking-[0.2em] text-foreground group-hover:gap-4 transition-all duration-300">
                EXPLORE
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
