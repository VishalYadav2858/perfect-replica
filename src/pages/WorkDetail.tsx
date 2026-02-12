import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";

const worksData: Record<string, { title: string; category: string; description: string; heroImage: string; gallery: string[] }> = {
  "google-fpv": {
    title: "Google FPV",
    category: "Campaign",
    description: "Specializing in branding, digital art and interactive visuals. A dynamic campaign that pushes the boundaries of first-person perspective content.",
    heroImage: portfolio1,
    gallery: [hero1, hero2],
  },
  "vip-bags-product-launch": {
    title: "VIP Bags — Product Launch",
    category: "3D Animation",
    description: "A bold 3D animated launch film for VIP Bags — built for the vibrant Lexus Collection. The campaign showcases innovative product design through cutting-edge animation.",
    heroImage: portfolio2,
    gallery: [hero2, hero1],
  },
  "carlton-bags-product-launch-3d-animation": {
    title: "Carlton Bags — Product Launch 3D Animation",
    category: "3D Animation",
    description: "A dark, cinematic 3D film for Carlton Bags' Gemma Collection — showcasing diamonds hidden deep within a cavernous world.",
    heroImage: portfolio3,
    gallery: [hero1, hero2],
  },
  "st-patricks-campaign": {
    title: "St. Patricks' Campaign",
    category: "Campaign",
    description: "Cutting-edge solutions to meet the evolving needs of modern brands. A festive celebration of creativity and strategic storytelling.",
    heroImage: hero1,
    gallery: [portfolio1, portfolio2],
  },
};

const WorkDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const work = worksData[slug || ""];

  if (!work) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-36 text-center">
          <h1 className="font-montserrat text-[48px] font-[900] text-foreground">Project not found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 md:pt-36 pb-24">
        <div className="px-6 lg:px-12 max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/" className="inline-flex items-center gap-2 font-montserrat text-[11px] font-[700] uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors mb-10">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <p className="font-montserrat text-[10px] font-[700] uppercase tracking-[0.35em] text-accent mb-4 mt-6">
              {work.category}
            </p>
            <h1 className="font-montserrat text-[48px] md:text-[72px] lg:text-[96px] font-[900] uppercase leading-[0.9] tracking-[-0.04em] text-foreground mb-8">
              {work.title}
            </h1>
            <p className="font-montserrat text-[15px] md:text-[17px] font-[400] text-muted-foreground max-w-2xl leading-[1.8] mb-16">
              {work.description}
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[28px] overflow-hidden aspect-[16/9] mb-12"
          >
            <img src={work.heroImage} alt={work.title} className="w-full h-full object-cover" />
          </motion.div>

          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {work.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                className="rounded-[20px] overflow-hidden aspect-[16/10]"
              >
                <img src={img} alt={`${work.title} ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WorkDetail;
