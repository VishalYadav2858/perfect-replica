import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Stethoscope, Heart, Lock, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { pageTransition } from "@/lib/animations";
import { Link } from "react-router-dom";

const DoctorsEditing = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-background noise-bg"
    >
      <SEO 
        title="Video Editing for Doctors & Medical Professionals"
        description="Premium video editing services for doctors, surgeons, and healthcare professionals. DelightX Media India helps medics build authority and educate patients."
        canonical="/video-editing-for-doctors"
        keywords="video editing for doctors india, medical content creation, dental video editing, doctor personal brand, healthcare marketing agency mumbai"
      />
      <Navbar />

      <main className="pt-32 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <section className="mb-24 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h1 className="font-satoshi text-[42px] md:text-[64px] font-[900] leading-[1.1] tracking-tight text-foreground mb-8">
              Medical Content That <span className="text-accent">Builds Trust.</span>
            </h1>
            <p className="font-montserrat text-[16px] md:text-[18px] text-foreground/70 leading-relaxed mb-10">
              As a doctor, your time is your most valuable asset. DelightX Media India handles the 
              full production and editing of your medical educational content, ensuring clinical 
              accuracy, patient privacy, and high engagement.
            </p>
            <div className="flex gap-4">
              <Link
                to="/contact-us"
                className="group flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-montserrat text-sm font-bold uppercase tracking-widest transition-all hover:bg-accent hover:text-white"
              >
                Inquire for Your Practice
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="flex-1 p-8 rounded-[40px] bg-accent/5 border border-accent/20 relative overflow-hidden text-center">
            <Stethoscope className="w-24 h-24 text-accent mx-auto mb-6 opacity-20" />
            <h3 className="font-satoshi text-2xl font-bold mb-4">HIPAA Conscious Editing</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">
              We understand the nuances of medical privacy and clinical ethics. Our editors are 
              trained to handle sensitive patient footage with care.
            </p>
            {/* Minimal backdrop glow */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
          </div>
        </section>

        <div className="space-y-32">
          <section>
            <h2 className="font-satoshi text-3xl font-[900] mb-12 border-l-4 border-accent pl-6">Why Doctors Work With DelightX</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { icon: ShieldCheck, title: "Authority Building", desc: "We position you as the leading expert in your medical field." },
                { icon: Heart, title: "Patient Education", desc: "Turn complex medical jargon into easy-to-understand visuals." },
                { icon: Award, title: "Premium Aesthetic", desc: "A clean, clinical, yet modern look that reflects your professionalism." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <item.icon className="w-10 h-10 text-accent" />
                  <h3 className="font-satoshi text-xl font-bold">{item.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-foreground text-background rounded-[40px] p-10 md:p-20">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center">
                <h2 className="font-satoshi text-4xl md:text-5xl font-black mb-6">The Doctor's Branding Package.</h2>
                <p className="opacity-70 text-lg">Detailed end-to-end management for medical professionals.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="font-bold text-xl flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" /> Professional Editing
                  </h4>
                  <p className="text-sm opacity-60 leading-relaxed">
                    We edit your surgery videos, educational reels, and clinic tours with precision. 
                    Using DelightX for Medics ensures your content meets the highest standards of 
                    digital production.
                  </p>
                </div>
                <div className="space-y-6">
                  <h4 className="font-bold text-xl flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" /> Content Strategy
                  </h4>
                  <p className="text-sm opacity-60 leading-relaxed">
                    We don't just edit; we help you plan your content calendar based on what 
                    patients are searching for in Mumbai and across India.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center pb-20">
            <h2 className="font-satoshi text-[40px] font-black mb-8">Ready to Educate Millions?</h2>
            <p className="max-w-2xl mx-auto text-foreground/60 mb-12">
              From individual practitioners to multi-specialty hospitals, DelightX Media India 
              is the trusted partner for medical content excellence.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 px-12 py-6 rounded-full bg-accent text-white font-montserrat font-bold uppercase tracking-widest hover:bg-foreground hover:scale-105 transition-all shadow-xl shadow-accent/20"
            >
              Consult with Our Team <ArrowRight className="w-5 h-5" />
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default DoctorsEditing;
