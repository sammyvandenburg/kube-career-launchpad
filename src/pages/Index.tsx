
import Header from "../components/Header";
import Hero from "../components/Hero";
import Story from "../components/Story";
import Features from "../components/Features";
import WhyItWorks from "../components/WhyItWorks";
import WhoItsFor from "../components/WhoItsFor";
import WhyJoinNow from "../components/WhyJoinNow";
import Bonuses from "../components/Bonuses";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Story />
      <Features />
      <WhyItWorks />
      <Bonuses />
      <Testimonials />
      <WhoItsFor />
      <WhyJoinNow />
      <CTA />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
