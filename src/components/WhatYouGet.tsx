
import { ShieldCheck, Award, Users, BookOpen, Calendar, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const featuresList = [
  {
    title: "DevOps Masterclass",
    description: "50+ hours of practical, hands-on training",
    icon: BookOpen,
    highlight: true
  },
  {
    title: "Enterprise Azure Lab",
    description: "Work in real production-grade environments",
    icon: ShieldCheck,
    highlight: false
  },
  {
    title: "Internship Program",
    description: "Add real-world experience to your CV + LinkedIn",
    icon: Award,
    highlight: true
  },
  {
    title: "Weekly Coaching Calls",
    description: "Get direct help from experts",
    icon: Calendar,
    highlight: false
  },
  {
    title: "Expert Community",
    description: "600+ engineers from top companies",
    icon: Users,
    highlight: true
  },
  {
    title: "CV & LinkedIn Accelerator",
    description: "Stand out and attract top employers",
    icon: MessageSquare,
    highlight: false
  }
];

const WhatYouGet = () => {
  return (
    <section className="section-padding bg-white py-24">
      <div className="container-custom max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-kubecraft-gray">
            What You'll Get <span className="text-kubecraft-blue">(Worth €8,000+)</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Everything you need to launch your DevOps career and stay ahead in the competitive tech industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <motion.div 
              key={index} 
              className={`feature-card bg-white rounded-xl p-8 h-full flex flex-col hover:shadow-xl transition-all duration-300 ${
                feature.highlight ? 'shadow-lg border-l-4 border-l-kubecraft-blue' : 'shadow-md border border-gray-100'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-kubecraft-blue/10 p-3 rounded-lg mt-1">
                  <feature.icon className="h-6 w-6 text-kubecraft-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-kubecraft-gray">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
