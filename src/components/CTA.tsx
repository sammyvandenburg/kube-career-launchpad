
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#326CE5] to-[#3E88F6] overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-40 -top-40 w-80 h-80 bg-white rounded-full"></div>
        <div className="absolute right-20 top-20 w-40 h-40 bg-white rounded-full"></div>
        <div className="absolute -right-20 bottom-10 w-60 h-60 bg-white rounded-full"></div>
      </div>
      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to Transform Your DevOps Career?
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl mb-10 opacity-95 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Join now and build your DevOps career with the support of our expert community.
            Stop struggling alone - success is just one click away.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              variant="default" 
              className="bg-white text-[#326CE5] hover:bg-gray-100 hover:text-[#2251B9] text-xl px-10 py-7 rounded-xl shadow-lg group"
              onClick={() => window.location.href = 'https://www.skool.com/kubecraft'}
            >
              <span>Join KubeCraft Community Today</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <p className="mt-6 text-sm opacity-80">
              Limited spots available - Secure your place now!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
