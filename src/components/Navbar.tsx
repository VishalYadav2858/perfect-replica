import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import servicePhoto from "@/assets/service-photo.jpg";
import serviceVideo from "@/assets/service-video.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceCgi from "@/assets/service-cgi.jpg";

const workCategories = [
  { title: "Our Photography", image: servicePhoto, link: "/photography" },
  { title: "Our Videography", image: serviceVideo, link: "/videography" },
  { title: "UI / UX", image: serviceWeb, link: "/ui-ux" },
  { title: "3D Animation and CGI", image: serviceCgi, link: "/3d-animation-and-cgi" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [workDropdown, setWorkDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" }), 400);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openDropdown = () => {
    clearTimeout(dropdownTimeout.current);
    setWorkDropdown(true);
  };

  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setWorkDropdown(false), 200);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-[0.85]">
          <span className="font-montserrat text-[22px] font-[900] tracking-[-0.06em] text-foreground">AD.</span>
          <span className="font-montserrat text-[22px] font-[900] tracking-[-0.06em] text-foreground">KO</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <button className="link-underline font-montserrat text-[11px] font-[800] uppercase tracking-[0.15em] text-foreground inline-flex items-center gap-1">
              Our Work
              <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${workDropdown ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {workDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-background border border-border/60 rounded-[20px] p-6 shadow-2xl min-w-[820px]"
                >
                  <div className="grid grid-cols-4 gap-5">
                    {workCategories.map((cat) => (
                      <Link
                        key={cat.title}
                        to={cat.link}
                        onClick={() => setWorkDropdown(false)}
                        className="group"
                      >
                        <h4 className="font-montserrat text-[11px] font-[800] uppercase tracking-[0.08em] text-foreground mb-1">
                          {cat.title}
                        </h4>
                        <span className="font-montserrat text-[10px] font-[700] uppercase tracking-[0.1em] text-foreground underline underline-offset-4 group-hover:text-accent transition-colors">
                          Explore
                        </span>
                        <div className="mt-3 rounded-[12px] overflow-hidden aspect-[4/3]">
                          <img
                            src={cat.image}
                            alt={cat.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button onClick={() => scrollToSection("services")} className="link-underline font-montserrat text-[11px] font-[800] uppercase tracking-[0.15em] text-foreground">
            Our Services
          </button>
          <button onClick={() => scrollToSection("work")} className="link-underline font-montserrat text-[11px] font-[800] uppercase tracking-[0.15em] text-foreground">
            Our Campaigns
          </button>
          <Link to="/about" className="link-underline font-montserrat text-[11px] font-[800] uppercase tracking-[0.15em] text-foreground">
            About Us
          </Link>
        </div>

        {/* CTA */}
        <Link
          to="/contact-us"
          className="hidden lg:flex items-center px-7 py-2.5 rounded-full border border-foreground/30 text-foreground font-montserrat text-[11px] font-[600] tracking-[0.08em] uppercase hover:bg-foreground hover:text-background transition-all duration-400"
        >
          Get in touch
        </Link>

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
              {[
                { label: "Our Work", action: () => { setMenuOpen(false); setTimeout(() => scrollToSection("work"), 300); } },
                { label: "Our Services", action: () => { setMenuOpen(false); setTimeout(() => scrollToSection("services"), 300); } },
                { label: "Our Campaigns", action: () => { setMenuOpen(false); setTimeout(() => scrollToSection("work"), 300); } },
                { label: "About Us", action: () => { setMenuOpen(false); setTimeout(() => navigate("/about"), 300); } },
              ].map((item, i) => (
                <motion.button
                  key={item.label}
                  onClick={item.action}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="font-montserrat text-3xl font-[900] uppercase tracking-tight text-foreground text-left"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => { setMenuOpen(false); setTimeout(() => navigate("/contact-us"), 300); }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center justify-center w-fit px-8 py-3.5 rounded-full border border-foreground/30 text-foreground font-montserrat text-sm font-[600] uppercase tracking-wider mt-4"
              >
                Get in touch
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
