import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import { pageTransition, staggerContainer, slideUp } from "@/lib/animations";

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
            Project not found
          </h1>
        </div>
        <Footer />
      </motion.div>
    );
  }

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
        title={work.title}
        description={work.description}
        canonical={`/works/${slug}`}
        keywords={`${work.title}, ${work.category}, DelightX Media projects`}
      />
      
      <main className="flex-grow pt-32 md:pt-48 pb-24 relative z-10 w-full">



        <div className="px-6 lg:px-12 max-w-[1440px] mx-auto relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={slideUp}>
              <Link to="/#work" className="inline-flex items-center gap-2 font-montserrat text-[10px] md:text-[11px] font-[700] uppercase tracking-[0.2em] text-foreground/80 hover:text-foreground transition-colors mb-10 bg-black/5 py-2 px-4 rounded-full border border-black/10 hover:bg-black/10">
                <ArrowLeft className="w-4 h-4" /> Back to Work
              </Link>
            </motion.div>

            <motion.p variants={slideUp} className="font-montserrat text-[10px] md:text-xs font-[700] uppercase tracking-[0.35em] text-accent mb-6">
              {work.category}
            </motion.p>
            
            <motion.h1 variants={slideUp} className="font-satoshi text-[60px] md:text-[80px] lg:text-[100px] font-[900] uppercase leading-[0.85] tracking-[-0.04em] text-foreground mb-10">
              {work.title}
            </motion.h1>
            
            <motion.p variants={slideUp} className="font-montserrat text-[14px] md:text-[16px] font-[500] text-foreground max-w-2xl leading-[1.8] mb-16">
              {work.description}
            </motion.p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[32px] overflow-hidden aspect-[16/9] mb-12 relative group"
            style={{ willChange: "transform" }}
          >

            <img 
              src={work.heroImage} 
              alt={work.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out" 
              style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}
            />
          </motion.div>

          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {work.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                className="rounded-[24px] overflow-hidden aspect-[16/10] group relative"
              >

                <img 
                  src={img} 
                  alt={`${work.title} ${i + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out" 
                  loading="lazy" 
                  style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default WorkDetail;
