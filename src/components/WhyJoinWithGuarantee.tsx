
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
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="/lovable-uploads/91600401-dffe-4ecf-a7d2-dcfb86e82bed.png" 
            alt="100% Satisfaction Guaranteed" 
            className="w-64 h-64 object-contain transform transition-transform duration-300 hover:scale-110"
          />
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto text-center md:text-left mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg mb-6 text-white">
            You are not buying a course. You are joining a step-by-step system to get hired.
          </p>
          
          <p className="text-lg mb-8 text-white">
            No contracts. Cancel anytime. Real projects. Live mentorship. A network that helps you win.
          </p>
          
          <h4 className="text-xl font-bold mb-4 mt-10 text-white">Here's our commitment to you:</h4>
          <ul className="mb-8 space-y-4">
            <li className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0">
                <Check className="h-5 w-5 text-kubecraft-green" />
              </div>
              <div>
                <span className="font-bold text-lg text-white">No long-term contracts</span> 
                <span className="text-lg text-gray-300"> - Stay because you're growing, not because you're forced to.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0">
                <Check className="h-5 w-5 text-kubecraft-green" />
              </div>
              <div>
                <span className="font-bold text-lg text-white">Simple, no-hassle cancellation</span>
                <span className="text-lg text-gray-300"> - If KubeCraft isn't the right fit, you can cancel anytime before your next billing cycle.</span>
              </div>
            </li>
          </ul>
          
          <p className="text-xl font-bold mt-8 mb-2 text-white">The only real risk is staying stuck and not betting on yourself.</p>
          <p className="text-lg mb-10 text-white">
            Come ready to engage. Join the live sessions, tap into mentorship, and apply the hands-on training. That's where the transformation happens.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyJoinWithGuarantee;
