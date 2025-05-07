
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";

// Define the technologies with multiple fallback options
const technologies = [
  { 
    name: "Kubernetes", 
    imagePath: "/lovable-uploads/e04bfffc-070d-4e5a-b133-08aed599355b.png", 
    color: "#326CE5",
    description: "Container orchestration",
    fallbackText: "K8s"
  },
  { 
    name: "Azure", 
    imagePath: "/lovable-uploads/24cab4ad-83b8-47da-8791-afa7f5c13621.png", 
    color: "#0078D4",
    description: "Cloud platform",
    fallbackText: "Az"
  },
  { 
    name: "Linux", 
    imagePath: "/lovable-uploads/1cb65884-972e-4aeb-ab3d-1feb7b4b8b7d.png", 
    color: "#FCC624",
    description: "Operating system",
    fallbackText: "Lx"
  },
  { 
    name: "Git", 
    imagePath: "/lovable-uploads/c07a3625-ecc1-44f1-8437-278466bbcf46.png", 
    color: "#F05032",
    description: "Version control",
    fallbackText: "Git"
  },
  { 
    name: "Arch Linux", 
    imagePath: "/lovable-uploads/8c3f15e0-d1fa-4aa2-ab91-8cba4cdc4a1b.png", 
    color: "#1793D1",
    description: "Linux distribution",
    fallbackText: "Arch"
  },
  { 
    name: "Docker", 
    imagePath: "/lovable-uploads/f76f6cb2-b537-42ca-adb5-c53c74e872e1.png", 
    color: "#2496ED",
    description: "Containerization",
    fallbackText: "Dkr"
  },
  { 
    name: "Python", 
    imagePath: "/lovable-uploads/725f40d1-e931-499a-b6ba-3e16dc9dca2a.png", 
    color: "#3776AB",
    description: "Programming language",
    fallbackText: "Py"
  },
  { 
    name: "GitHub", 
    imagePath: "/lovable-uploads/93c69ba2-f087-49dc-b3d8-318e753e5ac1.png", 
    color: "#181717",
    description: "Code hosting",
    fallbackText: "GH"
  }
];

// TechIcon component with fallback mechanism
const TechIcon = ({ tech }: { tech: typeof technologies[0] }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex items-center justify-center h-12 mb-3">
      {!imageError ? (
        <img
          src={tech.imagePath}
          alt={tech.name}
          className="w-6 h-6 object-contain" // Smaller size as requested
          onError={() => setImageError(true)}
        />
      ) : (
        <div 
          className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold text-white"
          style={{ backgroundColor: tech.color }}
        >
          {tech.fallbackText}
        </div>
      )}
    </div>
  );
};

const TechAnimation = () => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  // Item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

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
            Get real, <span className="text-kubecraft-blue">hands-on experience</span> that employers actually want
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Master the cutting-edge technologies that power modern cloud infrastructures
          </p>
        </motion.div>

        {/* Technology grid with SVG images and fallbacks */}
        <TooltipProvider>
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className="w-full shadow-md hover:shadow-lg transition-all duration-300 border-t-2" style={{ borderTopColor: tech.color }}>
                      <CardContent className="flex flex-col items-center justify-center p-4">
                        <TechIcon tech={tech} />
                        <span className="text-sm font-medium text-kubecraft-gray text-center">
                          {tech.name}
                        </span>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent 
                    style={{ backgroundColor: tech.color, color: '#fff' }}
                    className="font-medium"
                  >
                    {tech.description}
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            ))}
          </motion.div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default TechAnimation;
