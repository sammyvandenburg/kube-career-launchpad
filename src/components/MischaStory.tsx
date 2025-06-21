
import { motion } from "framer-motion";

const MischaStory = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-black to-gray-900 py-24">
      <div className="container-custom max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            Feeling stuck trying to break into DevOps?
          </h2>
          
          <div className="max-w-3xl mx-auto text-left space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-kubecraft-terracotta rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-lg text-white">No experience, no interviews</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-kubecraft-terracotta rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-lg text-white">Endless tutorials with zero traction</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-kubecraft-terracotta rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-lg text-white">Unsure how to stand out or get referred</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-kubecraft-terracotta rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-lg text-white">Coming from a non-tech background</p>
            </div>
          </div>
          
          <p className="text-lg text-white mb-8">
            You're not alone. It does not have to stay this way.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center md:text-left">
            <img 
              src="/lovable-uploads/a08e8342-245a-426e-b160-769369df9644.png" 
              alt="Mischa van den Burg - Founder" 
              className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto md:mx-0 mb-6 object-cover shadow-xl border-4 border-kubecraft-terracotta/20"
            />
            <h3 className="text-2xl font-bold mb-2 text-white">Built by a DevOps Engineer Who Started From Scratch</h3>
            <p className="text-kubecraft-terracotta text-lg font-medium mb-4">Mischa van den Burg, Senior DevOps Engineer & KubeCraft Founder</p>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-white leading-relaxed">
              Five years ago, I struggled to break into DevOps. I had the drive but lacked direction.
              The game-changer was real projects, mentors, and a strong network.
            </p>
            
            <p className="text-lg text-white leading-relaxed">
              Today, I'm a Senior DevOps Engineer helping more than 700 members land roles around the world.
              KubeCraft is the system I wish I had when I started. Now it is yours.
            </p>
            
            <div className="bg-gray-800 p-6 rounded-xl border-l-4 border-kubecraft-green">
              <p className="text-lg text-white italic">
                "KubeCraft isn't just another course. It is a career transformation system with labs, referrals, and expert support"
              </p>
              <p className="text-sm text-gray-300 mt-2">— Mischa van den Burg, Founder</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MischaStory;
