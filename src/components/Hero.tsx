
import { ArrowRight, ChevronDown, Award, Briefcase, HandHelping } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-kubecraft-lightgray via-white to-white py-24 md:py-28">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The #1 DevOps Community for <span className="text-kubecraft-blue">Landing Jobs & Earning More</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Become a DevOps engineer, fast-track your career, and join hundreds already earning 6 figures.
            </motion.p>

            <motion.div 
              className="space-y-4 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-2 rounded-full">
                  <Award className="h-5 w-5 text-green-600" />
                </div>
                <p className="text-lg text-gray-700">
                  Proven step-by-step roadmap
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-2 rounded-full">
                  <Briefcase className="h-5 w-5 text-green-600" />
                </div>
                <p className="text-lg text-gray-700">
                  Hands-on job experience (internship)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-2 rounded-full">
                  <HandHelping className="h-5 w-5 text-green-600" />
                </div>
                <p className="text-lg text-gray-700">
                  Powerful network & mentorship
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Button 
                size="lg" 
                className="bg-kubecraft-blue hover:bg-kubecraft-darkblue text-white text-lg px-8 py-6 rounded-xl flex items-center gap-2 group transition-all duration-300"
                onClick={() => window.location.href = 'https://www.skool.com/kubecraft'}
              >
                <span>Join KubeCraft Today</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg border-2 border-kubecraft-blue text-kubecraft-blue hover:bg-kubecraft-blue hover:text-white px-8 py-6 rounded-xl"
                onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>See Testimonials</span>
                <ChevronDown className="ml-1 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="flex-1 mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -z-10 -top-6 -left-6 w-full h-full rounded-2xl bg-kubecraft-blue/10 blur-sm"></div>
              <motion.div
                className="rounded-2xl shadow-2xl w-full overflow-hidden border-4 border-white"
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="/lovable-uploads/c5c7a9d5-1002-4c7a-b043-9ccd06a1d138.png"
                  alt="KubeCraft Cube Logo"
                  className="rounded-xl w-full object-contain bg-white p-8 h-[400px]"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
