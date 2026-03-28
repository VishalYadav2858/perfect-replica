import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animations";
import { Suspense, lazy } from "react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

// Lazy loading heavy components
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ClientMarquee = lazy(() => import("@/components/ClientMarquee"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ContactBanner = lazy(() => import("@/components/ContactBanner"));
const PortfolioGrid = lazy(() => import("@/components/PortfolioGrid"));
const VisionSection = lazy(() => import("@/components/VisionSection"));
const Footer = lazy(() => import("@/components/Footer"));

// Skeleton/Loading fallback for sections
const SectionLoader = () => (
  <div className="py-24 flex items-center justify-center opacity-20">
    <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen bg-background overflow-x-hidden noise-bg"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <SEO 
        canonical="/"
        keywords="creative agency, branding, content creation, videography, photography, web development, UI UX design, digital marketing, startup branding, Delhi, India"
      />
      <Navbar />
      <main>
        <HeroSection />
        
        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
          <ClientMarquee />
          <ServicesSection />
          <ContactBanner />
          <PortfolioGrid />
          <VisionSection />
        </Suspense>
      </main>
      
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </motion.div>
  );
};

export default Index;
