import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 md:pt-36 pb-24 px-6 lg:px-12 max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-montserrat text-[10px] font-[700] uppercase tracking-[0.35em] text-muted-foreground mb-6">
            Get in touch
          </p>
          <h1 className="font-montserrat text-[48px] md:text-[72px] lg:text-[96px] font-[900] uppercase leading-[0.9] tracking-[-0.04em] text-foreground mb-10">
            Let's create<br />something<br />together.
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <form className="space-y-8">
              <div>
                <label className="font-montserrat text-[11px] font-[700] uppercase tracking-[0.15em] text-foreground block mb-3">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-border py-3 font-montserrat text-[15px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div>
                <label className="font-montserrat text-[11px] font-[700] uppercase tracking-[0.15em] text-foreground block mb-3">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-transparent border-b border-border py-3 font-montserrat text-[15px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div>
                <label className="font-montserrat text-[11px] font-[700] uppercase tracking-[0.15em] text-foreground block mb-3">
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full bg-transparent border-b border-border py-3 font-montserrat text-[15px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-foreground text-background font-montserrat text-[13px] font-[600] tracking-[0.05em] uppercase"
              >
                Send Message
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10"
          >
            <div>
              <h3 className="font-montserrat text-[11px] font-[700] uppercase tracking-[0.15em] text-foreground mb-3">Email</h3>
              <a href="mailto:hello@adko.in" className="font-montserrat text-[16px] text-muted-foreground hover:text-foreground transition-colors">
                contact@delightxmedia.in
              </a>
            </div>
            <div>
              <h3 className="font-montserrat text-[11px] font-[700] uppercase tracking-[0.15em] text-foreground mb-3">Follow Us</h3>
              <div className="flex flex-col gap-2">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-montserrat text-[16px] text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-montserrat text-[16px] text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="font-montserrat text-[16px] text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
              </div>
            </div>
            <div>
              <p className="font-montserrat text-[14px] text-muted-foreground leading-[1.8]">
                We'd love to hear from you! Whether you have questions, feedback, or a project idea, feel free to reach out. Our team is committed to responding within 24 hours to assist you promptly.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
