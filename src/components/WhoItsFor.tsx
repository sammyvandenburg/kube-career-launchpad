
import { Check, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

const profiles = [
  {
    title: "Beginners with no tech background",
    description: "Even if you're starting from zero, our step-by-step approach will guide you to success."
  },
  {
    title: "Engineers wanting to level up",
    description: "Already in tech? Supercharge your career with specialized DevOps skills employers need."
  },
  {
    title: "Anyone aiming for a high-paid, stable DevOps career",
    description: "If you're seeking job security and top compensation, we'll help you get there."
  }
];

const WhoItsFor = () => {
  return (
    <section className="section-padding bg-black">
      <div className="container-custom max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Who It's <span className="text-kubecraft-terracotta">For</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            KubeCraft is designed for people who want more than just another course.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <motion.div 
              key={index}
              className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 bg-kubecraft-terracotta/20 p-3 rounded-full w-14 h-14 flex items-center justify-center">
                  <UserCheck className="h-7 w-7 text-kubecraft-terracotta" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-white">{profile.title}</h3>
                <p className="text-gray-300">{profile.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
