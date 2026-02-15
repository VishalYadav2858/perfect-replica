import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import servicePhoto from "@/assets/service-photo.jpg";
import serviceVideo from "@/assets/service-video.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceCgi from "@/assets/service-cgi.jpg";
import logo from "@/assets/logo.png";

const workCategories = [
  { title: "OUR PHOTOGRAPHY", image: servicePhoto, link: "/photography" },
  { title: "OUR VIDEOGRAPHY", image: serviceVideo, link: "/videography" },
  { title: "UI / UX", image: serviceWeb, link: "/ui-ux" },
  { title: "BRANDING", image: serviceCgi, link: "/3d-animation-and-cgi" },
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
        <div
  onClick={() => window.location.href = "/"}
  className="flex flex-col leading-[0.85] cursor-pointer"
>
  <img
    src={logo}
    alt="DelightX Logo"
    className="h-10 w-auto"
  />
</div>


        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <button 
              onClick={() => setWorkDropdown((v) => !v)} 
              className="link-underline font-montserrat text-[11px] font-[800] uppercase tracking-[0.15em] text-foreground inline-flex items-center gap-1"
            >
              OUR WORK
              <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${workDropdown ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {workDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="fixed left-0 right-0 top-20 bg-white shadow-xl"
                  style={{ 
                    marginLeft: 'calc(-50vw + 50%)',
                    marginRight: 'calc(-50vw + 50%)',
                    width: '100vw'
                  }}
                >
                  <div className="max-w-[1800px] mx-auto px-6 lg:px-6 py-6">
                    <div className="grid grid-cols-4 gap-16">
                      {workCategories.map((cat) => (
                        <Link
                          key={cat.title}
                          to={cat.link}
                          onClick={() => setWorkDropdown(false)}
                          className="group block"
                        >
                          <h4 className="font-montserrat text-[13px] font-[600] tracking-[0.1em] text-foreground mb-2">
                            {cat.title}
                          </h4>
                          <span className="font-montserrat text-[11px] font-[500] uppercase tracking-[0.15em] text-foreground/70 group-hover:text-foreground transition-colors border-b border-transparent group-hover:border-foreground pb-0.5">
                            EXPLORE
                          </span>
                          <div className="mt-4 overflow-hidden">
                            <img
                              src={cat.image}
                              alt={cat.title}
                              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button onClick={() => scrollToSection("services")} className="link-underline font-montserrat text-[11px] font-[800] uppercase tracking-[0.15em] text-foreground">
            OUR SERVICES
          </button>
          <button onClick={() => scrollToSection("work")} className="link-underline font-montserrat text-[11px] font-[800] uppercase tracking-[0.15em] text-foreground">
            OUR TALENTS
          </button>
          <Link to="/about" className="link-underline font-montserrat text-[11px] font-[800] uppercase tracking-[0.15em] text-foreground">
            ABOUT US
          </Link>
        </div>

        {/* CTA */}
        <Link
          to="/contact-us"
          className="hidden lg:flex items-center px-7 py-2.5 rounded-full border border-foreground/30 text-foreground font-montserrat text-[11px] font-[600] tracking-[0.08em] uppercase hover:bg-foreground hover:text-background transition-all duration-400"
        >
          GET IN TOUCH
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
                { label: "OUR WORK", action: () => { setMenuOpen(false); setTimeout(() => scrollToSection("work"), 300); } },
                { label: "OUR SERVICES", action: () => { setMenuOpen(false); setTimeout(() => scrollToSection("services"), 300); } },
                { label: "OUR CAMPAIGNS", action: () => { setMenuOpen(false); setTimeout(() => scrollToSection("work"), 300); } },
                { label: "ABOUT US", action: () => { setMenuOpen(false); setTimeout(() => navigate("/about"), 300); } },
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
                GET IN TOUCH
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
