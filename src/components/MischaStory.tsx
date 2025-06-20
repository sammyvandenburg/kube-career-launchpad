
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const MischaStory = () => {
  const painPoints = [
    "Struggling to break into DevOps without experience?",
    "Feeling lost in endless courses and tutorials?",
    "Frustrated with advice that doesn't lead to real jobs?",
    "Worrying your background isn't \"technical enough\"?",
    "Unsure how to stand out to employers or recruiters?"
  ];

  return (
    <section className="section-padding py-24 bg-black">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Feeling Stuck in Your <span className="text-kubecraft-terracotta">DevOps Journey?</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          {/* Left side - Pain points */}
          <motion.div 
            className="flex-1 space-y-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {painPoints.map((point, index) => (
              <motion.div 
                key={index}
                className="flex items-start gap-4" 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="mt-1 bg-kubecraft-terracotta/20 p-2 rounded-full flex-shrink-0">
                  <Check className="h-5 w-5 text-kubecraft-terracotta" />
                </div>
                <p className="text-lg text-gray-300">{point}</p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Right side - Solution */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-kubecraft-terracotta/10 to-kubecraft-green/10 -z-10 blur-md"></div>
              <div className="bg-gray-900/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-xl border border-gray-800">
                <p className="text-xl mb-6 text-white font-medium">
                  Join KubeCraft and get hands-on guidance from someone who's been in your shoes.
                </p>
                
                <p className="text-lg mb-8 text-gray-300">
                  I went from a non-tech background to a 6-figure DevOps career in just 6 months — and now I help 600+ members do the same.
                </p>
                
                <p className="text-lg font-semibold mb-4 text-white">
                  Inside, you'll get:
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-kubecraft-green/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-kubecraft-green" />
                    </div>
                    <p className="text-gray-300">A proven, step-by-step roadmap</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-kubecraft-green/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-kubecraft-green" />
                    </div>
                    <p className="text-gray-300">Practical experience through internships</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-kubecraft-green/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-kubecraft-green" />
                    </div>
                    <p className="text-gray-300">A supportive network that helps you win</p>
                  </div>
                </div>
                
                <p className="text-lg font-bold mb-8 text-white italic">
                  I learned the hard way so you don't have to.
                </p>
                
                <Button 
                  className="bg-kubecraft-terracotta hover:bg-kubecraft-green text-white text-lg px-8 py-6 rounded-xl shadow-md group hover:shadow-lg hover:scale-105 transition-all duration-300 w-full md:w-auto"
                  onClick={() => window.location.href = 'https://www.skool.com/kubecraft'}
                >
                  <span>Join the KubeCraft Community</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MischaStory;
