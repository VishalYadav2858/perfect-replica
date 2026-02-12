import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import BrandSolutions from "./pages/BrandSolutions";
import ServiceDetail from "./pages/ServiceDetail";
import WorkDetail from "./pages/WorkDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/brand-solutions" element={<BrandSolutions />} />
          <Route path="/videography" element={<ServiceDetail />} />
          <Route path="/website-design" element={<ServiceDetail />} />
          <Route path="/3d-animation-and-cgi" element={<ServiceDetail />} />
          <Route path="/photography" element={<ServiceDetail />} />
          <Route path="/works/:slug" element={<WorkDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
