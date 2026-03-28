import { Link, useNavigate, useLocation } from "react-router-dom";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const navLinks = [
  { label: "Home",            to: "/",                 hash: "__home__"  },
  { label: "About",          to: "/",                 hash: "about"     },
  { label: "Services",       to: "/",                 hash: "services"  },
  { label: "Our Work",       to: "/",                 hash: "work"      },
  { label: "Brand Solutions", to: "/brand-solutions", hash: ""          },
  { label: "Contact",        to: "/contact-us",       hash: ""          },
];

const socials = [
  { label: "Instagram", icon: Instagram, href: "https://instagram.com/delightxmedia" },
  { label: "LinkedIn",  icon: Linkedin,  href: "https://linkedin.com/company/delightxmedia" },
  { label: "Twitter",   icon: Twitter,   href: "https://twitter.com/delightxmedia" },
];

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (to: string, hash: string) => {
    if (hash === "__home__") {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
      return;
    }
    if (!hash) return;
    if (location.pathname === "/") {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-8 border-b border-background/10">

        {/* Brand */}
        <Link to="/" className="flex flex-col leading-[0.85] group shrink-0">
          <span className="font-montserrat text-[22px] font-[900] tracking-[-0.06em] text-background group-hover:text-accent transition-colors">DelightX</span>
          <span className="font-montserrat text-[8px] font-[600] tracking-[0.2em] uppercase text-background/30 mt-1">Media</span>
        </Link>

        {/* Nav */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) =>
            link.hash ? (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.to, link.hash)}
                className="font-montserrat text-[10px] font-[700] uppercase tracking-[0.15em] text-background/50 hover:text-background transition-colors"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className="font-montserrat text-[10px] font-[700] uppercase tracking-[0.15em] text-background/50 hover:text-background transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Socials */}
        <div className="flex gap-3 shrink-0">
          {socials.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-8 h-8 rounded-full border border-background/20 hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-all duration-300 group"
            >
              <Icon className="w-3.5 h-3.5 text-background/40 group-hover:text-accent transition-colors" />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-4 flex items-center justify-between gap-3">
        <p className="font-montserrat text-[9px] font-[500] text-background/20 tracking-[0.1em] uppercase">
          © 2026 DelightX Media. All rights reserved.
        </p>
        <p className="font-montserrat text-[9px] font-[500] text-background/20 tracking-[0.1em] uppercase">
          Mumbai, India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
