import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
      className="min-h-screen bg-black flex flex-col relative overflow-hidden text-white"
      style={{
        backgroundColor: '#000000',
        '--foreground': '0 0% 100%',
        '--background': '0 0% 0%',
        '--border': '0 0% 100% / 0.1',
      } as any}
    >
      {/* Visual distinction — intensified background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/15 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/4 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/4 pointer-events-none z-0" />

      {/* Page Indicator */}
      <div className="hidden xl:flex absolute top-40 left-6 h-40 items-center gap-4 origin-left -rotate-90 z-20 opacity-60 select-none pointer-events-none">
        <span className="font-montserrat text-[10px] font-[800] uppercase tracking-[0.4em] text-white">Solutions</span>
        <div className="w-12 h-[1px] bg-white/50" />
        <span className="font-montserrat text-[10px] font-[800] text-white">02</span>
      </div>

      <Navbar />
      <SEO 
        title="Our Services"
        description="Explore our range of creative services including Videography, Website Design, Branding, and Photography. We provide end-to-end creative solutions for your brand."
        canonical="/brand-solutions"
        keywords="creative services, videography, web design, branding solutions, photography agency"
      />
      
      <main className="flex-grow pt-28 md:pt-32 pb-20 px-6 lg:px-12 max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          
          {/* LEFT — glass card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[32px] p-8 md:p-10 flex flex-col justify-between min-h-[400px] lg:min-h-[500px] shadow-2xl"
          >
            <div>
              <p className="font-montserrat text-[9px] font-[800] uppercase tracking-[0.3em] text-white/60 mb-6">
                DelightX Studio
              </p>
              <h1 className="font-satoshi text-[48px] md:text-[60px] font-[900] uppercase leading-[0.9] tracking-tight text-white mb-6">
                Brand<br />
                <span className="text-accent underline decoration-white/30 underline-offset-[12px]">Solutions.</span>
              </h1>
              <p className="font-montserrat text-[13px] font-[400] text-white/80 leading-[1.8] max-w-xs">
                Welcome to the studio. Here, we transform raw concepts into cinematic identities — blending photography, motion, and digital engineering.
              </p>
            </div>
            
            <div className="hidden lg:block">
              <div className="w-full h-[1px] bg-white/20 mb-6" />
              <p className="font-montserrat text-[10px] font-[700] uppercase tracking-[0.2em] text-white/60">
                SCROLL TO EXPLORE THE PORTFOLIO
              </p>
            </div>
          </motion.div>

          {/* RIGHT — service cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {solutions.map((item, i) => {
              const isComingSoon = item.title === "Branding";

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
                >
                  {isComingSoon ? (
                    <div className="group block rounded-[24px] overflow-hidden relative aspect-square cursor-default"
                      style={{
                        background: "linear-gradient(135deg, #0a0a0a 0%, #111 50%, #0f0f0f 100%)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        boxShadow: "0 0 0 1px rgba(255,92,0,0.15), inset 0 1px 0 rgba(255,255,255,0.05)",
                      }}
                    >
                      {/* Blurred BG image */}
                      <div className="absolute inset-0 grayscale opacity-10 scale-110">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>

                      {/* Animated glow ring */}
                      <div className="absolute inset-0 rounded-[24px] pointer-events-none"
                        style={{
                          background: "radial-gradient(ellipse at 50% 0%, rgba(255,92,0,0.18) 0%, transparent 65%)",
                          animation: "pulseGlow 3s ease-in-out infinite",
                        }}
                      />

                      {/* Corner accent lines */}
                      <div className="absolute top-5 left-5 w-6 h-6 border-t-2 border-l-2 border-accent/60 rounded-tl-sm" />
                      <div className="absolute top-5 right-5 w-6 h-6 border-t-2 border-r-2 border-accent/60 rounded-tr-sm" />
                      <div className="absolute bottom-5 left-5 w-6 h-6 border-b-2 border-l-2 border-accent/60 rounded-bl-sm" />
                      <div className="absolute bottom-5 right-5 w-6 h-6 border-b-2 border-r-2 border-accent/60 rounded-br-sm" />

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
                        {/* Pulsing badge */}
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                          style={{
                            background: "rgba(255,92,0,0.15)",
                            border: "1px solid rgba(255,92,0,0.4)",
                            backdropFilter: "blur(8px)",
                          }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent"
                            style={{ animation: "ping 1.5s ease-in-out infinite", display: "inline-block" }}
                          />
                          <span className="font-montserrat text-[8px] font-[800] uppercase tracking-[0.25em] text-accent">
                            Coming Soon
                          </span>
                        </div>

                        {/* Title */}
                        <div className="text-center">
                          <h3 className="font-satoshi text-[30px] md:text-[32px] font-[900] tracking-tight text-white leading-none mb-2">
                            {item.title}
                          </h3>
                          <p className="font-montserrat text-[9px] font-[600] uppercase tracking-[0.25em] text-white/40">
                            Identity · Strategy · Design
                          </p>
                        </div>

                        {/* Divider */}
                        <div className="w-10 h-[1px] bg-accent/40" />

                        {/* Teaser line */}
                        <p className="font-montserrat text-[10px] font-[500] text-white/50 text-center leading-[1.7] max-w-[160px]">
                          Something bold is in the works. Stay tuned.
                        </p>
                      </div>

                      {/* Inline keyframes */}
                      <style>{`
                        @keyframes pulseGlow {
                          0%, 100% { opacity: 0.6; }
                          50% { opacity: 1; }
                        }
                        @keyframes ping {
                          0%, 100% { transform: scale(1); opacity: 1; }
                          50% { transform: scale(1.5); opacity: 0.5; }
                        }
                      `}</style>
                    </div>
                  ) : (
                    <Link 
                      to={item.link} 
                      className="group block rounded-[24px] overflow-hidden relative aspect-square bg-[#0a0a0a] hover:-translate-y-1.5 transition-all duration-500 shadow-2xl border border-white/5 hover:border-white/10"
                    >
                      <div className="absolute inset-0 overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms] ease-out opacity-60 group-hover:opacity-100" />
                      </div>
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                      
                      <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                        <h3 className="font-satoshi text-[20px] md:text-[24px] font-[900] tracking-tight text-white mb-3">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2.5">
                          <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                          </span>
                          <span className="font-montserrat text-[8px] font-[700] uppercase tracking-[0.2em] text-white/80 group-hover:text-white transition-colors">
                            Explore Project
                          </span>
                        </div>
                      </div>
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default BrandSolutions;
