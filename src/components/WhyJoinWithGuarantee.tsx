
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
            Take action today and transform your <span className="text-kubecraft-blue">DevOps career!</span>
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
            src="/lovable-uploads/b454ae57-e940-4c56-bde1-aa4097bf1ed2.png" 
            alt="100% Guarantee" 
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
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-kubecraft-gray">
            The "DevOps Success" Commitment:
          </h3>
          <p className="text-lg mb-6">
            You'll make a commitment to KubeCraft, <span className="font-bold">so we want to make a commitment to you</span>. Join our community, attend the live events, and dive into our content. We're confident you'll find immense value in our program.
          </p>
          
          <h4 className="text-xl font-bold mb-4 mt-10">Here's our promise to you:</h4>
          <ul className="mb-8 space-y-4">
            <li className="flex items-start gap-2">
              <span className="font-bold text-lg">• No long-term lock-in:</span> 
              <span className="text-lg">You're in control of your subscription.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-lg">• Easy cancellation:</span>
              <span className="text-lg">If it's not the right fit, cancel anytime with just a few clicks.</span>
            </li>
          </ul>
          
          <p className="text-xl font-bold mt-8 mb-2">The only risk is not betting on yourself.</p>
          <p className="text-lg mb-10">
            Fully engage with the program, and if you decide it's not for you, simply cancel before your next billing cycle.
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
