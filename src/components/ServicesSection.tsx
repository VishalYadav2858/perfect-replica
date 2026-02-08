import { motion } from "framer-motion";
import serviceVideo from "@/assets/service-video.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceCgi from "@/assets/service-cgi.jpg";
import servicePhoto from "@/assets/service-photo.jpg";

const services = [
  {
    title: "Videography",
    description: "We create content that connects with your audience — built on strategy, guided by insight, and designed to deliver across platforms.",
    image: serviceVideo,
  },
  {
    title: "Website Design & Development",
    description: "We design user experiences that are intuitive, goal-driven, and built around real user behavior — turning complexity into clarity.",
    image: serviceWeb,
  },
  {
    title: "CGI and Animation",
    description: "We create sharp, visual content through motion and 3D — built to explain, engage, and stand out across brand and product.",
    image: serviceCgi,
  },
  {
    title: "Photography",
    description: "We create content that speaks to your audience and solves for their needs — rooted in strategy, shaped by insight.",
    image: servicePhoto,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 px-6 md:px-10 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <motion.a
            key={service.title}
            href="#"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-foreground/20 transition-all duration-500 cursor-pointer"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="font-oswald text-xl md:text-2xl font-bold uppercase tracking-tight text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="font-oswald text-xs font-bold uppercase tracking-widest text-foreground group-hover:text-accent transition-colors">
                EXPLORE →
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
