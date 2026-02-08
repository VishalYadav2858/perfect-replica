import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="font-oswald text-2xl font-black tracking-tighter text-foreground">
          AD.<br className="leading-none" />KO
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-oswald text-sm font-semibold uppercase tracking-wider">
          <a href="#work" className="text-foreground hover:text-muted-foreground transition-colors">Our Work</a>
          <a href="#services" className="text-foreground hover:text-muted-foreground transition-colors">Our Services</a>
          <a href="#campaigns" className="text-foreground hover:text-muted-foreground transition-colors">Our Campaigns</a>
          <a href="#about" className="text-foreground hover:text-muted-foreground transition-colors">About Us</a>
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:flex items-center px-6 py-2.5 rounded-full border-2 border-foreground text-foreground font-inter text-sm font-medium hover:bg-foreground hover:text-background transition-all duration-300"
        >
          GET IN TOUCH
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden font-oswald text-sm font-bold uppercase tracking-wider text-foreground"
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-t border-border"
          >
            <div className="flex flex-col gap-6 p-8 font-oswald text-lg font-semibold uppercase tracking-wider">
              <a href="#work" onClick={() => setMenuOpen(false)} className="text-foreground">Our Work</a>
              <a href="#services" onClick={() => setMenuOpen(false)} className="text-foreground">Our Services</a>
              <a href="#campaigns" onClick={() => setMenuOpen(false)} className="text-foreground">Our Campaigns</a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="text-foreground">About Us</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-foreground text-foreground font-inter text-sm font-medium">
                GET IN TOUCH
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
