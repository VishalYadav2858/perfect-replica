import { useState } from "react";
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
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

interface WorkItem {
  image: string;
  category: string;
}

const serviceData: Record<string, {
  title: string;
  tagline: string;
  filters: string[];
  works: WorkItem[];
}> = {
  videography: {
    title: "Our Videography",
    tagline: "Visual Stories in Motion",
    filters: ["All Videos", "Ed-Tech", "Products and Accessories", "Food & Beverages"],
    works: [
      { image: serviceVideo, category: "Food & Beverages" },
      { image: hero1, category: "Products and Accessories" },
      { image: hero3, category: "Ed-Tech" },
      { image: hero5, category: "Food & Beverages" },
      { image: portfolio1, category: "Products and Accessories" },
      { image: portfolio2, category: "Ed-Tech" },
    ],
  },
  photography: {
    title: "Our Photography",
    tagline: "Moments Captured Forever",
    filters: ["All Photos", "Events", "Products", "Lifestyle"],
    works: [
      { image: servicePhoto, category: "Products" },
      { image: hero2, category: "Events" },
      { image: hero4, category: "Lifestyle" },
      { image: portfolio3, category: "Products" },
      { image: hero1, category: "Events" },
      { image: hero3, category: "Lifestyle" },
    ],
  },
  "ui-ux": {
    title: "UI / UX",
    tagline: "Designing Digital Experiences",
    filters: ["All Projects", "Web Apps", "Mobile Apps", "Dashboards"],
    works: [
      { image: serviceWeb, category: "Web Apps" },
      { image: hero2, category: "Mobile Apps" },
      { image: hero4, category: "Dashboards" },
      { image: portfolio1, category: "Web Apps" },
      { image: hero5, category: "Mobile Apps" },
      { image: portfolio3, category: "Dashboards" },
    ],
  },
  "3d-animation-and-cgi": {
    title: "3D Animation and CGI",
    tagline: "Bringing Ideas to Life",
    filters: ["All Work", "Product Viz", "Motion Graphics", "Character Animation"],
    works: [
      { image: serviceCgi, category: "Product Viz" },
      { image: hero5, category: "Motion Graphics" },
      { image: portfolio2, category: "Character Animation" },
      { image: hero3, category: "Product Viz" },
      { image: hero1, category: "Motion Graphics" },
      { image: portfolio1, category: "Character Animation" },
    ],
  },
};

const ServiceDetail = () => {
  const location = useLocation();
  const slug = location.pathname.replace("/", "");
  const service = serviceData[slug || ""];
  const [activeFilter, setActiveFilter] = useState(0);

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

  const filteredWorks = activeFilter === 0
    ? service.works
    : service.works.filter((w) => w.category === service.filters[activeFilter]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 md:pt-36 pb-24">
        {/* Header */}
        <div className="text-center px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="font-montserrat text-[11px] font-[700] uppercase tracking-[0.25em] text-foreground">
                {service.tagline}
              </span>
              <span className="w-2 h-2 rounded-full bg-accent" />
            </div>
            <h1 className="font-montserrat text-[48px] md:text-[72px] lg:text-[96px] font-[900] uppercase leading-[0.9] tracking-[-0.04em] text-foreground">
              {service.title}
            </h1>
          </motion.div>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 px-6 mb-16"
        >
          {service.filters.map((filter, i) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(i)}
              className={`px-7 py-3.5 rounded-full font-montserrat text-[11px] font-[800] uppercase tracking-[0.1em] transition-all duration-300 border ${
                activeFilter === i
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-transparent text-foreground border-foreground/20 hover:border-foreground/50"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Work Grid */}
        <div className="px-6 lg:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredWorks.map((work, i) => (
              <motion.div
                key={`${work.category}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[16px] overflow-hidden aspect-[4/3] group cursor-pointer"
              >
                <img
                  src={work.image}
                  alt={work.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
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
