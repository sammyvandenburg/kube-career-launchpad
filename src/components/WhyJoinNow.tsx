
import { Check, ArrowRight, Star, Timer, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const WhyJoinNow = () => {
  return (
    <section className="section-padding bg-black">
      <div className="container-custom max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Why Join <span className="text-kubecraft-green">Now</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800 hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex flex-col h-full">
              <div className="mb-6 bg-kubecraft-terracotta/20 p-3 rounded-full w-14 h-14 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-bold text-xl mb-4 text-white">
                <span className="text-kubecraft-terracotta">DevOps roles are in high demand</span> at every major tech company
              </h3>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800 hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex flex-col h-full">
              <div className="mb-6 bg-kubecraft-green/20 p-3 rounded-full w-14 h-14 flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-bold text-xl mb-4 text-white">
                <span className="text-kubecraft-green">Annual unlocks everything instantly</span> and saves 15% compared to monthly
              </h3>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800 hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex flex-col h-full">
              <div className="mb-6 bg-kubecraft-terracotta/20 p-3 rounded-full w-14 h-14 flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-bold text-xl mb-4 text-white">
                Join <span className="text-kubecraft-terracotta">700+ members</span> building their DevOps careers together
              </h3>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Button 
            size="lg" 
            className="bg-kubecraft-terracotta hover:bg-kubecraft-green text-white text-xl px-10 py-7 rounded-xl shadow-lg group transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:brightness-110"
            onClick={() => window.location.href = 'https://www.skool.com/kubecraft'}
          >
            <span>Join Now & Boost Your Career</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyJoinNow;
