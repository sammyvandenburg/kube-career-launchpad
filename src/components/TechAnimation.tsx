
import { motion } from "framer-motion";

const technologies = [
  { name: "Kubernetes", icon: "⚙️", color: "#326CE5" },
  { name: "Azure", icon: "☁️", color: "#0078D4" },
  { name: "Linux", icon: "🐧", color: "#FCC624" },
  { name: "Arch Linux", icon: "🏔️", color: "#1793D1" },
  { name: "Docker", icon: "🐳", color: "#2496ED" },
  { name: "Python", icon: "🐍", color: "#3776AB" },
  { name: "Git", icon: "📝", color: "#F05032" }
];

const TechAnimation = () => {
  return (
    <section className="section-padding bg-black py-24">
      <div className="container-custom max-w-4xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Learn the Tools Top DevOps Engineers Use Daily
          </h2>
          
          {/* Technology Stack in two rows */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex justify-center items-center gap-8 mb-4 flex-wrap">
              <span className="text-2xl">⚙️ Kubernetes</span>
              <span className="text-2xl">☁️ Azure</span>
              <span className="text-2xl">🐧 Linux</span>
              <span className="text-2xl">🏔️ Arch Linux</span>
            </div>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <span className="text-2xl">🐳 Docker</span>
              <span className="text-2xl">🐍 Python</span>
              <span className="text-2xl">📝 Git</span>
            </div>
          </div>
        </motion.div>

        <div className="relative h-96 flex items-center justify-center">
          <motion.div 
            className="absolute z-10 w-20 h-20 bg-kubecraft-terracotta rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            DevOps
          </motion.div>

          {technologies.map((tech, index) => {
            const angle = (index * 360) / technologies.length;
            const radius = 140;
            
            return (
              <motion.div
                key={tech.name}
                className="absolute tech-icon"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  rotate: 360,
                  x: Math.cos((angle * Math.PI) / 180) * radius - 30,
                  y: Math.sin((angle * Math.PI) / 180) * radius - 30,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.5,
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg border-2 border-gray-700 bg-gray-800 hover:bg-gray-700 transition-colors"
                  style={{ borderColor: tech.color }}
                >
                  {tech.icon}
                  <div className="tech-tooltip bg-gray-900 text-white border border-gray-700">
                    {tech.name}
                  </div>
                </div>
              </motion.div>
            );
          })}

          <div className="orbit w-72 h-72 opacity-20"></div>
          <div className="orbit w-96 h-96 opacity-10"></div>
        </div>
      </div>
    </section>
  );
};

export default TechAnimation;
