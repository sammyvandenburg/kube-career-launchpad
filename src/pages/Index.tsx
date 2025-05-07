
import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MischaStory from "../components/MischaStory";
import WhatYouGet from "../components/WhatYouGet";
import Testimonials from "../components/Testimonials";
import SocialProof from "../components/SocialProof";
import UrgencySection from "../components/UrgencySection";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import { motion, useScroll, useAnimation } from "framer-motion";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const controls = useAnimation();

  useEffect(() => {
    const updateScroll = () => {
      const scrollPos = window.scrollY;
      if (scrollPos > 400) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 100 });
      }
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, [controls]);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <motion.div
        className="progress-bar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "#326CE5",
          transformOrigin: "0%",
          zIndex: 100,
          scaleX: scrollYProgress
        }}
      />
      <Hero />
      <MischaStory />
      <WhatYouGet />
      <Testimonials />
      <SocialProof />
      <UrgencySection />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
