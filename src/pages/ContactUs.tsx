import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { pageTransition } from "@/lib/animations";

const ContactUs = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);
  setStatus(null);

  try {
    const result = await emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID as string,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID as string,
      form.current!,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY as string
    );

    if (result.status === 200) {
      console.log("SUCCESS:", result.text);
      setStatus("success");
      form.current?.reset();
    } else {
      throw new Error("Email not sent");
    }

  } catch (error) {
    console.error("REAL ERROR:", error);
    setStatus("error");
  } finally {
    setLoading(false);
  }
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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">

          {/* LEFT */}
          <motion.div className="lg:col-span-2 bg-foreground rounded-[32px] p-8 md:p-10 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase text-background/60 mb-6">
                DelightX Media
              </p>
              <h1 className="text-5xl font-black text-background mb-6">
                Let's <span className="text-accent">Talk.</span>
              </h1>
              <p className="text-background/70 text-sm">
                Have a project in mind? Drop us a message and we'll get back within 24 hours.
              </p>
            </div>

            <div className="space-y-6 mt-10">
              <a href="mailto:vishal@delightxmedia.in" className="flex items-center gap-3">
                <Mail className="text-background" />
                <span className="text-background">vishal@delightxmedia.in</span>
              </a>

              <a href="tel:+919867949943" className="flex items-center gap-3">
                <Phone className="text-background" />
                <span className="text-background">+91-9867949943</span>
              </a>

              <div className="flex items-center gap-3">
                <MapPin className="text-background" />
                <span className="text-background">Mumbai, India</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div className="lg:col-span-3 flex flex-col justify-center py-8 lg:py-0 lg:pl-8 w-full">
            <p className="text-accent text-xs uppercase mb-4">Send a Message</p>

            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Tell us about your project.
            </h2>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-8 max-w-lg w-full"
            >

              <div className="flex flex-col gap-2">
                <label>Your Name *</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-black/15 focus:border-accent pb-3 pt-2 outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-transparent border-b border-black/15 focus:border-accent pb-3 pt-2 outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label>Your Message *</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your project..."
                  className="w-full bg-transparent border-b border-black/15 focus:border-accent pb-3 pt-2 outline-none resize-none"
                />
              </div>

              {status === "success" && (
                <p className="text-green-600 text-sm">✓ Message sent!</p>
              )}

              {status === "error" && (
                <p className="text-red-500 text-sm">
                  Something went wrong. Check console.
                </p>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                className="self-start flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <ArrowUpRight />}
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