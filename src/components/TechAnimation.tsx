
import { motion } from "framer-motion";

const TechAnimation = () => {
  const toolCategories = [
    {
      title: "Infrastructure & Cloud",
      tools: [
        { name: "Kubernetes", icon: "⚙️" },
        { name: "Azure", icon: "☁️" },
        { name: "Docker & Containers", icon: "🐳" },
        { name: "Terraform", icon: "🏗️" }
      ]
    },
    {
      title: "Development & Automation",
      tools: [
        { name: "Git & GitHub", icon: "📝" },
        { name: "CI/CD (GitHub Actions)", icon: "🔄" },
        { name: "Python & Scripting", icon: "🐍" },
        { name: "AI & Dev Containers", icon: "🤖" }
      ]
    },
    {
      title: "Systems & Productivity",
      tools: [
        { name: "Linux & Arch Linux", icon: "🐧" },
        { name: "Obsidian (Note-Taking)", icon: "📝" }
      ]
    }
  ];

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
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            Learn the Tools Top DevOps Engineers Use Daily
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12">
            Master the complete modern DevOps toolkit with hands-on projects and real-world applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {toolCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-kubecraft-green/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={toolIndex}
                    className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-200"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (toolIndex * 0.05) }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-2xl">{tool.icon}</span>
                    <span className="text-white font-medium">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechAnimation;
