
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const WhyJoinWithGuarantee = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-kubecraft-lightgray/30">
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
            src="/lovable-uploads/04f527a1-a013-465f-b634-293acff02de1.png" 
            alt="100% Satisfaction Guaranteed" 
            className="w-48 h-48 object-contain"
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
            <li className="flex items-start gap-2">
              <span className="font-bold text-lg">• No long-term contracts</span> 
              <span className="text-lg">Stay because you're growing, not because you're forced to.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-lg">• Simple, no-hassle cancellation</span>
              <span className="text-lg">If KubeCraft isn't the right fit, you can cancel anytime before your next billing cycle.</span>
            </li>
          </ul>
          
          <p className="text-xl font-bold mt-8 mb-2">The only real risk is staying stuck and not betting on yourself.</p>
          <p className="text-lg mb-10">
            Come ready to engage. Join the live sessions, tap into mentorship, and apply the hands-on training. That's where the transformation happens.
          </p>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Button 
            size="lg" 
            className="bg-kubecraft-blue hover:bg-kubecraft-darkblue text-white text-xl px-10 py-7 rounded-xl shadow-lg group"
            onClick={() => window.location.href = 'https://www.skool.com/kubecraft'}
          >
            <span>Join KubeCraft Today</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyJoinWithGuarantee;
