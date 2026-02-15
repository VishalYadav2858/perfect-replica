import { motion } from "framer-motion";

/* ---------- SERVICES DATA ---------- */

const services = [
  {
    title: "Video Production",
    description:
      "We create content that connects with your audience — built on strategy, guided by insight, and designed to deliver across platforms.",
  },
  {
    title: "Website Design & Development",
    description:
      "We design user experiences that are intuitive, goal-driven, and built around real user behavior — turning complexity into clarity across web and product journeys.",
  },
  {
    title: "Personal Branding",
    description:
      "Your brand is not confined to a niche; instead, we craft a narrative that spans across various facets of your personality and accomplishments.",
  },
  {
    title: "Social media Growth",
    description:
      "Data-driven strategies to accelerate your Brand growth and maximize monetization.",
  },
];

/* ---------- COMPONENT ---------- */

export default function ServicesSection() {
  return (
    <section
      id="services"   /* 🔥 NAVBAR SCROLL TARGET */
      className="bg-white pt-24 pb-4 px-6 lg:px-12 scroll-mt-24"
    >
      
      {/* ---------- HEADING ---------- */}

      <div className="text-center mb-16">
        <h2
          className="
            font-satoshi
            uppercase
            text-[#2C2D2F]
            leading-[0.85]
            tracking-[-0.04em]

            text-[48px]
            sm:text-[72px]
            md:text-[96px]
            lg:text-[120px]
          "
          style={{
            fontWeight: 900,
            fontStretch: "75%",
          }}
        >
          Our Expertise
        </h2>
      </div>

      {/* ---------- SERVICES LIST ---------- */}

      <div className="space-y-6 max-w-[1400px] mx-auto">

        {services.map((service, i) => (
          
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}

            className="
              bg-[#F5A800]
              rounded-[18px]
              px-8 md:px-12
              py-10 md:py-12
              flex flex-col md:flex-row
              md:items-center
              md:justify-between
              gap-6
              hover:scale-[1.01]
              transition-all
              duration-300
            "
          >

            {/* ---------- TITLE ---------- */}

            <h3
              className="
                font-satoshi
                uppercase
                text-[#2C2D2F]
                leading-[0.9]
                tracking-[-0.02em]

                text-[20px]
                sm:text-[24px]
                md:text-[28px]
              "
              style={{
                fontWeight: 900,
                fontStretch: "75%",
              }}
            >
              {service.title}
            </h3>

            {/* ---------- DESCRIPTION ---------- */}

            <p
              className="
                font-satoshi
                text-[#2C2D2F]
                max-w-[720px]
              "
              style={{
                fontSize: "15px",
                lineHeight: "24px",
                fontWeight: 400,
              }}
            >
              {service.description}
            </p>

          </motion.div>

        ))}

      </div>
    </section>
  );
}
