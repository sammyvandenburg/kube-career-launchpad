
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="py-24 bg-black overflow-hidden relative">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-40 -top-40 w-80 h-80 bg-kubecraft-terracotta rounded-full"></div>
        <div className="absolute right-20 top-20 w-40 h-40 bg-kubecraft-green rounded-full"></div>
        <div className="absolute -right-20 bottom-10 w-60 h-60 bg-kubecraft-terracotta rounded-full"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center text-white"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Ready to Stop Guessing and Start Growing?
            </h2>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-2xl mb-10 opacity-95 max-w-3xl mx-auto font-medium">
              Join the only DevOps system built to get you hired. Real labs, referrals, and expert support from engineers who have done it.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="mb-10 p-5 bg-gray-900/20 rounded-xl backdrop-blur-sm">
              <p className="text-white text-lg md:text-xl font-medium">
                Annual unlocks everything and saves you $699. This offer expires soon, lock in your spot now.
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Button 
              size="lg" 
              variant="default" 
              className="bg-kubecraft-terracotta hover:bg-kubecraft-green text-white text-2xl px-12 py-8 rounded-xl shadow-lg group hover:shadow-xl hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = 'https://www.skool.com/kubecraft'}
            >
              <span>Join KubeCraft Today</span>
              <ArrowRight className="ml-2 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <div className="mt-8 p-4 bg-gray-900/20 max-w-md mx-auto rounded-xl backdrop-blur-sm">
              <p className="text-white/90">
                <span className="font-bold">700+</span> members already joined — Secure your place now!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
