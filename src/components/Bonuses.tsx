
import { Gift, Check } from "lucide-react";
import { motion } from "framer-motion";

const Bonuses = () => {
  return (
    <section className="section-padding bg-white py-24">
      <div className="container-custom max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-kubecraft-gray">
            Exclusive <span className="text-kubecraft-blue">Bonuses</span> <span className="text-xl md:text-2xl">(€2,000+ Value)</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Get these special bonuses when you join our community today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div 
            className="feature-card relative overflow-hidden rounded-2xl shadow-lg flex flex-col h-full border border-kubecraft-blue/20 bg-gradient-to-br from-white to-kubecraft-blue/5 p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute top-0 right-0">
              <div className="bg-kubecraft-blue text-white py-1 px-6 rotate-45 translate-x-6 -translate-y-2 text-sm font-medium shadow-sm">
                BONUS #1
              </div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-kubecraft-blue/15 p-3 rounded-full">
                <Gift className="h-6 w-6 text-kubecraft-blue" />
              </div>
              <h3 className="font-bold text-2xl text-kubecraft-gray">KubeCraft Internship</h3>
            </div>
            <p className="text-lg text-gray-700 mb-6 flex-grow">
              Real-world projects + reference to boost your job applications.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-1 rounded-full">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-base text-gray-700">
                  Work on real-world projects
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-1 rounded-full">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-base text-gray-700">
                  Get a professional reference
                </p>
              </div>
            </div>
            <div className="bg-kubecraft-blue/10 rounded-lg p-6">
              <p className="font-medium text-gray-700 italic">
                "The internship experience was the key differentiator on my resume. Hiring managers were impressed with the actual projects I could talk about."
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="feature-card relative overflow-hidden rounded-2xl shadow-lg flex flex-col h-full border border-kubecraft-teal/20 bg-gradient-to-br from-white to-kubecraft-teal/5 p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute top-0 right-0">
              <div className="bg-kubecraft-teal text-white py-1 px-6 rotate-45 translate-x-6 -translate-y-2 text-sm font-medium shadow-sm">
                BONUS #2
              </div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-kubecraft-teal/15 p-3 rounded-full">
                <Gift className="h-6 w-6 text-kubecraft-teal" />
              </div>
              <h3 className="font-bold text-2xl text-kubecraft-gray">400+ LinkedIn Connections</h3>
            </div>
            <p className="text-lg text-gray-700 mb-6 flex-grow">
              Network with hiring managers and decision makers who can fast-track your career.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-1 rounded-full">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-base text-gray-700">
                  Direct access to decision makers
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-1 rounded-full">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-base text-gray-700">
                  Private networking opportunities
                </p>
              </div>
            </div>
            <div className="bg-kubecraft-teal/10 rounded-lg p-6">
              <p className="font-medium text-gray-700 italic">
                "I landed my job through a connection I made in this community. The networking opportunities alone are worth the price of admission."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
