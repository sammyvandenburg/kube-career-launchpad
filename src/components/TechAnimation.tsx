
import { motion } from "framer-motion";

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
      </div>
    </section>
  );
};

export default TechAnimation;
