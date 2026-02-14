import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutImage from "@/assets/about-image.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero4 from "@/assets/hero-4.jpg";

const About = () => {
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
            About Us
          </p>
          <h1 className="font-montserrat text-[48px] md:text-[72px] lg:text-[96px] font-[900] uppercase leading-[0.9] tracking-[-0.04em] text-foreground mb-10">
            We get the<br />job done.
          </h1>
          <p className="font-montserrat text-[15px] md:text-[17px] font-[400] text-muted-foreground max-w-3xl leading-[1.8]">
            We're a digital marketing team that specializes in providing end-to-end services to help businesses get the required task DONE. With a wide range of expertise, including content creation, brand development, performance marketing, website design and development, graphic design, photography, videography, and 3D animation, we offer a comprehensive suite of services to meet the diverse needs of our clients under one roof.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24">
          {[aboutImage, hero2, hero4].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[20px] overflow-hidden aspect-[4/3]"
            >
              <img src={img} alt="ADKO team" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="bg-foreground text-background rounded-[28px] p-10 md:p-16 lg:p-20"
        >
          <h3 className="font-montserrat text-[22px] md:text-[30px] lg:text-[38px] font-[700] leading-[1.25] max-w-[800px]">
            At DelightX, content isn't an afterthought, it's the strategy. Founded by creators, we think like storytellers and execute like marketers.
          </h3>
          <p className="font-montserrat text-[14px] font-[400] text-background/60 max-w-lg leading-[1.8] mt-10">
            Explore our curated projects that showcase creativity, strategy, and innovation across branding, web, and motion design.
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
