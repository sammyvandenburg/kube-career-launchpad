
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const WhyJoinWithGuarantee = () => {
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
            The KubeCraft DevOps Commitment
          </h2>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto text-center md:text-left mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg mb-8 text-white">
            You are not buying a course. You are joining a step by step system to get hired.
          </p>
          
          <ul className="mb-8 space-y-4">
            <li className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0">
                <Check className="h-5 w-5 text-kubecraft-terracotta" />
              </div>
              <div>
                <span className="font-bold text-lg text-white">No long term contracts.</span> 
                <span className="text-lg text-gray-300"> Stay because you're growing, not because you're forced to.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0">
                <Check className="h-5 w-5 text-kubecraft-green" />
              </div>
              <div>
                <span className="font-bold text-lg text-white">Cancel anytime with no hassle.</span>
                <span className="text-lg text-gray-300"> If KubeCraft isn't the right fit, cancel before your next billing cycle.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0">
                <Check className="h-5 w-5 text-kubecraft-terracotta" />
              </div>
              <div>
                <span className="font-bold text-lg text-white">Live mentorship and real projects.</span>
                <span className="text-lg text-gray-300"> Get hands-on experience and direct support from industry experts.</span>
              </div>
            </li>
          </ul>

          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              What Makes KubeCraft Different
            </h3>
          </div>
          
          <div className="flex items-start gap-3 mb-8">
            <div className="mt-1 flex-shrink-0">
              <Check className="h-5 w-5 text-kubecraft-green" />
            </div>
            <div>
              <span className="font-bold text-lg text-white">100 percent satisfaction guaranteed.</span>
              <span className="text-lg text-gray-300"> We're committed to your success and satisfaction.</span>
            </div>
          </div>
          
          <p className="text-xl font-bold mt-8 text-white">
            The only real risk is staying stuck and not betting on yourself.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyJoinWithGuarantee;
