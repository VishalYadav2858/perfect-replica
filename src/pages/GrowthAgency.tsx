import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Lightbulb, Target, Rocket } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { pageTransition } from "@/lib/animations";
import { Link } from "react-router-dom";

const GrowthAgency = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-background noise-bg"
    >
      <SEO 
        title="YouTube Growth Agency India"
        description="The #1 YouTube Growth Agency in India. DelightX Media India helps creators and brands scale to millions of subscribers with data-driven strategies."
        canonical="/youtube-growth-agency"
        keywords="youtube growth agency india, grow on youtube 2026, delightx media growth, youtube strategy consultant india, best agency for creators"
      />
      <Navbar />

      <main className="pt-32 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <section className="mb-24 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
          >
            <span className="font-montserrat text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Strategic Excellence</span>
          </motion.div>
          <h1 className="font-satoshi text-[48px] md:text-[80px] font-[900] leading-[0.9] tracking-tight text-foreground mb-8">
            Don't Just <span className="text-accent">Post.</span><br />Scale to Millions.
          </h1>
          <p className="font-montserrat text-[16px] md:text-[20px] text-foreground/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            DelightX Media India is more than an agency. We are your fractional CCO (Chief Content Officer). 
            We provide the data, the strategy, and the production power to turn your channel into a 
            high-value media brand.
          </p>
          <Link
            to="/contact-us"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-foreground text-background font-montserrat text-sm font-bold uppercase tracking-widest transition-all hover:bg-accent hover:text-white"
          >
            Apply for Our Growth Program
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { icon: TrendingUp, title: "Data-Driven Strategy", desc: "No guesswork. We use proprietary data to predict what performs." },
            { icon: Lightbulb, title: "Concept Development", desc: "Unique video ideas that stand out in a crowded feed." },
            { icon: Target, title: "Audience Targetting", desc: "We find your tribe and turn them into raving fans." },
            { icon: Rocket, title: "Velocity Scaling", desc: "Proven methods to increase upload frequency without losing quality." }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-foreground/[0.02] border border-foreground/[0.05] hover:border-accent/30 transition-all duration-300">
              <item.icon className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-satoshi text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-foreground rounded-[40px] p-8 md:p-16 text-background overflow-hidden relative mb-32">
          <div className="relative z-10 max-w-3xl">
            <h2 className="font-satoshi text-3xl md:text-5xl font-[900] mb-8 leading-tight">
              The Framework Behind <span className="text-accent">Exponential Growth.</span>
            </h2>
            <div className="space-y-8">
              <p className="text-background/70 leading-relaxed text-lg">
                At DelightX Media India, we've decoded the YouTube "Lottery." We know that growth isn't 
                just about one viral video; it's about building an ecosystem that sustains high 
                average view duration and consistent click-through rates.
              </p>
              <div className="space-y-4">
                {[
                  { t: "Niche Authority", d: "Establishing you as the #1 voice in your chosen category." },
                  { t: "Click-Through Optimization", d: "Title and thumbnail pairing that is impossible to ignore." },
                  { t: "Monetization Strategy", d: "Diversifying income via sponsors, products, and memberships." }
                ].map((point, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 font-bold text-xs">{idx + 1}</div>
                    <div>
                      <h4 className="font-bold text-background mb-1">{point.t}</h4>
                      <p className="text-sm text-background/60 leading-relaxed">{point.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
        </div>

        <section className="text-center max-w-2xl mx-auto">
          <h2 className="font-satoshi text-3xl font-bold mb-6">Ready to Scale to the Next Level?</h2>
          <p className="text-foreground/60 mb-10 leading-relaxed">
            We only work with a handpicked selection of creators and brands each month. This ensures 
            every partner gets direct access to our core strategy team.
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-4 text-accent font-black text-xl hover:gap-6 transition-all"
          >
            Check Availability <ArrowRight className="w-6 h-6" />
          </Link>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default GrowthAgency;
