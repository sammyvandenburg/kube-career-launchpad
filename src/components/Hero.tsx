
import { ArrowRight, ChevronDown, Award, Briefcase, HandHelping } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Lottie from "react-lottie";
import kubecraftAnimation from "../assets/kubecraft-animation.json";

const Hero = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: kubecraftAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <section className="bg-gradient-to-b from-kubecraft-lightgray via-white to-white pt-32 pb-24 md:pt-36 md:pb-28 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 z-0">
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-kubecraft-blue/30 blur-2xl"></div>
        <div className="absolute top-20 right-10 w-60 h-60 rounded-full bg-kubecraft-blue/20 blur-3xl"></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 rounded-full bg-kubecraft-teal/20 blur-2xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The #1 DevOps Community for <span className="text-kubecraft-blue">Landing Jobs & Earning More</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Become a DevOps engineer, fast-track your career, and join hundreds already earning 6 figures.
            </motion.p>

            <motion.div 
              className="space-y-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1.5 bg-green-100 p-2 rounded-full">
                  <Award className="h-5 w-5 text-green-600" />
                </div>
                <p className="text-lg text-gray-700">
                  Proven step-by-step roadmap
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1.5 bg-green-100 p-2 rounded-full">
                  <Briefcase className="h-5 w-5 text-green-600" />
                </div>
                <p className="text-lg text-gray-700">
                  Hands-on job experience (internship)
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1.5 bg-green-100 p-2 rounded-full">
                  <HandHelping className="h-5 w-5 text-green-600" />
                </div>
                <p className="text-lg text-gray-700">
                  Powerful network & mentorship
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Button 
                size="lg" 
                className="bg-kubecraft-blue hover:bg-kubecraft-darkblue text-white text-lg px-8 py-6 rounded-xl shadow-lg flex items-center gap-2 group transition-all duration-300 hover:shadow-xl hover:scale-105"
                onClick={() => window.location.href = 'https://www.skool.com/kubecraft'}
              >
                <span>Join KubeCraft Today</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg border-2 border-kubecraft-blue text-kubecraft-blue hover:bg-kubecraft-blue hover:text-white px-8 py-6 rounded-xl transition-all duration-300"
                onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>See Testimonials</span>
                <ChevronDown className="ml-1 h-5 w-5" />
              </Button>
            </motion.div>

            {/* Award badge */}
            <motion.div
              className="mt-10 inline-flex items-center gap-2 p-3 pl-1 pr-4 bg-white rounded-full shadow-md border border-gray-100"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <div className="bg-amber-100 p-2 rounded-full">
                <Award className="h-5 w-5 text-amber-600" />
              </div>
              <span className="text-sm font-medium">Top 1% Community Builder on Skool</span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 mt-8 md:mt-0 max-w-md mx-auto md:max-w-none"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -z-10 -top-6 -left-6 w-full h-full rounded-2xl bg-kubecraft-blue/10 blur-sm"></div>
              <motion.div
                className="h-[400px] rounded-2xl shadow-2xl bg-white p-8 flex items-center justify-center overflow-hidden border-4 border-white"
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ duration: 0.5 }}
              >
                <Lottie options={lottieOptions} height={300} width={300} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
