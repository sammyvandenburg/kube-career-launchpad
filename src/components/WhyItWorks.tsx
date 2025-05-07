
import { Check, Award, Users, BookOpen, BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const WhyItWorks = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-kubecraft-lightgray/30">
      <div className="container-custom max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-kubecraft-gray">
            Why KubeCraft <span className="text-kubecraft-blue">Works</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Other courses teach you tech. We teach you how to get hired.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-kubecraft-blue/10 p-3 rounded-lg mt-1">
                      <BriefcaseBusiness className="h-5 w-5 text-kubecraft-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-kubecraft-gray">Get <span className="text-kubecraft-blue">real work experience</span></h3>
                      <p className="text-gray-700">
                        Our internship program gives you hands-on experience that employers actually value, not just theory.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-kubecraft-blue/10 p-3 rounded-lg mt-1">
                      <Users className="h-5 w-5 text-kubecraft-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-kubecraft-gray">Build a <span className="text-kubecraft-blue">network that opens doors</span></h3>
                      <p className="text-gray-700">
                        Connect with industry insiders who can refer you directly to hiring managers.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-kubecraft-blue/10 p-3 rounded-lg mt-1">
                      <Award className="h-5 w-5 text-kubecraft-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-kubecraft-gray">Receive <span className="text-kubecraft-blue">mentorship & coaching</span></h3>
                      <p className="text-gray-700">
                        Get personalized guidance from experts who've already walked the path you're on.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-kubecraft-blue/10 p-3 rounded-lg mt-1">
                      <BookOpen className="h-5 w-5 text-kubecraft-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-kubecraft-gray">Learn <span className="text-kubecraft-blue">practical skills employers want</span></h3>
                      <p className="text-gray-700">
                        Focus on in-demand skills that actually get you hired, not theoretical knowledge.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;
