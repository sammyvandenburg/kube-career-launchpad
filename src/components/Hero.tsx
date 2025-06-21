import { ArrowRight, ChevronDown, Award, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-black pt-32 pb-24 md:pt-36 md:pb-28 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-kubecraft-terracotta/20 blur-3xl"></div>
        <div className="absolute top-20 right-10 w-60 h-60 rounded-full bg-kubecraft-green/20 blur-3xl"></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 rounded-full bg-kubecraft-terracotta/20 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white text-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            DevOps Jobs Are Booming. <span className="text-kubecraft-terracotta">Breaking In Without Experience Is Brutal</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Surround yourself with expert engineers. Get real projects, referrals, and coaching inside KubeCraft.
            <br className="hidden md:block" /> The system designed to get you hired.
          </motion.p>

          <motion.div 
            className="space-y-4 mb-10 text-left max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              "Build production-ready projects",
              "Get referred by senior engineers",
              "Weekly live coaching and feedback",
              "Access 600+ LinkedIn-ready peer profiles"
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + (i * 0.1) }}
              >
                <div className="mt-1 bg-green-100 p-1.5 rounded-full">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-lg text-white/95 font-medium">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-5 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              size="lg" 
              className="bg-kubecraft-terracotta hover:bg-kubecraft-green text-white text-lg px-8 py-6 rounded-xl shadow-lg flex items-center gap-2 group transition-all duration-300 hover:shadow-xl hover:scale-105"
              onClick={() => window.location.href = 'https://www.skool.com/kubecraft'}
            >
              <span>Join KubeCraft Now</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg border-2 border-white text-white bg-transparent hover:bg-white hover:text-black px-8 py-6 rounded-xl transition-all duration-300"
              onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>See Real Member Stories</span>
              <ChevronDown className="ml-1 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Award badge */}
          <motion.div
            className="inline-flex items-center gap-2 p-3 pl-1 pr-4 bg-white/10 backdrop-blur-sm rounded-full shadow-md border border-white/20 hover:scale-105 transition-transform duration-300 mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <div className="bg-kubecraft-terracotta/20 p-2 rounded-full">
              <span className="text-kubecraft-terracotta text-lg">🏆</span>
            </div>
            <span className="text-sm font-medium text-white">700+ Members | Top 1% Skool Community | Members at Google, Microsoft, NVIDIA</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
