import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import serviceVideo from "@/assets/service-video.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceCgi from "@/assets/service-cgi.jpg";
import servicePhoto from "@/assets/service-photo.jpg";
import { pageTransition, staggerContainer, slideUp } from "@/lib/animations";

const solutions = [
  { title: "Photography", image: servicePhoto, link: "/photography" },
  { title: "Videography", image: serviceVideo, link: "/videography" },
  { title: "UI / UX", image: serviceWeb, link: "/ui-ux" },
  { title: "Branding", image: serviceCgi, link: "/branding" },
];

const BrandSolutions = () => {
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
        title="Our Services"
        description="Explore our range of creative services including Videography, Website Design, Branding, and Photography. We provide end-to-end creative solutions for your brand."
        canonical="/brand-solutions"
        keywords="creative services, videography, web design, branding solutions, photography agency"
      />
      
      <main className="flex-grow pt-32 md:pt-48 pb-24 px-6 lg:px-12 max-w-[1440px] mx-auto w-full relative z-10">
        
        {/* Glow orbit */}



        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-20 md:mb-32 max-w-4xl"
        >
          <motion.p variants={slideUp} className="font-montserrat text-[10px] md:text-xs font-[700] uppercase tracking-[0.35em] text-accent mb-6">
            Our Services
          </motion.p>
          <motion.h1 variants={slideUp} className="font-satoshi text-[60px] md:text-[100px] lg:text-[120px] font-[900] uppercase leading-[0.85] tracking-[-0.04em] text-foreground">
            Brand<br /><span className="text-muted-foreground">Solutions.</span>
          </motion.h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {solutions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={item.link} className="group block rounded-[32px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative">
                <div className="aspect-[4/3] overflow-hidden relative">

                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms] ease-out" loading="lazy" />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 z-20">
                  <h3 className="font-satoshi text-[24px] md:text-[32px] font-[900] tracking-[-0.02em] text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {item.title}
                  </h3>
                  <div className="inline-flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-white/20 glass flex items-center justify-center border border-white/20 group-hover:bg-accent group-hover:border-accent group-hover:text-background transition-all text-white">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </span>
                    <span className="font-montserrat text-[10px] font-[700] uppercase tracking-[0.2em] text-white/80 group-hover:text-white transition-colors">
                      Explore Details
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default BrandSolutions;
