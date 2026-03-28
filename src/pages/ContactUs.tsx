import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { pageTransition, staggerContainer, slideUp } from "@/lib/animations";

const ContactUs = () => {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      if (form.current) {
        await emailjs.sendForm(
          import.meta.env.VITE_EMAIL_SERVICE_ID,
          import.meta.env.VITE_EMAIL_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAIL_PUBLIC_KEY
        );
        setStatus("success");
        (form.current as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <motion.div 
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-background noise-bg flex flex-col"
    >
      <Navbar />
      <SEO
        title="Contact Us"
        description="Get in touch with DelightX Media. We'd love to hear about your project. Our team responds within 24 hours."
        canonical="/contact-us"
        keywords="contact delightx media, hire creative agency, branding inquiry, get quote"
      />

      <main className="flex-grow pt-32 md:pt-48 pb-24 px-6 lg:px-12 max-w-[1440px] mx-auto w-full relative z-10">
        



        {/* Content starts directly with the Grid for better alignment */}

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mt-12 relative z-10 items-start">
          
          {/* Contact Details */}
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col space-y-12 order-2 lg:order-1 items-start"
          >
            <div className="mb-2">
              <h1 className="font-satoshi text-[32px] md:text-[42px] lg:text-[54px] font-[900] text-foreground leading-[1.1] mb-6">
                Let's Build Your <br />
                <span className="text-accent">Success Engine</span>
              </h1>
              <p className="font-montserrat text-[14px] md:text-[15px] text-foreground/50 leading-[1.7] max-w-sm">
                Ready to transform your digital presence? Reach out to us and let's create something amazing together.
              </p>
            </div>

            {/* Email */}
            <div className="flex items-start gap-5 p-2 group cursor-default">
              <div className="w-12 h-12 rounded-full bg-[#D149FF] flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="pt-0.5">
                <h3 className="font-montserrat text-[9px] font-[800] uppercase tracking-[0.25em] text-foreground/30 mb-1">
                  Email Us
                </h3>
                <a href="mailto:contact@delightxmedia.in" className="font-satoshi text-[16px] md:text-[18px] font-[700] text-foreground hover:text-accent transition-colors">
                  contact@delightxmedia.in
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-5 p-2 group cursor-default">
              <div className="w-12 h-12 rounded-full bg-[#00A3FF] flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="pt-0.5">
                <h3 className="font-montserrat text-[9px] font-[800] uppercase tracking-[0.25em] text-foreground/30 mb-1">
                  Call Us
                </h3>
                <div className="flex flex-col">
                  <a href="tel:+919867949943" className="font-satoshi text-[16px] md:text-[18px] font-[700] text-foreground hover:text-accent transition-colors">
                    +91-9867949943
                  </a>
                  <a href="tel:+919867949943" className="font-satoshi text-[16px] md:text-[18px] font-[700] text-foreground hover:text-accent transition-colors">
                    
                  </a>
                </div>
              </div>
            </div>

            {/* Visit */}
            <div className="flex items-start gap-5 p-2 group cursor-default">
              <div className="w-12 h-12 rounded-full bg-[#FF7A00] flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="pt-0.5">
                <h3 className="font-montserrat text-[9px] font-[800] uppercase tracking-[0.25em] text-foreground/30 mb-1">
                  Visit Us
                </h3>
                <p className="font-satoshi text-[16px] md:text-[18px] font-[700] text-foreground">
                  Mumbai, India
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 space-y-12"
          >
            <div className="mb-2">
               <h2 className="font-satoshi text-[32px] md:text-[42px] lg:text-[54px] font-[900] text-foreground leading-[1.1] mb-6">
                 Send Us A <br />
                 <span className="text-muted-foreground/30">Message</span>
               </h2>
               <p className="font-montserrat text-[14px] md:text-[15px] text-foreground/50 leading-[1.7] opacity-0 pointer-events-none">
                 Spacer tag to match height of left column description exactly.
               </p>
            </div>

            <div className="glass-card p-8 md:p-12 rounded-[32px] relative overflow-hidden">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-8 relative z-10"
              >
                {/* Name */}
                <div>
                  <label className="font-montserrat text-[10px] md:text-[11px] font-[700] uppercase tracking-[0.2em] text-foreground/60 block mb-3 pl-4">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-black/5 border border-black/10 rounded-full px-6 py-4 font-montserrat text-[14px] text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent focus:bg-black/10 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="font-montserrat text-[10px] md:text-[11px] font-[700] uppercase tracking-[0.2em] text-foreground/60 block mb-3 pl-4">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-black/5 border border-black/10 rounded-full px-6 py-4 font-montserrat text-[14px] text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent focus:bg-black/10 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="font-montserrat text-[10px] md:text-[11px] font-[700] uppercase tracking-[0.2em] text-foreground/60 block mb-3 pl-4">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your project..."
                    className="w-full bg-black/5 border border-black/10 rounded-[24px] px-6 py-4 font-montserrat text-[14px] text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent focus:bg-black/10 transition-all resize-none"
                  />
                </div>

                {/* Status Message */}
                {status === "success" && (
                  <p className="text-green-400 text-sm font-montserrat bg-green-400/10 px-4 py-2 rounded-full border border-green-400/20">
                    ✅ Message sent successfully!
                  </p>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-montserrat text-[13px] font-[700] tracking-[0.1em] uppercase disabled:opacity-60 disabled:cursor-not-allowed hover:bg-accent hover:text-white transition-colors shadow-lg"
                >
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && <ArrowUpRight className="w-5 h-5" />}
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default ContactUs;
