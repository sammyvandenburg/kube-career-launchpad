
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

// Define the technologies with correct image paths and fallback options
const technologies = [
  { 
    name: "Kubernetes", 
    imagePath: "/lovable-uploads/e04bfffc-070d-4e5a-b133-08aed599355b.png", 
    color: "#326CE5",
    description: "Container orchestration",
    fallbackText: "K8s",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" fill="#326CE5"><path d="M15.9.476a2.14 2.14 0 0 0-.823.218L5.04 5.37a2.106 2.106 0 0 0-1.065 1.585v13.483c0 .647.36 1.245.944 1.556l10.032 5.044c.1.05.205.086.31.118.143.041.293.064.446.064.153 0 .303-.023.446-.064a2.07 2.07 0 0 0 .311-.118l10.031-5.044a1.898 1.898 0 0 0 .945-1.556V6.955c0-.648-.361-1.246-.945-1.557L16.763.694a2.141 2.141 0 0 0-.863-.218zm.15 2.421l9.272 4.488a.58.58 0 0 1 .218.219v13.468a.56.56 0 0 1-.287.474l-9.505 4.722-.113.04a.673.673 0 0 1-.394 0l-.113-.04-9.505-4.722a.56.56 0 0 1-.287-.474V7.604c0-.203.113-.39.287-.474l9.505-4.488a.568.568 0 0 1 .517 0z"/></svg>`
  },
  { 
    name: "Azure", 
    imagePath: "/lovable-uploads/24cab4ad-83b8-47da-8791-afa7f5c13621.png", 
    color: "#0078D4",
    description: "Cloud platform",
    fallbackText: "Az",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#0078D4"><path d="M13.05 4.24L6.56 18.05L2 18L7.17 9.2L13.05 4.24ZM14.45 4L13.05 5.84L10.9 10.09L12 13L7.17 17.36L15.89 18L22 18.04L14.45 4Z"/></svg>`
  },
  { 
    name: "Linux", 
    imagePath: "/lovable-uploads/1cb65884-972e-4aeb-ab3d-1feb7b4b8b7d.png", 
    color: "#FCC624",
    description: "Operating system",
    fallbackText: "Lx",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#FCC624"><path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.119c-.265.268-.52.591-.808.88-1.002 1.002-2.624 1.247-3.183 1.898-.579.654-.14 1.777.42 2.877.286.574.837.674 1.283.687.446.013 1.213-.071 1.735-.357 1.065-.585 1.79-1.543 2.112-2.3.3-.678.349-1.414.347-1.861 0-.033-.002-.066-.003-.098.137-.125.254-.254.366-.391.273-.333.516-.697.725-1.069.428-.736.71-1.527.86-2.307.478.381 1.068.681 1.645.681.772 0 1.405-.236 1.945-.736.115-.108.22-.224.32-.348.382-.518.679-1.187.683-2.066 0 0 .001-.003.001-.005 1.557.003 3.329-1.267 3.33-2.895v-.005c.003-1.627-1.578-2.285-2.845-2.782a10.524 10.524 0 00-.915-.293c.21-.312.393-.642.547-.986.556-1.243.723-2.874.377-4.012-.176-.579-.43-1.109-.758-1.581-.357-.511-.886-1.017-1.665-1.017z"/></svg>`
  },
  { 
    name: "Git", 
    imagePath: "/lovable-uploads/c07a3625-ecc1-44f1-8437-278466bbcf46.png", 
    color: "#F05032",
    description: "Version control",
    fallbackText: "Git",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#F05032"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg>`
  },
  { 
    name: "Arch Linux", 
    imagePath: "/lovable-uploads/8c3f15e0-d1fa-4aa2-ab91-8cba4cdc4a1b.png", 
    color: "#1793D1",
    description: "Linux distribution",
    fallbackText: "Arch",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#1793D1"><path d="M12 0a12 12 0 0 0-2 23.84c.67.15 1.33-.14 1.33-.94l.08-1.7c-5.42 1.18-5.5-2.93-5.5-2.93-.29-1.11-1.04-1.96-1.04-1.96-1.03-.69.08-.68.08-.68 1.14.08 1.73 1.17 1.73 1.17 1.12 1.96 2.96 1.4 3.68 1.07.1-.8.43-1.4.78-1.71-4.32-.5-8.88-2.16-8.88-9.58 0-2.12.75-3.85 2-5.2-.2-.5-.87-2.49.2-5.2 0 0 1.62-.51 5.32 2a18.41 18.41 0 0 1 10.22 0c3.7-2.51 5.32-2 5.32-2 1.07 2.71.4 4.7.2 5.2 1.25 1.35 2 3.08 2 5.2 0 7.44-4.56 9.08-8.88 9.57.44.37.83 1.12.83 2.25l-.01 3.5c0 .8.66 1.09 1.32.94A12 12 0 0 0 12 0"/></svg>`
  },
  { 
    name: "Docker", 
    imagePath: "/lovable-uploads/f76f6cb2-b537-42ca-adb5-c53c74e872e1.png", 
    color: "#2496ED",
    description: "Containerization",
    fallbackText: "Dkr",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#2496ED"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.186.186 0 00-.185.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"/></svg>`
  },
  { 
    name: "Python", 
    imagePath: "/lovable-uploads/725f40d1-e931-499a-b6ba-3e16dc9dca2a.png", 
    color: "#3776AB",
    description: "Programming language",
    fallbackText: "Py",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.24l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z" fill="#3776AB"/></svg>`
  },
  { 
    name: "GitHub", 
    imagePath: "/lovable-uploads/93c69ba2-f087-49dc-b3d8-318e753e5ac1.png", 
    color: "#181717",
    description: "Code hosting",
    fallbackText: "GH",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#181717"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`
  }
];

// TechIcon component with SVG, image and fallback mechanism
const TechIcon = ({ tech }: { tech: typeof technologies[0] }) => {
  const [imageError, setImageError] = useState(false);

  // First try to use the image, if it fails, show SVG, if that's not possible, use fallback text
  return (
    <div className="flex items-center justify-center h-10 w-full mb-1">
      {!imageError ? (
        <img
          src={tech.imagePath}
          alt={tech.name}
          className="w-6 h-6 object-contain" // Small icon as requested
          onError={() => setImageError(true)}
        />
      ) : (
        <div
          dangerouslySetInnerHTML={{ __html: tech.svgContent }}
          className="w-6 h-6 flex items-center justify-center"
          onError={() => {
            // If SVG fails, we'll show the fallback text
            return (
              <div 
                className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold text-white"
                style={{ backgroundColor: tech.color }}
              >
                {tech.fallbackText}
              </div>
            );
          }}
        />
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
