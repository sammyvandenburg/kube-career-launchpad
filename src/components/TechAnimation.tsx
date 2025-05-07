
import React from "react";
import { motion } from "framer-motion";
import { Kubernetes, Linux, GitBranch, Terminal, Cog, User, Award } from "lucide-react";

// Define the technologies with their icons and names
const technologies = [
  { name: "Kubernetes", icon: Kubernetes, color: "#326CE5" },
  { name: "Linux", icon: Linux, color: "#FCC624" },
  { name: "Git", icon: GitBranch, color: "#F05032" },
  { name: "CI/CD", icon: Terminal, color: "#43853D" },
  { name: "DevOps", icon: Cog, color: "#FF6C37" },
  { name: "Personal Branding", icon: User, color: "#0A66C2" },
  { name: "Kubestronaut Certification", icon: Award, color: "#D4AF37" }
];

const TechAnimation = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-kubecraft-lightgray to-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-kubecraft-gray">
            Technology <span className="text-kubecraft-blue">Stack</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Master the cutting-edge technologies that power modern cloud infrastructures
          </p>
        </motion.div>

        <div className="relative h-[500px] md:h-[600px]">
          {/* Center logo */}
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white h-32 w-32 md:h-40 md:w-40 rounded-full flex items-center justify-center shadow-xl">
              <img 
                src="/lovable-uploads/62d392eb-a9ce-41fc-934d-b5bb6aba18e7.png" 
                alt="KubeCraft Logo" 
                className="logo-image h-20 w-20 md:h-24 md:w-24 object-contain"
              />
            </div>
          </motion.div>
          
          {/* Orbit rings */}
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-200 rounded-full"
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{ width: "50%", height: "50%", opacity: 0.5 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-200 rounded-full"
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{ width: "75%", height: "75%", opacity: 0.4 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-200 rounded-full"
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{ width: "100%", height: "100%", opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.7 }}
          />
          
          {/* Technology icons */}
          {technologies.map((tech, index) => {
            // Calculate position on orbit
            const angleStep = (2 * Math.PI) / technologies.length;
            const angle = index * angleStep;
            const orbitRadius = 37.5; // % of container
            
            // Different orbit radius for visual interest
            const radius = index % 2 === 0 ? orbitRadius : orbitRadius * 1.25;
            
            // Calculate animation duration with slight variations
            const duration = 30 + (index * 2);
            
            // Calculate delay for staggered entrance
            const delay = 1 + (index * 0.15);
            
            return (
              <motion.div
                key={tech.name}
                className="absolute top-1/2 left-1/2 hover:z-20"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 1,
                  opacity: 1,
                }}
                transition={{ 
                  duration: 0.5,
                  delay: delay
                }}
                style={{
                  width: "60px",
                  height: "60px",
                }}
                whileHover={{ 
                  scale: 1.2,
                  zIndex: 20
                }}
              >
                <motion.div
                  className="relative"
                  animate={{
                    x: `${radius * Math.cos(angle)}%`,
                    y: `${radius * Math.sin(angle)}%`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: duration,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="relative"
                  >
                    <div className="absolute -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-white p-3 rounded-full shadow-lg flex items-center justify-center w-14 h-14">
                        <tech.icon size={30} color={tech.color} strokeWidth={1.5} />
                      </div>
                      
                      {/* Tooltip */}
                      <motion.div
                        className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm py-1 px-2 rounded whitespace-nowrap opacity-0 pointer-events-none"
                        animate={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech.name}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechAnimation;
