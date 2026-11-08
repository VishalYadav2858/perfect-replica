import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
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
        description="Tell DelightX Media what you're looking for, request a service, and we'll help shape the right plan for your project."
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
                Request a <span className="text-accent">Service.</span>
              </h1>
              <p className="text-background/70 text-sm">
                Tell us what you need and a little about your goals. We’ll be in touch within 24 hours.
              </p>
            </div>

            <div className="space-y-6 mt-10">
              <a href="mailto:vishal@delightxmedia.com" className="flex items-center gap-3">
                <Mail className="text-background" />
                <span className="text-background">vishal@delightxmedia.com</span>
              </a>

              <div className="flex items-center gap-3">
                <MapPin className="text-background" />
                <span className="text-background">Mumbai, India</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div className="lg:col-span-3 flex flex-col justify-center py-8 lg:py-0 lg:pl-8 w-full">
            <p className="text-accent text-xs uppercase mb-4">Start a Project</p>

            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              What can we help you create?
            </h2>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-8 max-w-lg w-full"
            >

              <div className="flex flex-col gap-2">
                <label htmlFor="user_name">Your Name *</label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-black/15 focus:border-accent pb-3 pt-2 outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="user_email">Email Address *</label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  placeholder="you@example.com"
                  className="w-full bg-transparent border-b border-black/15 focus:border-accent pb-3 pt-2 outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service_interest">What service are you interested in? *</label>
                <select
                  id="service_interest"
                  name="service_interest"
                  required
                  defaultValue=""
                  className="w-full bg-transparent border-b border-black/15 focus:border-accent pb-3 pt-2 outline-none"
                >
                  <option value="" disabled>
                    Choose a service
                  </option>
                  <option value="Personal Branding">Personal Branding</option>
                  <option value="Video Production">Video Production</option>
                  <option value="Social Media Management">Social Media Management</option>
                  <option value="Influencer Marketing">Influencer Marketing</option>
                  <option value="Talent Management">Talent Management</option>
                  <option value="Other or not sure yet">Other or not sure yet</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message">Tell us about your project *</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  placeholder="What are you hoping to achieve? Share any details that will help us understand what you need."
                  className="w-full bg-transparent border-b border-black/15 focus:border-accent pb-3 pt-2 outline-none resize-none"
                />
              </div>

              {status === "success" && (
                <p className="text-green-600 text-sm">Thanks! Your project request has been sent.</p>
              )}

              {status === "error" && (
                <p className="text-red-500 text-sm">
                  We couldn’t send your request. Please email us at vishal@delightxmedia.com.
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
