
import { Check, Star, Zap, Users, BookOpen, Code, Target } from "lucide-react";
import { motion } from "framer-motion";

const WhatYouGet = () => {
  const monthlyFeatures = [
    { icon: <Code className="h-5 w-5" />, title: "Linux and Terminal", description: "" },
    { icon: <Target className="h-5 w-5" />, title: "Kubernetes Fundamentals", description: "" },
    { icon: <Users className="h-5 w-5" />, title: "CV and LinkedIn Blueprint", description: "" }
  ];

  const annualFeatures = [
    { icon: <Zap className="h-5 w-5" />, title: "Kubernetes Homelab", description: "" },
    { icon: <Star className="h-5 w-5" />, title: "DevOps Masterclass", description: "" },
    { icon: <Target className="h-5 w-5" />, title: "Interview Preparation", description: "" },
    { icon: <Users className="h-5 w-5" />, title: "Personal Branding and Notetaking", description: "" },
    { icon: <BookOpen className="h-5 w-5" />, title: "Internship Track", description: "" },
    { icon: <Code className="h-5 w-5" />, title: "Workshop Library with live session recordings and bonus deep dives", description: "" }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-900 to-black py-24">
      <div className="container-custom max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            What You Unlock Inside (Worth €8000+)
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Everything you need to get job ready. No fluff. No bootcamp price tag.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Monthly Plan */}
          <motion.div 
            className="bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Monthly Plan Includes</h3>
            </div>
            
            <div className="space-y-4">
              {monthlyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-xl">
                  <div className="text-kubecraft-green mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{feature.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Annual Plan */}
          <motion.div 
            className="bg-gradient-to-br from-kubecraft-terracotta/10 to-kubecraft-green/10 rounded-2xl p-8 border border-kubecraft-terracotta/30 shadow-lg relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-kubecraft-terracotta text-white px-4 py-2 rounded-full text-sm font-bold">
                Best Value
              </span>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Annual Plan (or unlock via credits)</h3>
            </div>
            
            <div className="space-y-4">
              {annualFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-xl">
                  <div className="text-kubecraft-terracotta mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{feature.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
