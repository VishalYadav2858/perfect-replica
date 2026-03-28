import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { pageTransition } from "@/lib/animations";

/* -------------------- IMAGES -------------------- */

import serviceWeb from "@/assets/service-web.jpg";
import serviceCgi from "@/assets/service-cgi.jpg";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";

import e1 from "@/assets/e1.jpeg";
import e2 from "@/assets/e2.jpg";
import e3 from "@/assets/e3.jpeg";

import food from "@/assets/food.mp4";
import f from "@/assets/f.mp4";
import p from "@/assets/p.mp4";
import p11 from "@/assets/p1.mp4";
import p22 from "@/assets/p2.mp4";
import v from "@/assets/v.mp4";
import v1 from "@/assets/v1.mp4";

import wb from "@/assets/wb.jpg";
import web from "@/assets/web.jpg";


import m from "@/assets/m.jpeg";
import m1 from "@/assets/m1.jpeg";



/* -------------------- TYPES -------------------- */

interface WorkItem {
  type: "image" | "video";
  src: string;
  category: string;
  yt?: string;
}

/* -------------------- DATA -------------------- */
// Unchanged data structure
const serviceData: Record<
  string,
  {
    title: string;
    tagline: string;
    filters: string[];
    works: WorkItem[];
  }
> = {
  videography: {
    title: "Our Videography",
    tagline: "Visual Stories in Motion",
    filters: [
      "All Videos",
      "Ed-Tech",
      "Products and Accessories",
      "Food & Beverages",
    ],
    works: [
      { type: "video", src: food, category: "Food & Beverages" },
      { type: "video", src: p22, category: "Products and Accessories" },
      { type: "video", src: v1, category: "Ed-Tech" },
      { type: "video", src: f, category: "Food & Beverages" },
      { type: "video", src: p11, category: "Products and Accessories" },
      { type: "video", src: v, category: "Ed-Tech" },
    ],
  },

  photography: {
    title: "Our Photography",
    tagline: "Moments Captured Forever",
    filters: ["All Photos", "Events", "Products", "Lifestyle"],
    works: [
      { type: "image", src: hero4, category: "Lifestyle" },
      { type: "image", src: p1, category: "Products" },
      { type: "image", src: p2, category: "Products" },
      { type: "image", src: p3, category: "Products" },
      { type: "image", src: p4, category: "Products" },
      { type: "image", src: p5, category: "Products" },
      { type: "image", src: p6, category: "Products" },
      { type: "image", src: e1, category: "Events" },
      { type: "image", src: e2, category: "Events" },
      { type: "image", src: e3, category: "Events" },
      { type: "image", src: hero3, category: "Lifestyle" },
    ],
  },

  "ui-ux": {
    title: "UI / UX",
    tagline: "Designing Digital Experiences",
    filters: ["All Projects", "Web Apps", "Mobile Apps", "Dashboards"],
    works: [
      { type: "image", src: web, category: "Web Apps" },
      { type: "image", src: wb, category: "Web Apps" },
      { type: "image", src: m, category: "Mobile Apps" },
      { type: "image", src: m1, category: "Mobile Apps" },
    ],
  },

  "branding": {
    title: "Branding",
    tagline: "Building Brands for Startups",
    filters: [
      "All Work",
      "Logo Design",
      "Brand Identity",
      "Packaging",
      "Social Media Kits",
    ],
    works: [
      { type: "image", src: hero1, category: "Logo Design" },
      { type: "image", src: hero5, category: "Logo Design" },
      { type: "image", src: portfolio1, category: "Brand Identity" },
      { type: "image", src: portfolio2, category: "Brand Identity" },
      { type: "image", src: hero3, category: "Packaging" },
      { type: "image", src: serviceCgi, category: "Packaging" },
      { type: "image", src: serviceWeb, category: "Social Media Kits" },
      { type: "image", src: hero2, category: "Social Media Kits" },
      { type: "image", src: hero4, category: "Brand Identity" },
      { type: "image", src: portfolio3, category: "Logo Design" },
    ],
  },
};

/* -------------------- COMPONENT -------------------- */

const ServiceDetail = () => {
  const location = useLocation();
  const slug = location.pathname.replace("/", "");
  const service = serviceData[slug || ""];
  const [activeFilter, setActiveFilter] = useState(0);

  if (!service) {
    return (
      <motion.div 
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen bg-background noise-bg flex flex-col"
      >
        <Navbar />
        <div className="flex-grow pt-36 text-center flex items-center justify-center">
          <h1 className="font-satoshi text-[48px] font-[900] text-foreground/50">
            Service not found
          </h1>
        </div>
        <Footer />
      </motion.div>
    );
  }

  const filteredWorks =
    activeFilter === 0
      ? service.works
      : service.works.filter(
          (w) => w.category === service.filters[activeFilter]
        );

  return (
    <motion.div 
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-background noise-bg flex flex-col"
    >
      <Navbar />
      <SEO 
        title={service.title}
        description={service.tagline}
        canonical={location.pathname}
        keywords={`${service.title}, ${service.filters.join(", ")}, DelightX Media services`}
      />

      <main className="flex-grow pt-32 md:pt-48 pb-24 relative z-10 w-full">
        



        {/* HEADER */}
        <div className="text-center px-6 mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-3 mb-6 bg-black/5 border border-black/10 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-montserrat text-[10px] md:text-xs font-[700] uppercase tracking-[0.25em] text-foreground">
                {service.tagline}
              </span>
            </div>

            <h1 className="font-satoshi text-[48px] md:text-[80px] lg:text-[100px] font-[900] uppercase leading-[0.85] tracking-[-0.04em] text-foreground">
              {service.title.split(" ").map((word, i, arr) => (
                <span key={i} className={i === arr.length - 1 ? "text-foreground" : "text-foreground"}>
                  {word}{" "}
                </span>
              ))}
            </h1>
          </motion.div>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 px-6 mb-20 relative z-10 max-w-4xl mx-auto">
          {service.filters.map((filter, i) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(i)}
              className={`px-6 py-3 rounded-full text-[10px] md:text-[11px] font-[800] uppercase transition-all duration-300 ${
                activeFilter === i
                  ? "bg-foreground text-background shadow-[0_4px_10px_rgba(0,0,0,0.15)]"
                  : "bg-black/5 text-foreground/90 border border-black/10 hover:bg-black/10 hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto relative z-10">
          <motion.div
            layout
            className={`grid gap-4 md:gap-6 ${
              slug === "ui-ux"
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {filteredWorks.map((work, i) => (
              <motion.div
                layout
                key={work.src + i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`rounded-[24px] overflow-hidden group relative bg-black/5 ${
                  slug === "ui-ux" ? "aspect-[16/10]" : "aspect-[3/4] md:aspect-[4/5]"
                }`}
              >


                {work.type === "image" ? (
                  <img
                    src={work.src}
                    alt={work.category}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                    loading="lazy"
                  />
                ) : (
                  <video
                    src={work.src}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                )}
                <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                  <span className="font-montserrat text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                    {work.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default ServiceDetail;
