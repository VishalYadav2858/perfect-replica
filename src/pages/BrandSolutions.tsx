import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import serviceVideo from "@/assets/service-video.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceCgi from "@/assets/service-cgi.jpg";
import servicePhoto from "@/assets/service-photo.jpg";

const solutions = [
  { title: "Videography", image: serviceVideo, link: "/videography" },
  { title: "Website Design & Development", image: serviceWeb, link: "/website-design" },
  { title: "CGI and Animation", image: serviceCgi, link: "/3d-animation-and-cgi" },
  { title: "Photography", image: servicePhoto, link: "/photography" },
];

const BrandSolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 md:pt-36 pb-24 px-6 lg:px-12 max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p className="font-montserrat text-[10px] font-[700] uppercase tracking-[0.35em] text-muted-foreground mb-6">
            Our Services
          </p>
          <h1 className="font-montserrat text-[48px] md:text-[72px] lg:text-[96px] font-[900] uppercase leading-[0.9] tracking-[-0.04em] text-foreground mb-10">
            Brand<br />Solutions.
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {solutions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={item.link} className="group block rounded-[24px] overflow-hidden bg-card border border-border/50 hover:border-foreground/15 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-[800ms]" />
                </div>
                <div className="p-7 md:p-9">
                  <h3 className="font-montserrat text-[18px] md:text-[22px] font-[800] uppercase tracking-[-0.01em] text-foreground mb-3">
                    {item.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 font-montserrat text-[11px] font-[700] uppercase tracking-[0.2em] text-foreground group-hover:gap-4 transition-all duration-300">
                    EXPLORE →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BrandSolutions;
