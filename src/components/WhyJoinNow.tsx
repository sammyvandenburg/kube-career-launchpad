
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
            Why Join <span className="text-kubecraft-terracotta">Now</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Don't wait to start your DevOps journey - here's why now is the perfect time.
          </p>
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
              <div className="mb-6 bg-kubecraft-green/20 p-3 rounded-full w-14 h-14 flex items-center justify-center">
                <DollarSign className="h-7 w-7 text-kubecraft-green" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-white">
                <span className="text-2xl">🚀</span> DevOps roles are in demand <span className="text-kubecraft-green">across every major tech company</span>
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
              <div className="mb-6 bg-kubecraft-terracotta/20 p-3 rounded-full w-14 h-14 flex items-center justify-center">
                <Star className="h-7 w-7 text-kubecraft-terracotta" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-white">
                <span className="text-2xl">🔓</span> Annual unlocks everything — <span className="text-kubecraft-terracotta">save 40% vs monthly</span>
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
              <div className="mb-6 bg-red-100/20 p-3 rounded-full w-14 h-14 flex items-center justify-center">
                <Timer className="h-7 w-7 text-red-400" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-white">
                <span className="text-2xl">⏳</span> Price increases to <span className="text-red-400">$999/year at 725 members</span>
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
            className="bg-kubecraft-terracotta hover:bg-kubecraft-green text-white text-xl px-10 py-7 rounded-xl shadow-lg group"
            onClick={() => window.location.href = 'https://www.skool.com/kubecraft'}
          >
            <span>Join Now & Boost Your Career</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyJoinNow;
