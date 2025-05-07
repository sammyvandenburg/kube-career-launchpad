
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Terminal, Database, GitBranch, Github } from "lucide-react";

// Define the technologies with support for video animations
const technologies = [
  { 
    name: "Kubernetes", 
    color: "#326CE5",
    description: "Container orchestration",
    fallbackText: "K8s",
    videoSrc: "/tech-animations/kubernetes.mp4",
    gifSrc: "/tech-animations/kubernetes.gif",
    icon: () => <div className="flex items-center justify-center rounded-full bg-[#326CE5]/10 p-1">
      <Terminal className="h-5 w-5 text-[#326CE5]" />
    </div>
  },
  { 
    name: "Azure", 
    color: "#0078D4",
    description: "Cloud platform",
    fallbackText: "Az",
    videoSrc: "/tech-animations/azure.mp4",
    gifSrc: "/tech-animations/azure.gif",
    icon: () => <div className="flex items-center justify-center rounded-full bg-[#0078D4]/10 p-1">
      <Cloud className="h-5 w-5 text-[#0078D4]" />
    </div>
  },
  { 
    name: "Linux", 
    color: "#FCC624",
    description: "Operating system",
    fallbackText: "Lx",
    videoSrc: "/tech-animations/linux.mp4",
    gifSrc: "/tech-animations/linux.gif",
    icon: () => <div className="flex items-center justify-center rounded-full bg-[#FCC624]/10 p-1">
      <Terminal className="h-5 w-5 text-[#FCC624]" />
    </div>
  },
  { 
    name: "Arch Linux", 
    color: "#1793D1",
    description: "Linux distribution",
    fallbackText: "Arch",
    videoSrc: "/tech-animations/arch-linux.mp4",
    gifSrc: "/tech-animations/arch-linux.gif",
    icon: () => <div className="flex items-center justify-center rounded-full bg-[#1793D1]/10 p-1">
      <Terminal className="h-5 w-5 text-[#1793D1]" />
    </div>
  },
  { 
    name: "Docker", 
    color: "#2496ED",
    description: "Containerization",
    fallbackText: "Dkr",
    videoSrc: "/tech-animations/docker.mp4",
    gifSrc: "/tech-animations/docker.gif",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#2496ED"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.186.186 0 00-.185.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"/></svg>`
  },
  { 
    name: "Python", 
    color: "#3776AB",
    description: "Programming language",
    fallbackText: "Py",
    videoSrc: "/tech-animations/python.mp4",
    gifSrc: "/tech-animations/python.gif",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.24l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z" fill="#3776AB"/></svg>`
  },
  { 
    name: "Git", 
    color: "#F05032",
    description: "Version control",
    fallbackText: "Git",
    videoSrc: "/tech-animations/git.mp4",
    gifSrc: "/tech-animations/git.gif",
    icon: () => <div className="flex items-center justify-center rounded-full bg-[#F05032]/10 p-1">
      <GitBranch className="h-5 w-5 text-[#F05032]" />
    </div>
  },
  { 
    name: "GitHub", 
    color: "#181717",
    description: "Code hosting",
    fallbackText: "GH",
    videoSrc: "/tech-animations/github.mp4",
    gifSrc: "/tech-animations/github.gif",
    icon: () => <div className="flex items-center justify-center rounded-full bg-[#181717]/10 p-1">
      <Github className="h-5 w-5 text-[#181717]" />
    </div>
  }
];

// Enhanced TechIcon component with video support
const TechIcon = ({ tech }: { tech: typeof technologies[0] }) => {
  const [videoFailed, setVideoFailed] = useState(false);
  const [gifFailed, setGifFailed] = useState(false);

  // Reset error state when tech changes
  useEffect(() => {
    setVideoFailed(false);
    setGifFailed(false);
  }, [tech]);

  // Video animation with fallbacks
  if (tech.videoSrc && !videoFailed) {
    return (
      <div className="flex items-center justify-center h-12 w-full mb-1">
        <video 
          width="24" 
          height="24"
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-6 h-6"
          onError={() => setVideoFailed(true)}
        >
          <source src={tech.videoSrc} type="video/mp4" />
          {/* If video fails, it will trigger onError and fallback */}
        </video>
      </div>
    );
  }
  
  // GIF fallback
  if (tech.gifSrc && !gifFailed) {
    return (
      <div className="flex items-center justify-center h-12 w-full mb-1">
        <img 
          src={tech.gifSrc} 
          alt={tech.name} 
          className="w-6 h-6" 
          onError={() => setGifFailed(true)}
        />
      </div>
    );
  }
  
  // Static icon fallbacks
  return (
    <div className="flex items-center justify-center h-12 w-full mb-1">
      {tech.icon ? tech.icon() : (
        tech.svgContent ? (
          <div
            className="w-6 h-6"
            dangerouslySetInnerHTML={{ __html: tech.svgContent }}
          />
        ) : (
          <div 
            className="w-6 h-6 flex items-center justify-center rounded-full"
            style={{ backgroundColor: tech.color }}
          >
            <span className="text-xs font-bold text-white">
              {tech.fallbackText}
            </span>
          </div>
        )
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

        {/* Technology grid with video animations and fallbacks */}
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
