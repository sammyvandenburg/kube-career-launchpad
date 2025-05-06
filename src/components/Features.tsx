
import { Check, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const featuresList = [
  {
    title: "NEW DevOps Masterclass",
    description: "50+ hours of comprehensive training with real-world projects and expert guidance",
    highlight: true
  },
  {
    title: "Enterprise Grade Azure Environment",
    description: "Get hands-on experience with the same tools used in top tech companies",
    highlight: false
  },
  {
    title: "Weekly Coaching Calls",
    description: "Get your questions answered and receive personalized guidance from industry experts",
    highlight: true
  },
  {
    title: "Active Community of Experts",
    description: "Connect with professionals from Google, Microsoft, and hiring managers who can fast-track your career",
    highlight: false
  },
  {
    title: "Tech Support",
    description: "100% issues solved by our dedicated team of DevOps professionals who understand your challenges",
    highlight: true
  },
  {
    title: "Personal Brand, LinkedIn & CV Accelerator",
    description: "Stand out from the crowd with proven strategies that get you noticed by top employers",
    highlight: false
  }
];

const Features = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-kubecraft-lightgray/30 to-white py-24">
      <div className="container-custom max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-kubecraft-gray">
            What You Get <span className="text-kubecraft-blue">(Worth $8,000+)</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Everything you need to launch your DevOps career and stay ahead in the competitive tech industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <motion.div 
              key={index} 
              className={`feature-card bg-white rounded-2xl p-8 h-full flex flex-col hover:shadow-xl transition-all duration-300 ${
                feature.highlight ? 'border-l-4 border-l-kubecraft-blue' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-kubecraft-blue/10 p-3 rounded-lg mt-1">
                  {feature.highlight ? (
                    <ShieldCheck className="h-6 w-6 text-kubecraft-blue" />
                  ) : (
                    <Check className="h-6 w-6 text-kubecraft-blue" />
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-kubecraft-gray">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
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
