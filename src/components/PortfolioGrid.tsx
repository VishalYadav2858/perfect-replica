import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

/* ---------- IMAGES ---------- */
/* Put these inside: src/assets/ */

import gazi from "@/assets/gazi.jpg";
import atharva from "@/assets/atharva.jpg";
import dose from "@/assets/dose.jpg";
import parth from "@/assets/parth.jpg";

/* ---------- PROJECT DATA ---------- */

const projects = [
  {
    id: 1,
    title: "Gazi",
    category: "YouTube Channel",
    description:
      "Transformed a tech channel from 10K to 189K subscribers in 8 months",
    image: gazi,
    link: "https://www.youtube.com/@gaziai/featured",
  },
  {
    id: 2,
    title: "Atharva Aggarwal",
    category: "YouTube Channel",
    description:
      "Multi-platform influencer campaign generating 15M+ impressions",
    image: atharva,
    link: "https://www.youtube.com/@AtharvaAggarwal",
  },
  {
    id: 3,
    title: "Dose of Devy",
    category: "Education Channel",
    description:
      "Complete rebrand and growth strategy for exam preparation",
    image: dose,
    link: "https://www.youtube.com/@doseofdevy/featured",
  },
  {
    id: 4,
    title: "Parth Goyal",
    category: "Education",
    description:
      "End-to-end content creation and brand partnership management",
    image: parth,
    link: "https://www.youtube.com/@ParthGoyal",
  },
];

/* ---------- ANIMATION ---------- */

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

/* ---------- COMPONENT ---------- */

export default function PortfolioGrid() {
  return (
    <section
      id="work"   /* 🔥 IMPORTANT — Navbar scroll target */
      className="
        py-24 md:py-32
        px-6 lg:px-12
        max-w-[1440px]
        mx-auto
        bg-white
      "
    >
      {/* ---------- HEADING ---------- */}

      <div className="mb-16 text-center">

        <h2
          className="
            font-satoshi
            uppercase
            text-[36px]
            md:text-[56px]
            font-black
            tracking-[-0.03em]
            text-[#2C2D2F]
          "
        >
          Creator Case Studies
        </h2>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Real creators. Real growth. Real measurable impact.
        </p>

      </div>

      {/* ---------- GRID ---------- */}

      <div className="grid md:grid-cols-2 gap-6">

        {projects.map((project, i) => (
          
          <motion.div
            key={project.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}

            className="
              group
              border
              border-gray-200
              rounded-[22px]
              overflow-hidden
              bg-white
              hover:shadow-xl
              transition-all
              duration-500
            "
          >

            {/* IMAGE */}

            <div className="relative overflow-hidden">

              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-[260px]
                  object-cover
                  group-hover:scale-[1.05]
                  transition-transform
                  duration-700
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-black/0
                  group-hover:bg-black/10
                  transition-colors
                  duration-500
                "
              />

            </div>

            {/* CONTENT */}

            <div className="p-6">

              <div className="flex justify-between items-center mb-3">

                <span
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.15em]
                    text-gray-500
                    font-satoshi
                  "
                >
                  {project.category}
                </span>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="opacity-70 hover:opacity-100 transition"
                >
                  <ExternalLink size={16} />
                </a>

              </div>

              <h3
                className="
                  font-satoshi
                  text-[18px]
                  font-bold
                  text-[#2C2D2F]
                "
              >
                {project.title}
              </h3>

              <p
                className="
                  text-gray-500
                  text-[13px]
                  mt-2
                  leading-[1.7]
                "
              >
                {project.description}
              </p>

            </div>

          </motion.div>

        ))}

      </div>
    </section>
  );
}
