import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animations";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ClientMarquee from "@/components/ClientMarquee";
import ServicesSection from "@/components/ServicesSection";
import ContactBanner from "@/components/ContactBanner";
import PortfolioGrid from "@/components/PortfolioGrid";
import VisionSection from "@/components/VisionSection";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

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
        <AboutSection />
        <ClientMarquee />
        <ServicesSection />
        <ContactBanner />
        <PortfolioGrid />
        <VisionSection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
