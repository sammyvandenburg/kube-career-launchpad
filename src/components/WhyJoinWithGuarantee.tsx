
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const WhyJoinWithGuarantee = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-kubecraft-gray">
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
            src="/lovable-uploads/187efecb-99d6-4981-b2e4-1214572150db.png" 
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
          <p className="text-lg mb-6">
            We're committed to helping you break into and thrive in DevOps, and success works best when we both bring our best.
          </p>
          
          <p className="text-lg mb-8">
            When you join KubeCraft, you're not just buying a course. You're joining a community built for momentum, accountability, and real results.
          </p>
          
          <h4 className="text-xl font-bold mb-4 mt-10">Here's our commitment to you:</h4>
          <ul className="mb-8 space-y-4">
            <li className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0">
                <Check className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <span className="font-bold text-lg">No long-term contracts</span> 
                <span className="text-lg"> - Stay because you're growing, not because you're forced to.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0">
                <Check className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <span className="font-bold text-lg">Simple, no-hassle cancellation</span>
                <span className="text-lg"> - If KubeCraft isn't the right fit, you can cancel anytime before your next billing cycle.</span>
              </div>
            </li>
          </ul>
          
          <p className="text-xl font-bold mt-8 mb-2">The only real risk is staying stuck and not betting on yourself.</p>
          <p className="text-lg mb-10">
            Come ready to engage. Join the live sessions, tap into mentorship, and apply the hands-on training. That's where the transformation happens.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyJoinWithGuarantee;
