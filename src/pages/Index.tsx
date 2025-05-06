
import Header from "../components/Header";
import Hero from "../components/Hero";
import Story from "../components/Story";
import Features from "../components/Features";
import Bonuses from "../components/Bonuses";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Story />
      <Features />
      <Bonuses />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
