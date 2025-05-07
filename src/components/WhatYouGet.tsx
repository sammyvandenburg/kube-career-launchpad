
import { ShieldCheck, Award, Users, BookOpen, Calendar, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const featuresList = [
  {
    title: "DevOps Masterclass",
    description: "50+ hours of practical, hands-on training",
    icon: BookOpen,
    color: "blue"
  },
  {
    title: "Enterprise Azure Lab",
    description: "Work in real production-grade environments, NOT simulators!",
    icon: ShieldCheck,
    color: "purple"
  },
  {
    title: "Internship Program",
    description: "Add real-world experience to your CV + LinkedIn",
    icon: Award,
    color: "amber"
  },
  {
    title: "Weekly Coaching Calls",
    description: "Get direct help from experts",
    icon: Calendar,
    color: "green"
  },
  {
    title: "Expert Community",
    description: "600+ engineers from top companies",
    icon: Users,
    color: "pink"
  },
  {
    title: "CV & LinkedIn Accelerator",
    description: "Stand out and attract top employers",
    icon: MessageSquare,
    color: "teal"
  }
];

const getGradient = (color: string) => {
  const gradients = {
    blue: "from-blue-500/10 to-blue-600/5",
    purple: "from-purple-500/10 to-purple-600/5",
    amber: "from-amber-500/10 to-amber-600/5",
    green: "from-green-500/10 to-green-600/5",
    pink: "from-pink-500/10 to-pink-600/5",
    teal: "from-teal-500/10 to-teal-600/5"
  };
  
  return gradients[color as keyof typeof gradients] || gradients.blue;
};

const getIconColor = (color: string) => {
  const colors = {
    blue: "text-blue-500",
    purple: "text-purple-500",
    amber: "text-amber-500",
    green: "text-green-500",
    pink: "text-pink-500",
    teal: "text-teal-500"
  };
  
  return colors[color as keyof typeof colors] || colors.blue;
};

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
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className="bg-white rounded-xl p-8 h-full border border-gray-100 overflow-hidden relative transition-all duration-500 hover:shadow-xl"
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Background gradient that animates on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(feature.color)} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`p-4 rounded-full inline-flex items-center justify-center bg-white shadow-md mb-6 ${getIconColor(feature.color)}`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="font-bold text-2xl mb-3 text-kubecraft-gray group-hover:text-kubecraft-blue transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
                
                {/* Decorative corner */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-white/0 to-gray-100/30 rounded-tl-[40px] group-hover:to-gray-100/50 transition-colors duration-500"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
