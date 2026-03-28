import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { pageTransition } from "@/lib/animations";

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
    } catch {
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
        description="Get in touch with DelightX Media. We'd love to hear about your project."
        canonical="/contact-us"
        keywords="contact delightx media, hire creative agency, branding inquiry"
      />

      <main className="flex-grow pt-28 md:pt-32 pb-20 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 min-h-[600px]">

          {/* LEFT — black card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 bg-foreground rounded-[32px] p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              <p className="font-montserrat text-[9px] font-[800] uppercase tracking-[0.3em] text-background/60 mb-6">
                DelightX Media
              </p>
              <h1 className="font-satoshi text-[48px] md:text-[60px] font-[900] leading-[0.9] tracking-tight text-background mb-6">
                Let's<br />
                <span className="text-accent">Talk.</span>
              </h1>
              <p className="font-montserrat text-[12px] font-[400] text-background/70 leading-[1.8] max-w-xs">
                Have a project in mind? Drop us a message and we'll get back within 24 hours.
              </p>
            </div>

            <div className="flex flex-col gap-5 mt-10">
              <a href="mailto:contact@delightxmedia.in" className="group flex items-center gap-4">
                <span className="w-9 h-9 rounded-full bg-accent/30 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-300">
                  <Mail className="w-3.5 h-3.5 text-accent group-hover:text-white transition-colors" />
                </span>
                <div>
                  <p className="font-montserrat text-[9px] font-[700] uppercase tracking-[0.2em] text-background/60 mb-0.5">Email</p>
                  <p className="font-satoshi text-[13px] font-[700] text-background group-hover:text-accent transition-colors">contact@delightxmedia.in</p>
                </div>
              </a>

              <a href="tel:+919867949943" className="group flex items-center gap-4">
                <span className="w-9 h-9 rounded-full bg-accent/30 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-300">
                  <Phone className="w-3.5 h-3.5 text-accent group-hover:text-white transition-colors" />
                </span>
                <div>
                  <p className="font-montserrat text-[9px] font-[700] uppercase tracking-[0.2em] text-background/60 mb-0.5">Phone</p>
                  <p className="font-satoshi text-[13px] font-[700] text-background group-hover:text-accent transition-colors">+91-9867949943</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <span className="w-9 h-9 rounded-full bg-accent/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                </span>
                <div>
                  <p className="font-montserrat text-[9px] font-[700] uppercase tracking-[0.2em] text-background/60 mb-0.5">Location</p>
                  <p className="font-satoshi text-[13px] font-[700] text-background">Mumbai, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 flex flex-col justify-center py-8 lg:py-0 lg:pl-8"
          >
            <p className="font-montserrat text-[9px] font-[800] uppercase tracking-[0.3em] text-accent mb-4">
              Send a Message
            </p>
            <h2 className="font-satoshi text-[32px] md:text-[44px] font-[900] leading-[0.95] tracking-tight text-foreground mb-10">
              Tell us about<br />your project.
            </h2>

            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-7 max-w-lg">
              <div className="flex flex-col gap-2">
                <label className="font-montserrat text-[9px] font-[800] uppercase tracking-[0.22em] text-foreground/65">Your Name *</label>
                <input
                  type="text" name="user_name" required placeholder="John Doe"
                  className="w-full bg-transparent border-b border-black/15 focus:border-accent pb-3 font-satoshi text-[16px] text-foreground placeholder:text-foreground/20 focus:outline-none transition-colors duration-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-montserrat text-[9px] font-[800] uppercase tracking-[0.22em] text-foreground/65">Email Address *</label>
                <input
                  type="email" name="user_email" required placeholder="john@example.com"
                  className="w-full bg-transparent border-b border-black/15 focus:border-accent pb-3 font-satoshi text-[16px] text-foreground placeholder:text-foreground/20 focus:outline-none transition-colors duration-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-montserrat text-[9px] font-[800] uppercase tracking-[0.22em] text-foreground/65">Your Message *</label>
                <textarea
                  name="message" rows={4} required placeholder="Tell us about your project..."
                  className="w-full bg-transparent border-b border-black/15 focus:border-accent pb-3 font-satoshi text-[16px] text-foreground placeholder:text-foreground/20 focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>

              {status === "success" && (
                <p className="font-montserrat text-[11px] text-green-600 font-[700] uppercase tracking-widest">✓ Message sent!</p>
              )}
              {status === "error" && (
                <p className="font-montserrat text-[11px] text-red-500 font-[700] uppercase tracking-widest">Something went wrong. Email us directly.</p>
              )}

              <motion.button
                type="submit" disabled={loading}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                className="self-start flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-montserrat text-[11px] font-[800] uppercase tracking-widest hover:bg-accent transition-colors duration-300 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <ArrowUpRight className="w-4 h-4" />}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default ContactUs;
