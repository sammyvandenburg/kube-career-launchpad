
import { Clock, DollarSign, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

const UrgencySection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-kubecraft-lightgray/30 py-20">
      <div className="container-custom max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-kubecraft-gray">
            Why Join <span className="text-kubecraft-blue">Now?</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Don't wait to start your DevOps journey - here's why now is the perfect time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex flex-col h-full">
              <div className="mb-6 bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center">
                <DollarSign className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-kubecraft-gray">
                <span className="text-green-600">$158,000</span> average DevOps salary
              </h3>
              <p className="text-gray-700">
                Get into one of the highest-paid tech careers
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex flex-col h-full">
              <div className="mb-6 bg-kubecraft-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center">
                <Star className="h-7 w-7 text-kubecraft-blue" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-kubecraft-gray">
                Annual membership = <span className="text-kubecraft-blue">6 months free</span>
              </h3>
              <p className="text-gray-700">
                Save 50% when you commit to a year
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex flex-col h-full">
              <div className="mb-6 bg-red-100 p-3 rounded-full w-14 h-14 flex items-center justify-center">
                <Clock className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-kubecraft-gray">
                Price increases <span className="text-red-600">soon</span>
              </h3>
              <p className="text-gray-700">
                Join before the next scheduled price rise
              </p>
              <div className="mt-4 bg-red-50 text-red-700 text-center py-2 rounded-md border border-red-100">
                <p className="font-medium text-sm">⚡ Limited spots available — don't wait</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 p-5 pr-8 bg-white rounded-xl shadow border border-gray-100">
            <div className="bg-kubecraft-blue/10 p-3 rounded-full">
              <Users className="h-6 w-6 text-kubecraft-blue" />
            </div>
            <p className="text-lg text-gray-700 font-medium">
              Join <span className="text-kubecraft-blue font-bold">600+ engineers</span> already on the path to success
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UrgencySection;
