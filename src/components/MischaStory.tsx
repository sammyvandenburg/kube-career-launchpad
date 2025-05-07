
import { Award, Check, ArrowRight, UserCheck, Users, Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const MischaStory = () => {
  return (
    <section className="section-padding py-24 bg-gradient-to-b from-white to-kubecraft-lightgray/30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            className="flex-1 order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-2xl bg-kubecraft-teal/10 blur-sm"></div>
              <motion.div 
                className="rounded-2xl overflow-hidden border-4 border-white shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop"
                  alt="Mischa's Success Story"
                  className="w-full object-cover h-[400px]"
                />
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            className="flex-1 order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-kubecraft-blue/10 p-2 rounded-lg">
                <Medal className="text-kubecraft-blue h-6 w-6" />
              </div>
              <p className="text-kubecraft-blue font-semibold uppercase tracking-wider text-sm">Mischa's Story</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-kubecraft-gray">
              From Nurse to DevOps Engineer in <span className="text-kubecraft-blue">6 Months</span>
            </h2>
            <div className="space-y-6 mb-10">
              <p className="text-xl text-gray-700">
                I went from nursing to DevOps in just 6 months, doubled my salary, and grew a 46K YouTube channel. 
                Now I help others do the same.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1.5 bg-green-100 p-2 rounded-full">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="text-lg text-gray-700">
                    Join 600+ engineers
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1.5 bg-green-100 p-2 rounded-full">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="text-lg text-gray-700">
                    Follow a proven system
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1.5 bg-green-100 p-2 rounded-full">
                    <UserCheck className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="text-lg text-gray-700">
                    Get personal coaching + job-ready skills
                  </p>
                </div>
              </div>
            </div>
            <Button 
              className="bg-kubecraft-blue hover:bg-kubecraft-darkblue text-white text-lg px-8 py-6 rounded-xl shadow-md group hover:shadow-lg hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = 'https://www.skool.com/kubecraft'}
            >
              Follow My Path
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MischaStory;
