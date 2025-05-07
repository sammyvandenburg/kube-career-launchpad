
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
    <section className="py-24 bg-gradient-to-r from-[#326CE5] to-[#3E88F6] overflow-hidden relative">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-40 -top-40 w-80 h-80 bg-white rounded-full"></div>
        <div className="absolute right-20 top-20 w-40 h-40 bg-white rounded-full"></div>
        <div className="absolute -right-20 bottom-10 w-60 h-60 bg-white rounded-full"></div>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your DevOps Career?
            </h2>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-xl mb-10 opacity-95 max-w-3xl mx-auto">
              Join now and get the step-by-step system, internship, and expert coaching to accelerate your DevOps career. Stop struggling alone — success is just one click away.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Button 
              size="lg" 
              variant="default" 
              className="bg-white text-[#326CE5] hover:bg-gray-100 hover:text-[#2251B9] text-xl px-10 py-7 rounded-xl shadow-lg group hover:shadow-xl hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = 'https://www.skool.com/kubecraft'}
            >
              <span>Join KubeCraft Today</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <div className="mt-8 p-4 bg-white/10 max-w-md mx-auto rounded-xl backdrop-blur-sm">
              <p className="text-white/90">
                <span className="font-bold">600+</span> members already joined — Secure your place now!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
