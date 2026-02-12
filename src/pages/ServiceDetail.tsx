import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import serviceVideo from "@/assets/service-video.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceCgi from "@/assets/service-cgi.jpg";
import servicePhoto from "@/assets/service-photo.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const serviceData: Record<string, { title: string; description: string; heroImage: string; gallery: string[] }> = {
  videography: {
    title: "Videography",
    description: "We create content that connects with your audience — built on strategy, guided by insight, and designed to deliver across platforms.",
    heroImage: serviceVideo,
    gallery: [hero1, hero3, hero5],
  },
  "website-design": {
    title: "Website Design & Development",
    description: "We design user experiences that are intuitive, goal-driven, and built around real user behavior — turning complexity into clarity across web and product journeys.",
    heroImage: serviceWeb,
    gallery: [hero2, hero4, hero1],
  },
  "3d-animation-and-cgi": {
    title: "CGI and Animation",
    description: "We create sharp, visual content through motion and 3D — built to explain, engage, and stand out across brand and product.",
    heroImage: serviceCgi,
    gallery: [hero5, hero3, hero2],
  },
  photography: {
    title: "Photography",
    description: "We create content that speaks to your audience and solves for their needs — rooted in strategy, shaped by insight, and built to perform across platforms.",
    heroImage: servicePhoto,
    gallery: [hero4, hero1, hero3],
  },
};

const ServiceDetail = () => {
  const location = useLocation();
  const slug = location.pathname.replace("/", "");
  const service = serviceData[slug || ""];

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-36 text-center">
          <h1 className="font-montserrat text-[48px] font-[900] text-foreground">Service not found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 md:pt-36 pb-24">
        {/* Hero */}
        <div className="px-6 lg:px-12 max-w-[1440px] mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-montserrat text-[10px] font-[700] uppercase tracking-[0.35em] text-muted-foreground mb-6">
              Our Services
            </p>
            <h1 className="font-montserrat text-[48px] md:text-[72px] lg:text-[96px] font-[900] uppercase leading-[0.9] tracking-[-0.04em] text-foreground mb-8">
              {service.title}
            </h1>
            <p className="font-montserrat text-[15px] md:text-[17px] font-[400] text-muted-foreground max-w-2xl leading-[1.8]">
              {service.description}
            </p>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="px-6 lg:px-12 max-w-[1440px] mx-auto mb-20"
        >
          <div className="rounded-[28px] overflow-hidden aspect-[16/9]">
            <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Gallery */}
        <div className="px-6 lg:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {service.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[20px] overflow-hidden aspect-[4/3]"
              >
                <img src={img} alt={`${service.title} work ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
