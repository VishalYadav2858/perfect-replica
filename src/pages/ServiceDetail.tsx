import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      
      // { type: "image", src: hero4, category: "Dashboards" },
      // { type: "image", src: portfolio1, category: "Web Apps" },
      // { type: "image", src: portfolio3, category: "Dashboards" },
    ],
  },

  "Branding": {
    title: "Branding",
    tagline: "Bringing Ideas to Life",
    filters: [
      "All Work",
      "Product Viz",
      "Motion Graphics",
      "Character Animation",
    ],
    works: [
      { type: "image", src: serviceCgi, category: "Product Viz" },
      { type: "image", src: hero5, category: "Motion Graphics" },
      { type: "image", src: portfolio2, category: "Character Animation" },
      { type: "image", src: hero3, category: "Product Viz" },
      { type: "image", src: hero1, category: "Motion Graphics" },
      { type: "image", src: portfolio1, category: "Character Animation" },
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
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-36 text-center">
          <h1 className="font-montserrat text-[48px] font-[900] text-foreground">
            Service not found
          </h1>
        </div>
        <Footer />
      </div>
    );
  }

  const filteredWorks =
    activeFilter === 0
      ? service.works
      : service.works.filter(
          (w) => w.category === service.filters[activeFilter]
        );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 md:pt-36 pb-24">
        {/* HEADER */}

        <div className="text-center px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="font-montserrat text-[11px] font-[700] uppercase tracking-[0.25em]">
                {service.tagline}
              </span>
              <span className="w-2 h-2 rounded-full bg-accent" />
            </div>

            <h1 className="font-montserrat text-[48px] md:text-[72px] lg:text-[96px] font-[900] uppercase leading-[0.9]">
              {service.title}
            </h1>
          </motion.div>
        </div>

        {/* FILTERS */}

        <div className="flex flex-wrap justify-center gap-3 px-6 mb-16">
          {service.filters.map((filter, i) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(i)}
              className={`px-7 py-3.5 rounded-full text-[11px] font-[800] uppercase border transition ${
                activeFilter === i
                  ? "bg-accent text-white border-accent"
                  : "border-gray-400"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* GRID */}

        <div className="px-6 lg:px-12 max-w-[1440px] mx-auto">
          <div
            className={`grid gap-4 ${
              slug === "ui-ux"
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1 md:grid-cols-3"
            }`}
          >
            {filteredWorks.map((work, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`rounded-[16px] overflow-hidden bg-black ${
                  slug === "ui-ux" ? "aspect-[16/10]" : "aspect-[4/6]"
                }`}
              >
                {work.type === "image" ? (
                  <img
                    src={work.src}
                    alt={work.category}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <video
                    src={work.src}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                )}
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
