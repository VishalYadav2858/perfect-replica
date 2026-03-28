import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import aboutImage from "@/assets/about-image.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero4 from "@/assets/hero-4.jpg";
import { pageTransition, slideUp, staggerContainer } from "@/lib/animations";

const About = () => {
  return (
    <motion.div 
      variants={pageTransition} 
      initial="initial" 
      animate="animate" 
      exit="exit" 
      className="relative min-h-screen bg-background noise-bg flex flex-col"
    >
      <Navbar />
      <SEO
        title="About Us"
        description="Learn about DelightX Media — a creative agency founded by creators who think like storytellers and execute like marketers. Branding, content, web, and film under one roof."
        canonical="/about"
        keywords="about delightx media, creative agency team, digital marketing agency, branding experts"
      />

      <main className="flex-grow pt-32 md:pt-48 pb-24 px-6 lg:px-12 max-w-[1440px] mx-auto w-full relative z-10">
        



        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-24 flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <motion.p variants={slideUp} className="font-montserrat text-[10px] md:text-xs font-[700] uppercase tracking-[0.35em] text-accent mb-6">
            About Us
          </motion.p>
          <motion.h1 variants={slideUp} className="font-satoshi text-[48px] md:text-[80px] lg:text-[100px] font-[900] uppercase leading-[0.9] tracking-[-0.04em] text-foreground mb-10">
            We get the <span className="text-muted-foreground">job done.</span>
          </motion.h1>
          <motion.p variants={slideUp} className="font-montserrat text-[14px] md:text-[16px] font-[500] text-foreground/70 max-w-2xl leading-[1.8]">
            We're a digital marketing team that specializes in providing end-to-end services to help businesses get the required task DONE. With a wide range of expertise, including content creation, brand development, performance marketing, website design and development, graphic design, photography, videography, and 3D animation, we offer a comprehensive suite of services to meet the diverse needs of our clients under one roof.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32 relative z-10">
          {[aboutImage, hero2, hero4].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[32px] overflow-hidden aspect-[4/5] group"
            >


              <img src={img} alt="Team" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" loading="lazy" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card rounded-[40px] p-10 md:p-16 lg:p-24 relative overflow-hidden"
        >

          
          <h3 className="font-satoshi text-[28px] md:text-[40px] lg:text-[56px] font-[900] leading-[1.1] max-w-[900px] text-foreground relative z-10">
            At DelightX, content isn't an afterthought, it's the strategy. Founded by creators, we think like storytellers and execute like marketers.
          </h3>
          <p className="font-montserrat text-[14px] font-[500] text-foreground/70 max-w-lg leading-[1.8] mt-8 relative z-10">
            Explore our curated projects that showcase creativity, strategy, and innovation across branding, web, and motion design.
          </p>
        </motion.div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default About;
