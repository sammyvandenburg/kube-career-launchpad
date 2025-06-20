
import { Check, ShieldCheck, Award, Users, BookOpen, Calendar, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const featuresList = [
  {
    title: "DevOps Masterclass",
    description: "50+ hours of hands-on training with real-world projects and expert guidance",
    icon: BookOpen,
    highlight: true
  },
  {
    title: "Enterprise Azure Lab",
    description: "Real production environment access for hands-on experience",
    icon: ShieldCheck,
    highlight: false
  },
  {
    title: "Internship Program",
    description: "Add official work experience to LinkedIn + CV that employers value",
    icon: Award,
    highlight: true
  },
  {
    title: "Weekly Coaching Calls",
    description: "Get direct help from experts who've already walked the path",
    icon: Calendar,
    highlight: false
  },
  {
    title: "Expert Community",
    description: "600+ engineers from Google, Microsoft, IBM ready to help you succeed",
    icon: Users,
    highlight: true
  },
  {
    title: "CV & LinkedIn Accelerator",
    description: "Stand out to top employers with our proven profile optimization",
    icon: MessageSquare,
    highlight: false
  }
];

const Features = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-900 to-black py-24">
      <div className="container-custom max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            What You Get <span className="text-kubecraft-terracotta">(€8,000+ Value)</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Everything you need to launch your DevOps career and stay ahead in the competitive tech industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <motion.div 
              key={index} 
              className={`feature-card bg-black rounded-2xl p-8 h-full flex flex-col hover:shadow-xl transition-all duration-300 border border-gray-800 ${
                feature.highlight ? 'border-l-4 border-l-kubecraft-terracotta' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-kubecraft-terracotta/20 p-3 rounded-lg mt-1">
                  <feature.icon className="h-6 w-6 text-kubecraft-terracotta" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
