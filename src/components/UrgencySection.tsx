
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

const UrgencySection = () => {
  return (
    <section className="py-16 bg-kubecraft-lightgray">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Why Join <span className="text-amber-500">KubeCraft</span> Today?</h2>
          <p className="text-lg text-gray-700 mb-10">
            Don't wait - start building your DevOps future now with our supportive community and proven resources.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Limited-Time Offer</h3>
                  <p className="text-gray-600">
                    Get 20% off for the first 50 people who join this month.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Annual Membership Bonus</h3>
                  <p className="text-gray-600">
                    Sign up for an annual membership and get <span className="text-amber-500 font-semibold">5 months free</span>.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 rounded-xl text-lg shadow-lg group transition-all duration-300 hover:shadow-xl hover:scale-105"
              onClick={() => window.location.href = 'https://www.skool.com/kubecraft'}
            >
              <span>Join KubeCraft Today</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <p className="mt-4 text-sm text-gray-500">
              30-day money-back guarantee. No questions asked.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UrgencySection;
