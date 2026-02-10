import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-[0.85]">
          <span className="font-montserrat text-[22px] font-[900] tracking-[-0.06em] text-foreground">AD.</span>
          <span className="font-montserrat text-[22px] font-[900] tracking-[-0.06em] text-foreground">KO</span>
        </a>

        {/* Desktop Nav - centered */}
        <div className="hidden lg:flex items-center gap-10">
          <a href="#work" className="link-underline font-montserrat text-[11px] font-[800] uppercase tracking-[0.15em] text-foreground inline-flex items-center gap-1">
            Our Work
            <ChevronDown className="w-3 h-3" />
          </a>
          <a href="#services" className="link-underline font-montserrat text-[11px] font-[800] uppercase tracking-[0.15em] text-foreground">
            Our Services
          </a>
          <a href="#campaigns" className="link-underline font-montserrat text-[11px] font-[800] uppercase tracking-[0.15em] text-foreground">
            Our Campaigns
          </a>
          <a href="#about" className="link-underline font-montserrat text-[11px] font-[800] uppercase tracking-[0.15em] text-foreground">
            About Us
          </a>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden lg:flex items-center px-7 py-2.5 rounded-full border border-foreground/30 text-foreground font-montserrat text-[11px] font-[600] tracking-[0.08em] uppercase hover:bg-foreground hover:text-background transition-all duration-400"
        >
          Get in touch
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden font-montserrat text-[11px] font-[800] uppercase tracking-[0.15em] text-foreground"
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed inset-0 top-20 bg-background z-40 overflow-hidden"
          >
            <div className="flex flex-col gap-8 p-10">
              {["Our Work", "Our Services", "Our Campaigns", "About Us"].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="font-montserrat text-3xl font-[900] uppercase tracking-tight text-foreground"
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center justify-center w-fit px-8 py-3.5 rounded-full border border-foreground/30 text-foreground font-montserrat text-sm font-[600] uppercase tracking-wider mt-4"
              >
                Get in touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
