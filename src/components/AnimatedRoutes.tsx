import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense, lazy } from "react";

// Lazy loading pages for better performance
const Index = lazy(() => import("../pages/Index"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const About = lazy(() => import("../pages/About"));
const BrandSolutions = lazy(() => import("../pages/BrandSolutions"));
const ServiceDetail = lazy(() => import("../pages/ServiceDetail"));
const WorkDetail = lazy(() => import("../pages/WorkDetail"));
const NotFound = lazy(() => import("../pages/NotFound"));

// Simple loading fallback
const LoadingPage = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center gap-4"
    >
      <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      <p className="font-montserrat text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">Loading</p>
    </motion.div>
  </div>
);

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LoadingPage />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Index />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/brand-solutions" element={<BrandSolutions />} />
          <Route path="/videography" element={<ServiceDetail />} />
          <Route path="/website-design" element={<ServiceDetail />} />
          <Route path="/ui-ux" element={<ServiceDetail />} />
          <Route path="/branding" element={<ServiceDetail />} />
          <Route path="/photography" element={<ServiceDetail />} />
          <Route path="/works/:slug" element={<WorkDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

