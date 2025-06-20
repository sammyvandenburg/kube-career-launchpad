
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
            Feeling Lost Trying to Break into DevOps?
          </h2>
          
          <div className="max-w-3xl mx-auto text-left space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-kubecraft-terracotta rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-lg text-white">Can't get hired without "real" experience?</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-kubecraft-terracotta rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-lg text-white">Overwhelmed by endless tutorials with no results?</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-kubecraft-terracotta rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-lg text-white">Sick of resume tips that don't get interviews?</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-kubecraft-terracotta rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-lg text-white">Coming from a non-technical background?</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-kubecraft-terracotta rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-lg text-white">Not sure how to stand out to recruiters or land referrals?</p>
            </div>
          </div>
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
            <h3 className="text-2xl font-bold mb-2 text-white">Mischa van den Burg</h3>
            <p className="text-kubecraft-terracotta text-lg font-medium mb-4">Senior DevOps Engineer & KubeCraft Founder</p>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-white leading-relaxed">
              Five years ago, I was stuck in the same place you might be now. I had the passion for DevOps but lacked the practical experience employers wanted. The job market felt impossible to crack.
            </p>
            
            <p className="text-lg text-white leading-relaxed">
              That's when I realized the problem wasn't my skills — it was my approach. I needed real projects, mentorship, and most importantly, a community of people who'd already walked the path.
            </p>
            
            <p className="text-lg text-white leading-relaxed">
              Inside KubeCraft, you'll follow a clear learning journey — with hands-on labs, career guidance, and community support designed to get you hired faster.
            </p>
            
            <p className="text-lg text-white leading-relaxed">
              Today, I work as a Senior DevOps Engineer, and I've helped hundreds of members break into DevOps — from complete beginners to career switchers landing six-figure roles at top companies.
            </p>
            
            <div className="bg-gray-800 p-6 rounded-xl border-l-4 border-kubecraft-green">
              <p className="text-lg text-white italic">
                "KubeCraft isn't just another course platform. It's the career transformation system I wish I had when I was starting out."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MischaStory;
