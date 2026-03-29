import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play, Users, BarChart3, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { pageTransition } from "@/lib/animations";
import { Link } from "react-router-dom";

const YouTubeEditing = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-background noise-bg"
    >
      <SEO 
        title="YouTube Video Editing Services"
        description="Professional YouTube video editing services by DelightX Media India. High-retention editing designed to explode your views and growth."
        canonical="/youtube-video-editing"
        keywords="delightx media youtube editing, professional youtube editor, high retention video editing, youtube growth india, video editing agency mumbai"
      />
      <Navbar />

      <main className="pt-32 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Section 1: Hero */}
        <section className="mb-24">
          <div className="max-w-4xl">
            <h1 className="font-satoshi text-[48px] md:text-[72px] font-[900] leading-[0.95] tracking-tight text-foreground mb-8">
              High-Retention <span className="text-accent">YouTube Editing</span> That Actually Scales.
            </h1>
            <p className="font-montserrat text-[16px] md:text-[18px] text-foreground/70 leading-relaxed mb-10 max-w-2xl">
              Most editors just cut clips. DelightX Media India engineers videos using psychological hooks, 
              strategic pacing, and high-quality motion graphics to keep your audience glued to the screen. 
              We don't just edit; we grow your channel.
            </p>
            <Link
              to="/contact-us"
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-montserrat text-sm font-bold uppercase tracking-widest transition-all hover:bg-accent hover:text-white w-fit"
            >
              Start Growing Your Channel
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Section 2: Detailed Content (800+ words target) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 border-t border-foreground/10 pt-16">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="font-satoshi text-3xl font-bold mb-6">Why Your Channel Needs "Retention-First" Editing</h2>
              <p className="text-foreground/80 leading-[1.8] mb-6">
                In 2026, the YouTube algorithm cares about one thing more than anything else: **Retention.** 
                Every second a viewer drops off is a signal to Google that your video isn't worth promoting. 
                At DelightX Media India, we understand the science of storytelling. We use "Pattern Interrupts," 
                sound design, and visual queues to reset the viewer's attention span every 5-10 seconds.
              </p>
              <p className="text-foreground/80 leading-[1.8]">
                Whether you're a tech reviewer, a lifestyle vlogger, or an educational creator, our 
                editing style is tailored to your specific audience. We study your analytics to see 
                where people drop off and we fix those leaks in the edit.
              </p>
            </div>

            <div>
              <h3 className="font-satoshi text-2xl font-bold mb-6 text-accent">The DelightX Advantage</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Psychological Hooks", desc: "Intro hooks designed to destroy the 'back' button.", icon: Zap },
                  { title: "Dynamic Pacing", desc: "No dead air. Every frame serves a purpose.", icon: Play },
                  { title: "Audience-Centric", desc: "We edit for your target persona, not just for aesthetics.", icon: Users },
                  { title: "Growth Analytics", desc: "We use data from 100+ channels to optimize our edits.", icon: BarChart3 }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-foreground/[0.03] border border-foreground/[0.05]">
                    <item.icon className="w-6 h-6 text-accent mb-4" />
                    <h4 className="font-satoshi font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-satoshi text-2xl font-bold mb-6">Our Editing Workflow</h3>
              <div className="space-y-6">
                <p className="text-foreground/80 leading-[1.8]">
                  Our process at DelightX Media India is collaborative and transparent. We start with a 
                  comprehensive onboarding to understand your brand voice. From there, your dedicated 
                  high-retention editor takes over, providing draft updates and taking feedback 
                  through our streamlined system.
                </p>
                <ul className="space-y-4">
                  {[
                    "Raw Footage Review & Storyboarding",
                    "A-Roll Selection & Narrative Focus",
                    "B-Roll, Stock, and Motion Graphic Integration",
                    "Professional Sound Design & Color Grading",
                    "Thumbnail Design & A/B Testing Strategy"
                  ].map((step, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-foreground/75">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="font-montserrat text-sm font-semibold">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="p-8 rounded-[32px] bg-accent/5 border border-accent/20">
              <h3 className="font-satoshi text-2xl font-bold mb-4">Ready to Dominate the Feed?</h3>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                Stop settling for "good enough" editing. Join the elite creators who trust DelightX for YouTubers 
                to handle their end-to-end production. Let's make your next video your most-watched one yet.
              </p>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all"
              >
                Book a Free Channel Audit <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="sticky top-32 p-8 rounded-[32px] bg-foreground text-background">
              <h3 className="font-satoshi text-xl font-bold mb-4">Quick Stats</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-[24px] font-black text-accent leading-none">35%+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Avg. Retention Boost</p>
                </div>
                <div className="w-full h-[1px] bg-background/10" />
                <div>
                  <p className="text-[24px] font-black text-accent leading-none">1B+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Total Views Managed</p>
                </div>
                <div className="w-full h-[1px] bg-background/10" />
                <div>
                  <p className="text-[24px] font-black text-accent leading-none">120k+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Videos Produced</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default YouTubeEditing;
