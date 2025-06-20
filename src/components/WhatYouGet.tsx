
import { ShieldCheck, Award, Users, BookOpen, Calendar, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const starterCourses = [
  {
    title: "Linux & Terminal Mastery",
    description: "Build confidence with command-line fundamentals",
    icon: BookOpen,
    color: "blue"
  },
  {
    title: "Kubernetes Fundamentals",
    description: "Learn the orchestration tool that powers modern infrastructure",
    icon: ShieldCheck,
    color: "purple"
  },
  {
    title: "CV + LinkedIn Blueprint",
    description: "Stand out to recruiters and get more interview invitations",
    icon: MessageSquare,
    color: "teal"
  }
];

const annualUnlocks = [
  {
    title: "Kubernetes Homelab Project",
    description: "Build real infrastructure employers want to see",
    icon: Award,
    color: "amber"
  },
  {
    title: "DevOps Masterclass",
    description: "50+ hours of advanced hands-on training",
    icon: BookOpen,
    color: "green"
  },
  {
    title: "Interview Prep & Survey Toolkit",
    description: "Ace technical interviews with confidence",
    icon: Calendar,
    color: "pink"
  },
  {
    title: "Branding & Notetaking Bonus Courses",
    description: "Professional development extras",
    icon: Users,
    color: "blue"
  },
  {
    title: "Internship Track + GitHub Portfolio Guidance",
    description: "Add real experience to your CV and LinkedIn",
    icon: Award,
    color: "purple"
  },
  {
    title: "All Workshop Replays + Extra Coaching Content",
    description: "Access to our complete content library",
    icon: MessageSquare,
    color: "amber"
  }
];

const getGradient = (color: string) => {
  const gradients = {
    blue: "from-kubecraft-terracotta/10 to-kubecraft-green/5",
    purple: "from-kubecraft-green/10 to-kubecraft-terracotta/5",
    amber: "from-kubecraft-terracotta/10 to-kubecraft-green/5",
    green: "from-kubecraft-green/10 to-kubecraft-terracotta/5",
    pink: "from-kubecraft-terracotta/10 to-kubecraft-green/5",
    teal: "from-kubecraft-green/10 to-kubecraft-terracotta/5"
  };
  
  return gradients[color as keyof typeof gradients] || gradients.blue;
};

const getIconColor = (color: string) => {
  const colors = {
    blue: "text-kubecraft-terracotta",
    purple: "text-kubecraft-green",
    amber: "text-kubecraft-terracotta",
    green: "text-kubecraft-green",
    pink: "text-kubecraft-terracotta",
    teal: "text-kubecraft-green"
  };
  
  return colors[color as keyof typeof colors] || colors.blue;
};

const WhatYouGet = () => {
  return (
    <section className="section-padding bg-black py-24">
      <div className="container-custom max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            What You Unlock Inside <span className="text-kubecraft-terracotta">(Worth €8,000+)</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Everything you need to launch your DevOps career and stay ahead — without spending €5,000+ on a bootcamp. Whether you start monthly or go annual, you'll follow a practical roadmap that builds real-world skills and gets you job-ready.
          </p>
        </motion.div>

        {/* Starter Courses */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
            Starter Courses <span className="text-kubecraft-green">(Monthly Access)</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {starterCourses.map((feature, index) => (
              <motion.div 
                key={index} 
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="bg-gray-900 rounded-xl p-8 h-full border border-gray-800 overflow-hidden relative transition-all duration-500 hover:shadow-xl"
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(feature.color)} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`p-4 rounded-full inline-flex items-center justify-center bg-gray-800 shadow-md mb-6 ${getIconColor(feature.color)}`}>
                      <feature.icon className="h-8 w-8" />
                    </div>
                    
                    <h3 className="font-bold text-2xl mb-3 text-white group-hover:text-kubecraft-terracotta transition-colors duration-300">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                  
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-gray-900/0 to-gray-800/30 rounded-tl-[40px] group-hover:to-gray-700/50 transition-colors duration-500"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Annual Unlocks */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
            Annual Unlocks <span className="text-kubecraft-terracotta">(or via credits)</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {annualUnlocks.map((feature, index) => (
              <motion.div 
                key={index} 
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="bg-gray-900 rounded-xl p-8 h-full border border-gray-800 overflow-hidden relative transition-all duration-500 hover:shadow-xl"
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(feature.color)} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`p-4 rounded-full inline-flex items-center justify-center bg-gray-800 shadow-md mb-6 ${getIconColor(feature.color)}`}>
                      <feature.icon className="h-8 w-8" />
                    </div>
                    
                    <h3 className="font-bold text-2xl mb-3 text-white group-hover:text-kubecraft-terracotta transition-colors duration-300">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                  
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-gray-900/0 to-gray-800/30 rounded-tl-[40px] group-hover:to-gray-700/50 transition-colors duration-500"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouGet;
