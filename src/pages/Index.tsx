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
    <div className="min-h-screen bg-background overflow-x-hidden">
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
    </div>
  );
};

export default Index;
